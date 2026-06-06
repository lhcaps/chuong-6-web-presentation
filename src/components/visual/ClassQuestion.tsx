import { Badge } from "@/components/ui/badge"
import type { DeckSlide } from "@/data/types"
import { fadeUp, stagger } from "@/lib/motion"
import { motion } from "motion/react"

const letters = ["A", "B", "C", "D"]

export function ClassQuestion({ slide }: { slide: DeckSlide }) {
  const options = slide.visualItems?.length ? slide.visualItems : slide.bullets

  return (
    <motion.div variants={stagger} className="grid h-full grid-cols-[0.9fr_1.1fr] gap-8">
      <motion.article
        variants={fadeUp}
        className="flex min-h-0 flex-col justify-between border border-[var(--deck-border)] bg-[var(--deck-surface)] p-8 shadow-[var(--deck-shadow)]"
      >
        <div>
          <Badge variant="secondary" className="w-fit text-[16px]">
            Câu hỏi cho lớp
          </Badge>
          <h3 className="mt-8 text-[40px] leading-[1.14]">{slide.message}</h3>
        </div>
        <div className="border-l-4 border-[var(--deck-primary)] pl-5 text-[22px] leading-[1.45] text-[var(--deck-muted)]">
          Chọn một hướng xử lý trong 15 giây, sau đó giải thích vì sao.
        </div>
      </motion.article>

      <motion.div variants={stagger} className="grid grid-cols-2 gap-5">
        {options.slice(0, 4).map((option, index) => (
          <motion.article
            key={option}
            variants={fadeUp}
            className="flex min-h-[220px] flex-col justify-between border border-[var(--deck-border)] bg-[var(--deck-surface)] p-6 shadow-[var(--deck-shadow)]"
          >
            <div className="grid h-12 w-12 place-items-center border-2 border-[var(--deck-primary)] text-[24px] font-black text-[var(--deck-primary)]">
              {letters[index] ?? index + 1}
            </div>
            <h3 className="text-[30px] leading-[1.12]">{option}</h3>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  )
}
