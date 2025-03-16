import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { AiInsights } from "@/components/ai-insights"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Chart,
  ChartContainer,
  ChartGrid,
  ChartLine,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"

export default function InsightsPage() {
  const spendingData = [
    { month: "Jan", amount: 2800 },
    { month: "Feb", amount: 3200 },
    { month: "Mar", amount: 3100 },
    { month: "Apr", amount: 2900 },
    { month: "May", amount: 3400 },
    { month: "Jun", amount: 3600 },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Insights" text="View personalized financial insights and trends." />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Spending Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer>
                <Chart>
                  <ChartGrid horizontal vertical />
                  <ChartXAxis dataKey="month" />
                  <ChartYAxis />
                  <ChartLine dataKey="amount" data={spendingData} stroke="#3b82f6" strokeWidth={2} />
                  <ChartTooltip />
                </Chart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        <AiInsights />
      </div>
    </DashboardShell>
  )
}

