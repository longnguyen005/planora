# Planora

Frontend React/Vite của Planora: không gian làm việc từ ý tưởng đến hành động.
Giao diện dùng nền kem, xanh rừng, typography editorial và motion nhẹ.

**Website:** https://planora-ivory-tau.vercel.app

Repo liên kết project Vercel `planora`; nhánh `main` dùng cho production.

## Phạm vi hiện tại

Repo này chỉ chứa frontend, được tách từ `apps/chat-web` tại commit
`ef13c5695ce2da030ff613422b4f8d6e1d7e72c3` của dự án ATI.
Không sao chép lịch sử Git, backend, dữ liệu database hoặc credential.

Frontend gọi `/api` cùng domain; Vercel chuyển tiếp tới backend HTTPS
https://planora-api-m1ks.onrender.com. Backend chạy trên Render Free Singapore,
dữ liệu và phiên đăng nhập lưu trong Neon PostgreSQL Free Singapore.

Đang hoạt động: đăng nhập bằng tài khoản đã cấp, đăng xuất thu hồi phiên,
workspace, lịch sử hội thoại, tạo/lưu trữ/xóa mềm/khôi phục hội thoại,
cài đặt tài khoản và cấu hình dịch vụ theo quyền của tài khoản.
Không có tài khoản giả hoặc mật khẩu trong repo.

Chưa cấu hình: AI chat/lập kế hoạch/thực thi và email xác minh/đăng ký công khai.
API báo lỗi rõ ràng khi gọi các chức năng này; không tạo kết quả giả và
không ghi lên GitHub/Trello/Slack khi kiểm tra deployment.
Hình ảnh quy trình trên landing là nội dung minh họa.

Render Free ngủ sau 15 phút không có request; lần truy cập đầu có thể mất
khoảng một phút để khởi động lại. Dữ liệu nằm trong PostgreSQL, không phụ
thuộc ổ đĩa tạm của Render. Xem [giới hạn Free](https://render.com/docs/free).

## Chạy và kiểm tra

Node22.12+ hoặc Node24+; npm đi kèm Node.

```sh
npm ci
npm run dev
npm test
npm run build
```

Dev server mặc định `http://127.0.0.1:5174`, proxy `/api` đến localhost3000.
Đây là proxy phát triển, không triển khai backend.

Kiểm tra deployment thật, chỉ đọc và không dùng credentials:

```sh
LIVE_DEPLOYMENT_URL=https://planora-ivory-tau.vercel.app npm run test:deployment
```

Trong PowerShell, đặt `$env:LIVE_DEPLOYMENT_URL` trước khi chạy lệnh.
Khi thiếu biến này, live check được bỏ qua; không mô phỏng backend.

## Deploy Vercel

Dùng root directory `./`, framework Vite. `vercel.json` khai báo install
`npm ci`, build `npm run build`, output `dist`, API rewrite đứng trước SPA fallback.
Không cần khóa riêng trong frontend. Không đưa `.env`, token GitHub,
database URL, SMTP hay khóa dịch vụ vào code/browser.

Các route dùng query string: `/?view=landing`, `/?view=login`,
`/?view=workspace`, `/?view=services`, `/?view=settings`.
Workspace/dịch vụ/cài đặt cần phiên hợp lệ từ backend thật.

Backend có `APP_BASE_URL=https://planora-ivory-tau.vercel.app` và health/readiness
`/api/health`, `/api/ready`. Hướng dẫn nguồn backend:
[apps/chat-api/deploy](https://github.com/VinhDat267/ATI_Project/tree/codex/chore/backend-deploy/apps/chat-api/deploy).

Vercel hỗ trợ [Vite](https://vercel.com/docs/frameworks/frontend/vite) và
[rewrite tới backend khác](https://vercel.com/docs/routing/rewrites).
Logo dịch vụ giữ nguồn trong `public/logos/README.md`;
font có giấy phép trong `public/fonts/OFL.txt`.
