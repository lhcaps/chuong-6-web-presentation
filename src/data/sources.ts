export const sources = [
  {
    id: "textbook",
    label: "Giáo trình Khởi sự kinh doanh, Chương 6",
  },
  {
    id: "lean",
    label: "Lean Startup: Build - Measure - Learn",
  },
  {
    id: "legal",
    label: "Luật Doanh nghiệp và thủ tục đăng ký kinh doanh hiện hành",
  },
  {
    id: "finance",
    label: "Nguyên lý kế toán quản trị cho doanh nghiệp mới",
  },
  {
    id: "ops",
    label: "SOP, RACI và vận hành tinh gọn giai đoạn đầu",
  },
]

export function sourceLabels(ids: string[]) {
  return ids
    .map((id) => sources.find((source) => source.id === id)?.label)
    .filter(Boolean)
}
