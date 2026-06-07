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
          className="flex flex-col justify-between border-t-4 border-(--deck-primary) bg-(--deck-surface) p-6 shadow-(--deck-shadow)"
        >
          <span className="text-[15px] font-black text-(--deck-secondary)">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-3">
            <h3 className="text-[17px] font-bold leading-tight">{item.label}</h3>
            <p className="text-[15px] leading-snug text-(--deck-muted)">{item.detail}</p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}
