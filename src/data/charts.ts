export const charts = {
  conversion: [
    { stage: "Tiếp cận", value: 1200 },
    { stage: "Quan tâm", value: 420 },
    { stage: "Dùng thử", value: 168 },
    { stage: "Mua lần đầu", value: 74 },
    { stage: "Mua lại", value: 31 },
  ],
  startupCosts: [
    { item: "Pháp lý", value: 8 },
    { item: "Thiết bị", value: 46 },
    { item: "Mặt bằng", value: 32 },
    { item: "Marketing", value: 18 },
    { item: "Dự phòng", value: 24 },
  ],
  cashflow: [
    { month: "T1", thu: 42, chi: 78 },
    { month: "T2", thu: 64, chi: 82 },
    { month: "T3", thu: 91, chi: 88 },
    { month: "T4", thu: 116, chi: 94 },
    { month: "T5", thu: 138, chi: 102 },
    { month: "T6", thu: 164, chi: 112 },
  ],
  breakeven: [
    { month: "T1", doanhThu: 42, tongChi: 78 },
    { month: "T2", doanhThu: 106, tongChi: 160 },
    { month: "T3", doanhThu: 197, tongChi: 248 },
    { month: "T4", doanhThu: 313, tongChi: 342 },
    { month: "T5", doanhThu: 451, tongChi: 444 },
    { month: "T6", doanhThu: 615, tongChi: 556 },
  ],
  resourceAllocation: [
    { name: "Sản phẩm", value: 30 },
    { name: "Bán hàng", value: 24 },
    { name: "Vận hành", value: 20 },
    { name: "Tài chính", value: 14 },
    { name: "Pháp lý", value: 12 },
  ],
  kpiRadar: [
    { metric: "Doanh thu", value: 76 },
    { metric: "Biên lợi nhuận", value: 58 },
    { metric: "Chuyển đổi", value: 64 },
    { metric: "Giữ chân", value: 47 },
    { metric: "Tồn kho", value: 69 },
  ],
}

export const tables = {
  legalTypes: {
    headers: ["Tiêu chí", "Hộ kinh doanh", "Công ty TNHH", "Công ty CP"],
    rows: [
      ["Quy mô", "Nhỏ, gia đình", "Nhỏ đến vừa", "Có tham vọng gọi vốn"],
      ["Trách nhiệm", "Cao hơn", "Hữu hạn", "Hữu hạn"],
      ["Quản trị", "Đơn giản", "Vừa phải", "Chặt hơn"],
      ["Phù hợp", "Bán lẻ nhỏ", "Founder team", "Tăng trưởng nhanh"],
    ],
  },
  resourcePlan: {
    headers: ["Nguồn lực", "30 ngày", "60 ngày", "90 ngày"],
    rows: [
      ["Tiền mặt", "Dự toán chi phí", "Theo dõi burn", "Điều chỉnh runway"],
      ["Nhân sự", "Vai trò lõi", "Bổ sung bán hàng", "Chuẩn hóa ca/kíp"],
      ["Sản phẩm", "MVP", "Bản thử có phí", "Tối ưu trải nghiệm"],
      ["Dữ liệu", "Sheet chỉ số", "Dashboard tuần", "Chuẩn KPI"],
    ],
  },
  kpiDashboard: {
    headers: ["KPI", "Mục tiêu tuần", "Tín hiệu cần nhìn"],
    rows: [
      ["Doanh thu", ">= 18 triệu", "Tăng hay giảm theo kênh"],
      ["Biên gộp", ">= 38%", "Giá vốn có lệch không"],
      ["Chuyển đổi", ">= 6.2%", "Thông điệp bán hàng có rõ không"],
      ["Cash runway", ">= 10 tuần", "Có cần cắt chi phí không"],
    ],
  },
}

export const roadmap = [
  { label: "Pháp lý", detail: "Chọn loại hình, chuẩn bị hồ sơ" },
  { label: "Vận hành", detail: "Vai trò, quy trình, SOP tối thiểu" },
  { label: "Thị trường", detail: "MVP, khách hàng, kênh bán" },
  { label: "Tài chính", detail: "Chi phí, dòng tiền, hòa vốn" },
  { label: "Kiểm soát", detail: "Rủi ro, KPI, 90 ngày đầu" },
]

export const riskMatrix = [
  { name: "Sai loại hình", impact: 4, likelihood: 3, type: "Pháp lý" },
  { name: "Đốt tiền nhanh", impact: 5, likelihood: 4, type: "Tài chính" },
  { name: "Không có khách", impact: 5, likelihood: 3, type: "Thị trường" },
  { name: "Founder ôm việc", impact: 3, likelihood: 5, type: "Vận hành" },
  { name: "Không đọc số liệu", impact: 4, likelihood: 4, type: "Kế toán" },
]

export const kpiTiles = [
  { label: "Doanh thu", value: 18, suffix: "tr", signal: "Tăng hay giảm theo kênh" },
  { label: "Biên gộp", value: 38, suffix: "%", signal: "Giá vốn có lệch không" },
  { label: "Chuyển đổi", value: 6, suffix: "%", signal: "Thông điệp bán hàng có rõ không" },
  { label: "Cash runway", value: 10, suffix: " tuần", signal: "Có cần cắt chi phí không" },
]

export const timelineMilestones = [
  { day: 30, label: "Setup", detail: "Dựng nền" },
  { day: 60, label: "Validate", detail: "Kiểm chứng" },
  { day: 90, label: "Stabilize", detail: "Ổn định" },
]

export const processMaps = {
  registration: [
    "Chọn tên",
    "Chọn loại hình",
    "Chuẩn bị hồ sơ",
    "Nộp đăng ký",
    "Nhận kết quả",
    "Hậu đăng ký",
  ],
  buildMeasureLearn: ["Build", "Measure", "Learn", "Decide"],
  launch: ["Thông điệp", "Kênh thử", "Ưu đãi mở bán", "Theo dõi số", "Điều chỉnh"],
  risk: ["Nhận diện", "Đo xác suất", "Đo tác động", "Chọn phản ứng", "Theo dõi"],
}
