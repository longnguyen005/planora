// Frontend-only deployment: do not accept credentials or imitate a backend.
// Replace the /api rewrite with the real HTTPS origin when it is available.
export default function handler(_request, response) {
  response.statusCode = 503;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify({
    error: "Planora chưa kết nối máy chủ. Đăng nhập và workspace sẽ hoạt động khi backend được triển khai.",
    code: "BACKEND_NOT_CONFIGURED"
  }));
}
