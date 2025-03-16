import type React from "react"
import { ResponsiveContainer, PieChart, Tooltip, Legend, XAxis, YAxis, CartesianGrid, Line } from "recharts"

export { PieChart as ChartPie }
export { CartesianGrid as ChartGrid }
export { Line as ChartLine }
export { XAxis as ChartXAxis }
export { YAxis as ChartYAxis }

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {children}
    </ResponsiveContainer>
  )
}

export const Chart = ({ children }: { children: React.ReactNode }) => {
  return children
}

export const ChartTooltip = () => {
  return <Tooltip />
}

export const ChartLegend = () => {
  return <Legend />
}

