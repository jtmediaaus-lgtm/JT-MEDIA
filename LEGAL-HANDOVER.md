# Oysterbedz Website — Pre-Sale Legal & Compliance Handover

**Prepared by:** JT Media
**For:** The owner of Oysterbedz, Shop 5/2 The Palladio, Dolphin Quay, Mandurah Ocean Marina, WA 6210
**Date:** 27 June 2026

This document records what must be checked or done before the website goes live and is handed over, and where ongoing responsibility sits after the sale. It uses Australian (Western Australian) law. Items marked **[MUST FIX BEFORE GO-LIVE]** should be resolved before the site is published to the public. Items marked **[VERIFY]** are placeholder content that only you (the owner) can confirm.

---

## 1. Before go-live checklist — content accuracy (Australian Consumer Law)

The menu, prices, hours, address, phone and the "only small bar" descriptor were drawn from **public listings and review sites** and have **not been verified with you**. They are placeholders. Under the **Australian Consumer Law (ACL)** — Schedule 2 of the *Competition and Consumer Act 2010* (Cth) — a business must not engage in conduct that is misleading or deceptive or likely to mislead (**s 18**) or make false or misleading representations about goods or services (**s 29**). Liability does **not** require any intention to mislead; it is judged on the likely effect on an ordinary consumer. You must confirm each item below before the site is published.

| # | Item | What to do | ACL basis |
|---|------|-----------|-----------|
| 1.1 | **Menu prices** **[MUST FIX BEFORE GO-LIVE]** | All scraped dollar prices have been **removed**. Do **not** republish any price taken from a review site. The menu is marked "Sample menu — dishes and prices to be confirmed". Only add prices that are **your actual current prices**. If any price is shown to consumers it must be the **single total price including GST** (s 48). | s 29(1)(i) (price), s 18, s 48 (single pricing) |
| 1.2 | **Menu dish names / "oysters 12 ways"** **[VERIFY]** | Confirm the dishes listed actually exist on your menu. Only keep a specific number such as "oysters 12 ways" if the menu genuinely offers at least that many distinct preparations; otherwise use non-numeric wording (e.g. "oysters prepared a range of ways"). | s 29(1)(b), s 18 |
| 1.3 | **Opening hours & Happy Hour** **[VERIFY]** | Confirm exact trading hours and the Happy Hour terms (days, start/finish, conditions). These were taken from public listings and have **not** been confirmed with you; the phone number is shown prominently so customers can check. A customer who arrives within advertised hours to find you closed is the classic misleading-conduct scenario. | s 29(1)(b), s 18 |
| 1.4 | **Address & phone** **[VERIFY]** | Confirm the address (Shop 5/2 The Palladio, Dolphin Quay) and phone ((08) 9522 1382) are correct. A wrong address/number is a factual misrepresentation that sends customers to the wrong place. | s 29(1)(b), s 18 |
| 1.5 | **"Dolphin Quay's only small bar"** **[ACTIONED — confirm before reinstating]** | This was an **absolute, checkable exclusivity claim**, not puffery. It has been **removed from the live site** and replaced with "a relaxed small bar at Dolphin Quay". Do not reinstate the "only" wording unless you can substantiate that you are the only licensed small bar at Dolphin Quay. "Small bar" is also a defined WA liquor-licence category (*Liquor Control Act 1988* (WA)), so the claim implies a licence status that must be true. | s 18, s 29(1)(b), s 29(1)(a) |
| 1.6 | **"Freshest oysters"** | Acceptable as general puffery — no change required. Do **not** pair it with a specific factual hook (e.g. "caught this morning", "sourced daily from X") unless you can substantiate that, as a concrete claim converts puffery into a representation. | s 18/s 29 (puffery principle) |

---

## 2. Images & content you supply — ownership warranty and the Google/Facebook photo trap

**This is the single most important ongoing risk for you to understand.** The decorative stock photos that were hot-linked from Unsplash have been **removed** and replaced with original JT Media placeholder graphics plus clearly labelled slots for your own real photos.

### 2.1 The hard rule on photos

You may **only** upload a photo to the website if **one** of these is true:

- **you (the business) took it**, or
- **you commissioned/paid for it and hold a signed licence or assignment** from the photographer (note: photographers keep copyright by default under **s 35** of the *Copyright Act 1968* (Cth) — paying for photos does not automatically give you copyright; get it in writing), or
- it is an original graphic supplied by JT Media with this site.

### 2.2 The trap — do NOT do this

Photos that **appear on your Google Business listing, in Google Maps reviews, in Google image search, or that other people posted to/tagged on your Facebook page are almost always owned by the individual reviewer/customer who took them, or by the platform — NOT by you**, even though they show your venue and sit on your listing. Saving those images and republishing them on your website is **reproduction of a copyright work without a licence** under the *Copyright Act 1968* (Cth) **ss 31 and 36**. There is **no "it was on our own listing" defence**. This is the most likely way this site could attract a takedown notice or a claim.

**Specifically prohibited:** saving/screenshotting images off your Google Business Profile, Google Maps reviews, Google image search, or third-party Facebook posts. If you want a particular reviewer's photo, you must contact that person and get **written permission** first.

### 2.3 Misleading imagery (ACL)

When you add real photos, they must be of the **actual** Oysterbedz venue, food and location. Presenting generic stock imagery as if it is your venue or your food can be misleading or deceptive conduct under **ACL s 18 / s 29**. The placeholder graphics shipped with the site are obviously illustrative/branded and are not dressed up as real venue photography — keep it that way.

### 2.4 Owner sign-off

JT Media confirms the delivered site contains only original or properly licensed graphics and **no** third-party stock or hot-linked images. From handover, responsibility for any image **you** add transfers to you. A short "image sourcing rules" acknowledgement can be included in the sale pack for you to sign.

---

## 3. Third-party services (fonts & maps)

### 3.1 Fonts — Fraunces & Inter (cleared, no cost to you)

Both typefaces are licensed under the **SIL Open Font License v1.1 (OFL)**, which expressly permits commercial use, embedding, redistribution and even sale, with no fee, no royalty and no per-domain licence. Selling the site to you does not breach the licence and needs no new permission. **You never need to pay for a font licence for this site** — do not be sold one.

- No visitor-facing font credit is required (OFL conditions 1 and 5). Adding one is harmless but unnecessary.
- The OFL licence is recorded in `CREDITS-AND-LICENCES.md` in the repository for provenance.
- The fonts currently load from the Google Fonts CDN. **Optional best practice:** the two font files can be self-hosted on GitHub Pages so no request goes to Google. *If self-hosted,* the upstream `OFL.txt` must travel with the font files and the font family must not be renamed (OFL conditions 1 and 2). This is optional and not required for the sale.

### 3.2 Map — Google Maps embed

- The site uses Google's **free keyless "Embed a Map" iframe**, which is the permitted way to show a Google map on a commercial small-business website. **No Google account, API key or billing is required from you.** Do not be migrated to a keyed/paid Maps API "to be safe" — there is no compliance benefit.
- The Google branding, "Map data ©", "Terms" and "Report a problem" links inside the map **must not be cropped, hidden or overlaid** — Google's terms require its attribution to stay visible.
- The map is set to **click-to-load** (a placeholder that loads Google only after the visitor clicks) — see Section 4. The placeholder uses an **owned graphic**, not a Google-served map tile or a screenshot of the live map. A plain "Get directions / Open in Google Maps" text link is kept as a fallback.

---

## 4. Privacy — current status and future triggers

### 4.1 Current status (as delivered)

- The site has **no forms, no login, no e-commerce, no analytics and sets no cookies via our code**, so it **collects no personal information**. The **Australian Privacy Principles** under the *Privacy Act 1988* (Cth) only apply when an entity actually handles personal information, so **no privacy policy is required as built**.
- Independently, Oysterbedz is almost certainly a **"small business operator"** (annual turnover ≤ AUD 3 million) and therefore **exempt** from the Australian Privacy Principles (*Privacy Act 1988* (Cth) s 6D). The usual exceptions (health services, trading in personal information, etc.) do not apply.
- **For transparency:** "no cookies set by our code" does **not** mean zero data leaves the visitor's browser. The Google Fonts CDN and the Google Maps embed (once clicked) disclose the visitor's IP and browser details to Google, and **GitHub Pages** (the host) logs visitor IPs at the server level under GitHub's own privacy statement. These are outside your control and do not make you a "collector" under the Act.
- **Note on the EU:** online articles about Google Fonts being "illegal" stem from a **German court ruling under the EU GDPR**, which has **no force in Australia**. Do not be told the current setup is unlawful here — that overstates the law.

### 4.2 Click-to-load map

The map is click-to-load, which is good privacy-by-design: no contact with Google until the visitor clicks. It also futureproofs the site, because the Privacy Act is under reform and the small-business exemption may be narrowed in future.

### 4.3 Triggers — when a privacy notice becomes needed or advisable

If you (or a future developer) add any of the following, the position changes and you should publish a short plain-English privacy notice and check the relevant vendor's terms:

- **A contact/enquiry form, a booking/reservation widget, or an email/newsletter signup** — this creates a collection point (name, email, phone, booking details). Most booking/email platforms contractually require you to display a privacy policy, and notice at the point of collection (APP 5) becomes the clear baseline.
- **Analytics (e.g. Google Analytics 4) or a social tracking pixel (Meta/Facebook etc.)** — these set tracking cookies/IDs and disclose visitor behaviour to a third party. Australia has **no** EU-style mandatory cookie-consent-banner law for a small business, so you should not be sold a cookie banner as a legal necessity — but a brief privacy/cookie note becomes strongly advisable, and the vendor's own terms may require it.

JT Media can add any of these as a future paid item. None is in scope today.

---

## 5. Accessibility (DDA 1992 / WCAG 2.1 AA) — prioritised checklist

The benchmark for accessibility in Australia is **WCAG 2.1 Level AA**, used to measure compliance with the *Disability Discrimination Act 1992* (Cth) via the Australian Human Rights Commission's Web Accessibility Advisory Notes.

> **Already actioned by JT Media:** a visible `:focus-visible` keyboard focus ring; the mobile menu closes on **Escape** and returns focus to the toggle (it is a real `<button>` with `aria-expanded`/`aria-controls`); the map control is a keyboard-operable `<button>` with an accessible name and the injected `<iframe>` carries a `title`; the phone number is a `tel:` link with an accessible name; decorative emoji are `aria-hidden`; a `prefers-reduced-motion` block is present; there is a single `<h1>` with `<h2>` per section. **Outstanding for the owner/developer:** formally measure and, where needed, adjust **colour contrast** of the teal/gold palette (below), and set `<html lang="en-AU">`.

### Still to confirm before go-live

- **Colour contrast (teal/gold on dark/light).** Measure every teal and gold text/UI colour against its actual background. Body text needs **≥ 4.5:1**; large text (≥ 24px, or ≥ 18.66px bold) and any link/button border/icon/focus ring needs **≥ 3:1**. Adjust tints until each pair passes and record the final ratios as evidence. *(WCAG SC 1.4.3, 1.4.11)*
- **Alt text when real photos are added.** Each real-photo slot should be given a meaningful `alt` describing the actual photo (e.g. "Fresh natural oysters on ice at Oysterbedz"). Decorative graphics use empty `alt=""`. *(SC 1.1.1)*
- **Language attribute.** Set `<html lang="en-AU">`. *(SC 3.1.1)*

---

## 6. Ownership & IP transfer — wording for the sale

Paying for a commissioned website does **not** automatically transfer copyright. Under the *Copyright Act 1968* (Cth) the author (JT Media) is the first owner of the code, design and artwork (**s 35(2)**), and copyright can only pass by an **assignment in writing signed by JT Media** (**s 196(3)**). The sale documents should therefore include the following.

### 6.1 Assignment of JT Media's work

A written assignment, signed by JT Media, assigning to you **all copyright and IP in the JT-authored deliverables** — the HTML, CSS and JavaScript, the original SVG oyster mark, the placeholder graphics, and the original visual design/layout — worldwide, for the full term of copyright, listed by reference to the repository. The assignment takes effect **on receipt of final payment**.

### 6.2 Third-party materials carved out

The assignment must **not** purport to transfer things JT Media does not own. Define **"Third-Party Materials"** and state they pass through under their own licences, not as an assignment:

- **Fraunces & Inter** — used under the SIL OFL v1.1 (perpetual, royalty-free; nothing renamed in breach of the reserved-name condition);
- **Google Maps** — used under Google's Maps/Google Terms of Service;
- **any imagery you later supply** — owned by you or your photographer.

You take the site subject to these licences and are responsible for ongoing compliance.

### 6.3 Warranty of originality

JT Media warrants that the JT-authored deliverables are **original to JT Media**, do not to JT Media's knowledge infringe any third party's IP, and that JT Media has the right to assign them. The warranty does **not** extend to Third-Party Materials or to any imagery **you** add after handover. It is recorded that the previously hot-linked Unsplash images were **removed prior to sale**.

### 6.4 Moral rights consent

Moral rights (attribution, against false attribution, and integrity) belong to the **individual human author** under Part IX of the *Copyright Act 1968* (Cth) and **cannot be assigned** (s 195AN(3)) — only consented to. The JT Media author(s) provide **written consent** for you and your successors/licensees to use, reproduce, modify, adapt and update the work **without attribution** and without changes being treated as a breach of the integrity right, so you can freely re-skin or edit the site later.

### 6.5 Practical handover (delivery & control)

Owning the copyright is separate from being able to run the site. Handover includes: delivery of all source files; transfer or clean re-creation of the **GitHub repository / Pages deployment** under your account; confirmation of who controls the **custom domain / DNS** (if any); and a statement of whether JT Media retains any portfolio/showcase right.

### 6.6 The "Oysterbedz" name

JT Media drew the oyster mark (its copyright is assigned to you under 6.1) but claims **no rights** in the "Oysterbedz" **name** or business goodwill — those belong to your business. JT Media does **not** warrant that you hold rights to trade under that name; confirming that is **your** diligence. As recommended (not required), you may wish to:

- run a free trade mark search on **IP Australia (Australian Trade Mark Search)** to check no one holds a registered mark for "Oysterbedz" or a deceptively similar mark in the relevant classes (29 seafood, 43 bar/restaurant services);
- confirm the **business name is registered to you** with ASIC; and
- consider registering the name/logo as a **trade mark** (your commercial decision, not a sale blocker).

Using your own business name and the oyster mark on your own site is ordinary authorised use and is not infringement.

---

## 7. Not legal advice

This document is a practical compliance handover prepared by JT Media as a web vendor. It is **general information only and is not legal advice**, and JT Media is not a law firm. It is current as at the date above and reflects the site as built. Australian law — in particular the *Privacy Act 1988* (Cth) — is under reform and may change. For advice specific to your circumstances, or before relying on any "only"/exclusivity claim, trade mark position, or contract wording, you should obtain advice from a qualified Australian legal practitioner. Acting (or not acting) on this document is your responsibility, and JT Media accepts no liability for content, images, prices or business details that you add, change or publish after handover.
