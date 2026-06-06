import { motion } from "motion/react"

import { fadeUp, stagger } from "@/lib/motion"

interface DecisionMapProps {
  items: string[]
}

function DecisionCard({
  eyebrow,
  title,
  detail,
  tone = "default",
}: {
  eyebrow: string
  title: string
  detail: string
  tone?: "default" | "primary" | "secondary" | "warning"
}) {
  const borderColor =
    tone === "primary"
      ? "border-[var(--deck-primary)]"
      : tone === "secondary"
        ? "border-[var(--deck-secondary)]"
        : tone === "warning"
          ? "border-[var(--deck-warning)]"
          : "border-[var(--deck-border)]"

  return (
    <motion.article
      variants={fadeUp}
      className={`relative flex min-h-[150px] flex-col justify-between border bg-[var(--deck-surface)] p-5 shadow-[var(--deck-shadow)] ${borderColor}`}
    >
      <div className="text-[15px] font-black uppercase tracking-[0.12em] text-[var(--deck-secondary)]">
        {eyebrow}
      </div>
      <h3 className="mt-3 text-[30px] leading-[1.12]">{title}</h3>
      <p className="mt-3 text-[18px] leading-[1.4] text-[var(--deck-muted)]">{detail}</p>
    </motion.article>
  )
}

export function DecisionMap({ items }: DecisionMapProps) {
  const labels = {
    root: items[0] ?? "Bắt đầu từ quy mô và trách nhiệm",
    left: items[1] ?? "Một chủ, quy mô nhỏ",
    right: items[2] ?? "Nhiều founder hoặc cần gọi vốn",
    risk: items[3] ?? "Rủi ro trách nhiệm cao?",
    household: items[4] ?? "Hộ kinh doanh",
    company: items[5] ?? "Doanh nghiệp",
  }

  return (
    <motion.div
      variants={stagger}
      className="relative h-full min-h-[560px] overflow-hidden border border-[var(--deck-border)] bg-[var(--deck-surface)] p-8 shadow-[var(--deck-shadow)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(229,231,235,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.5)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] gap-6">
        <div className="mx-auto w-[520px]">
          <DecisionCard
            eyebrow="Câu hỏi gốc"
            title={labels.root}
            detail="Đừng chọn loại hình theo cảm tính. Hãy đi từ quy mô, vốn góp và mức rủi ro."
            tone="primary"
          />
        </div>

        <div className="relative grid grid-cols-[1fr_0.86fr_1fr] items-stretch gap-6">
          <div className="absolute left-[16%] right-[16%] top-1/2 h-px bg-[var(--deck-border)]" />
          <DecisionCard
            eyebrow="Nhánh A"
            title={labels.left}
            detail="Phù hợp khi bán nhỏ, ít người góp vốn và rủi ro trách nhiệm thấp."
            tone="secondary"
          />
          <DecisionCard
            eyebrow="Điểm kiểm tra"
            title={labels.risk}
            detail="Nếu có rủi ro tài sản, hợp đồng hoặc gọi vốn, nên tách trách nhiệm rõ hơn."
            tone="warning"
          />
          <DecisionCard
            eyebrow="Nhánh B"
            title={labels.right}
            detail="Cần cấu trúc rõ quyền, vốn, trách nhiệm và khả năng mở rộng."
            tone="primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <DecisionCard
            eyebrow="Kết quả A"
            title={labels.household}
            detail="Gọn, nhanh, hợp với quy mô nhỏ nhưng hạn chế khi mở rộng."
            tone="secondary"
          />
          <DecisionCard
            eyebrow="Kết quả B"
            title={labels.company}
            detail="Rõ cấu trúc, dễ chia quyền và chuẩn bị tốt hơn cho tăng trưởng."
            tone="primary"
          />
        </div>
      </div>
    </motion.div>
  )
}
