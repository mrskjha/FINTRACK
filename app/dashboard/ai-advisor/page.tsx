import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { AiFinancialAdvisor } from "@/components/ai-financial-advisor"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BrainCircuit, TrendingUp, LineChart, PieChart, BarChart4, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AiAdvisorPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="AI Financial Advisor"
        text="Get personalized financial guidance powered by machine learning."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">AI-Powered Insights</CardTitle>
            <Badge variant="outline" className="bg-primary/10">
              Powered by ML
            </Badge>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BrainCircuit className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">How Our AI Works</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our AI financial advisor analyzes your transaction history, spending patterns, and financial goals to
                  provide personalized recommendations. The system uses machine learning algorithms to identify trends
                  and predict future financial outcomes.
                </p>
              </div>

              <Tabs defaultValue="spending">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="spending">
                    <PieChart className="mr-2 h-4 w-4" />
                    Spending Analysis
                  </TabsTrigger>
                  <TabsTrigger value="trends">
                    <LineChart className="mr-2 h-4 w-4" />
                    Trend Detection
                  </TabsTrigger>
                  <TabsTrigger value="forecasting">
                    <BarChart4 className="mr-2 h-4 w-4" />
                    Forecasting
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="spending" className="mt-4 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Category Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI analyzes your spending across categories to identify patterns and anomalies. It can detect
                      when you're spending more than usual in specific categories and suggest adjustments to your
                      budget.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Merchant Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      The system identifies your most frequent merchants and analyzes spending at each one. It can
                      suggest alternatives or ways to optimize spending at your regular merchants.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="trends" className="mt-4 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Seasonal Patterns</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI detects seasonal spending patterns and helps you prepare for predictable expenses. It can
                      identify when you typically spend more (holidays, summer, etc.) and help you budget accordingly.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Behavioral Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      The system analyzes your financial behaviors to identify potential issues like impulse spending or
                      recurring unnecessary expenses. It provides personalized suggestions to improve financial habits.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="forecasting" className="mt-4 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Cash Flow Prediction</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI forecasts your future cash flow based on income patterns and recurring expenses. It can
                      predict potential cash shortfalls and suggest adjustments to avoid financial stress.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Goal Achievement</h3>
                    <p className="text-sm text-muted-foreground">
                      The system predicts when you'll reach financial goals based on current saving and spending
                      patterns. It provides actionable suggestions to accelerate progress toward your goals.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end">
                <Button className="gap-2">
                  Try AI Advisor
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">AI Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <TrendingUp className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Predictive Analytics</p>
                  <p className="text-xs text-muted-foreground">
                    Forecast future financial trends based on your spending history
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <BrainCircuit className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Smart Budgeting</p>
                  <p className="text-xs text-muted-foreground">
                    AI-optimized budget recommendations based on your spending habits
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <LineChart className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Anomaly Detection</p>
                  <p className="text-xs text-muted-foreground">
                    Identify unusual spending patterns and potential fraud
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <PieChart className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Spending Insights</p>
                  <p className="text-xs text-muted-foreground">Deep analysis of your spending categories and habits</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <AiFinancialAdvisor />
      </div>
    </DashboardShell>
  )
}

