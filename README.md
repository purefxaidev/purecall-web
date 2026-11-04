# PURE — Website

**Your people, closer.** PURE brings messaging, voice and video calls, a social timeline, 2D companions, and a helpful assistant together.

**เว็บไซต์:** [call.purefxai.store](https://call.purefxai.store)
**รุ่นแอป:** 0.12.0 · Android 8+
**ดาวน์โหลด:** [PURE-0.12.0.apk](https://call.purefxai.store/downloads/PURE-0.12.0.apk)

## About this project

This repository contains the public PURE landing page and web entry point. It is a static website; the application server is maintained and operated separately. The page supports Thai and English, responsive layouts, animated product previews, a lightweight help panel, and a download page for Android.

## Website contents

- `index.html`, `style.css`, `main.js` — page structure, styling, and interactions
- `i18n.js` — Thai and English page text
- `assets/ads/manifest.json` — video and image showcase rotation
- `assets/anim/`, `assets/ads/`, `assets/pets/` — optimized web media and previews
- `server.json` — current secure web-app entry address
- `version.json`, `downloads/` — app version information and Android package

## Update the site

1. Update page content and confirm both Thai and English strings are present.
2. Add compressed web media under `assets/`; use WebM with an MP4 fallback and provide a poster image.
3. Keep `version.json`, the download package, and the version displayed on the page in sync.
4. Push reviewed changes to the `main` branch. The configured static-site deployment publishes the website automatically.
5. Open the live site on desktop and mobile, check the web-app entry, video playback, language switch, and APK download.

## Media guidance

Keep video clips short and optimized for mobile. Use muted inline playback for previews and include controls where visitors may want to replay a clip. The poster should remain useful when autoplay is unavailable or reduced motion is enabled. Avoid embedding private user media or credentials.

## Privacy and security

Never place passwords, API credentials, private media, or server administration links in this public website. The application server must use HTTPS and keep secrets in its own protected configuration.

---

# PURE — เว็บไซต์

PURE รวมแชต โทรเสียงและวิดีโอคอล ไทม์ไลน์สังคม สัตว์เลี้ยง 2D และผู้ช่วยไว้ในแอปเดียว

**เว็บไซต์:** [call.purefxai.store](https://call.purefxai.store)
**แอปรุ่น 0.12.0:** [ดาวน์โหลดไฟล์ APK](https://call.purefxai.store/downloads/PURE-0.12.0.apk)

## ขอบเขตโปรเจกต์

Repository นี้เก็บหน้าแนะนำ PURE และทางเข้าเว็บแอป เป็นเว็บไซต์แบบ static ส่วนเซิร์ฟเวอร์แอปแยกดูแลต่างหาก หน้าเว็บรองรับภาษาไทย/อังกฤษ ใช้ได้หลายขนาดหน้าจอ มีภาพเคลื่อนไหว ตัวช่วยแนะนำ และลิงก์ดาวน์โหลด Android

## โครงสร้างหน้าเว็บ

- `index.html`, `style.css`, `main.js` — โครงหน้า รูปแบบ และการโต้ตอบ
- `i18n.js` — ข้อความภาษาไทยและอังกฤษ
- `assets/ads/manifest.json` — รายการวิดีโอและภาพสำหรับหน้าเว็บ
- `assets/anim/`, `assets/ads/`, `assets/pets/` — สื่อที่ปรับขนาดสำหรับเว็บ
- `server.json` — ที่อยู่เข้าใช้เว็บแอปที่ปลอดภัย
- `version.json`, `downloads/` — ข้อมูลรุ่นและไฟล์ติดตั้ง Android

## แนวทางอัปเดต

1. ปรับข้อความและตรวจให้มีทั้งภาษาไทยกับอังกฤษ
2. บีบอัดสื่อก่อนเพิ่ม โดยใช้ WebM พร้อม MP4 สำรอง และเตรียมภาพโปสเตอร์
3. ปรับ `version.json` ไฟล์ติดตั้ง และเลขรุ่นบนหน้าเว็บให้ตรงกัน
4. ส่งการเปลี่ยนแปลงที่ตรวจแล้วไปยัง branch `main` ระบบเผยแพร่เว็บไซต์จะทำงานให้อัตโนมัติ
5. เปิดเว็บจริงบนคอมพิวเตอร์และมือถือ ตรวจทางเข้าเว็บแอป วิดีโอ การเปลี่ยนภาษา และการดาวน์โหลด APK

## สื่อและความเป็นส่วนตัว

วิดีโอควรสั้นและเหมาะกับมือถือ ใช้ภาพโปสเตอร์เมื่อเล่นอัตโนมัติไม่ได้ และมีปุ่มควบคุมให้เล่นซ้ำ ห้ามใส่สื่อส่วนตัว รหัสผ่าน หรือข้อมูลลับไว้ในเว็บไซต์สาธารณะ เซิร์ฟเวอร์แอปต้องใช้ HTTPS และเก็บความลับในค่าตั้งค่าที่ป้องกันไว้
