import { motion } from "motion/react"

import type { DeckSlide } from "@/data/types"

interface SlideTitleProps {
  slide: DeckSlide
}

export function SlideTitle({ slide }: SlideTitleProps) {
  return (
    <motion.header
      data-animate="title"
      initial={{ opacity: 0, x: -32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.8, delay: 0.02 }}
      className="grid grid-cols-12 items-end gap-6"
    >
      <div className="col-span-8 flex flex-col gap-4">
        <div className="deck-kicker">
          {slide.section} / {String(slide.id).padStart(2, "0")}
        </div>
        <h2>{slide.title}</h2>
      </div>
      <p className="col-span-4 text-right text-[20px] leading-snug text-[var(--deck-muted)]">
        {slide.message}
      </p>
    </motion.header>
  )
}
