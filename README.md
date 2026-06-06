# Web Presentation: Chương 6

Deck web 50 slide cho bài thuyết trình tiếng Việt 15-20 phút về **Triển khai việc tạo lập doanh nghiệp**.

## Chạy local

```bash
pnpm install
pnpm dev
```

Mở `http://127.0.0.1:5173` hoặc URL Vite in ra terminal.

## Trình chiếu

- Phím mũi tên hoặc Space: chuyển slide/fragments.
- Phím `S`: mở speaker view của Reveal.js.
- Phím `Q`: bật/tắt panel Q&A dự phòng trong lúc trình bày.
- Thanh progress mảnh nằm ở đáy slide.

## Cấu trúc chính

- `src/slides`: 50 slide component riêng.
- `src/data`: nội dung slide, biểu đồ, thành viên, nguồn.
- `src/components/layout`: shell, title, notes.
- `src/components/visual`: chart, roadmap, decision tree, process flow, matrix, KPI, risk matrix.
- `src/styles`: design tokens và Reveal overrides.

## Export PDF

1. Chạy `pnpm dev`.
2. Mở `http://127.0.0.1:5173?print-pdf`.
3. Dùng Print của browser, chọn `Save as PDF`.
4. Khuyến nghị: landscape, background graphics bật, margin none.

## Kiểm tra

```bash
pnpm lint
pnpm build
```

Đã có CSS print-friendly để layout 16:9 không vỡ khi export.
