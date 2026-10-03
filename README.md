# Planora

Frontend React/Vite của Planora: không gian làm việc từ ý tưởng đến hành động.
Giao diện dùng nền kem, xanh rừng, typography editorial và motion nhẹ.

**Website:** https://planora-ivory-tau.vercel.app

Repo đã liên kết project Vercel `planora`; nhánh `main` dùng cho production.

## Phạm vi bản này

Repo này chỉ chứa frontend, được tách từ `apps/chat-web` tại commit
`ef13c5695ce2da030ff613422b4f8d6e1d7e72c3` của dự án ATI.
Không sao chép lịch sử Git, backend, dữ liệu database, credential hoặc báo cáo môn học.

Trang giới thiệu và giao diện đăng nhập có thể xem trên Vercel.
**Chưa có backend:** đăng nhập/đăng ký, quản lý tài khoản, chat, hội thoại,
quản lý kết nối và thực thi kế hoạch chưa hoạt động trên bản deploy này.
`api/unavailable.js` trả HTTP503 và thông báo rõ ràng cho `/api/*`;
không có tài khoản giả, không lưu mật khẩu và không gọi dịch vụ bên ngoài.
Các hình ảnh quy trình trên landing có nhãn ví dụ.

## Chạy và kiểm tra

Node22.12+ hoặc Node24+; npm đi kèm Node.

```sh
npm ci
npm run dev
npm test
npm run test:deployment
npm run build
```

Dev server mặc định `http://127.0.0.1:5174`, proxy `/api` đến localhost3000.
Đây là proxy phát triển, không triển khai backend.

## Deploy Vercel

Import repo GitHub `planora`; dùng root directory `./` và framework Vite.
`vercel.json` đã khai báo install `npm ci`, build `npm run build`, output `dist`.
Không cần biến môi trường/credential cho bản frontend-only.
Không đưa `.env`, token GitHub, database URL, SMTP hay khóa dịch vụ vào frontend.

Các route hiện dùng query string: `/?view=landing`, `/?view=login`.
Workspace/dịch vụ/cài đặt cần phiên hợp lệ từ backend thật.

## Khi có backend HTTPS

1. Triển khai chat-api/PostgreSQL riêng và apply migrations cần thiết.
2. Thay rewrite đầu tiên trong `vercel.json` bằng:

```json
{ "source": "/api/:path*", "destination": "https://BACKEND_CUA_BAN/api/:path*" }
```

3. Xóa function unavailable sau khi đã đổi rewrite. Không dùng placeholder làm URL triển khai thật.
4. Cấu hình APP_BASE_URL của backend tới domain frontend để email xác minh mở đúng nơi.
5. Kiểm tra auth, streaming, lưu hội thoại và duyệt kế hoạch trước khi dùng dịch vụ thật.

Vercel hỗ trợ [Vite](https://vercel.com/docs/frameworks/frontend/vite) và
[rewrite tới backend khác](https://vercel.com/docs/routing/rewrites).
Logo dịch vụ giữ nguồn và điều kiện sử dụng trong `public/logos/README.md`;
font có giấy phép trong `public/fonts/OFL.txt`.
