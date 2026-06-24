## Fixes & updates to `src/routes/index.tsx` (+ `src/styles.css`)

### 1. Process section blank (steps 03/04 missing)
The `RevealGroup` wrapper around the Process section uses `viewport={{ amount: 0.2 }}` so children stay `opacity:0` until 20% is in view — combined with `py-36` + bg image, the last cards never trigger. Fix by lowering the threshold to `amount: 0.05` for that section (use a plain `motion.section` with custom viewport) and ensuring child `RevealItem` initial opacity animates correctly. Also verify all 4 steps render (they're in the `steps` array, so this is purely an animation/visibility bug).

### 2. Font of the website → elegant serif like "Arfika"
The Arfika reference is a commercial typeface. Closest free Google Font match for that high-contrast, elegant ligature look: **Italiana** for display headings, paired with **Cormorant Garamond** for body. Swap by:
- Adding `<link>` to Google Fonts in `src/routes/__root.tsx` head (Italiana + Cormorant Garamond)
- Updating `--font-display` → `"Italiana"` and `--font-sans` → `"Cormorant Garamond"` in `src/styles.css`

### 3. Hero right side → uploaded image 2 (airplane on tarmac)
Currently `heroRight = img1`. Change to use the newly uploaded plane-tarmac image (image-11). Left side (`heroLeft = img8`) stays as-is.

### 4. Stats → continuous left-to-right marquee strip
Replace the current 4-column grid stats block with a thin full-width banner that loops the 4 stat pairs (`12k+ Visas approved · 98% Approval rate · 90+ Destinations · 15 Years in practice`) using a CSS keyframe marquee (duplicated track for seamless loop, ~30s linear infinite). Slim padding (`py-4`), gold accent on the numbers.

### 5. Services → add one more card (6 total)
Add a new card e.g. **"Business & Investor Visas"** (icon: Landmark) using one of the existing uploaded images. Grid already `lg:grid-cols-3`, so 6 fills two clean rows.

### 6. Hero background → use uploaded image 3 (airplane window view)
Interpretation: use the airplane-window image (image-12) as the right-side hero image. Since item 3 says "right side = image 2 (tarmac)", I'll use image-12 (window view) as an additional hero background — placing it on the right side and moving the tarmac image to the left. **Clarification needed**: see question below.

### 7. Hero headline typewriter animation
Replace the static `<h1>Find your passport</h1>` with a typewriter effect:
- Types "Find your passport" over **2.2s** with smooth ease-out timing
- Word "passport" stays italic
- Blinking caret while typing, fades out when complete
- Implement with a small inline React hook (no new dependency) using `requestAnimationFrame` + easing curve for character reveal rate

### Upload step
Upload image-11 and image-12 to `src/assets/` via `lovable-assets` CLI before referencing them.

### Technical notes
- Marquee: define `@keyframes marquee { to { transform: translateX(-50%); } }` in `src/styles.css`, render two copies of the track in a `flex` with `w-max animate-[marquee_30s_linear_infinite]`.
- Typewriter: ease-out via easing function applied to elapsed/duration ratio mapped to characters revealed.
- Process fix: switch outer wrapper from `RevealGroup` to `motion.section` with `viewport={{ once: true, amount: 0.05 }}` so cards trigger as soon as section enters viewport.

### One clarification
Items 3 and "use the 3rd image as the image for the hero section" both target the hero. My read: **left = airport tarmac (image-11)**, **right = airplane window (image-12)**. Confirm or tell me otherwise before I build.
