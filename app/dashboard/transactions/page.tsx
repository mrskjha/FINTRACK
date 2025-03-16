import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RecentTransactions } from "@/components/recent-transactions"
import { AddTransactionForm } from "@/components/add-transaction-form"

export default function TransactionsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Transactions" text="View and manage your transactions." />
      <div className="grid gap-4 md:grid-cols-2">
        <RecentTransactions />
        <AddTransactionForm />
      </div>
    </DashboardShell>
  )
}

