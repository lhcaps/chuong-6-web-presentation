import { ChartCard } from "./ChartCard"

interface AnimatedBarChartProps {
  title: string
  data: Record<string, string | number>[]
}

export function AnimatedBarChart({ title, data }: AnimatedBarChartProps) {
  return <ChartCard title={title} data={data} kind="bar" />
}
