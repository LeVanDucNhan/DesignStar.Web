# TowerDraft Web Starter (LoadApp12)

Đây là website tĩnh (HTML/CSS) để bạn up lên GitHub và deploy miễn phí bằng Cloudflare Pages.

## Bạn chỉ cần biết Visual Studio (làm từng bước)

### Bước 1: Tải bộ web này về máy
- Nếu bạn đang có file .zip: giải nén ra thư mục, ví dụ `TowerDraft.Web`.

### Bước 2: Mở và sửa nội dung trong Visual Studio
1) Mở Visual Studio
2) File -> Open -> Folder... -> chọn thư mục `TowerDraft.Web`
3) Mở file `CONFIG.md` và sửa các chỗ __...__:
   - link tải trial/full
   - link mua
   - zalo/email
4) Nhấn Ctrl+Shift+F (Find in Files), tìm `__` để sửa hết placeholder.

### Bước 3: Tạo repo GitHub
1) Vào GitHub -> New repository -> đặt tên ví dụ `TowerDraft.Web`
2) Chọn Public (dễ deploy) hoặc Private (vẫn deploy được, nhưng cấu hình hơi khác)

### Bước 4: Đẩy code lên GitHub (cách dễ nhất)
- Cài GitHub Desktop (dễ dùng)
- Add local repository -> chọn thư mục `TowerDraft.Web`
- Commit -> Publish repository

*(Nếu bạn quen git command line thì dùng bình thường.)*

### Bước 5: Deploy miễn phí với Cloudflare Pages
1) Tạo tài khoản Cloudflare
2) Pages -> Create a project -> Connect to GitHub -> chọn repo `TowerDraft.Web`
3) Framework preset: None
4) Build command: (để trống)
5) Output directory: (để trống)
6) Deploy

Sau vài phút bạn có link dạng:
`https://<ten-du-an>.pages.dev`

### Bước 6: Upload file cài đặt lên GitHub Releases
1) Vào repo phần mềm TowerDraft (app)
2) Releases -> Draft a new release
3) Upload file:
   - TowerDraft-Trial-Setup.exe
   - (optional) TowerDraft-Full-Setup.exe
4) Publish release
5) Copy link download và dán vào `CONFIG.md` + `download.html`

## Gợi ý đơn giản nhất
- Chỉ phát hành 1 file Trial, sau khi mua người dùng nhập key để thành Full.
- Khi đó __FULL_DOWNLOAD_URL__ có thể để giống __TRIAL_DOWNLOAD_URL__.

Chúc bạn triển khai nhanh!
