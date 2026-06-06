import type { CSSProperties } from "react"
import { motion } from "motion/react"

import { riskMatrix } from "@/data/charts"
import { fadeUp, stagger } from "@/lib/motion"

export function RiskMatrix() {
  return (
    <motion.div variants={stagger} className="grid h-[560px] grid-cols-[120px_repeat(5,1fr)] grid-rows-[repeat(5,1fr)_70px] gap-2">
      {[5, 4, 3, 2, 1].map((impact, row) => (
        <div
          key={`impact-${impact}`}
          style={{ gridColumn: 1, gridRow: row + 1 } as CSSProperties}
          className="flex items-center justify-end pr-4 text-[16px] font-semibold text-[var(--deck-muted)]"
        >
          Tác động {impact}
        </div>
      ))}
      {Array.from({ length: 25 }).map((_, index) => {
        const row = Math.floor(index / 5)
        const col = index % 5
        const impact = 5 - row
        const likelihood = col + 1
        const risk = riskMatrix.find((item) => item.impact === impact && item.likelihood === likelihood)
        const score = impact * likelihood
        const tone =
          score >= 16
            ? "bg-red-50 border-[var(--deck-danger)]"
            : score >= 10
              ? "bg-amber-50 border-[var(--deck-warning)]"
              : "bg-emerald-50 border-[var(--deck-secondary)]"

        return (
          <motion.div
            key={`${impact}-${likelihood}`}
            variants={fadeUp}
            style={{ gridColumn: likelihood + 1, gridRow: row + 1 } as CSSProperties}
            className={`relative border ${tone} p-3`}
          >
            {risk ? (
              <div className="flex h-full flex-col justify-between">
                <strong className="text-[18px] leading-tight text-[var(--deck-text)]">{risk.name}</strong>
                <span className="text-[14px] font-semibold text-[var(--deck-muted)]">{risk.type}</span>
              </div>
            ) : null}
          </motion.div>
        )
      })}
      {[1, 2, 3, 4, 5].map((likelihood) => (
        <div
          key={`likelihood-${likelihood}`}
          style={{ gridColumn: likelihood + 1, gridRow: 6 } as CSSProperties}
          className="pt-3 text-center text-[16px] font-semibold text-[var(--deck-muted)]"
        >
          Xác suất {likelihood}
        </div>
      ))}
    </motion.div>
  )
}
