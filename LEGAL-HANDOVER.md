# Oysterbedz Website — Pre-Sale Legal & Compliance Handover

**Prepared by:** JT Media
**For:** The owner of Oysterbedz, Shop 5/2 The Palladio, Dolphin Quay, Mandurah Ocean Marina, WA 6210
**Date:** 27 June 2026

This document records what must be checked or done before the website goes live and is handed over, and where ongoing responsibility sits after the sale. It uses Australian (Western Australian) law. Items marked **[MUST FIX BEFORE GO-LIVE]** should be resolved before publishing. Items marked **[VERIFY]** are placeholder content that only you (the owner) can confirm.

---

## 1. Before go-live — content accuracy (Australian Consumer Law)

The menu, prices, hours, address, phone and the "only small bar" descriptor were drawn from **public listings and review sites** and have **not been verified with you**. Under the **Australian Consumer Law** (Sch 2 of the *Competition and Consumer Act 2010* (Cth)) a business must not engage in misleading or deceptive conduct (**s 18**) or make false or misleading representations about goods/services (**s 29**). No intention to mislead is required. Confirm each item before publishing.

| # | Item | What to do | ACL basis |
|---|------|-----------|-----------|
| 1.1 | **Menu prices** **[MUST FIX]** | All scraped dollar prices have been **removed** and the menu marked "Sample menu — dishes and prices to be confirmed". Only add your **actual current prices**; any price shown must be the **single total price incl. GST** (s 48). | s 29(1)(i), s 18, s 48 |
| 1.2 | **Dish names / "oysters 12 ways"** **[VERIFY]** | Confirm the dishes exist on your menu; keep "12 ways" only if you genuinely offer at least that many preparations, else use non-numeric wording. | s 29(1)(b), s 18 |
| 1.3 | **Opening hours & Happy Hour** **[VERIFY]** | Confirm exact trading hours and Happy Hour terms. Taken from public listings, not confirmed with you; the phone is shown so customers can check. | s 29(1)(b), s 18 |
| 1.4 | **Address & phone** **[VERIFY]** | Confirm Shop 5/2 The Palladio, Dolphin Quay and (08) 9522 1382 are correct. | s 29(1)(b), s 18 |
| 1.5 | **"Dolphin Quay's only small bar"** **[ACTIONED]** | This absolute exclusivity claim has been **removed** and replaced with "a relaxed small bar at Dolphin Quay". Don't reinstate "only" unless you can substantiate it. "Small bar" is also a WA liquor-licence category (*Liquor Control Act 1988* (WA)). | s 18, s 29(1)(a)–(b) |
| 1.6 | **"Freshest oysters"** | Fine as general puffery. Don't pair it with a concrete factual hook (e.g. "caught this morning") unless you can substantiate it. | s 18/s 29 |

---

## 2. Images you supply — ownership and the Google/Facebook photo trap

**The single most important ongoing risk.** The Unsplash stock photos have been **removed** and replaced with original JT Media placeholder graphics plus labelled slots for your real photos.

**Hard rule — only upload a photo if:** you took it; or you commissioned it and hold a signed licence/assignment (photographers keep copyright by default — *Copyright Act 1968* (Cth) **s 35** — get it in writing); or it's an original JT Media graphic.

**The trap — do NOT do this:** photos on your **Google Business listing, Google Maps reviews, Google image search, or other people's Facebook posts** are almost always owned by the reviewer/customer or the platform — **not you** — even though they show your venue. Republishing them is reproduction of a copyright work without licence (*Copyright Act 1968* (Cth) **ss 31, 36**). There is **no "it was on our own listing" defence**, and it is the most likely way the site attracts a takedown or claim. If you want a reviewer's photo, get their **written permission** first.

**Misleading imagery (ACL):** real photos must be of the **actual** venue/food; passing off generic stock as your venue can breach **ACL s 18/s 29**. Keep the placeholders obviously illustrative until real photos are added.

---

## 3. Third-party services (fonts & maps)

- **Fonts (Fraunces, Inter)** — SIL Open Font License v1.1: commercial use, embedding and sale permitted, no fee, no royalty, no attribution required. **Never pay for a font licence for this site.** Recorded in `CREDITS-AND-LICENCES.md`.
- **Google Maps** — free **keyless** "Embed a Map" iframe; **no Google account/API key/billing needed**. Don't be migrated to a paid Maps API "to be safe". Google's in-map attribution must not be cropped or hidden. The map is **click-to-load** (loads Google only on click).

---

## 4. Privacy — current status and triggers

- As built the site has **no forms, no analytics and sets no cookies via our code**, so it **collects no personal information** — no privacy policy required (Australian Privacy Principles, *Privacy Act 1988* (Cth)). Oysterbedz is also almost certainly a **small-business operator** (turnover ≤ AUD 3m) and exempt (s 6D).
- The Google Fonts CDN and the Maps embed (once clicked), and GitHub Pages hosting, do disclose visitor IPs to those providers — outside your control, recorded for transparency.
- The "Google Fonts is illegal" articles are an **EU GDPR** German ruling with **no force in Australia**.
- **Triggers:** adding a contact/booking form, newsletter signup, analytics, or a tracking pixel creates a collection point — then publish a short privacy notice and check the vendor's terms. Australia has no mandatory cookie-banner law for small business; don't be sold one as a legal necessity.

---

## 5. Accessibility (DDA 1992 / WCAG 2.1 AA)

The AU benchmark is **WCAG 2.1 AA**, used to measure compliance with the *Disability Discrimination Act 1992* (Cth).

**Already actioned:** visible `:focus-visible` keyboard focus ring; mobile menu closes on **Escape** and returns focus (real `<button>` with `aria-expanded`/`aria-controls`); map control is a keyboard `<button>` with an accessible name and the injected `<iframe>` has a `title`; phone is a `tel:` link with an accessible name; decorative emoji are `aria-hidden`; `prefers-reduced-motion` block present; single `<h1>` with `<h2>` per section.

**Still to confirm before go-live:** formally measure and adjust **colour contrast** of the teal/gold palette (body text ≥ 4.5:1, large text/UI ≥ 3:1); add meaningful `alt` text to each real photo when added; set `<html lang="en-AU">`.

---

## 6. Ownership & IP transfer — wording for the sale

Paying for a website does **not** automatically transfer copyright — the author (JT Media) is first owner (*Copyright Act 1968* (Cth) **s 35(2)**) and copyright passes only by **written assignment signed by JT Media** (**s 196(3)**). The sale documents should include:

- **6.1 Assignment** of all copyright/IP in the JT-authored deliverables (HTML/CSS/JS, SVG oyster mark, placeholder graphics, visual design), worldwide, full term, effective on final payment.
- **6.2 Third-party carve-out** — Fonts (OFL), Google Maps (Google ToS) and any owner-supplied imagery pass through under their own licences, not assigned.
- **6.3 Warranty of originality** for the JT-authored deliverables (not extending to third-party materials or owner-added images); records that the Unsplash images were removed before sale.
- **6.4 Moral rights consent** (moral rights can't be assigned — s 195AN(3) — only consented to) so you can edit/re-skin without attribution.
- **6.5 Practical handover** — source files; transfer of the GitHub repo / Pages deployment to your account; custom domain/DNS control; any portfolio right.
- **6.6 The "Oysterbedz" name** — the oyster mark's copyright is assigned to you; JT Media claims no rights in the name/goodwill and does not warrant your right to trade under it (your diligence). Consider an IP Australia trade-mark search (classes 29, 43) and confirming the ASIC business-name registration.

---

## 7. Not legal advice

This is a practical compliance handover by JT Media (a web vendor, not a law firm). It is **general information only, not legal advice**, current as at the date above. Australian law (esp. the *Privacy Act 1988*) is under reform. For advice specific to your circumstances — or before relying on any exclusivity claim, trade-mark position or contract wording — consult a qualified Australian legal practitioner. JT Media accepts no liability for content, images, prices or details you add or change after handover.
