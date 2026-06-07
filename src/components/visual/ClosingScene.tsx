import { CheckCircle2, MessageCircleQuestion } from "lucide-react"
import { motion } from "motion/react"

import type { DeckSlide } from "@/data/types"
import { fadeUp, stagger } from "@/lib/motion"

const closingLanes = [
  {
    label: "PLAN",
    title: "Kế hoạch",
    points: ["khái niệm", "căn cứ", "sơ đồ", "công việc găng"],
  },
  {
    label: "LEGAL",
    title: "Pháp lý",
    points: ["loại hình", "mục đích", "đầu tư", "rủi ro"],
  },
  {
    label: "PHILOSOPHY",
    title: "Triết lý",
    points: ["sứ mệnh", "mục tiêu", "giá trị cốt lõi", "kim chỉ nam"],
  },
  {
    label: "PROC",
    title: "Thủ tục",
    points: ["quy trình", "hồ sơ", "cơ quan", "điều kiện cấp"],
  },
  {
    label: "INFRA",
    title: "Cơ sở VC",
    points: ["quy mô", "địa điểm", "dây chuyền", "đơn chiếc"],
  },
]

export function ClosingScene({ slide }: { slide: DeckSlide }) {
  return (
    <motion.div variants={stagger} className="grid h-full grid-cols-[0.9fr_1.1fr] gap-10">
      <motion.div
        variants={fadeUp}
        className="flex min-h-0 flex-col justify-between border-l-4 border-(--deck-secondary) pl-8"
      >
        <div>
          <p className="text-[18px] font-black uppercase tracking-[0.16em] text-(--deck-secondary)">
            Tổng kết tài liệu
          </p>
          <h2 className="mt-5 max-w-[680px] text-[46px] leading-[1.1]">
            {slide.message}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[24px] font-bold text-(--deck-text)">
            <CheckCircle2 size={28} className="text-(--deck-secondary)" />
            Cảm ơn thầy và các bạn đã lắng nghe
          </div>
          <div className="flex items-center gap-3 text-[20px] font-semibold text-(--deck-muted)">
            <MessageCircleQuestion size={24} className="text-(--deck-primary)" />
            Phần Q&A có thể mở nhanh bằng phím Q
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden border border-(--deck-border) bg-(--deck-surface) p-7 shadow-(--deck-shadow)"
      >
        <div className="relative z-10 grid h-full grid-rows-5 gap-3">
          {closingLanes.map((lane, index) => (
            <motion.article
              key={lane.label}
              variants={fadeUp}
              className="grid grid-cols-[112px_170px_1fr] items-center gap-5 border border-(--deck-border) bg-[rgba(255,255,255,0.96)] p-4"
            >
              <div className="text-[16px] font-black text-(--deck-secondary)">
                {String(index + 1).padStart(2, "0")} / {lane.label}
              </div>
              <h3 className="text-[30px] leading-[1.08]">{lane.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                {lane.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 border-t border-(--deck-border) pt-2 text-[18px] font-semibold text-(--deck-muted)"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-(--deck-primary)" />
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
