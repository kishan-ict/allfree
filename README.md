# ALLFREE

**AD-FREE REDIRECTION**

ALLFREE is a responsive directory and clean redirection interface for discovering categorized third-party websites. It provides searchable cards, regional browsing, visible favicons, and direct outbound links without intrusive advertising.

Live site: [allfree.pages.dev](https://allfree.pages.dev)

## What is included

- Responsive desktop and mobile layouts.
- United States region selected by default.
- India region with its own directory links.
- Additional regions displayed as Coming Soon.
- Search across the currently selected region.
- Desktop category navigation.
- Mobile two-column link cards.
- Mobile floating **MOVE** button with “Move to category” navigation.
- Region selector with visible inline country flags.
- Liquid-glass/frosted link cards.
- Favicon loading with visible fallback initials.
- Energy Orb visual background.
- About page for the curator and maintainer.
- Request page for submitting new sites.
- Bing Webmaster verification metadata.
- Crawler-friendly sitemap, robots policy, and LLM-readable project information.

## Regions

- **United States** — Available and default.
- **India** — Available.
- United Kingdom — Coming soon.
- Canada — Coming soon.
- Australia — Coming soon.
- Germany — Coming soon.
- France — Coming soon.
- Japan — Coming soon.
- South Korea — Coming soon.
- Brazil — Coming soon.
- More regions — Coming soon.

## Categories

Each available region can include:

- Movies & Shows
- Anime
- Manga
- Live TV & Sports
- Paid and legal alternatives
- Apps

The United States directory currently contains 109 unique entries after duplicate cleanup. India has a separate region-specific collection.

## Pages

- Home: [https://allfree.pages.dev/](https://allfree.pages.dev/)
- About: [https://allfree.pages.dev/about.html](https://allfree.pages.dev/about.html)
- Request: [https://allfree.pages.dev/request.html](https://allfree.pages.dev/request.html)

## Project structure

```text
/
├── index.html          # Main directory
├── about.html          # About page
├── request.html        # Site request page
├── styles.css          # Core styling
├── responsive.css      # Responsive and mobile UI
├── glass.css           # Liquid-glass card styling
├── script.js           # Directory data, search, regions, and interactions
├── energy-orb.js       # Animated Energy Orb background
├── favicon.svg         # Site favicon
├── social-preview.svg  # Social sharing preview
├── sitemap.xml         # Search-engine sitemap
├── robots.txt          # Crawler access rules
└── llms.txt            # LLM-readable project description
```

## Run locally

This is a static HTML, CSS, and JavaScript project. No build step is required.

```bash
git clone https://github.com/kishan-ict/allfree.git
cd allfree
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080
```

You can also open `index.html` directly, but a local HTTP server is recommended for consistent asset and browser behavior.

## Hosting

### Cloudflare Pages

The production site is hosted on Cloudflare Pages:

- URL: [https://allfree.pages.dev](https://allfree.pages.dev)
- Repository: `kishan-ict/allfree`
- Framework: Static HTML
- Build command: None
- Output directory: Repository root `/`

Connect the GitHub repository to Cloudflare Pages and deploy from the `main` branch. Every pushed change can then deploy automatically.

### GitHub Pages

The repository can also be served through GitHub Pages:

- [https://kishan-ict.github.io/allfree/](https://kishan-ict.github.io/allfree/)

Cloudflare Pages is the canonical production URL used by the SEO files.

## SEO files

- [sitemap.xml](https://allfree.pages.dev/sitemap.xml) lists the indexable public pages.
- [robots.txt](https://allfree.pages.dev/robots.txt) allows Bravebot, Bingbot, Googlebot, and other crawlers.
- [llms.txt](https://allfree.pages.dev/llms.txt) explains the project, regions, categories, features, design direction, and third-party-link context.

Target SEO topics include:

- ALLFREE
- allfree
- freemovies
- freemovi
- movisite
- movisites

## Design direction

The visual direction is inspired by clean directory and index experiences, app-like responsive navigation, liquid-glass/frosted surfaces, soft green-and-blue lighting, rounded compositions, and animated Energy Orb backgrounds.

The implementation is an original ALLFREE interface. It does not embed another website’s documentation page or claim ownership of third-party designs.

## Third-party links

ALLFREE is a directory and redirection interface. The external sites listed in the cards are third-party destinations and are not automatically owned, hosted, operated, verified, or controlled by ALLFREE. External websites may change or become unavailable, and users should independently review each destination and follow applicable laws and service terms.

## Contributing and requests

To suggest a site, use the [Request page](https://allfree.pages.dev/request.html). New entries should include the website domain and the appropriate category/region.

## Maintainer

ALLFREE is curated and maintained by **KISHAN M PATIL**.

## License

The repository is private. Contact the maintainer for permission before reusing the source, branding, content lists, or visual assets.
