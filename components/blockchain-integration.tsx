"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, ArrowUpRight, FileText, DollarSign, Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export function BlockchainIntegration() {
  const [activeTab, setActiveTab] = useState("smart-contracts")
  const [savingAmount, setSavingAmount] = useState(100)
  const [savingFrequency, setSavingFrequency] = useState("weekly")
  const [autoInvest, setAutoInvest] = useState(false)

  // DeFi states
  const [lendAmount, setLendAmount] = useState("")
  const [borrowAmount, setBorrowAmount] = useState("")
  const [collateralAmount, setCollateralAmount] = useState("")

  // Smart contracts
  const smartContracts = [
    {
      id: 1,
      name: "Auto-Save",
      description: "Automatically transfers a fixed amount to your savings wallet on a schedule",
      status: "active",
      nextExecution: "2023-03-22",
    },
    {
      id: 2,
      name: "Emergency Fund",
      description: "Locks funds until your emergency fund target is reached",
      status: "active",
      nextExecution: "N/A",
    },
    {
      id: 3,
      name: "Bill Payment",
      description: "Automatically pays recurring bills when they're due",
      status: "inactive",
      nextExecution: "N/A",
    },
  ]

  // DeFi opportunities
  const defiOpportunities = [
    {
      id: 1,
      name: "Stablecoin Lending",
      apy: "5.8%",
      risk: "low",
      lockPeriod: "None",
      minAmount: "$100",
    },
    {
      id: 2,
      name: "Liquidity Pool",
      apy: "12.4%",
      risk: "medium",
      lockPeriod: "None",
      minAmount: "$500",
    },
    {
      id: 3,
      name: "Yield Farming",
      apy: "18.2%",
      risk: "high",
      lockPeriod: "30 days",
      minAmount: "$1000",
    },
  ]

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-primary" />
          Blockchain Finance
        </CardTitle>
      </CardHeader>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="smart-contracts">
            <FileText className="mr-2 h-4 w-4" />
            Smart Contracts
          </TabsTrigger>
          <TabsTrigger value="defi">
            <DollarSign className="mr-2 h-4 w-4" />
            DeFi
          </TabsTrigger>
        </TabsList>

        <TabsContent value="smart-contracts" className="m-0">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold mb-2">Automated Savings Plan</h3>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <div className="flex justify-between">
                      <Label htmlFor="saving-amount">Amount to save</Label>
                      <span className="text-sm font-medium">${savingAmount}</span>
                    </div>
                    <Slider
                      id="saving-amount"
                      min={10}
                      max={500}
                      step={10}
                      value={[savingAmount]}
                      onValueChange={(value) => setSavingAmount(value[0])}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <Select value={savingFrequency} onValueChange={setSavingFrequency}>
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-invest">Auto-invest savings</Label>
                      <p className="text-xs text-muted-foreground">
                        Automatically invest saved funds in low-risk assets
                      </p>
                    </div>
                    <Switch id="auto-invest" checked={autoInvest} onCheckedChange={setAutoInvest} />
                  </div>

                  <Button className="w-full">Deploy Smart Contract</Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Active Smart Contracts</h3>
                <div className="space-y-3">
                  {smartContracts.map((contract) => (
                    <div key={contract.id} className="flex items-start justify-between rounded-lg border p-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{contract.name}</h4>
                          <Badge
                            variant={contract.status === "active" ? "default" : "outline"}
                            className={contract.status === "active" ? "bg-green-500" : ""}
                          >
                            {contract.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{contract.description}</p>
                        {contract.nextExecution !== "N/A" && (
                          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            Next: {contract.nextExecution}
                          </div>
                        )}
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="defi" className="m-0">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-3">Lend</h3>
                  <div className="space-y-3">
                    <div className="grid gap-2">
                      <Label htmlFor="lend-amount">Amount to lend (USD)</Label>
                      <Input
                        id="lend-amount"
                        placeholder="0.00"
                        value={lendAmount}
                        onChange={(e) => setLendAmount(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lend-asset">Asset</Label>
                      <Select defaultValue="usdc">
                        <SelectTrigger id="lend-asset">
                          <SelectValue placeholder="Select asset" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usdc">USDC</SelectItem>
                          <SelectItem value="dai">DAI</SelectItem>
                          <SelectItem value="eth">ETH</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="rounded-md bg-muted p-2 text-xs">
                      <div className="flex justify-between">
                        <span>Estimated APY:</span>
                        <span className="font-medium text-green-500">5.8%</span>
                      </div>
                    </div>
                    <Button className="w-full">Lend Now</Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-3">Borrow</h3>
                  <div className="space-y-3">
                    <div className="grid gap-2">
                      <Label htmlFor="collateral-amount">Collateral amount (USD)</Label>
                      <Input
                        id="collateral-amount"
                        placeholder="0.00"
                        value={collateralAmount}
                        onChange={(e) => setCollateralAmount(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="borrow-amount">Amount to borrow (USD)</Label>
                      <Input
                        id="borrow-amount"
                        placeholder="0.00"
                        value={borrowAmount}
                        onChange={(e) => setBorrowAmount(e.target.value)}
                      />
                    </div>
                    <div className="rounded-md bg-muted p-2 text-xs">
                      <div className="flex justify-between">
                        <span>Interest Rate:</span>
                        <span className="font-medium">8.2%</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span>Collateral Ratio:</span>
                        <span className="font-medium">150%</span>
                      </div>
                    </div>
                    <Button className="w-full">Borrow Now</Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">DeFi Opportunities</h3>
                <div className="space-y-3">
                  {defiOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="rounded-lg border p-3 transition-all hover:bg-accent">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{opportunity.name}</h4>
                        <Badge
                          variant="outline"
                          className={
                            opportunity.risk === "low"
                              ? "border-green-500 text-green-500"
                              : opportunity.risk === "medium"
                                ? "border-amber-500 text-amber-500"
                                : "border-red-500 text-red-500"
                          }
                        >
                          {opportunity.risk} risk
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                        <div>
                          <p className="text-muted-foreground">APY</p>
                          <p className="font-medium text-green-500">{opportunity.apy}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Lock Period</p>
                          <p className="font-medium">{opportunity.lockPeriod}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Min Amount</p>
                          <p className="font-medium">{opportunity.minAmount}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Button variant="outline" size="sm">
                          Invest
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

