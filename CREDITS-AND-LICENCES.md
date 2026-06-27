# Credits and Licences

**Project:** Oysterbedz one-page marketing website
**Prepared by:** JT Media
**Last updated:** 27 June 2026

This document records every third-party asset and component used in the Oysterbedz website, together with its licence and the basis on which it may be used. It also confirms which materials are original works authored by JT Media. It forms part of the sale and handover documentation so that ownership and licensing of the delivered site are clearly recorded for the business owner.

---

## 1. Summary

| Item | Type | Source / Owner | Licence | Commercial use | Attribution required |
|------|------|----------------|---------|----------------|----------------------|
| Fraunces | Font | The Fraunces Project Authors (via Google Fonts) | SIL Open Font License v1.1 | Yes | No (not legally required) |
| Inter | Font | The Inter Project Authors (via Google Fonts) | SIL Open Font License v1.1 | Yes | No (not legally required) |
| Google Maps embed | Map | Google LLC | Google Maps/Google Earth Additional Terms of Service | Yes (keyless embed) | Yes — Google's own in-map attribution must not be removed |
| Emoji icons | Inline icons | Unicode Consortium (system-rendered) | Unicode Standard — system fonts, no asset distributed | N/A | No |
| Oyster mark (SVG) | Logo / artwork | JT Media (original) | Original work — assigned to owner on sale | Yes (owner) | No |
| HTML / CSS / JavaScript | Source code | JT Media (original) | Original work — assigned to owner on sale | Yes (owner) | No |
| Placeholder graphics | Images | JT Media (original) | Original work — assigned to owner on sale | Yes (owner) | No |
| Photographs (future) | Images | To be supplied by owner | Owner must own or hold a licence | Owner's responsibility | Per photographer's terms |

---

## 2. Fonts

### Fraunces

- **Type:** Web font (typeface)
- **Licence:** SIL Open Font License, Version 1.1 (OFL-1.1)
- **Source:** Google Fonts (https://fonts.google.com/specimen/Fraunces)
- **Delivery:** Loaded at runtime from the Google Fonts CDN (`fonts.googleapis.com` / `fonts.gstatic.com`).

### Inter

- **Type:** Web font (typeface)
- **Licence:** SIL Open Font License, Version 1.1 (OFL-1.1)
- **Source:** Google Fonts (https://fonts.google.com/specimen/Inter)
- **Delivery:** Loaded at runtime from the Google Fonts CDN (`fonts.googleapis.com` / `fonts.gstatic.com`).

### Licence notes for both fonts

- The SIL Open Font License v1.1 permits these fonts to be used, embedded and displayed **commercially**, with **no fee, royalty or per-domain charge**, and it does not distinguish between hobby and commercial use. Selling and transferring the website to the Oysterbedz business owner does **not** breach the licence and requires no new permission from the type designers.
- **No visitor-facing attribution is legally required.** OFL condition 5 confirms that documents and works created with the fonts (such as the rendered web pages) do not have to carry the OFL notice. The credit recorded here is for documentation only, not a legal obligation.
- In the **current CDN configuration the font files are not redistributed by this site**, so the OFL's copyright/licence-notice requirement (which attaches to the font software when it is redistributed) is not engaged on the visitor-facing site.
- **If the fonts are ever self-hosted** (for example, to remove the third-party request to Google), the site would then be redistributing the font software, which engages OFL conditions 1 and 2: the upstream `OFL.txt` (copyright notice and licence text) must travel with the font files, and the fonts must not be renamed in a way that uses a Reserved Font Name on a modified font. Shipping the unmodified upstream WOFF2 files together with `OFL.txt` satisfies this; subsetting for performance is permitted provided the licence text stays with the files.

A copy of the SIL Open Font License v1.1 text can be obtained from https://openfontlicense.org and should be retained in the repository if the fonts are self-hosted.

---

## 3. Map

### Google Maps embed

- **Type:** Interactive map
- **Provider:** Google LLC
- **Licence / terms:** Google Maps/Google Earth Additional Terms of Service; Google Terms of Service
- **Implementation:** Standard keyless "Embed a Map" iframe, loaded via a **click-to-load** pattern (the map is requested from Google only after the visitor actively clicks to load it). No Google API key, Google Cloud account or billing is required from the owner.

### Licence notes

- The keyless "Embed a Map" iframe is the free, Google-permitted way to display a Google map on a public commercial website. It does not require an API key.
- **Google's own in-map attribution and controls** (the "Google" wordmark, "Map data ©" line, "Terms" and "Report a problem" links) **must remain fully visible and must not be removed, cropped, overlaid or hidden with CSS.** No separate attribution text needs to be authored elsewhere on the page; the obligation is simply not to strip what Google already displays.
- The click-to-load pattern means no request is made to Google, and no Google cookies are set, until the visitor chooses to load the map. The static placeholder shown before the click is an **owned/original graphic or styled CSS placeholder**, not a Google-served map tile or a screenshot of the live map.
- A plain-text address and a "Get directions / Open in Google Maps" link are also provided as a non-JavaScript and accessibility fallback.

---

## 4. Icons

### Emoji icons

- **Type:** Inline Unicode emoji used as small decorative icons
- **Source / standard:** Unicode Standard (Unicode Consortium)
- **Licence:** None required. Emoji are rendered by the system font on each visitor's own device (Apple, Google Noto, Microsoft, etc.). The site does **not** copy, embed or distribute any emoji artwork, so there is no image-licensing or copyright exposure.
- **Note:** Emoji appearance varies by device and operating system. Purely decorative emoji are marked `aria-hidden="true"`, and any emoji that conveys meaning has an adjacent text label, for accessibility consistency. This is an accessibility note, not a licensing requirement.

---

## 5. Original works authored by JT Media

The following materials are **original works created by JT Media** for this project. They contain no third-party copyright material and are not derived from, traced from, or copied from any existing logo, clip-art, template or stock asset:

- The **oyster mark (SVG logo artwork)**.
- All **HTML** source.
- All **CSS** stylesheets.
- All **vanilla JavaScript**.
- All **placeholder graphics** used in place of the removed stock photography.

**Ownership on sale:** Under the Copyright Act 1968 (Cth), copyright in these original works vests in their author (JT Media) by default. As part of the sale of the website, copyright in all of the above original works is **assigned in writing to the Oysterbedz business owner** (see the separate sale/assignment documentation), so the branding and code transfer cleanly with the site. The "Oysterbedz" business name and goodwill belong to the business owner; JT Media claims no rights in the name.

**Removed third-party imagery:** The website previously hot-linked decorative stock photographs from `images.unsplash.com`. These have been **removed** and replaced with the original placeholder graphics listed above. No Unsplash assets or other third-party stock images remain in the delivered files.

---

## 6. Photographs supplied later by the owner

The delivered site ships with **no third-party photographs**. It includes clearly labelled slots for the owner to add the venue's own real photographs over time.

Any photograph added after handover must be a photograph that the business **owns** (took or commissioned) **or** for which the owner holds a written licence or release. In particular:

- **Do** use photographs taken by the business itself, or photographs taken by a photographer the business engaged **where the contract assigns or licences the copyright to the business** (photographers retain copyright by default under the Copyright Act 1968 (Cth) s 35).
- **Do not** save and reuse images from the venue's **Google Business Profile, Google Maps reviews, or Google image search results** — these are generally owned by the individual reviewers/customers who uploaded them or by the websites that host them, **not** by the business, even though they appear on the business's own listing.
- **Do not** reuse photographs that **other people** posted to or tagged on the Facebook page.
- If the owner wants to use a specific customer's or reviewer's photo, they must **contact that person and obtain written permission** first.

Reusing photographs the business does not own or licence would be reproduction of a copyright work without permission under the Copyright Act 1968 (Cth) ss 31 and 36, and would also risk a takedown notice. Responsibility for the sourcing and licensing of any photographs added after handover rests with the business owner. (See the separate "Image sourcing rules" checklist in the handover pack.)

---

## 7. Hosting note

The site is hosted on **GitHub Pages**. Like any web host, GitHub logs standard connection data (such as visitor IP addresses) at the server level under its own privacy statement. This is host-level activity outside JT Media's and the owner's control and is recorded here only for transparency; no code in the delivered site sets cookies or collects personal information.

---

*This document is part of the Oysterbedz website sale and handover pack. It records asset provenance and licensing as at the date above and should be updated if any third-party component is added, removed or changed (for example, if the fonts are self-hosted or a photo gallery, booking widget or analytics is added later).*
