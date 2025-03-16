"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// Schema for smart contract validation
const smartContractSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  status: z.enum(["active", "inactive", "pending"]),
  type: z.enum(["auto-save", "bill-payment", "investment"]),
  amount: z.number().optional(),
  frequency: z.enum(["daily", "weekly", "biweekly", "monthly"]).optional(),
  nextExecution: z.date().optional(),
})

type SmartContractFormData = z.infer<typeof smartContractSchema>

// Schema for wallet validation
const walletSchema = z.object({
  address: z.string(),
  type: z.string(),
  name: z.string().optional(),
  balance: z.number().default(0),
})

type WalletFormData = z.infer<typeof walletSchema>

// Get all smart contracts for a user
export async function getSmartContracts(userId: string) {
  try {
    const contracts = await prisma.smartContract.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return { success: true, data: contracts }
  } catch (error) {
    console.error("Failed to fetch smart contracts:", error)
    return { success: false, error: "Failed to fetch smart contracts" }
  }
}

// Create a new smart contract
export async function createSmartContract(userId: string, data: SmartContractFormData) {
  try {
    // Validate the input data
    const validatedData = smartContractSchema.parse(data)

    // Create the smart contract
    const contract = await prisma.smartContract.create({
      data: {
        ...validatedData,
        userId,
      },
    })

    revalidatePath("/blockchain")
    revalidatePath("/")

    return { success: true, data: contract }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors }
    }

    console.error("Failed to create smart contract:", error)
    return { success: false, error: "Failed to create smart contract" }
  }
}

// Update a smart contract
export async function updateSmartContract(id: string, userId: string, data: Partial<SmartContractFormData>) {
  try {
    // Check if the contract exists and belongs to the user
    const existingContract = await prisma.smartContract.findFirst({
      where: {
        id,
        userId,
      },
    })

    if (!existingContract) {
      return { success: false, error: "Smart contract not found" }
    }

    // Update the contract
    const contract = await prisma.smartContract.update({
      where: {
        id,
      },
      data,
    })

    revalidatePath("/blockchain")
    revalidatePath("/")

    return { success: true, data: contract }
  } catch (error) {
    console.error("Failed to update smart contract:", error)
    return { success: false, error: "Failed to update smart contract" }
  }
}

// Delete a smart contract
export async function deleteSmartContract(id: string, userId: string) {
  try {
    // Check if the contract exists and belongs to the user
    const existingContract = await prisma.smartContract.findFirst({
      where: {
        id,
        userId,
      },
    })

    if (!existingContract) {
      return { success: false, error: "Smart contract not found" }
    }

    // Delete the contract
    await prisma.smartContract.delete({
      where: {
        id,
      },
    })

    revalidatePath("/blockchain")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("Failed to delete smart contract:", error)
    return { success: false, error: "Failed to delete smart contract" }
  }
}

// Get all wallets for a user
export async function getWallets(userId: string) {
  try {
    const wallets = await prisma.wallet.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return { success: true, data: wallets }
  } catch (error) {
    console.error("Failed to fetch wallets:", error)
    return { success: false, error: "Failed to fetch wallets" }
  }
}

// Create a new wallet
export async function createWallet(userId: string, data: WalletFormData) {
  try {
    // Validate the input data
    const validatedData = walletSchema.parse(data)

    // Create the wallet
    const wallet = await prisma.wallet.create({
      data: {
        ...validatedData,
        userId,
      },
    })

    revalidatePath("/blockchain")
    revalidatePath("/")

    return { success: true, data: wallet }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors }
    }

    console.error("Failed to create wallet:", error)
    return { success: false, error: "Failed to create wallet" }
  }
}

// Update wallet balance
export async function updateWalletBalance(id: string, userId: string, balance: number) {
  try {
    // Check if the wallet exists and belongs to the user
    const existingWallet = await prisma.wallet.findFirst({
      where: {
        id,
        userId,
      },
    })

    if (!existingWallet) {
      return { success: false, error: "Wallet not found" }
    }

    // Update the wallet balance
    const wallet = await prisma.wallet.update({
      where: {
        id,
      },
      data: {
        balance,
      },
    })

    revalidatePath("/blockchain")
    revalidatePath("/")

    return { success: true, data: wallet }
  } catch (error) {
    console.error("Failed to update wallet balance:", error)
    return { success: false, error: "Failed to update wallet balance" }
  }
}

