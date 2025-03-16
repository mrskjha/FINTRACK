"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { getTransactionStats } from "@/app/actions/transactions"

export function DashboardOverview() {
  const [income, setIncome] = useState<number | null>(null)
  const [expenses, setExpenses] = useState<number | null>(null)
  const [balance, setBalance] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTransactionStats = async () => {
      try {
        setLoading(true)
        // In a real app, you would get the actual user ID
        const userId = "user123" // Placeholder
        const result = await getTransactionStats(userId)

        if (result.success) {
          setIncome(result.data.income)
          setExpenses(result.data.expenses)
          setBalance(result.data.balance)
        } else {
          setError(result.error as string)
        }
      } catch (err) {
        setError("Failed to load transaction stats")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTransactionStats()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <div className="text-center py-8 text-muted-foreground">{error}</div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <div className="text-sm font-medium">Income</div>
              <div className="text-2xl font-bold">${income?.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-sm font-medium">Expenses</div>
              <div className="text-2xl font-bold">${expenses?.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-sm font-medium">Balance</div>
              <div className="text-2xl font-bold">${balance?.toFixed(2)}</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

