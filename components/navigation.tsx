"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, CreditCard, PieChart, User, Menu, X, BrainCircuit, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: CreditCard,
  },
  {
    title: "Budget",
    href: "/budget",
    icon: PieChart,
  },
  {
    title: "AI Advisor",
    href: "/ai-advisor",
    icon: BrainCircuit,
  },
  {
    title: "Blockchain",
    href: "/blockchain",
    icon: Wallet,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed right-4 top-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-background p-6 shadow-lg transition-transform duration-200 md:static md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary">FinTrack</h2>
            <p className="text-sm text-muted-foreground">Financial Dashboard</p>
          </div>
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                  pathname === item.href ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-4">
            <div className="rounded-lg bg-primary/10 p-3">
              <p className="text-sm font-medium">Premium Plan</p>
              <p className="text-xs text-muted-foreground">Upgrade for advanced insights and features</p>
              <Button className="mt-2 w-full" size="sm">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

