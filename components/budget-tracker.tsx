"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Loader2 } from "lucide-react"
import { getBudgetUsage } from "@/app/actions/budgets"

export function BudgetTracker() {
  const [budgetCategories, setBudgetCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBudgetUsage = async () => {
      try {
        setLoading(true)
        // In a real app, you would get the actual user ID
        const userId = "user123" // Placeholder
        const result = await getBudgetUsage(userId)

        if (result.success) {
          setBudgetCategories(result.data)
        } else {
          setError(result.error as string)
        }
      } catch (err) {
        setError("Failed to load budget data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchBudgetUsage()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <div className="text-center py-8 text-muted-foreground">{error}</div>
        ) : budgetCategories.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">No budget categories found</div>
        ) : (
          <div className="space-y-4">
            {budgetCategories.map((category) => (
              <div key={category.id} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{category.category.name}</span>
                  <span className="text-sm text-muted-foreground">
                    ${category.spent.toFixed(2)} / ${category.amount.toFixed(2)}
                  </span>
                </div>
                <Progress
                  value={category.percentage}
                  className={`h-2 ${
                    category.percentage > 90 ? "bg-red-100" : category.percentage > 70 ? "bg-amber-100" : "bg-green-100"
                  }`}
                />
                <p className="text-xs text-muted-foreground text-right">{category.percentage}% used</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

