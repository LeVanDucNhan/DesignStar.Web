# StarDesign - Cloudflare Named Tunnel cho ChatGPT Actions

Muc tieu:
- Dung URL HTTPS co dinh cho ChatGPT Actions.
- Khong phu thuoc `trycloudflare.com` quick tunnel.
- API van chay local tai `http://localhost:5289`.

## Dieu kien

- Da cai `cloudflared`.
- Co tai khoan Cloudflare.
- Co domain/zone nam trong tai khoan Cloudflare, vi du `designstar.vn`.
- StarDesign API da build Release x64.
- File model list hien tai:
  `D:\StarSoft\StarDesign\Support\File\FileStartPathListEtabs.txt`

## Buoc 1 - Login Cloudflare mot lan

Mo PowerShell:

```powershell
cd D:\StarSoft\StarDesign\Support\Public
powershell -ExecutionPolicy Bypass -File .\setup_cloudflare_named_tunnel.ps1 -Hostname api.designstar.vn
```

Thay `api.designstar.vn` bang hostname that cua anh.

Script se:
- Goi `cloudflared tunnel login` neu may chua co `cert.pem`.
- Tao named tunnel `stardesign-chatgpt` neu chua co.
- Tao config tai `%USERPROFILE%\.cloudflared\stardesign-chatgpt.yml`.
- Route DNS hostname ve tunnel.
- In ra URL import:
  `https://api.designstar.vn/openapi.yaml`

## Buoc 2 - Chay API + named tunnel

Sau khi setup xong, chay:

```bat
D:\StarSoft\StarDesign\Support\Public\run_api_cloudflare_named_tunnel.bat
```

Script se:
- Chay API tai `http://localhost:5289`.
- Set `ModelPathListFile` ve `D:\StarSoft\StarDesign\Support\File\FileStartPathListEtabs.txt`.
- Chay Cloudflare named tunnel `stardesign-chatgpt`.

## Buoc 3 - Test URL public

Kiem tra:

```text
https://api.designstar.vn/healthz
https://api.designstar.vn/privacy
https://api.designstar.vn/openapi.yaml
```

Neu ca 3 URL OK thi vao GPT Builder:

```text
Configure -> Actions -> Create new action -> Import from URL
```

Dung:

```text
https://api.designstar.vn/openapi.yaml
```

## Ghi chu

- Quick tunnel `https://xxx.trycloudflare.com` chi phu hop demo tam thoi.
- User that nen dung named tunnel hoac domain HTTPS co dinh.
- ChatGPT Actions chi hoat dong khi API va named tunnel dang chay.
- Neu doi hostname, chay lai `setup_cloudflare_named_tunnel.ps1 -Hostname <hostname-moi>`.
