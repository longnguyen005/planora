# 04/10/2026 · DEPLOY-02 · Kết nối backend

- Frontend main bắt đầu tại 3f26b06, clean. Backend nguồn riêng trên nhánh
  codex/chore/backend-deploy, Render thực thi commit669a413.
- Render planora-api (srv-db0kf2e0tbcc73885glg), Singapore Free;
  Neon planora-db (store_9Oc8rAsguemPOe74), Singapore Free.
- API ready200 database connected; health chỉ accounts/conversations hoạt động.
- Nối same-origin API rewrite, xóa function unavailable và thay live check;
  không sao chép credential/backend vào repo frontend.
- Chờ nghiệm thu production sau deploy; bổ sung output và browser evidence bên dưới.

## Nghiệm thu production

- Build TypeScript/Vite exit0 (sandbox EPERM ban đầu, chạy ngoài sandbox thành công).
- Live check Render và Vercel: mỗi lần1/1 pass, skipped0, exit0.
- Main2f02695, deployment dpl_3uMpsSkNX4YHVq5mu5epDcVYWZHE Ready,
  domain https://planora-ivory-tau.vercel.app.
- HTTP thật qua Vercel: administrator login200, refresh200, account200,
  hội thoại tạo bằng browser tồn tại trong Neon, logout204,
  access/refresh sau logout401. Không in token/password.
- Browser production vào workspace, reload giữ hội thoại, mở account settings
  thành công; console warnings/errors rỗng. Một hội thoại trống được tạo để
  kiểm tra và giữ cho chủ tài khoản dùng. Ảnh ngoài Git:
  ati-implementation/planora-cloud-workspace.png.
- Không sửa source UI/API client hoặc gọi ghi provider. AI/SMTP/signup vẫn
  chưa cấu hình; Render Free cold start có thể chậm sau idle.
