# DEPLOY-01 · Bản frontend độc lập

Chủ dự án yêu cầu tạo repo `planora`, công khai, frontend riêng để deploy Vercel;
chưa có backend HTTPS. Git và GitHub connector xác nhận owner `longnguyen005`.

Source lấy từ apps/chat-web tại ATI commit ef13c5695ce2da030ff613422b4f8d6e1d7e72c3.
Chỉ src/public/tests không cần backend/index/config; không copy monorepo history,
backend, báo cáo môn học, database, .env, evidence hay credential.
Repo ATI giữ nguyên branch/commit/remotes và working tree.

Standalone package planora, lockfile mới từ các dependency hiện có; @types/node
là dependency type đã dùng ở root. npm ci thành công. Không thêm framework motion.
vercel.json: Vite,root./,npm ci,build npm run build,output dist; /api chuyển tới
function503,no-store,JSON rõ backend chưa cấu hình; frontend SPA fallback index.
Function không đọc credentials/body, lưu dữ liệu hoặc giả auth/service state.

Kiểm chứng ngày04/10/2026: npm ci exit0; npm test37files/203tests exit0;
npm run test:deployment1test exit0 (HTTP thật config/login/conversations đều503,
không accessToken/user); npm run build TypeScript/Vite exit0.
Review112source/config/docs/assets files trước public upload, không thấy token/key
theo pattern scan; local node_modules/dist/.env/.vercel được ignore.

Tạo repo thành công https://github.com/longnguyen005/planora qua API xác thực Git.
Push/deploy đang thực hiện, URL Vercel live và kiểm browser chưa xác nhận lúc commit này.
Không tuyên bố auth/workspace/service execution hoạt động trên bản frontend-only.
