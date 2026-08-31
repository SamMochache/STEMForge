# STEMForge — Intellectual Property Guide

This document explains what kinds of IP protection actually apply to STEMForge's website and business, and what practical steps to take for each. It is written for a non-lawyer founder to understand the landscape — not as a substitute for advice from a licensed Kenyan IP attorney, which you should get before filing anything formally or before a dispute arises.

There are four separate legal tools people lump together as "IP." Only some of them fit a website/education business. Here's each one, in order of relevance to you.

## 1. Copyright — covers your code, text, and design (automatic, but strengthen it)

**What it protects:** The actual expression — your source code, the written copy on every page, the blog posts in `src/data/blogPosts.ts`, the FAQ content, the logo artwork, page layouts as designed.

**Key fact:** Copyright exists automatically the moment you create original work — in Kenya under the Copyright Act (Cap. 130) and internationally under the Berne Convention, which Kenya is party to. You do **not** have to register it for it to exist.

**What you should still do:**
- Keep the `LICENSE.md` file in the repo (created alongside this document) — it puts a clear "all rights reserved" notice on record with a copyright year and owner name, which matters if you ever need to prove ownership or a filing date.
- Add a copyright line in the website footer, e.g. `© 2026 STEMForge Academy. All rights reserved.` — check `Footer.tsx`; if it's missing, add it.
- Optionally register with the **Kenya Copyright Board (KECOBO)** — registration isn't required for protection but creates an official public record and is useful evidence if you ever need to enforce it.
- Keep the GitHub repository **private**, since you've chosen the proprietary route — a public repo doesn't waive your copyright, but it does make copying trivially easy and harder to prove was unauthorized.

## 2. Trademark — covers your name, logo, and brand ("STEMForge")

**What it protects:** The brand identity — the name "STEMForge" / "STEMForge Academy," your logo (`frontend/public/stemforge.svg`), and any taglines you use consistently, in the specific business category (education services).

**This is the one most worth doing soon**, because unlike copyright, trademark rights are tied to *registration and use in commerce*, and someone else could register "STEMForge" in Kenya before you if you wait.

**Practical steps:**
- File with **KIPI (Kenya Industrial Property Institute)** — they handle trademark registration in Kenya. A trademark search first (to confirm "STEMForge" isn't already taken in your class of goods/services — likely Class 41, education services) costs little and is worth doing immediately.
- Register in Kenya first since that's your operating market; consider Madrid Protocol filing later if you expand to other countries.
- Once registered, use the ® symbol; until then, you can use ™ to signal a claim even before registration completes.
- Trademark also covers your domain name indirectly — make sure `stemforge.co.ke` (and ideally `.com`) stay renewed under an account you control, not a contractor's.

## 3. Trade secrets — covers your curriculum, methodology, and partner terms

**What it protects:** Things that give you a competitive edge specifically *because* they're not public — your teaching methodology, internal curriculum design, pricing/partnership terms, and any proprietary "how we run a discovery call and convert a school into a partner" playbook.

**Key fact:** Unlike copyright/trademark, trade secret protection isn't a filing — it exists only as long as you actively keep the thing secret and can show you took reasonable steps to do so.

**Practical steps:**
- Anyone with access to your curriculum, pricing model, or partner pipeline (staff, contractors, freelance developers) should sign an **NDA (non-disclosure agreement)** before they see it.
- Any developer, including future ones working on this repo, should sign a contract with an **IP assignment clause** — stating explicitly that code and content they produce for STEMForge belongs to STEMForge, not to them personally. Without this in writing, ownership of custom work can be legally ambiguous even if you paid for it.
- Don't publish your full curriculum or internal pricing model on the public website — you can market program outcomes without disclosing the mechanism.

## 4. Patents — almost certainly not relevant here, and that's fine

**What it protects:** Genuinely novel *inventions* — a new device, a new technical process, a specific novel algorithm.

**Why it doesn't fit:** A marketing website, a standard contact form, and an education curriculum are not patentable subject matter. Patents protect *how a technical problem is solved in a new way*, not business methods, website designs, or educational content — those are copyright/trademark territory instead. Kenya (like most countries) also does not grant patents on pure business methods or software-as-such without a genuine technical invention behind it.

**When this could change:** If STEMForge ever builds something genuinely novel — e.g., a unique adaptive-learning algorithm, custom hardware/robotics kit, or a technical assessment engine that didn't exist before — *that specific invention* could be worth a patent conversation with a Kenyan patent attorney via KIPI. Nothing in the current repository rises to that level; don't spend money pursuing a patent on the website itself.

## Summary Table

| Protection | Applies to | Automatic? | Action needed |
|---|---|---|---|
| **Copyright** | Code, copy, blog posts, design | Yes, automatic | Keep `LICENSE.md`; add footer notice; optional KECOBO registration |
| **Trademark** | "STEMForge" name & logo | No — must register | File with KIPI soon; keep domain renewal under your control |
| **Trade secret** | Curriculum, pricing, partner playbook | Yes, but fragile | NDAs + IP-assignment clauses for anyone with access |
| **Patent** | Genuine technical inventions only | No — must file | Not applicable to current site/content |

## Immediate priority order

1. Keep this repo private and keep `LICENSE.md` in it.
2. Get an NDA + IP-assignment template ready for any future contractor or employee before they touch the code or curriculum.
3. Start the KIPI trademark search/filing for "STEMForge" — this is the one with a real "someone else could take it first" risk.
4. Skip patents entirely unless you build a genuinely novel technical product later.
