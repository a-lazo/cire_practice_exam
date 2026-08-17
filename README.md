# CIRE Mock Exam Simulator

A self-contained, timed practice environment for the **Canadian Investment Regulatory Exam (CIRE)**. It runs entirely in a web browser — no internet connection, no accounts, no installation, and no technical knowledge required.

> ⚠️ **Study aid only.** These are **original** practice questions written to cover the exam's competency areas. They are **not** real CIRE questions. Rules and dollar thresholds change — always confirm details with official CIRO / CSA sources.

---

## What it does

- **Real test conditions** — countdown timer (default 120 min), configurable pass mark (default 60%), and question navigator like a real testing engine.
- **Two question banks you can choose from** on the start screen:
  - **Standard bank** — a broad CIRE study set (**316 questions**) covering core industry topics.
  - **Experimental bank (New CIRE syllabus)** — **328 questions** mapped element-by-element to CIRO's new CIRE syllabus (January 2025). Each question shows its element (E1–E9) and a **syllabus reference** (e.g., *Syllabus 3.10*), and uses the new framework/terminology.
  - **Combined** — both banks together (**644 questions**) for maximum variety across retakes.
- **Huge question bank built for repeat sittings** — far more questions than any single sitting uses, so you can take the exam **many times in a row with a fresh, randomly drawn set each time** before questions start to repeat. Answer order is shuffled too, so re-takes stay fresh. At the real-exam length of ~110 questions, each bank supports several completely fresh attempts (and the combined bank many more).
- **Self-assessment** — instant grading, a pass/fail badge, a **score breakdown by topic**, and a full **answer review with explanations** for every question.
- **Retake instantly** — one click generates a brand-new exam.
- **Print / Save as PDF** — export your results sheet for your records.
- **Keyboard shortcuts** — press `1`–`8` to pick an answer, `←` / `→` to move between questions, `F` to flag one for review.

---

## About the experimental (New CIRE syllabus) bank

Per CIRO's *CIRE Syllabus (January 2025)*, the real exam is **110 multiple-choice questions in 2 hours**, proctored, with **3 attempts allowed**. It is organized into 9 weighted elements. The experimental bank's 328 questions are distributed to mirror that blueprint (the heavily weighted elements E3 and E7 carry the most questions), giving several fully fresh 110-question sittings before repeats:

| Element | Topic | Bank Qs | Exam weight |
|---|---|:---:|:---:|
| E1 | Overview of regulatory framework | 33 | 11 |
| E2 | Prospective client relationships | 35 | 11 |
| E3 | Scope of client relationships | 52 | 17 |
| E4 | Client complaint handling | 21 | 6 |
| E5 | Market & company analysis | 33 | 9 |
| E6 | Market integrity, trade execution & settlement | 38 | 13 |
| E7 | Securities, managed products & mutual funds | 53 | 21 |
| E8 | Derivatives | 21 | 6 |
| E9 | Conflicts of interest & ethics | 42 | 16 |
| | **Total** | **328** | **110** |

**Difficulty mix (experimental bank):** 77 Core · 165 Hard · 86 Expert.
**Difficulty mix (standard bank):** 77 Core · 149 Hard · 90 Expert (316 questions).

These are **original** scenario- and calculation-style questions written to reflect the methodology of the exam while being grounded in the **new** syllabus — not legacy CSC/IIROC-era framings. New-syllabus framing they exercise includes:

- CIRO **IDPC Rules** vs **UMIR**; CSA / provincial regulators; **CIPF** (post-2023 single fund); **CDS / CDCC** clearing.
- **Investment Representative vs Registered Representative** roles (recommendation prohibition for IRs).
- **Account appropriateness vs suitability determination**; **order execution only (OEO)** accounts; firm- and Approved-Person-level **KYP**.
- **NI 45-106** accredited investor and the **$10M institutional client** threshold; permitted-client waivers.
- Marketplaces incl. **Crypto-Asset Trading Platforms (CTPs)** and **Foreign Organized Regulated Markets (FORM)**; **T+1 settlement** (2024).
- **Position of influence**, **outside activities**, **information barriers**, **grey vs restricted lists**, and **cybersecurity**.
- Products incl. **crypto assets, ESG-related products, alternative/liquid-alt funds, structured products**; **Fund Facts / ETF Facts**.
- Calculation items mirroring the syllabus's *Apply* examples (fund averages, **money-weighted vs time-weighted return**, fee impact).

> The experimental bank is a study aid built from the **proposed** syllabus, so verify current rules and dollar thresholds against official CIRO / CSA sources.

---

## How to run it (the easy way — zero setup)

1. Keep the files together in the same folder:
   - `index.html`
   - `questions.js` and `questions-standard-2.js`, `questions-standard-3.js`, `questions-standard-4.js` (standard bank)
   - `questions-experimental.js` and `questions-experimental-2.js`, `questions-experimental-3.js`, `questions-experimental-4.js` (experimental bank)
2. **Double-click `index.html`.** It opens in your default web browser (Safari, Chrome, Edge, Firefox).
3. Choose your settings and press **Start exam**.

That's it. It works offline, forever, on Mac or Windows.

> Tip: To keep it handy, drag `index.html` onto your browser's bookmarks bar, or right‑click it → *Open With* → your browser.

---

## Easy ways to share or "deploy" it

Pick whichever matches how tech-savvy the person is. All are low effort.

| Option | Effort | Best for | How |
|---|---|---|---|
| **1. Just the folder** | ⭐ none | A single person on one computer | Keep the folder anywhere and double-click `index.html`. |
| **2. USB stick / email a ZIP** | ⭐ none | Handing it to someone else | Zip the folder, send it, they unzip and double-click. Works with no internet. |
| **3. Cloud drive** | ⭐ tiny | Study group / multiple devices | Drop the folder in iCloud Drive, OneDrive, Google Drive, or Dropbox. Anyone syncs it and double-clicks. |
| **4. Netlify Drop** | ⭐ tiny | A shareable web link, no coding | Go to **app.netlify.com/drop**, drag the folder onto the page. You instantly get a public URL to share. Free. |
| **5. GitHub Pages** | ⭐⭐ small | A permanent free website | Create a free GitHub repo, upload both files, enable *Pages* in Settings. Gives a permanent `https://…github.io` link. |

**Recommended for a non-technical user:** Option 1 or 2 for personal study; **Option 4 (Netlify Drop)** if you want a link others can open on any phone or computer.

---

## Make it feel like a real installed app (optional)

- **Add to Home Screen (phone/tablet):** open the page in your mobile browser → Share → *Add to Home Screen*. It gets an icon and opens full-screen.
- **Chrome/Edge on desktop:** open the file, then menu → *Save and share* / *Install this site as an app*.

---

## Expanding the question bank

The questions live in a set of plain files that the app loads automatically — you don't need to touch the app itself:

- **Standard bank:** `questions.js`, plus the supplements `questions-standard-2.js`, `questions-standard-3.js`, `questions-standard-4.js`.
- **Experimental bank:** `questions-experimental.js`, plus the supplements `questions-experimental-2.js`, `questions-experimental-3.js`, `questions-experimental-4.js`.

You can add questions to any of these files, or create another supplement file (see the note below).

1. Open the relevant file in any text editor (TextEdit, Notepad, VS Code).
2. Copy an existing question block and change the fields:

```js
{
  category: "Fixed Income",          // must match one of the existing topic names exactly
  difficulty: "Hard",                // "Core" | "Hard" | "Expert"
  question: "Your question text?",
  options: [
    "First option",
    "Second option",
    "Third option",
    "Fourth option"
  ],
  answer: 2,                          // 0 = first option, 1 = second, 2 = third, ...
  explanation: "Why the correct answer is correct."
},
```

3. Save the file and reload the exam in your browser. New questions appear automatically, and the topic counts update.

> The `answer` field is **0-based**: `0` is the first option, `1` the second, and so on. Keep the commas and quotation marks exactly as shown.

> To expand the **experimental** bank instead, edit `questions-experimental.js` the same way. Those questions also include a `syllabus: "3.10"` field \u2014 keep it pointing at the relevant CIRE syllabus learning outcome so the reference shows during review.

**Current topics covered:** Regulatory Environment & CIRO \u00b7 Ethics & Standards of Conduct \u00b7 Equity Securities \u00b7 Fixed Income \u00b7 Managed & Structured Products \u00b7 Derivatives \u00b7 KYC, Suitability & Account Opening \u00b7 Accounts, Registration & Legal \u00b7 Taxation \u00b7 Economics \u00b7 Portfolio Management & Analysis \u00b7 AML, Complaints & Communication.

> **Adding a whole new supplement file (optional):** create a file such as `questions-standard-5.js` that starts with `window.QUESTION_BANK = (window.QUESTION_BANK || []).concat([ ... ]);` (use `window.QUESTION_BANK_EXPERIMENTAL` for the experimental bank), then add a matching `<script src="questions-standard-5.js"></script>` line in `index.html` just after the other bank `<script>` tags. This is how the existing supplement files are wired in.

---

## Settings you can change on the start screen

- **Number of questions** — choose anywhere from a short quiz up to the full size of the selected bank (the slider's maximum adjusts automatically; e.g. set it to ~110 to mirror the real exam length)
- **Time limit** in minutes (set to `0` for untimed practice)
- **Pass mark** percentage
- **Difficulty filter** — Core, Hard, Expert, or a Hard+Expert "challenge mode"
- **Topics** — include or exclude any subject area

---

## Files

- `index.html` — the exam app (open this one).
- `questions.js`, `questions-standard-2.js`, `questions-standard-3.js`, `questions-standard-4.js` — the standard question bank (316 questions).
- `questions-experimental.js`, `questions-experimental-2.js`, `questions-experimental-3.js`, `questions-experimental-4.js` — the experimental bank mapped to the new CIRE syllabus (328 questions; each question has a `syllabus` reference).
- `README.md` — this file.
