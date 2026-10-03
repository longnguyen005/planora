# DEPLOY-02 · Kết nối backend workspace

## Phạm vi

Chủ dự án yêu cầu đăng nhập vào workspace trên website Vercel. Nối API
cùng domain tới Render sau khi backend và Neon thật đã sẵn sàng.
Không sửa UI, không cấu hình AI/email hoặc gọi ghi provider.

## Kết quả

- Rewrite `/api/:path*` tới `https://planora-api-m1ks.onrender.com/api/:path*`,
  đứng trước SPA fallback. Xóa function503 frontend-only đã hết mục đích.
- README phân biệt account/history thật với AI/đăng ký chưa cấu hình.
- Live deployment check opt-in dùng HTTP thật: PostgreSQL readiness,
  truthful capabilities, no-store và bảo vệ routes/404 JSON; không fake login.
- Kết quả build và kiểm tra production được ghi trong log cùng task.
- Nghiệm thu production đạt: build exit0, live check backend/website1/1,
  login/refresh/logout revocation HTTP thật và browser workspace/account;
  hội thoại giữ sau reload. Deployment Vercel Ready, main2f02695.
