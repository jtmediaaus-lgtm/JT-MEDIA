# Oysterbedz — Website

A single-page marketing website for **Oysterbedz**, the small bar and oyster bar at
Dolphin Quay, Mandurah Ocean Marina, Western Australia.

> Dolphin Quay's only small bar — fresh oysters served twelve ways, speciality drinks
> and uninterrupted marina views. Open 7 days, 11am–10pm.

## What's here

```
oysterbedz/
├── index.html        # Page markup & content
├── css/styles.css    # All styling (coastal small-bar theme, responsive)
└── js/main.js         # Mobile nav, scroll reveal, footer year
```

The site is **static** — plain HTML, CSS and vanilla JavaScript, no build step or
dependencies. The only external resources are Google Fonts, a Google Maps embed and
photography placeholders from Unsplash.

## Sections

- **Hero** — headline, key facts (hours, happy hour, oysters 12 ways) and booking CTA
- **About** — the story of the small bar on the marina
- **Menu** — oysters, seafood, sides and drinks with indicative prices
- **Happy Hour** — daily from 4:30pm
- **Gallery** — image grid
- **Visit** — address, phone, hours and an embedded map
- **Footer** — contact details and quick links

## Running locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Because it's static, it can be hosted anywhere — GitHub Pages, Netlify, Cloudflare
Pages, or any web host. Point the host at the `oysterbedz/` folder (or set it as the
site root).

## Business details (used in the site)

| | |
|---|---|
| **Address** | Shop 5/2 The Palladio, Dolphin Quay, Mandurah Ocean Marina, WA 6210 |
| **Phone** | (08) 9522 1382 |
| **Hours** | Open 7 days, 11:00am – 10:00pm |
| **Happy Hour** | Daily from 4:30pm |
| **Facebook** | https://www.facebook.com/Oysterbedz/ |

## Customising

- **Real photos:** replace the Unsplash URLs in `css/styles.css` (search for
  `unsplash.com`) and the `.about-photo` / `.g-*` rules with the venue's own images.
- **Menu & prices:** edit the `#menu` section in `index.html`. Prices shown are
  indicative and should be confirmed against the current menu.
- **Colours & fonts:** tweak the CSS custom properties in the `:root` block at the top
  of `css/styles.css`.

---

Built for JT Media.
