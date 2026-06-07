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
    headers: [
      "Tiêu chí",
      "Doanh nghiệp tư nhân",
      "TNHH 1 thành viên",
      "TNHH 2+ thành viên",
      "Công ty cổ phần",
      "Hợp danh",
      "Hộ kinh doanh",
    ],
    rows: [
      [
        "Số chủ sở hữu",
        "1 người",
        "1 người/tổ chức",
        "2–50 người",
        "≥3 cổ đông",
        "≥2 thành viên",
        "1 người (gia đình)",
      ],
      [
        "Trách nhiệm",
        "Vô hạn bằng tài sản cá nhân",
        "Hữu hạn trên phần vốn góp",
        "Hữu hạn trên phần vốn góp",
        "Hữu hạn trên phần cổ phần",
        "Vô hạn liên đới",
        "Vô hạn bằng tài sản cá nhân",
      ],
      [
        "Quản trị",
        "Đơn giản, 1 chủ quyết định",
        "Đơn giản, 1 chủ sở hữu",
        "Điều lệ, HĐQT, ĐHĐCĐ",
        "HĐQT, ĐHĐCĐ, cổ đông lớn",
        "Hợp đồng hợp danh",
        "Không có cơ cấu quản trị",
      ],
      [
        "Vốn",
        "Do chủ tự bỏ",
        "Do chủ sở hữu bỏ",
        "Vốn góp của các thành viên",
        "Chia thành cổ phần, dễ gọi vốn",
        "Vốn góp của các thành viên",
        "Không quy định vốn tối thiểu",
      ],
      [
        "Khả năng phát triển",
        "Hạn chế, khó huy động vốn",
        "Hạn chế, 1 chủ sở hữu",
        "Tốt, có thể mở rộng thành viên",
        "Tốt nhất, dễ IPO, huy động rộng",
        "Hạn chế",
        "Không phát triển thành doanh nghiệp",
      ],
      [
        "Phù hợp khi",
        "Buôn bán nhỏ, 1 người làm",
        "Muốn trách nhiệm hữu hạn, 1 chủ",
        "2+ người góp vốn, cần quản trị rõ",
        "Cần gọi vốn rộng, cổ đông nhiều",
        "Dịch vụ chuyên môn, tin cậy lẫn nhau",
        "Quy mô rất nhỏ, gia đình, không cần pháp nhân",
      ],
    ],
  },
  resourcePlan: {
    headers: ["Giai đoạn", "Công việc chính", "Người phụ trách", "Thời gian", "Nguồn lực"],
    rows: [
      [
        "0–30 ngày",
        "Hoàn thiện kế hoạch tạo lập",
        "Founder chính",
        "30 ngày",
        "Thời gian, thông tin thị trường",
      ],
      [
        "30–60 ngày",
        "Chọn pháp lý + triết lý KD",
        "Founder + tư vấn pháp lý",
        "30 ngày",
        "Vốn tư vấn, thông tin loại hình",
      ],
      [
        "60–90 ngày",
        "Đăng ký + chuẩn bị cơ sở VC",
        "Founder chính",
        "30 ngày",
        "Vốn đăng ký, phí dịch vụ",
      ],
      [
        "90–120 ngày",
        "Hoàn tất cơ sở VC, vận hành",
        "Toàn bộ nhóm",
        "30 ngày",
        "Vốn vận hành, nhân sự",
      ],
    ],
  },
  kpiDashboard: {
    headers: ["Mốc", "Đầu ra cần đạt", "Tiêu chí đánh giá"],
    rows: [
      [
        "30 ngày",
        "Kế hoạch tạo lập hoàn thiện",
        "Có danh sách CV, owner, mốc thời gian",
      ],
      [
        "60 ngày",
        "Pháp lý + triết lý KD xác định",
        "Chọn được loại hình, viết được sứ mệnh",
      ],
      [
        "90 ngày",
        "Đăng ký xong, cơ sở VC sẵn sàng",
        "Giấy chứng nhận, mặt bằng, phương pháp",
      ],
      [
        "120 ngày",
        "DN đưa vào hoạt động",
        "Có khách hàng đầu tiên, dòng tiền vào",
      ],
    ],
  },
}

export const roadmap = [
  { label: "Kế hoạch", detail: "Khái niệm, vai trò, thời điểm, căn cứ, phương pháp và nội dung kế hoạch tạo lập" },
  { label: "Hình thức pháp lý", detail: "Nhận diện các hình thức pháp lý và cân nhắc nhân tố lựa chọn" },
  { label: "Triết lý kinh doanh", detail: "Sứ mạng, mục tiêu, giá trị cốt lõi, phương pháp, yêu cầu và ý nghĩa" },
  { label: "Thủ tục pháp lý", detail: "Đăng ký kinh doanh, hồ sơ, cơ quan đăng ký, đăng ký qua mạng và thủ tục khác" },
  { label: "Cơ sở vật chất", detail: "Quy mô, địa điểm và phương pháp sản xuất kinh doanh" },
]

export const riskMatrix = [
  { name: "Không có kế hoạch tạo lập", impact: 4, likelihood: 4, type: "Kế hoạch" },
  { name: "Chọn sai hình thức pháp lý", impact: 4, likelihood: 3, type: "Hình thức pháp lý" },
  { name: "Thiếu triết lý kinh doanh", impact: 3, likelihood: 4, type: "Triết lý kinh doanh" },
  { name: "Hồ sơ/thủ tục pháp lý thiếu", impact: 5, likelihood: 3, type: "Thủ tục pháp lý" },
  { name: "Cơ sở vật chất không phù hợp", impact: 4, likelihood: 3, type: "Cơ sở vật chất" },
]

export const kpiTiles = [
  { label: "Kế hoạch tạo lập", value: 100, suffix: "%", signal: "Hoàn thành công việc đúng hạn" },
  { label: "Tiến độ pháp lý", value: 100, suffix: "%", signal: "Đăng ký xong đúng tiến độ" },
  { label: "Triết lý kinh doanh", value: 3, suffix: "/3", signal: "Sứ mệnh, mục tiêu, giá trị cốt lõi" },
  { label: "Cơ sở vật chất", value: 100, suffix: "%", signal: "Sẵn sàng đưa DN vào hoạt động" },
]

export const timelineMilestones = [
  { day: 1, label: "Dây chuyền", detail: "Tổ chức công việc thành chuỗi liên tục, phù hợp hoạt động lặp lại" },
  { day: 2, label: "Theo nhóm", detail: "Tổ chức theo nhóm công việc hoặc nhóm sản phẩm/dịch vụ" },
  { day: 3, label: "Theo đơn chiếc", detail: "Thực hiện từng sản phẩm hoặc từng đơn hàng riêng biệt" },
]

export const processMaps = {
  registration: [
    "Chuẩn bị hồ sơ",
    "Kiểm tra trùng tên",
    "Nộp đăng ký",
    "Nhận giấy chứng nhận",
    "Hậu đăng ký",
    "Giấy phép con (nếu có)",
  ],
  planning: [
    "Xác định công việc cần thực hiện",
    "Xác định trình tự & phụ thuộc",
    "Ước lượng thời gian",
    "Phân công người thực hiện",
    "Xác định công việc găng",
  ],
  legalChoice: [
    "Xác định mục đích kinh doanh",
    "Đánh giá mức rủi ro dự kiến",
    "Xác định nhu cầu vốn & người góp vốn",
    "Xem xét kế hoạch phát triển",
    "Chọn loại hình phù hợp",
  ],
}
