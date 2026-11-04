# purecall-web
Landing page and browser entry for PURE by PureFxAi → https://call.purefxai.store

The page fetches `server.json` so the “Open web app” buttons point to the current HTTPS PURE server. APK buttons download the latest signed release. Keep `version.json` in sync with each release.

Drop images into assets/img/ (hero.png, chat.png, pet.png, ai.png, nearby.png).

## Ad rotation (`assets/ads/manifest.json`)
The hero visual and promo pop-up each pick a random item from `assets/ads/manifest.json` that matches the page language (`th`, `en` or `any`), weighted by `weight`, and avoid repeating the last item shown (stored in `localStorage` per slot). Videos play muted/looped/inline; with reduced motion only the poster is shown.

To add a video, upload the files (e.g. to `assets/anim/`) and append an item:
```json
{"id": "my-ad", "type": "video", "src": ["assets/anim/my-ad.webm", "assets/anim/my-ad.mp4"],
 "poster": "assets/anim/my-ad-poster.jpg", "lang": "th", "weight": 2, "slots": ["hero", "promo"]}
```
`type` is `video` or `image` (images use a single `src` string). `slots` is optional (default: both). Keep `id`s unique.

## Web guide (`guide.js`)
Floating "ถามผู้ช่วย PURE / Ask PURE guide" chat. It works fully offline from the built-in knowledge base in `guide.js` (edit `KB` to add topics). Optional live AI: publish `server.json` at the site root as `{"url": "https://your-server"}`; the guide POSTs `{question, lang, history}` to `<url>/api/web-guide` and streams the plain-text response. On any error/timeout it falls back to the built-in guide. Upcoming 0.9 features are labelled as upcoming.
