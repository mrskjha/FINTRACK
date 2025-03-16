"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// Schema for AI insight validation
const aiInsightSchema = z.object({
  type: z.enum(["spending", "saving", "budget", "forecast"]),
  title: z.string(),
  description: z.string(),
  impact: z.enum(["high", "medium", "low"]),
})

type AiInsightFormData = z.infer<typeof aiInsightSchema>

// Get all AI insights for a user
export async function getAiInsights(userId: string) {
  try {
    const insights = await prisma.aiInsight.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return { success: true, data: insights }
  } catch (error) {
    console.error("Failed to fetch AI insights:", error)
    return { success: false, error: "Failed to fetch AI insights" }
  }
}

// Create a new AI insight
export async function createAiInsight(userId: string, data: AiInsightFormData) {
  try {
    // Validate the input data
    const validatedData = aiInsightSchema.parse(data)

    // Create the AI insight
    const insight = await prisma.aiInsight.create({
      data: {
        ...validatedData,
        userId,
      },
    })

    revalidatePath("/ai-advisor")
    revalidatePath("/")

    return { success: true, data: insight }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors }
    }

    console.error("Failed to create AI insight:", error)
    return { success: false, error: "Failed to create AI insight" }
  }
}

// Generate AI insights based on user data
export async function generateAiInsights(userId: string) {
  try {
    // Get user's transaction data
    const transactions = await prisma.transaction.findMany({
      where: {
        userId,
      },
      include: {
        category: true,
      },
      orderBy: {
        date: "desc",
      },
      take: 100, // Analyze recent transactions
    })

    // Get user's budget data
    const budgets = await prisma.budget.findMany({
      where: {
        userId,
      },
      include: {
        category: true,
      },
    })

    // Simple example insights (in a real app, this would use ML/AI)
    const insights: AiInsightFormData[] = []

    // Check for categories where spending exceeds 80% of budget
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const currentYear = currentDate.getFullYear()

    // Group transactions by category
    const categorySpending: Record<string, number> = {}
    transactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.date)
      // Only consider transactions from current month
      if (
        transactionDate.getMonth() + 1 === currentMonth &&
        transactionDate.getFullYear() === currentYear &&
        transaction.amount < 0 // Only expenses
      ) {
        const categoryId = transaction.categoryId
        if (!categorySpending[categoryId]) {
          categorySpending[categoryId] = 0
        }
        categorySpending[categoryId] += Math.abs(transaction.amount)
      }
    })

    // Compare with budgets
    budgets.forEach((budget) => {
      if (budget.month === currentMonth && budget.year === currentYear) {
        const spent = categorySpending[budget.categoryId] || 0
        const percentage = (spent / budget.amount) * 100

        if (percentage >= 80) {
          insights.push({
            type: "budget",
            title: `${budget.category.name} Budget Alert`,
            description: `You've spent ${percentage.toFixed(0)}% of your ${budget.category.name} budget for this month.`,
            impact: percentage >= 90 ? "high" : "medium",
          })
        }
      }
    })

    // Check for unusual spending patterns
    // (This is a simplified example - real AI would be more sophisticated)
    const categoryAverages: Record<string, { count: number; total: number }> = {}
    transactions.forEach((transaction) => {
      if (transaction.amount < 0) {
        // Only expenses
        const categoryId = transaction.categoryId
        if (!categoryAverages[categoryId]) {
          categoryAverages[categoryId] = { count: 0, total: 0 }
        }
        categoryAverages[categoryId].count += 1
        categoryAverages[categoryId].total += Math.abs(transaction.amount)
      }
    })

    // Find categories with high average spending
    Object.entries(categoryAverages).forEach(([categoryId, data]) => {
      const average = data.total / data.count
      if (average > 100 && data.count >= 3) {
        // Arbitrary threshold
        const category = transactions.find((t) => t.categoryId === categoryId)?.category
        if (category) {
          insights.push({
            type: "spending",
            title: `High ${category.name} Spending`,
            description: `Your average ${category.name} transaction is $${average.toFixed(2)}, which is higher than typical. Consider ways to reduce these expenses.`,
            impact: "medium",
          })
        }
      }
    })

    // Add a saving suggestion
    insights.push({
      type: "saving",
      title: "Saving Opportunity",
      description:
        "Based on your spending patterns, you could save approximately 15% more by reducing discretionary expenses.",
      impact: "medium",
    })

    // Add a forecast insight
    insights.push({
      type: "forecast",
      title: "Financial Forecast",
      description:
        "If you maintain your current saving rate, you'll reach your emergency fund goal in approximately 8 months.",
      impact: "high",
    })

    // Save the generated insights
    for (const insight of insights) {
      await createAiInsight(userId, insight)
    }

    return { success: true, data: insights }
  } catch (error) {
    console.error("Failed to generate AI insights:", error)
    return { success: false, error: "Failed to generate AI insights" }
  }
}

