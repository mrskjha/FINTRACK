import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { OverviewCards } from "@/components/overview-cards"
import { RecentTransactions } from "@/components/recent-transactions"
import { BudgetTracker } from "@/components/budget-tracker"
import { AiInsights } from "@/components/ai-insights"
import { NotificationsPanel } from "@/components/notifications-panel"
import { AiFinancialAdvisor } from "@/components/ai-financial-advisor"
import { BlockchainIntegration } from "@/components/blockchain-integration"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Financial Dashboard" text="Manage your finances and track your spending." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <OverviewCards />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <RecentTransactions />
        <div className="flex flex-col gap-4">
          <BudgetTracker />
          <AiInsights />
          <NotificationsPanel />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">AI & Blockchain Features</h2>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/ai-advisor">
                AI Advisor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blockchain">
                Blockchain
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <AiFinancialAdvisor />
          <BlockchainIntegration />
        </div>
      </div>
    </DashboardShell>
  )
}

