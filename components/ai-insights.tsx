import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

const insights = [
  "You've spent 84% of your food budget this month.",
  "Consider saving 10% of your salary for emergencies.",
  "Your spending on entertainment has increased by 15% compared to last month.",
  "You could save $120 monthly by reducing coffee purchases.",
]

export function AiInsights() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="flex items-start gap-2 rounded-md p-2 transition-colors hover:bg-accent">
              <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
              <p className="text-sm">{insight}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

