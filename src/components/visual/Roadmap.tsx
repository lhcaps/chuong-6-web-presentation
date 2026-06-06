import { motion } from "motion/react"

import { roadmap } from "@/data/charts"
import { fadeUp, stagger } from "@/lib/motion"

export function Roadmap() {
  return (
    <motion.div variants={stagger} className="grid h-full grid-cols-5 gap-5">
      {roadmap.map((item, index) => (
        <motion.article
          key={item.label}
          variants={fadeUp}
          className="flex flex-col justify-between border-t-4 border-[var(--deck-primary)] bg-[var(--deck-surface)] p-6 shadow-[var(--deck-shadow)]"
        >
          <span className="text-[18px] font-semibold text-[var(--deck-muted)]">
            0{index + 1}
          </span>
          <div className="flex flex-col gap-4">
            <h3>{item.label}</h3>
            <p className="text-[20px]">{item.detail}</p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}
