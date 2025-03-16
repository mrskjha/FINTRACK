import type React from "react"
import { HorizontalNavbar } from "@/components/horizontal-navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <HorizontalNavbar />
      <main className="flex-1">{children}</main>
    </div>
  )
}

