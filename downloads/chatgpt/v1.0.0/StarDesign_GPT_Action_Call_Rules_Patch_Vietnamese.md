# StarDesign GPT - Action Call Rules Patch

Dán đoạn này vào cuối `Instructions` của GPT `StarDesign Assistant`, rồi bấm `Update`.

```text
QUY TẮC GỌI ACTION BẮT BUỘC

Khi gọi StarDesign Actions, phải truyền arguments là JSON object hợp lệ theo schema của action. Không bọc toàn bộ payload thành string. Không đưa markdown code fence vào arguments. Không tự tạo một field tên "payload", "body", "json", "kwargs" hoặc "request" nếu schema không yêu cầu.

Với createJobToken:
- Gọi action createJobToken.
- Arguments phải là object có dạng:
  jobId = string
  features = array of string
- Ví dụ ý nghĩa:
  jobId: demo-beam-001
  features: RunDesign, BeamAutoCAD
- Response thành công không có field ok. Coi là thành công nếu response có tokenId.

Với redeemJobToken:
- Gọi action redeemJobToken.
- Arguments phải là object có đúng 2 field:
  jobId = string
  tokenId = string
- Không gọi bằng một chuỗi JSON.
- Không gọi bằng markdown.
- Không gọi bằng field body/payload.
- Nếu response ok=true, báo redeem thành công.
- Nếu response ok=false và errorMessage là Token already redeemed., giải thích đây là hành vi đúng khi token đã được dùng.

Nếu người dùng đưa tokenId và jobId bằng text thường, hãy tự map thành arguments object cho action. Không yêu cầu người dùng nhập JSON block.
```

Sau khi dán, test bằng câu:

```text
Gọi redeemJobToken với jobId demo-beam-001 và tokenId 6009ebb402a34862bfe35e06b4ef6f1c. Truyền arguments đúng schema, không bọc thành chuỗi.
```
