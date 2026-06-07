import type { CSSProperties } from "react"
import { motion } from "motion/react"

import { fadeUp, stagger } from "@/lib/motion"

interface ProcessFlowProps {
  items: string[]
  compact?: boolean
}

const processDetails: Record<string, string> = {
  "Chọn tên": "kiểm tra trùng và dễ nhầm lẫn",
  "Chuẩn bị hồ sơ": "khóa ngành nghề, vốn, đại diện",
  "Nộp đăng ký": "nộp đúng kênh và theo dõi trạng thái",
  "Nhận kết quả": "kiểm tra giấy phép trước khi dùng",
  "Thuế và hóa đơn": "hoàn tất phần hậu đăng ký",
  "Mục đích": "xác định mục đích kinh doanh hoặc mục đích xã hội",
  Input: "điều kiện cần trước khi bắt đầu",
  "Các bước": "thao tác chuẩn, không phụ thuộc trí nhớ",
  Owner: "một người chịu trách nhiệm cuối",
  Output: "bằng chứng hoàn thành rõ ràng",
  "Nhận": "ghi đúng yêu cầu khách",
  "Xử lý": "làm theo bước đã thống nhất",
  "Giao": "đảm bảo lời hứa chất lượng",
  "Thu": "khóa tiền vào và chứng từ",
  "Ghi nhận": "biến lỗi thành dữ liệu sửa",
}

export function ProcessFlow({ items, compact = false }: ProcessFlowProps) {
  return (
    <motion.div
      variants={stagger}
      className="relative flex h-full min-h-[360px] items-center"
    >
      <div className="absolute left-8 right-8 top-1/2 h-px bg-(--deck-border)" />
      <div
        className="grid w-full gap-4"
        style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` } as CSSProperties}
      >
        {items.map((item, index) => (
          <motion.article
            key={`${item}-${index}`}
            variants={fadeUp}
            className={`relative flex min-h-[190px] flex-col justify-between border border-(--deck-border) bg-(--deck-surface) p-5 shadow-(--deck-shadow) ${
              index % 2 === 0 ? "mb-14" : "mt-14"
            }`}
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[17px] font-black text-(--deck-secondary)">
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < items.length - 1 ? (
                <span className="text-[24px] font-black leading-none text-(--deck-primary)">→</span>
              ) : (
                <span className="h-2.5 w-2.5 rounded-full bg-(--deck-secondary)" />
              )}
            </div>
            <strong
              className={`relative z-10 leading-[1.12] ${compact ? "text-[24px]" : "text-[30px]"}`}
            >
              {item}
            </strong>
            {processDetails[item] ? (
              <p className="relative z-10 mt-3 text-[16px] leading-[1.35] text-(--deck-muted)">
                {processDetails[item]}
              </p>
            ) : null}
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}
