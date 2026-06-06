import { CheckCircle2, MessageCircleQuestion } from "lucide-react"
import { motion } from "motion/react"

import type { DeckSlide } from "@/data/types"
import { fadeUp, stagger } from "@/lib/motion"

const closingLanes = [
  {
    label: "LEGAL",
    title: "Hợp lệ",
    points: ["loại hình", "hồ sơ", "thuế"],
  },
  {
    label: "WORK",
    title: "Chạy được",
    points: ["owner", "SOP", "khách thật"],
  },
  {
    label: "MEASURE",
    title: "Đo được",
    points: ["dòng tiền", "phễu", "KPI tuần"],
  },
]

export function ClosingScene({ slide }: { slide: DeckSlide }) {
  return (
    <motion.div variants={stagger} className="grid h-full grid-cols-[0.9fr_1.1fr] gap-10">
      <motion.div
        variants={fadeUp}
        className="flex min-h-0 flex-col justify-between border-l-4 border-[var(--deck-secondary)] pl-8"
      >
        <div>
          <p className="text-[18px] font-black uppercase tracking-[0.16em] text-[var(--deck-secondary)]">
            Chốt chương 6
          </p>
          <h2 className="mt-5 max-w-[640px] text-[56px] leading-[1.08]">
            {slide.message}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[24px] font-bold text-[var(--deck-text)]">
            <CheckCircle2 size={28} className="text-[var(--deck-secondary)]" />
            Cảm ơn thầy và các bạn đã lắng nghe
          </div>
          <div className="flex items-center gap-3 text-[20px] font-semibold text-[var(--deck-muted)]">
            <MessageCircleQuestion size={24} className="text-[var(--deck-primary)]" />
            Phần Q&A có thể mở nhanh bằng phím Q
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden border border-[var(--deck-border)] bg-[var(--deck-surface)] p-8 shadow-[var(--deck-shadow)]"
      >
        <div className="absolute inset-x-8 top-1/2 h-px bg-[var(--deck-border)]" />
        <div className="relative z-10 grid h-full grid-cols-3 gap-5">
          {closingLanes.map((lane, index) => (
            <motion.article
              key={lane.label}
              variants={fadeUp}
              className="flex flex-col justify-between border border-[var(--deck-border)] bg-[rgba(255,255,255,0.96)] p-6"
            >
              <div>
                <span className="text-[16px] font-black text-[var(--deck-secondary)]">
                  {String(index + 1).padStart(2, "0")} / {lane.label}
                </span>
                <h3 className="mt-4 text-[34px] leading-[1.08]">{lane.title}</h3>
              </div>
              <div className="text-[92px] font-black leading-none text-[rgba(37,99,235,0.08)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="space-y-4">
                {lane.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 border-t border-[var(--deck-border)] pt-4 text-[20px] font-semibold text-[var(--deck-muted)]"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--deck-primary)]" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
