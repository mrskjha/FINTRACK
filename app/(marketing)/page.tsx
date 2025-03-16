import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wallet, BrainCircuit, PieChart, CreditCard, Shield, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Manage Your Finances with Intelligence
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  FinTrack combines modern financial management with AI insights and blockchain technology to give you
                  complete control over your money.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-1">
                  <Link href="/login">
                    Get Started <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-1">
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Wallet className="h-24 w-24 text-primary opacity-50" />
                  </div>
                </div>
                <div className="relative h-full w-full rounded-lg bg-background/90 p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Financial Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Track your spending, manage budgets, and get AI-powered insights
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-muted p-4 flex flex-col items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-primary mb-2" />
                      <span className="text-sm font-medium">Track Spending</span>
                    </div>
                    <div className="rounded-lg bg-muted p-4 flex flex-col items-center justify-center">
                      <PieChart className="h-8 w-8 text-primary mb-2" />
                      <span className="text-sm font-medium">Budget Planning</span>
                    </div>
                    <div className="rounded-lg bg-muted p-4 flex flex-col items-center justify-center">
                      <BrainCircuit className="h-8 w-8 text-primary mb-2" />
                      <span className="text-sm font-medium">AI Insights</span>
                    </div>
                    <div className="rounded-lg bg-muted p-4 flex flex-col items-center justify-center">
                      <Shield className="h-8 w-8 text-primary mb-2" />
                      <span className="text-sm font-medium">Secure Data</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Everything You Need to Manage Your Finances
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                FinTrack provides a comprehensive set of tools to help you track, manage, and optimize your financial
                life.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-3">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Transaction Tracking</h3>
              <p className="text-center text-muted-foreground">
                Easily record and categorize your income and expenses to keep track of where your money goes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-3">
                <PieChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Budget Management</h3>
              <p className="text-center text-muted-foreground">
                Create and manage budgets for different categories to control your spending and achieve your financial
                goals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-3">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AI Financial Advisor</h3>
              <p className="text-center text-muted-foreground">
                Get personalized financial insights and recommendations powered by advanced machine learning algorithms.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-3">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Blockchain Integration</h3>
              <p className="text-center text-muted-foreground">
                Leverage blockchain technology for secure and transparent financial management with smart contracts.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Financial Analytics</h3>
              <p className="text-center text-muted-foreground">
                Visualize your financial data with interactive charts and graphs to identify trends and patterns.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure & Private</h3>
              <p className="text-center text-muted-foreground">
                Your financial data is encrypted and protected with industry-standard security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that fits your needs. All plans include core features.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Free Plan */}
            <div className="flex flex-col rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Free</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Perfect for individuals just starting their financial journey.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Transaction tracking", "Basic budgeting", "Financial overview", "Mobile access"].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col p-6 pt-0">
                <Button asChild>
                  <Link href="/login">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="flex flex-col rounded-lg border bg-background shadow-sm transition-all hover:shadow-md relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">Premium</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Advanced features for those serious about financial management.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Everything in Free",
                    "AI financial insights",
                    "Advanced budgeting",
                    "Spending analysis",
                    "Goal tracking",
                    "Email reports",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col p-6 pt-0">
                <Button asChild>
                  <Link href="/login">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* Business Plan */}
            <div className="flex flex-col rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
              <div className="p-6">
                <h3 className="text-2xl font-bold">Business</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$29.99</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Complete solution for businesses and financial professionals.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Everything in Premium",
                    "Blockchain integration",
                    "Smart contracts",
                    "Multi-user access",
                    "API access",
                    "Custom reporting",
                    "Priority support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col p-6 pt-0">
                <Button asChild>
                  <Link href="/login">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who are already managing their finances smarter with FinTrack.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="gap-1">
                <Link href="/login">
                  Get Started <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 FinTrack. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

