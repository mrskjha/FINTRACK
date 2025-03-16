"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// Schema for transaction validation
const transactionSchema = z.object({
  amount: z.number().refine((val) => val !== 0, {
    message: "Amount cannot be zero",
  }),
  description: z.string().optional(),
  date: z.date(),
  categoryId: z.string(),
})

type TransactionFormData = z.infer<typeof transactionSchema>

// Get all transactions for a user
export async function getTransactions(userId: string) {
  try {
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
    })

    return { success: true, data: transactions }
  } catch (error) {
    console.error("Failed to fetch transactions:", error)
    return { success: false, error: "Failed to fetch transactions" }
  }
}

// Get recent transactions for a user
export async function getRecentTransactions(userId: string, limit = 5) {
  try {
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
      take: limit,
    })

    return { success: true, data: transactions }
  } catch (error) {
    console.error("Failed to fetch recent transactions:", error)
    return { success: false, error: "Failed to fetch recent transactions" }
  }
}

// Create a new transaction
export async function createTransaction(userId: string, data: TransactionFormData) {
  try {
    // Validate the input data
    const validatedData = transactionSchema.parse(data)

    // Create the transaction
    const transaction = await prisma.transaction.create({
      data: {
        ...validatedData,
        userId,
      },
    })

    revalidatePath("/transactions")
    revalidatePath("/")

    return { success: true, data: transaction }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors }
    }

    console.error("Failed to create transaction:", error)
    return { success: false, error: "Failed to create transaction" }
  }
}

// Update an existing transaction
export async function updateTransaction(id: string, userId: string, data: Partial<TransactionFormData>) {
  try {
    // Check if the transaction exists and belongs to the user
    const existingTransaction = await prisma.transaction.findFirst({
      where: {
        id,
        userId,
      },
    })

    if (!existingTransaction) {
      return { success: false, error: "Transaction not found" }
    }

    // Update the transaction
    const transaction = await prisma.transaction.update({
      where: {
        id,
      },
      data,
    })

    revalidatePath("/transactions")
    revalidatePath("/")

    return { success: true, data: transaction }
  } catch (error) {
    console.error("Failed to update transaction:", error)
    return { success: false, error: "Failed to update transaction" }
  }
}

// Delete a transaction
export async function deleteTransaction(id: string, userId: string) {
  try {
    // Check if the transaction exists and belongs to the user
    const existingTransaction = await prisma.transaction.findFirst({
      where: {
        id,
        userId,
      },
    })

    if (!existingTransaction) {
      return { success: false, error: "Transaction not found" }
    }

    // Delete the transaction
    await prisma.transaction.delete({
      where: {
        id,
      },
    })

    revalidatePath("/transactions")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("Failed to delete transaction:", error)
    return { success: false, error: "Failed to delete transaction" }
  }
}

// Get transaction statistics
export async function getTransactionStats(userId: string) {
  try {
    // Get total income (positive transactions)
    const incomeResult = await prisma.transaction.aggregate({
      where: {
        userId,
        amount: {
          gt: 0,
        },
      },
      _sum: {
        amount: true,
      },
    })

    // Get total expenses (negative transactions)
    const expensesResult = await prisma.transaction.aggregate({
      where: {
        userId,
        amount: {
          lt: 0,
        },
      },
      _sum: {
        amount: true,
      },
    })

    // Calculate total balance
    const income = incomeResult._sum.amount || 0
    const expenses = expensesResult._sum.amount || 0
    const balance = income + expenses // expenses are negative, so we add them

    return {
      success: true,
      data: {
        income,
        expenses: Math.abs(expenses), // Convert to positive for display
        balance,
      },
    }
  } catch (error) {
    console.error("Failed to fetch transaction stats:", error)
    return { success: false, error: "Failed to fetch transaction statistics" }
  }
}

