"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// Schema for budget validation
const budgetSchema = z.object({
  amount: z.number().positive({
    message: "Budget amount must be positive",
  }),
  categoryId: z.string(),
  month: z.number().min(1).max(12),
  year: z.number().min(2000).max(2100),
})

type BudgetFormData = z.infer<typeof budgetSchema>

// Get all budgets for a user
export async function getBudgets(userId: string) {
  try {
    const budgets = await prisma.budget.findMany({
      where: {
        userId,
      },
      include: {
        category: true,
      },
    })

    return { success: true, data: budgets }
  } catch (error) {
    console.error("Failed to fetch budgets:", error)
    return { success: false, error: "Failed to fetch budgets" }
  }
}

// Get current month's budgets for a user
export async function getCurrentBudgets(userId: string) {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1 // JavaScript months are 0-indexed
  const currentYear = currentDate.getFullYear()

  try {
    const budgets = await prisma.budget.findMany({
      where: {
        userId,
        month: currentMonth,
        year: currentYear,
      },
      include: {
        category: true,
      },
    })

    return { success: true, data: budgets }
  } catch (error) {
    console.error("Failed to fetch current budgets:", error)
    return { success: false, error: "Failed to fetch current budgets" }
  }
}

// Create or update a budget
export async function upsertBudget(userId: string, data: BudgetFormData) {
  try {
    // Validate the input data
    const validatedData = budgetSchema.parse(data)

    // Check if a budget already exists for this category, month, and year
    const existingBudget = await prisma.budget.findFirst({
      where: {
        userId,
        categoryId: validatedData.categoryId,
        month: validatedData.month,
        year: validatedData.year,
      },
    })

    let budget

    if (existingBudget) {
      // Update existing budget
      budget = await prisma.budget.update({
        where: {
          id: existingBudget.id,
        },
        data: {
          amount: validatedData.amount,
        },
      })
    } else {
      // Create new budget
      budget = await prisma.budget.create({
        data: {
          ...validatedData,
          userId,
        },
      })
    }

    revalidatePath("/budget")
    revalidatePath("/")

    return { success: true, data: budget }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors }
    }

    console.error("Failed to create/update budget:", error)
    return { success: false, error: "Failed to create/update budget" }
  }
}

// Delete a budget
export async function deleteBudget(id: string, userId: string) {
  try {
    // Check if the budget exists and belongs to the user
    const existingBudget = await prisma.budget.findFirst({
      where: {
        id,
        userId,
      },
    })

    if (!existingBudget) {
      return { success: false, error: "Budget not found" }
    }

    // Delete the budget
    await prisma.budget.delete({
      where: {
        id,
      },
    })

    revalidatePath("/budget")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("Failed to delete budget:", error)
    return { success: false, error: "Failed to delete budget" }
  }
}

// Get budget usage statistics
export async function getBudgetUsage(userId: string) {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
  const currentYear = currentDate.getFullYear()

  try {
    // Get all budgets for the current month
    const budgets = await prisma.budget.findMany({
      where: {
        userId,
        month: currentMonth,
        year: currentYear,
      },
      include: {
        category: true,
      },
    })

    // For each budget, calculate the usage
    const budgetUsage = await Promise.all(
      budgets.map(async (budget) => {
        // Get total expenses for this category in the current month
        const startOfMonth = new Date(currentYear, currentMonth - 1, 1)
        const endOfMonth = new Date(currentYear, currentMonth, 0)

        const expensesResult = await prisma.transaction.aggregate({
          where: {
            userId,
            categoryId: budget.categoryId,
            amount: {
              lt: 0, // Only negative amounts (expenses)
            },
            date: {
              gte: startOfMonth,
              lte: endOfMonth,
            },
          },
          _sum: {
            amount: true,
          },
        })

        const spent = Math.abs(expensesResult._sum.amount || 0)
        const percentage = Math.min(Math.round((spent / budget.amount) * 100), 100)

        return {
          ...budget,
          spent,
          percentage,
        }
      }),
    )

    return { success: true, data: budgetUsage }
  } catch (error) {
    console.error("Failed to fetch budget usage:", error)
    return { success: false, error: "Failed to fetch budget usage" }
  }
}

