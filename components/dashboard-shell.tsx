import type React from "react"
import { cn } from "@/lib/utils"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col">
        <div className="container flex-1 items-start py-6 md:py-8">
          <div className={cn("mx-auto w-full max-w-6xl", className)} {...props}>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

