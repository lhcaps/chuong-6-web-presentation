import { Activity, Banknote, Gauge, Repeat2 } from "lucide-react"
import { motion } from "motion/react"

import { kpiTiles } from "@/data/charts"
import { fadeUp, stagger } from "@/lib/motion"
import { AnimatedNumber } from "./AnimatedNumber"

const icons = [Banknote, Gauge, Activity, Repeat2]

export function DashboardKpi() {
  return (
    <motion.div variants={stagger} className="grid h-full grid-cols-4 gap-5">
      {kpiTiles.map((tile, index) => {
        const Icon = icons[index] ?? Activity

        return (
          <motion.article
            key={tile.label}
            variants={fadeUp}
            className="flex flex-col justify-between rounded-lg border border-[var(--deck-border)] bg-[var(--deck-surface)] p-6 shadow-[var(--deck-shadow)]"
          >
            <div className="flex items-center justify-between">
              <Icon className="text-[var(--deck-primary)]" data-icon="inline-start" />
              <span className="text-[15px] font-semibold text-[var(--deck-muted)]">
                Tuần này
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <strong className="text-[48px] leading-none text-[var(--deck-text)]">
                <AnimatedNumber value={tile.value} suffix={tile.suffix} />
              </strong>
              <div>
                <h3 className="mb-2 text-[28px]">{tile.label}</h3>
                <p className="text-[18px]">{tile.signal}</p>
              </div>
            </div>
          </motion.article>
        )
      })}
    </motion.div>
  )
}
