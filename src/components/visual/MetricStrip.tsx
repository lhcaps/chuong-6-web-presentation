import { motion } from "motion/react"

import { fadeUp, stagger } from "@/lib/motion"
import { AnimatedNumber } from "./AnimatedNumber"

interface MetricStripProps {
  metrics: Array<{
    label: string
    value: number
    suffix?: string
  }>
}

export function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <motion.div
      variants={stagger}
      className="grid grid-cols-4 divide-x divide-[var(--deck-border)] border-y border-[var(--deck-border)] bg-[var(--deck-surface)]"
    >
      {metrics.map((metric) => (
        <motion.div key={metric.label} variants={fadeUp} className="p-7">
          <strong className="block text-[46px] leading-none text-[var(--deck-primary)]">
            <AnimatedNumber value={metric.value} suffix={metric.suffix} />
          </strong>
          <span className="mt-3 block text-[18px] font-medium text-[var(--deck-muted)]">
            {metric.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}
