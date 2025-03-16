import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { BudgetTracker } from "@/components/budget-tracker"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartLegend, ChartPie, ChartTooltip } from "@/components/ui/chart"

export default function BudgetPage() {
  const budgetData = [
    { name: "Food", value: 500, fill: "#4ade80" },
    { name: "Rent", value: 1200, fill: "#60a5fa" },
    { name: "Transportation", value: 300, fill: "#f97316" },
    { name: "Entertainment", value: 200, fill: "#a78bfa" },
    { name: "Utilities", value: 150, fill: "#fb7185" },
    { name: "Other", value: 250, fill: "#fbbf24" },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Budget" text="Manage your monthly budget allocations." />
      <div className="grid gap-4 md:grid-cols-2">
        <BudgetTracker />
        <Card>
          <CardHeader>
            <CardTitle>Budget Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer>
                <Chart>
                  <ChartPie
                    data={budgetData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={2}
                  />
                  <ChartTooltip />
                </Chart>
                <ChartLegend />
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

