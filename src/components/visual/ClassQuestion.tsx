import { Badge } from "@/components/ui/badge"
import type { DeckSlide } from "@/data/types"
import { fadeUp, stagger } from "@/lib/motion"
import { motion } from "motion/react"

const letters = ["A", "B", "C", "D"]

export function ClassQuestion({ slide }: { slide: DeckSlide }) {
  const options = slide.visualItems?.length ? slide.visualItems : slide.bullets
  const cols = options.length <= 4 ? "grid-cols-2" : "grid-cols-3"

  return (
    <motion.div variants={stagger} className="grid h-full grid-cols-[0.9fr_1.1fr] gap-8">
      <motion.article
        variants={fadeUp}
        className="flex min-h-0 flex-col justify-between border border-(--deck-border) bg-(--deck-surface) p-8 shadow-(--deck-shadow)"
      >
        <div>
          <Badge variant="secondary" className="w-fit text-[16px]">
            Câu hỏi cho lớp
          </Badge>
          <h3 className="mt-8 text-[36px] leading-[1.14]">{slide.message}</h3>
        </div>
        <div className="border-l-4 border-(--deck-primary) pl-5 text-[22px] leading-[1.45] text-(--deck-muted)">
          Chọn một hướng xử lý, sau đó giải thích vì sao theo framework 5 trụ cột.
        </div>
      </motion.article>

      <motion.div variants={stagger} className={`grid ${cols} gap-5`}>
        {options.slice(0, options.length <= 4 ? 4 : 6).map((option, index) => (
          <motion.article
            key={option}
            variants={fadeUp}
            className="flex min-h-[180px] flex-col justify-between border border-(--deck-border) bg-(--deck-surface) p-5 shadow-(--deck-shadow)"
          >
            <div className="grid h-10 w-10 place-items-center border-2 border-(--deck-primary) text-[22px] font-black text-(--deck-primary)">
              {letters[index] ?? index + 1}
            </div>
            <h3 className="text-[22px] leading-[1.12]">{option}</h3>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  )
}
