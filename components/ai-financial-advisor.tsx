"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, TrendingUp, BrainCircuit, Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

// Sample data for AI insights
const aiInsights = [
  {
    id: 1,
    type: "spending",
    title: "Spending Pattern Analysis",
    description:
      "Based on your last 3 months of transactions, you spend 35% more on dining out during weekends. Consider setting a weekend dining budget.",
    impact: "high",
  },
  {
    id: 2,
    type: "saving",
    title: "Saving Opportunity",
    description:
      "You could save approximately $120/month by reducing coffee purchases. That's $1,440 annually that could be invested.",
    impact: "medium",
  },
  {
    id: 3,
    type: "budget",
    title: "Budget Adjustment",
    description:
      "Your entertainment spending is consistently 20% over budget. Consider increasing this category by 15% and reducing discretionary spending elsewhere.",
    impact: "medium",
  },
  {
    id: 4,
    type: "forecast",
    title: "Financial Forecast",
    description:
      "At your current saving rate, you'll reach your emergency fund goal in approximately 8 months. Increasing savings by $100/month would reduce this to 6 months.",
    impact: "high",
  },
]

// Sample chat messages
const initialMessages = [
  {
    role: "assistant",
    content: "Hello! I'm your financial assistant. How can I help you with your finances today?",
  },
]

export function AiFinancialAdvisor() {
  const [activeTab, setActiveTab] = useState("insights")
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages([...messages, userMessage])

    // Simulate AI response
    setTimeout(() => {
      let response
      const lowerInput = input.toLowerCase()

      if (lowerInput.includes("budget") || lowerInput.includes("spending")) {
        response =
          "Based on your recent spending patterns, you're currently 15% over your monthly budget. I recommend reducing discretionary spending on entertainment and dining out for the rest of the month."
      } else if (lowerInput.includes("save") || lowerInput.includes("saving")) {
        response =
          "To improve your savings, consider the 50/30/20 rule: 50% of income for necessities, 30% for wants, and 20% for savings. Based on your current income, you should aim to save about $800 per month."
      } else if (lowerInput.includes("invest") || lowerInput.includes("investment")) {
        response =
          "For your risk profile and financial goals, I'd recommend a diversified portfolio with 60% in index funds, 30% in bonds, and 10% in alternative investments. This balances growth potential with stability."
      } else {
        response =
          "I'm here to help with your financial questions. You can ask about budgeting, saving strategies, investment advice, or debt management."
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    setInput("")
  }

  // Predictive analytics data
  const predictiveData = [
    { month: "Current", savings: 5780, expenses: 3245 },
    { month: "Month 1", savings: 6100, expenses: 3200 },
    { month: "Month 2", savings: 6450, expenses: 3150 },
    { month: "Month 3", savings: 6800, expenses: 3100 },
    { month: "Month 4", savings: 7200, expenses: 3050 },
    { month: "Month 5", savings: 7600, expenses: 3000 },
    { month: "Month 6", savings: 8050, expenses: 2950 },
  ]

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-primary" />
          AI Financial Advisor
        </CardTitle>
      </CardHeader>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="insights">
            <TrendingUp className="mr-2 h-4 w-4" />
            ML Insights
          </TabsTrigger>
          <TabsTrigger value="chat">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat Advisor
          </TabsTrigger>
          <TabsTrigger value="forecast">
            <TrendingUp className="mr-2 h-4 w-4" />
            Predictions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="insights" className="m-0">
          <CardContent className="p-4">
            <ScrollArea className="h-[350px] pr-4">
              <div className="space-y-4">
                {aiInsights.map((insight) => (
                  <div key={insight.id} className="rounded-lg border p-4 transition-all hover:bg-accent">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{insight.title}</h3>
                      <Badge
                        variant={insight.impact === "high" ? "default" : "outline"}
                        className={insight.impact === "high" ? "bg-primary" : ""}
                      >
                        {insight.impact === "high" ? "High Impact" : "Medium Impact"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </TabsContent>

        <TabsContent value="chat" className="m-0">
          <CardContent className="p-0">
            <ScrollArea className="h-[300px] px-4 py-2">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                      <Avatar className="h-8 w-8">
                        {message.role === "assistant" ? (
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                        ) : (
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        )}
                        <AvatarFallback>{message.role === "assistant" ? "AI" : "U"}</AvatarFallback>
                      </Avatar>
                      <div
                        className={`rounded-lg p-3 text-sm ${
                          message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 pt-2">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Ask about your finances..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </TabsContent>

        <TabsContent value="forecast" className="m-0">
          <CardContent className="p-4">
            <div className="h-[350px]">
              <div className="mb-4">
                <h3 className="font-semibold">6-Month Financial Forecast</h3>
                <p className="text-sm text-muted-foreground">Based on your current spending and saving patterns</p>
              </div>
              <div className="h-64">
                <Chart data={predictiveData} savingsColor="#4ade80" expensesColor="#f87171" />
              </div>
              <div className="mt-4 rounded-lg bg-muted p-3">
                <p className="text-sm">
                  <strong>Prediction:</strong> If you maintain your current financial habits, you'll increase your
                  savings by approximately 39% in the next 6 months while reducing your expenses by 9%.
                </p>
              </div>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

// Simple chart component for the forecast
function Chart({
  data,
  savingsColor,
  expensesColor,
}: {
  data: Array<{ month: string; savings: number; expenses: number }>
  savingsColor: string
  expensesColor: string
}) {
  // Find the maximum value to scale the chart
  const maxValue = Math.max(...data.map((item) => Math.max(item.savings, item.expenses)))

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full items-end gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex w-full gap-1 px-1">
              <div
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${(item.savings / maxValue) * 100}%`,
                  backgroundColor: savingsColor,
                }}
              />
              <div
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${(item.expenses / maxValue) * 100}%`,
                  backgroundColor: expensesColor,
                }}
              />
            </div>
            <span className="text-xs">{item.month}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-center gap-4">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: savingsColor }} />
          <span className="text-xs">Savings</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: expensesColor }} />
          <span className="text-xs">Expenses</span>
        </div>
      </div>
    </div>
  )
}

