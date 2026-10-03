# 04/10/2026 · DEPLOY-02 · Kết nối backend

- Frontend main bắt đầu tại 3f26b06, clean. Backend nguồn riêng trên nhánh
  codex/chore/backend-deploy, Render thực thi commit669a413.
- Render planora-api (srv-db0kf2e0tbcc73885glg), Singapore Free;
  Neon planora-db (store_9Oc8rAsguemPOe74), Singapore Free.
- API ready200 database connected; health chỉ accounts/conversations hoạt động.
- Nối same-origin API rewrite, xóa function unavailable và thay live check;
  không sao chép credential/backend vào repo frontend.
- Chờ nghiệm thu production sau deploy; bổ sung output và browser evidence bên dưới.
