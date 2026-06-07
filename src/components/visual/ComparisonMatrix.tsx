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
  "Đo được": "Kế hoạch, tiến độ và nguồn lực được nhìn thấy.",
  "Khách hàng mục tiêu": "Ai trả tiền và vì sao họ cần giải pháp này.",
  "Đề xuất giá trị": "Lời hứa ngắn, rõ, kiểm chứng được.",
  "Cơ chế doanh thu": "Tiền vào theo giao dịch, gói hay lặp lại.",
  "Nhanh phản hồi": "Nói chuyện được với khách thật sớm.",
  "Chi phí thấp": "Không đốt ngân sách trước khi có tín hiệu.",
  "Dễ đo": "Có số để biết kênh nào đang hiệu quả.",
  "Có thể lặp lại": "Không phụ thuộc vào may mắn hoặc quan hệ cá nhân.",
  "Sứ mệnh (Mission)": "Doanh nghiệp tồn tại vì điều gì, mang lại giá trị gì cho ai.",
  "Mục tiêu (Goals)": "Kết quả cụ thể cần đạt được trong ngắn hạn và dài hạn.",
  "Giá trị cốt lõi (Core Values)": "Những nguyên tắc không thỏa hiệp trong cách điều hành.",
  "Ngắn gọn — nói trong một câu": "Có thể nói trong 30 giây — không cần trang trọng dài dòng.",
  "Dễ hiểu — nhân viên mới hiểu trong 30 giây": "Bất kỳ ai cũng hiểu được doanh nghiệp đang đi đâu.",
  "Dễ nhớ — nhớ sau một lần đọc": "Không cần học thuộc, có thể nhắc lại tự nhiên.",
  "Cân bằng lợi ích các bên": "Tính đến khách hàng, nhân viên, cổ đông và cộng đồng.",
  "Quy mô nhỏ — vốn hạn chế, thị trường địa phương": "1–5 nhân viên, quản lý trực tiếp, phù hợp giai đoạn đầu.",
  "Quy mô vừa — đã có dòng tiền, cần phân quyền": "Cần thêm quản lý, hệ thống báo cáo, SOP.",
  "Quy mô lớn — cần hệ thống, vốn lớn, không vội vàng": "Cơ cấu tổ chức, quy trình chuẩn, nguồn vốn lớn.",
  "Nguyên tắc: bắt đầu tối thiểu, mở rộng khi có dữ liệu": "Đừng đầu tư lớn khi chưa kiểm chứng.",
  "Dây chuyền — hàng loạt, chi phí thấp": "Phù hợp sản phẩm đồng nhất, quy mô lớn.",
  "Theo nhóm — linh hoạt, vừa phải": "Phù hợp khi có nhiều biến thể sản phẩm.",
  "Đơn chiếc — cá nhân hóa, thủ công": "Phù hợp dịch vụ cá nhân hóa cao, quy mô nhỏ.",
  "Sứ mệnh — 'làm gì, cho ai, khác gì'": "Viết trong 1–2 câu ngắn gọn, rõ ràng.",
  "Mục tiêu — 'kết quả cụ thể, có thời hạn'": "Ngắn hạn (6–12 tháng) và dài hạn (2–5 năm).",
  "Giá trị cốt lõi — 'nguyên tắc không thỏa hiệp'": "2–3 giá trị dùng làm kim chỉ nam cho mọi quyết định.",
  "Sai lầm — chung chung, copy, thay đổi liên tục": "Triết lý phải xuất phát từ thực tế doanh nghiệp.",
}

export function ComparisonMatrix({ items = [], tableKey }: ComparisonMatrixProps) {
  const table = tableKey ? tables[tableKey] : undefined

  if (table) {
    return (
      <motion.div
        variants={fadeUp}
        className="overflow-hidden rounded-lg border border-(--deck-border) bg-(--deck-surface) shadow-(--deck-shadow)"
      >
        <Table>
          <TableHeader>
            <TableRow>
              {table.headers.map((header) => (
                <TableHead key={header} className="h-16 text-[18px] font-bold text-(--deck-text)">
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
                    className="py-5 text-[20px] leading-snug text-(--deck-muted) first:font-semibold first:text-(--deck-text)"
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
      <div className="absolute left-1/2 top-8 bottom-8 w-px bg-(--deck-border)" />
      <div className="absolute left-8 right-8 top-1/2 h-px bg-(--deck-border)" />
      {items.map((item, index) => (
        <motion.article
          key={item}
          variants={fadeUp}
          className="relative flex min-h-[220px] flex-col justify-between border border-(--deck-border) bg-(--deck-surface) p-7 shadow-(--deck-shadow)"
        >
          <div className="flex items-center justify-between">
            <span className="text-[17px] font-black text-(--deck-secondary)">
              {String(index + 1).padStart(2, "0")}
            </span>
            <CheckCircle2 className="text-(--deck-secondary)" data-icon="inline-end" />
          </div>
          <div>
            <h3 className="text-[32px] leading-[1.1]">{item}</h3>
            <p className="mt-4 text-[19px] leading-[1.4] text-(--deck-muted)">
              {itemDetails[item] ?? "Một lựa chọn cần được khóa bằng dữ liệu và owner rõ ràng."}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}
