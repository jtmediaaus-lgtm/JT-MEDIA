# Photos — how to add Oysterbedz's real images

The site currently shows branded placeholder graphics (`ph-*.svg`). To swap in real
photos, just add image files with the **exact names** below into this `images/` folder.
No code changes needed — each slot already looks for its photo first and falls back to
the placeholder until the photo exists.

## Image slots

| File name to add | Where it appears | Suggested shot |
|---|---|---|
| `about-1.jpg` | About section, large tile | The venue / neon "Oyster Bedz" sign / interior |
| `about-2.jpg` | About section, small tile | A signature oyster plate or platter |
| `gallery-1.jpg` | Gallery, tall left tile | Oysters shucked to order (close-up) |
| `gallery-2.jpg` | Gallery | Marina / water view from the venue |
| `gallery-3.jpg` | Gallery | The tasting platter |
| `gallery-4.jpg` | Gallery, tall tile | Sundowner / drinks at the bar |
| `gallery-5.jpg` | Gallery | Chips / a popular dish |
| `gallery-6.jpg` | Gallery | Exterior / by the water |

Tip: landscape photos around **1200×900px**, saved as JPG, look best and load fast.
(You can also use `.png` — if so, rename the slot reference in `css/styles.css`.)

## IMPORTANT — only use photos Oysterbedz owns

Use photos that the **business took or owns**, for example:

- The owner's / staff's own photos (phone or camera).
- Photos the business itself posted to its **own** Facebook page.

**Do NOT** copy photos from the Google listing, Google Maps reviews, Google image
search, Tripadvisor, or other websites. Photos uploaded by customers/reviewers are
owned by **them**, not the venue, and republishing them is copyright infringement.
See `../LEGAL-HANDOVER.md` for details.

## How to upload them

- **On github.com:** open the `images/` folder → **Add file → Upload files** → drag your
  JPGs in → Commit. The live site updates automatically within a minute.
- Or send the files to JT Media and we'll add them for you.
