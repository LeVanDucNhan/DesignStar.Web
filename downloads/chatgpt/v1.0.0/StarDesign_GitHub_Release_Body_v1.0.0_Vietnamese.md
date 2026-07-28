# StarDesign v1.0.0 - ChatGPT Pilot Release

Báº£n nÃ y chuáº©n bá»‹ StarDesign cho ngÆ°á»i dÃ¹ng tháº­t thÃ´ng qua installer, StarDesign Local API, ChatGPT Actions, trial/license token vÃ  tÃ i liá»‡u onboarding.

## File cáº§n upload

- `DesignStar_Server_v1.0.0.zip`
- `DesignStar_Server_v1.0.0_checksum.sha256`
- `StarDesign_ChatGPT_Publish_Kit_20260728.zip`
- `StarDesign_ChatGPT_Publish_Kit_20260728_checksum.sha256`
- `StarDesign_Public_Download_Manifest_v1.0.0.json`
- `StarDesign_Public_Download_Page_Vietnamese.html`

## Checksum

Installer package:

```text
d0c3f6736dcc7d936a4ff090b13acdcd21199c4b5a94d3ae7d2f8ea97d249046  DesignStar_Server_v1.0.0.zip
```

ChatGPT publish kit:

```text
960bddf21cd7e81a76c2bf6f77a0037972c8898a07f3f9f33945e98a841f9bf6  StarDesign_ChatGPT_Publish_Kit_20260728.zip
```

## ThÃ nh pháº§n chÃ­nh

- StarDesign desktop runtime: `Design.exe`
- StarDesign Local API: `CivilSoft.AccessToAutoCAD.API.exe`
- Calculating Agent
- AutoCAD beam plugin: `runtime\AutoCAD\CivilSoft.BeamAcad.CS.dll`
- Installer/check scripts: `Install.bat`, `CheckEnv.bat`, `Uninstall.bat`
- OpenAPI schema cho ChatGPT Actions
- Privacy endpoint `/privacy`
- GPT profile, instructions, onboarding, FAQ, release note, response templates vÃ  action test payloads

## ÄÃ£ kiá»ƒm thá»­

- Full solution Release x64 build thÃ nh cÃ´ng.
- Installer package giáº£i nÃ©n Ä‘Æ°á»£c.
- `Install.bat` custom-root smoke test thÃ nh cÃ´ng.
- `CheckEnv.bat` kiá»ƒm tra runtime/API/AutoCAD plugin thÃ nh cÃ´ng.
- API Release x64 cháº¡y OK táº¡i `http://localhost:5289`.
- Cloudflare quick tunnel smoke test OK: public `/healthz`, `/privacy`, `/openapi.yaml` Ä‘á»u tráº£ 200.
- OpenAPI static lint OK: khÃ´ng trÃ¹ng `operationId`, khÃ´ng cÃ²n `/download/{jobId}` hoáº·c `/model/ensure`, khÃ´ng cÃ³ fixed `servers`.
- OpenAPI runtime tá»± sinh `servers` theo host tunnel hiá»‡n táº¡i.
- License/token/redeem POST actions hoáº¡t Ä‘á»™ng; redeem láº§n hai bá»‹ cháº·n Ä‘Ãºng.
- `/jobs/beam` route sá»‘ng; khi chÆ°a cháº¡y Agent thÃ¬ tráº£ `AgentNotOnline` Ä‘Ãºng ká»³ vá»ng.

## HÆ°á»›ng dáº«n cÃ i nhanh

1. Táº£i `DesignStar_Server_v1.0.0.zip`.
2. Giáº£i nÃ©n.
3. Nháº¥p pháº£i `install\Install.bat` vÃ  chá»n `Run as administrator`.
4. Cháº¡y `install\CheckEnv.bat`.
5. Náº¿u khÃ´ng cÃ³ `[FAIL]`, mÃ¡y Ä‘Ã£ sáºµn sÃ ng.

## Káº¿t ná»‘i ChatGPT Actions

1. Cháº¡y `run_all_build_api_cloudflare.bat`.
2. Láº¥y URL dáº¡ng `https://<random>.trycloudflare.com/openapi.yaml`.
3. Trong GPT Actions, chá»n Import from URL vÃ  dÃ¡n URL nÃ y.
4. Privacy policy dÃ¹ng `https://<random>.trycloudflare.com/privacy`.

## Giá»›i háº¡n hiá»‡n táº¡i

- CÃ i tháº­t vÃ o `%ProgramData%\DesignStar\ChatGPT` cáº§n quyá»n Administrator.
- Cloudflare quick tunnel lÃ  URL táº¡m thá»i.
- AutoCAD plugin registration/NETLOAD cáº§n test trÃªn mÃ¡y cÃ³ AutoCAD tháº­t.
- `/jobs/beam` cáº§n Agent Ä‘ang online; náº¿u chÆ°a cÃ³ Agent sáº½ bÃ¡o `AgentNotOnline`.
- Backend license server chÆ°a ná»‘i; giai Ä‘oáº¡n nÃ y Æ°u tiÃªn local/tunnel demo.





