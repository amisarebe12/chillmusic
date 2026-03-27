# Chill Music - Alexa Skill 🎵

Đây là mã nguồn của **Chill Music** - Alexa Skill chuyên về **Ambient Relaxation**, cung cấp trải nghiệm âm thanh mượt mà kết hợp hình ảnh đồ họa thông qua **APL (Alexa Presentation Language)**.

## 🏗 Kiến trúc (SOLID & OOP)

Dự án này được tổ chức chặt chẽ theo các nguyên tắc SOLID và OOP:
- **Separation of Concerns:** 
  - `handlers/`: Chứa các lớp riêng biệt để xử lý từng Intent.
  - `logic/`: Đóng gói logic phát âm thanh và quản lý asset (`AudioController`, `AssetManager`).
  - `view/`: Chứa cấu hình hiển thị APL (`chill_music_template.json`).
  - `constants/`: Khai báo hằng số toàn cục (Supabase URL).
- **Singleton Pattern:** `AssetManager` là class Singleton để dễ dàng truy xuất URL ở mọi nơi.
- **Factory Pattern:** `DirectiveFactory` được dùng để tự động render response dựa vào việc thiết bị có hỗ trợ màn hình hay không.

## ⚙️ Cài đặt & Cấu hình

1. **Cập nhật URL Asset (Supabase Storage):**
   Mở tệp `src/constants/Constants.js` và thay thế các URL placeholder bằng link thực tế từ Supabase của bạn:
   ```javascript
   static get AUDIO_URL() { return '[DÁN_URL_MP3_SUPABASE_TẠI_ĐÂY]'; }
   static get BACKGROUND_URL() { return '[DÁN_URL_IMAGE_SUPABASE_TẠI_ĐÂY]'; }
   ```
   *Yêu cầu:* Audio phải là `MP3 48kbps, 22050Hz`.

2. **Cài đặt thư viện Node.js:**
   Mở Terminal (Command Prompt / PowerShell) và chạy:
   ```bash
   npm install
   ```

## 🚀 Triển khai (Deployment via ASK CLI) trên Windows

1. **Cài đặt ASK CLI** (nếu chưa có):
   ```bash
   npm install -g ask-cli
   ask configure
   ```

2. **Khởi tạo và Push code lên Alexa Console:**
   Di chuyển vào thư mục dự án và khởi tạo (nếu đây là một project mới):
   ```bash
   ask init
   ```
   Chọn cấu hình tương ứng (ví dụ: `Node.js V2`, triển khai qua `AWS Lambda` hoặc `Alexa-hosted`).

3. **Deploy:**
   Sau khi hoàn tất cấu hình, bạn có thể triển khai skill bằng lệnh:
   ```bash
   ask deploy
   ```

## 🧪 Testing (Kiểm thử)

1. Mở [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask).
2. Chuyển sang tab **Test** và đổi tuỳ chọn "Skill testing is enabled in:" thành **Development**.
3. Bạn có thể sử dụng microphone hoặc gõ lệnh:
   - *"Alexa, open Chill Music"*
   - *"play"*
   - *"stop"*
4. Kiểm tra trên các màn hình ảo của Alexa Device (Echo Show 5, 8, v.v.) để xem giao diện **APL** hiển thị Background mờ (`blur effect`), Logo và trạng thái "Now Playing".

---
*Dự án được tạo bởi Trae AI.*