import { motion } from "motion/react"

import { fadeUp, stagger } from "@/lib/motion"

interface OrgBlueprintProps {
  items: string[]
}

const laneDetails = [
  {
    signal: "Làm ra",
    detail: "giữ lời hứa sản phẩm",
  },
  {
    signal: "Bán được",
    detail: "tạo khách và doanh thu",
  },
  {
    signal: "Giao được",
    detail: "đảm bảo chất lượng lặp lại",
  },
  {
    signal: "Đo được",
    detail: "kiểm soát tiền và KPI",
  },
]

export function OrgBlueprint({ items }: OrgBlueprintProps) {
  const [root = "Founder", ...rawLanes] = items
  const lanes = (rawLanes.length > 0 ? rawLanes : ["Product", "Sales", "Ops", "Finance"]).slice(0, 4)

  return (
    <motion.div
      variants={stagger}
      className="relative h-full min-h-[560px] overflow-hidden border border-[var(--deck-border)] bg-[var(--deck-surface)] p-8 shadow-[var(--deck-shadow)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(229,231,235,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 920 560" aria-hidden="true">
        <path d="M460 132 V230" fill="none" stroke="#0F766E" strokeWidth="3" />
        <path d="M150 230 H770" fill="none" stroke="#0F766E" strokeWidth="3" />
        {[150, 356, 564, 770].map((x) => (
          <path key={x} d={`M${x} 230 V300`} fill="none" stroke="#0F766E" strokeWidth="3" />
        ))}
      </svg>

      <motion.div
        variants={fadeUp}
        className="absolute left-1/2 top-8 w-[360px] -translate-x-1/2 border-2 border-[var(--deck-primary)] bg-[rgba(255,255,255,0.96)] p-6 text-center shadow-[var(--deck-shadow)]"
      >
        <div className="text-[16px] font-black uppercase tracking-[0.14em] text-[var(--deck-secondary)]">
          Điểm ra quyết định
        </div>
        <h3 className="mt-3 text-[34px] leading-[1.08]">{root}</h3>
      </motion.div>

      <div className="absolute inset-x-8 bottom-8 grid grid-cols-4 gap-5">
        {lanes.map((lane, index) => (
          <motion.article
            key={lane}
            variants={fadeUp}
            className="min-h-[210px] border border-[var(--deck-border)] bg-[rgba(255,255,255,0.96)] p-5 shadow-[var(--deck-shadow)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-black text-[var(--deck-secondary)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-3 w-3 rounded-full bg-[var(--deck-primary)]" />
            </div>
            <h3 className="mt-5 text-[30px] leading-[1.1]">{lane}</h3>
            <p className="mt-5 text-[22px] font-bold text-[var(--deck-text)]">
              {laneDetails[index]?.signal}
            </p>
            <p className="mt-2 text-[18px] leading-[1.35] text-[var(--deck-muted)]">
              {laneDetails[index]?.detail}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}
