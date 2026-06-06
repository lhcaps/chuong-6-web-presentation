import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import type { ChartKind } from "@/data/types"
import { chartColors, chartFont } from "@/lib/chartTheme"
import { chartEnter } from "@/lib/motion"

interface ChartCardProps {
  title: string
  kind: ChartKind
  data: Record<string, string | number>[]
}

const pieColors = [
  chartColors.primary,
  chartColors.secondary,
  chartColors.warning,
  chartColors.danger,
  "#64748B",
]

function dataKeys(data: Record<string, string | number>[]) {
  const first = data[0] ?? {}
  const xKey = Object.keys(first)[0] ?? "name"
  const yKeys = Object.keys(first).filter((key) => key !== xKey)
  return { xKey, yKeys }
}

export function ChartCard({ title, kind, data }: ChartCardProps) {
  const { xKey, yKeys } = dataKeys(data)
  const firstY = yKeys[0] ?? "value"
  const secondY = yKeys[1]
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setReady(width > 10 && height > 10)
    })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.figure
      variants={chartEnter}
      className="h-full rounded-lg border border-[var(--deck-border)] bg-[var(--deck-surface)] p-6 shadow-[var(--deck-shadow)]"
    >
      <figcaption className="mb-4 text-[18px] font-semibold text-[var(--deck-text)]">
        {title}
      </figcaption>
      <div ref={containerRef} className="h-[470px] min-h-[320px]">
        {ready ? (
          <ResponsiveContainer width="100%" height="100%">
            {kind === "line" ? (
            <LineChart data={data} margin={{ top: 16, right: 24, bottom: 8, left: 0 }}>
              <CartesianGrid stroke={chartColors.grid} strokeDasharray="4 4" />
              <XAxis dataKey={xKey} tick={chartFont} />
              <YAxis tick={chartFont} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={firstY}
                stroke={chartColors.primary}
                strokeWidth={4}
                dot={{ r: 4 }}
                isAnimationActive
              />
              {secondY ? (
                <Line
                  type="monotone"
                  dataKey={secondY}
                  stroke={chartColors.secondary}
                  strokeWidth={4}
                  dot={{ r: 4 }}
                  isAnimationActive
                />
              ) : null}
            </LineChart>
            ) : kind === "area" ? (
            <AreaChart data={data} margin={{ top: 16, right: 24, bottom: 8, left: 0 }}>
              <CartesianGrid stroke={chartColors.grid} strokeDasharray="4 4" />
              <XAxis dataKey={xKey} tick={chartFont} />
              <YAxis tick={chartFont} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={firstY}
                stroke={chartColors.primary}
                fill={chartColors.primary}
                fillOpacity={0.14}
                strokeWidth={4}
                isAnimationActive
              />
            </AreaChart>
            ) : kind === "pie" ? (
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie
                data={data}
                dataKey={firstY}
                nameKey={xKey}
                innerRadius={90}
                outerRadius={170}
                paddingAngle={3}
                isAnimationActive
              >
                {data.map((entry, index) => (
                  <Cell key={`${entry[xKey]}-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
            </PieChart>
            ) : kind === "radar" ? (
            <RadarChart data={data} outerRadius={180}>
              <PolarGrid stroke={chartColors.grid} />
              <PolarAngleAxis dataKey={xKey} tick={chartFont} />
              <Radar
                dataKey={firstY}
                stroke={chartColors.primary}
                fill={chartColors.primary}
                fillOpacity={0.18}
                strokeWidth={3}
                isAnimationActive
              />
            </RadarChart>
            ) : (
            <BarChart data={data} margin={{ top: 16, right: 24, bottom: 8, left: 0 }}>
              <CartesianGrid stroke={chartColors.grid} strokeDasharray="4 4" vertical={false} />
              <XAxis dataKey={xKey} tick={chartFont} />
              <YAxis tick={chartFont} />
              <Tooltip />
              <Bar dataKey={firstY} fill={chartColors.primary} radius={[6, 6, 0, 0]} isAnimationActive />
            </BarChart>
            )}
          </ResponsiveContainer>
        ) : (
          <div className="h-full rounded-md bg-[var(--muted)]" />
        )}
      </div>
    </motion.figure>
  )
}
