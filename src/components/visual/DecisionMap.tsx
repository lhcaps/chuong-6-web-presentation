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
      ? "border-(--deck-primary)"
      : tone === "secondary"
        ? "border-(--deck-secondary)"
        : tone === "warning"
          ? "border-(--deck-warning)"
          : "border-(--deck-border)"

  return (
    <motion.article
      variants={fadeUp}
      className={`relative flex min-h-[150px] flex-col justify-between border bg-(--deck-surface) p-5 shadow-(--deck-shadow) ${borderColor}`}
    >
      <div className="text-[15px] font-black uppercase text-(--deck-secondary)">
        {eyebrow}
      </div>
      <h3 className="mt-3 text-[30px] leading-[1.12]">{title}</h3>
      <p className="mt-3 text-[18px] leading-[1.4] text-(--deck-muted)">{detail}</p>
    </motion.article>
  )
}

export function DecisionMap({ items }: DecisionMapProps) {
  return (
    <motion.div
      variants={stagger}
      className="relative h-full min-h-[560px] overflow-hidden border border-(--deck-border) bg-(--deck-surface) p-8 shadow-(--deck-shadow)"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(229,231,235,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.5)_1px,transparent_1px)] bg-size-[36px_36px]" />

      <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] gap-6">
        <div className="mx-auto w-[560px]">
          <DecisionCard
            eyebrow="Câu hỏi gốc"
            title={items[0] ?? "Bắt đầu từ mục đích"}
            detail="Trước hết phải xác định mục đích kinh doanh hay mục đích xã hội."
            tone="primary"
          />
        </div>

        <div className="relative grid grid-cols-[1fr_0.86fr_1fr] items-stretch gap-6">
          <div className="absolute left-[16%] right-[16%] top-1/2 h-px bg-(--deck-border)" />
          <DecisionCard
            eyebrow="Nhân tố A"
            title={items[1] ?? "Mong muốn phát triển"}
            detail="Cân nhắc mong muốn phát triển và khả năng đầu tư của người khởi sự."
            tone="secondary"
          />
          <DecisionCard
            eyebrow="Nhân tố B"
            title={items[2] ?? "Khả năng đầu tư"}
            detail="Xem nguồn vốn và mức cam kết đầu tư trước khi chọn loại hình."
            tone="warning"
          />
          <DecisionCard
            eyebrow="Nhân tố C"
            title={items[3] ?? "Tính cách và rủi ro"}
            detail="Người chịu rủi ro cao hay thấp sẽ phù hợp với hình thức pháp lý khác nhau."
            tone="primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <DecisionCard
            eyebrow="Điều kiện quản trị"
            title={items[4] ?? "Khả năng điều hành"}
            detail="Khả năng điều hành và lãnh đạo quyết định mức độ phù hợp của từng loại hình."
            tone="secondary"
          />
          <DecisionCard
            eyebrow="Kết luận"
            title={items[5] ?? "Loại hình phù hợp"}
            detail="Hình thức pháp lý phải khớp với mục đích, nguồn lực, rủi ro và định hướng phát triển."
            tone="primary"
          />
        </div>
      </div>
    </motion.div>
  )
}
