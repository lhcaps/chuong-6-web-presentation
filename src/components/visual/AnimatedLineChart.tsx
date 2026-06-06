import { ChartCard } from "./ChartCard"

interface AnimatedLineChartProps {
  title: string
  data: Record<string, string | number>[]
}

export function AnimatedLineChart({ title, data }: AnimatedLineChartProps) {
  return <ChartCard title={title} data={data} kind="line" />
}
