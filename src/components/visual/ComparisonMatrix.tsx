import { CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

import { tables } from "@/data/charts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { fadeUp, stagger } from "@/lib/motion"

interface ComparisonMatrixProps {
  items?: string[]
  tableKey?: keyof typeof tables
}

const itemDetails: Record<string, string> = {
  "Làm ra": "Sản phẩm đủ tốt để giao đúng lời hứa.",
  "Bán được": "Có kênh tiếp cận và chuyển đổi khách thật.",
  "Giao được": "Quy trình giúp chất lượng không phụ thuộc trí nhớ.",
  "Đo được": "Dòng tiền, phễu và KPI được nhìn hằng tuần.",
  "Khách hàng mục tiêu": "Ai trả tiền và vì sao họ cần giải pháp này.",
  "Đề xuất giá trị": "Lời hứa ngắn, rõ, kiểm chứng được.",
  "Cơ chế doanh thu": "Tiền vào theo giao dịch, gói hay lặp lại.",
  "Nhanh phản hồi": "Nói chuyện được với khách thật sớm.",
  "Chi phí thấp": "Không đốt ngân sách trước khi có tín hiệu.",
  "Dễ đo": "Có số để biết kênh nào đang hiệu quả.",
  "Có thể lặp lại": "Không phụ thuộc vào may mắn hoặc quan hệ cá nhân.",
}

export function ComparisonMatrix({ items = [], tableKey }: ComparisonMatrixProps) {
  const table = tableKey ? tables[tableKey] : undefined

  if (table) {
    return (
      <motion.div
        variants={fadeUp}
        className="overflow-hidden rounded-lg border border-[var(--deck-border)] bg-[var(--deck-surface)] shadow-[var(--deck-shadow)]"
      >
        <Table>
          <TableHeader>
            <TableRow>
              {table.headers.map((header) => (
                <TableHead key={header} className="h-16 text-[18px] font-bold text-[var(--deck-text)]">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.rows.map((row) => (
              <TableRow key={row.join("-")}>
                {row.map((cell, index) => (
                  <TableCell
                    key={`${cell}-${index}`}
                    className="py-5 text-[20px] leading-snug text-[var(--deck-muted)] first:font-semibold first:text-[var(--deck-text)]"
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    )
  }

  return (
    <motion.div variants={stagger} className="relative grid h-full grid-cols-2 gap-6">
      <div className="absolute left-1/2 top-8 bottom-8 w-px bg-[var(--deck-border)]" />
      <div className="absolute left-8 right-8 top-1/2 h-px bg-[var(--deck-border)]" />
      {items.map((item, index) => (
        <motion.article
          key={item}
          variants={fadeUp}
          className="relative flex min-h-[220px] flex-col justify-between border border-[var(--deck-border)] bg-[var(--deck-surface)] p-7 shadow-[var(--deck-shadow)]"
        >
          <div className="flex items-center justify-between">
            <span className="text-[17px] font-black text-[var(--deck-secondary)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <CheckCircle2 className="text-[var(--deck-secondary)]" data-icon="inline-end" />
          </div>
          <div>
            <h3 className="text-[32px] leading-[1.1]">{item}</h3>
            <p className="mt-4 text-[19px] leading-[1.4] text-[var(--deck-muted)]">
              {itemDetails[item] ?? "Một lựa chọn cần được khóa bằng dữ liệu và owner rõ ràng."}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}
