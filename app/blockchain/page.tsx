import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { BlockchainIntegration } from "@/components/blockchain-integration"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Lock, ShieldCheck, Landmark, ArrowRight, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlockchainPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Blockchain Finance"
        text="Leverage blockchain technology for secure and transparent financial management."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Blockchain Solutions</CardTitle>
            <Badge variant="outline" className="bg-primary/10">
              Secure & Transparent
            </Badge>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">How Blockchain Enhances Your Finances</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Blockchain technology provides enhanced security, transparency, and automation for your finances.
                  Smart contracts enable automated financial actions, while decentralized finance (DeFi) offers new
                  opportunities for lending, borrowing, and investing without traditional intermediaries.
                </p>
              </div>

              <Tabs defaultValue="smart-contracts">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="smart-contracts">
                    <FileText className="mr-2 h-4 w-4" />
                    Smart Contracts
                  </TabsTrigger>
                  <TabsTrigger value="defi">
                    <DollarSign className="mr-2 h-4 w-4" />
                    DeFi
                  </TabsTrigger>
                  <TabsTrigger value="security">
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    Security
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="smart-contracts" className="mt-4 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Automated Savings</h3>
                    <p className="text-sm text-muted-foreground">
                      Create smart contracts that automatically transfer funds to your savings account on a schedule.
                      Set rules for frequency, amount, and conditions to build savings without manual intervention.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Conditional Payments</h3>
                    <p className="text-sm text-muted-foreground">
                      Set up payments that only execute when specific conditions are met. For example, release funds to
                      a contractor only when work is verified as complete, or automate bill payments when invoices are
                      received.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="defi" className="mt-4 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Lending & Borrowing</h3>
                    <p className="text-sm text-muted-foreground">
                      Access decentralized lending platforms to earn interest on your assets or borrow against your
                      collateral. DeFi lending typically offers higher interest rates than traditional savings accounts
                      with transparent terms.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Yield Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Maximize returns on your digital assets through yield farming and liquidity provision. Our
                      platform helps you identify the best opportunities based on your risk tolerance and investment
                      goals.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="mt-4 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Immutable Records</h3>
                    <p className="text-sm text-muted-foreground">
                      All transactions are recorded on the blockchain, creating a permanent and tamper-proof record of
                      your financial history. This provides enhanced security and transparency for your financial
                      activities.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Multi-Signature Protection</h3>
                    <p className="text-sm text-muted-foreground">
                      Secure your funds with multi-signature wallets that require multiple approvals for transactions.
                      This adds an extra layer of security for high-value transactions and prevents unauthorized access.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end">
                <Button className="gap-2">
                  Explore Blockchain Features
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Blockchain Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FileText className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Smart Contracts</p>
                  <p className="text-xs text-muted-foreground">Automate savings, investments, and recurring payments</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">DeFi Integration</p>
                  <p className="text-xs text-muted-foreground">
                    Access decentralized lending, borrowing, and investment opportunities
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Enhanced Security</p>
                  <p className="text-xs text-muted-foreground">
                    Protect your assets with blockchain's cryptographic security
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Landmark className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Decentralized Banking</p>
                  <p className="text-xs text-muted-foreground">
                    Access financial services without traditional intermediaries
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <BlockchainIntegration />
      </div>
    </DashboardShell>
  )
}

