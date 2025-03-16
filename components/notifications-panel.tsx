import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, AlertCircle, CreditCard, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const notifications = [
  {
    id: 1,
    title: "Bill Payment Due",
    description: "Your electricity bill is due in 3 days.",
    icon: CreditCard,
    urgent: true,
  },
  {
    id: 2,
    title: "Unusual Transaction",
    description: "$250 spent at Electronics Store.",
    icon: AlertCircle,
    urgent: true,
  },
  {
    id: 3,
    title: "Budget Alert",
    description: "You've reached 90% of your entertainment budget.",
    icon: Bell,
    urgent: false,
  },
]

export function NotificationsPanel() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base">Notifications</CardTitle>
        <Button variant="ghost" size="sm" className="h-8 text-xs">
          Mark all as read
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start gap-3 rounded-lg border p-3 transition-all hover:bg-accent ${
                notification.urgent ? "border-red-200 bg-red-50" : "border-muted"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  notification.urgent ? "bg-red-100" : "bg-primary/10"
                }`}
              >
                <notification.icon className={`h-4 w-4 ${notification.urgent ? "text-red-500" : "text-primary"}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{notification.title}</p>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <ArrowUpRight className="h-3 w-3" />
                    <span className="sr-only">View</span>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

