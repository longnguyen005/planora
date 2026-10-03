# DEPLOY-01 · Vercel production frontend-only

Repo công khai https://github.com/longnguyen005/planora, nhánh main;
source commit05b76a7. Repo ATI gốc không đổi.

Vercel connector deploy_to_vercel báo Tool not found, get_project schema lệch;
dùng CLI chính thức62.2.0 từ npm. Người dùng tự đăng nhập/xác nhận device auth;
không lưu credential vào source hoặc log. Không dùng temporary deployment.

CLI --project trước khi tạo project báo chưa tồn tại; deploy --yes --prod với
scope đúng longnguyen005s-projects đã tạo project và kết nối GitHub. Lần upload
đầu lỗi fetch; retry dùng project linked và build thành công18s. Không force-push.

Production READY dpl_Bqo3vFNk1PKnqRFdYpyREyxTrBTH:

- https://planora-ivory-tau.vercel.app
- Inspector https://vercel.com/longnguyen005s-projects/planora/Bqo3vFNk1PKnqRFdYpyREyxTrBTH
- Root.,Node24.x,Vite,npm ci,npm run build,output dist. Cloud install0vulnerabilities,
  TypeScript/Vite build thành công. Preview deployment có Vercel Authentication
  theo mặc định; production alias truy cập công khai HTTP200, không sửa protections.

HTTP kiểm live: homepage200,titlePlanora; /api/auth/config503,JSON lỗi
BACKEND_NOT_CONFIGURED và Cache-Control:no-store. Không có backend thật;
không giả account/token/connected/execution hoặc cấp signup.

Browser live: desktop1440×900,scrollWidth1425 (scrollbar); mobile390×844,
scrollWidth375. Tất cả img load, navbar Dịch vụ/CTA chuyển login&next=services;
LoginStory float/seal animation giữ. Frontend chỉ xem được landing/login,
các route cần auth vẫn chặn. Login bằng dữ liệu tổng hợp example.test hiển thị
đúng thông báo “Planora chưa kết nối máy chủ…”; không có tài khoản/session thật.
Không browser media emulation/touch hardware.

Ảnh preview ngoài repo: planora-vercel-desktop.png, planora-vercel-login-mobile.png
ở thư mục evidence cục bộ. Không commit screenshot, auth/token/private local config.
README/task đồng bộ website và phạm vi; source/test không đổi sau kiểm.

Chưa backend/PostgreSQL/SMTP/provider deployment; không tuyên bố platform production
hoàn tất. Cần HTTPS API rồi đổi rewrite /api và kiểm streaming/auth/approval thật.
