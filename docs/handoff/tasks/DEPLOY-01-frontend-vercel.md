# DEPLOY-01 · Repo Planora và Vercel frontend

**Trạng thái:** đã triển khai frontend-only, chờ review.

## Yêu cầu đã chốt

- Chủ dự án yêu cầu repo mới tên planora, công khai, frontend riêng.
- Chưa có backend HTTPS. Không tuyên bố auth/workspace hoạt động trên Vercel.
- Giữ repo ATI, chỉ xuất snapshot frontend hiện tại; không copy history/evidence/secrets.

## Nghiệm thu

- Repo standalone có lockfile, build và tests tái tạo được.
- Vercel root/Vite/dist đúng; /api chưa cấu hình trả lỗi rõ ràng thay vì trạng thái giả.
- Tạo repo dưới tài khoản GitHub đã xác thực; push source.
- Triển khai Vercel khi tài khoản được kết nối; kiểm website thật trước kết luận.

## Kết quả

- Tạo repo công khai `https://github.com/longnguyen005/planora`, đúng tài khoản Git/connector xác thực.
- Snapshot frontend riêng104files, bỏ tests/browser vì cần backend; không copy monorepo/history/evidence. Không sửa repo ATI.
- npm ci,37files/203tests frontend,1 HTTP deployment test và build TypeScript/Vite đều exit0 ngày04/10/2026.
- API chưa cấu hình trả503/no-store/JSON, không cấp token giả. Có vercel.json, README và giấy phép font/logo.
- Push nhánh main thành công, commit source05b76a7. Người dùng đã đăng nhập/xác nhận Vercel CLI.
- Vercel project planora tạo thành công, liên kết GitHub; root./,Node24.x,Vite,build/npm ci/dist đúng. Production READY deployment dpl_Bqo3vFNk1PKnqRFdYpyREyxTrBTH.
- Website https://planora-ivory-tau.vercel.app: HTTP200,title Planora; /api/auth/config HTTP503,JSON BACKEND_NOT_CONFIGURED,no-store đúng. Desktop1440×900/mobile390×844 không tràn ngang, logo tải đầy đủ, navbar/services→login hoạt động, motion SVG còn nguyên.
- Không deploy backend, không gửi email/provider write, không đưa .vercel/auth/token vào Git. Repo ATI vẫn sạch tại ef13c56.
