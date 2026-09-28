<div align="center">

<img src="favicon.svg" alt="ALLFREE logo" width="88" height="88" />

# ALLFREE

### ✨ Ad-Free Redirection ✨

A responsive directory and clean redirection interface for discovering categorized third-party websites, with searchable cards, regional browsing, and direct outbound links. No intrusive advertising.

<br />

[![Live Site](https://img.shields.io/badge/Live-allfree.pages.dev-2ea44f?style=for-the-badge&logo=cloudflare&logoColor=white)](https://allfree.pages.dev)
[![Hosted on](https://img.shields.io/badge/Hosted%20on-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://pages.cloudflare.com)
[![Static](https://img.shields.io/badge/Stack-Static%20HTML%20%7C%20CSS%20%7C%20JS-1f6feb?style=for-the-badge&logo=html5&logoColor=white)](#-project-structure)
[![Regions](https://img.shields.io/badge/Regions-US%20%7C%20India-8957e5?style=for-the-badge)](#-regions)
[![License](https://img.shields.io/badge/License-Private-critical?style=for-the-badge)](#-license)

[**🌐 Visit Live Site**](https://allfree.pages.dev) · [**ℹ️ About**](https://allfree.pages.dev/about.html) · [**📩 Request a Site**](https://allfree.pages.dev/request.html)

<br />
</div>

---

## 🔎 Overview

**ALLFREE** helps you find categorized third-party websites quickly and cleanly. Browse by region, search across cards, jump between categories, and go straight to the destination.

| | |
|---|---|
| 🌍 **Default region** | United States |
| 🗂️ **US directory size** | 109 unique entries (after duplicate cleanup) |
| 🇮🇳 **India** | Separate region-specific collection |
| 📱 **Layouts** | Fully responsive for desktop and mobile |

---

## 🚀 Features

- 📱 Responsive desktop and mobile layouts
- 🇺🇸 United States region selected by default
- 🇮🇳 India region with its own directory links
- 🕒 Additional regions shown as **Coming Soon**
- 🔍 Search across the currently selected region
- 🧭 Desktop category navigation
- 🧱 Mobile two-column link cards
- 🎯 Mobile floating **MOVE** button with "Move to category" navigation
- 🚩 Region selector with visible inline country flags
- 🪟 Liquid-glass / frosted link cards
- 🖼️ Favicon loading with visible fallback initials
- 🔮 Energy Orb animated visual background
- 👤 About page for the curator and maintainer
- 📝 Request page for submitting new sites
- 🔐 Bing Webmaster verification metadata
- 🤖 Crawler-friendly sitemap, robots policy, and LLM-readable project info

---

## 🎮 Interactions

| Interaction | Where | What it does |
|---|---|---|
| **Region selector** | Header | Switch between regions using inline country flags. US is the default. |
| **Live search** | Header / top of directory | Filters cards across the currently selected region. |
| **Category navigation** | Desktop | Jump straight to a category section. |
| **MOVE button** | Mobile (floating) | Opens the "Move to category" menu for quick jumping. |
| **Link cards** | Directory | Frosted glass cards that open the destination site directly. |
| **Favicon fallback** | Cards | Shows the site's favicon, or a fallback initial if it fails to load. |
| **Energy Orb** | Background | Animated, soft green-and-blue lighting behind the interface. |
| **Coming Soon regions** | Region selector | Upcoming regions are displayed but not yet selectable. |

---

## 🌍 Regions

| Region | Status |
|---|---|
| 🇺🇸 United States | ✅ Available (default) |
| 🇮🇳 India | ✅ Available |
| 🇬🇧 United Kingdom | ⏳ Coming soon |
| 🇨🇦 Canada | ⏳ Coming soon |
| 🇦🇺 Australia | ⏳ Coming soon |
| 🇩🇪 Germany | ⏳ Coming soon |
| 🇫🇷 France | ⏳ Coming soon |
| 🇯🇵 Japan | ⏳ Coming soon |
| 🇰🇷 South Korea | ⏳ Coming soon |
| 🇧🇷 Brazil | ⏳ Coming soon |
| 🌐 More regions | ⏳ Coming soon |

---

## 🗂️ Categories

Each available region can include:

| Category | |
|---|---|
| 🎬 Movies & Shows | 📺 Live TV & Sports |
| 🍥 Anime | 💚 Paid and legal alternatives |
| 📚 Manga | 🧩 Apps |

---

## 📄 Pages

| Page | Link |
|---|---|
| 🏠 Home | [allfree.pages.dev](https://allfree.pages.dev/) |
| 👤 About | [allfree.pages.dev/about.html](https://allfree.pages.dev/about.html) |
| 📝 Request | [allfree.pages.dev/request.html](https://allfree.pages.dev/request.html) |

---

## 🧱 Project Structure

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

---

## ☁️ Hosting

The production site runs on **Cloudflare Pages**.

| Setting | Value |
|---|---|
| URL | [allfree.pages.dev](https://allfree.pages.dev) |
| Repository | `kishan-ict/allfree` |
| Framework | Static HTML |
| Build command | None |
| Output directory | Repository root `/` |
| Deploy branch | `main` |

Connect the GitHub repository to Cloudflare Pages and deploy from `main`. Every pushed change can then deploy automatically.

---

## 🔍 SEO & Discoverability

- [`sitemap.xml`](https://allfree.pages.dev/sitemap.xml) lists the indexable public pages.
- [`robots.txt`](https://allfree.pages.dev/robots.txt) allows Bravebot, Bingbot, Googlebot, and other crawlers.
- [`llms.txt`](https://allfree.pages.dev/llms.txt) explains the project, regions, categories, features, design direction, and third-party-link context.

**Target SEO topics:** `ALLFREE` · `allfree` · `freemovies` · `freemovi` · `movisite` · `movisites`

---

## 🎨 Design Direction

Inspired by clean directory and index experiences:

- 🪟 Liquid-glass / frosted surfaces
- 💚💙 Soft green-and-blue lighting
- 🔮 Animated Energy Orb backgrounds
- 📱 App-like responsive navigation
- ⭕ Rounded compositions

> The implementation is an original ALLFREE interface. It does not embed another website's documentation page or claim ownership of third-party designs.

---

## ⚠️ Third-Party Links

> ALLFREE is a directory and redirection interface. The external sites listed in the cards are **not** automatically owned, hosted, operated, verified, or controlled by ALLFREE. External websites may change or become unavailable, and users should independently review each destination and follow applicable laws and service terms.

---

## 🤝 Contributing & Requests

Want a site added? Use the [**Request page**](https://allfree.pages.dev/request.html).

New entries should include:

1. 🌐 The website **domain**
2. 🗂️ The appropriate **category**
3. 🌍 The appropriate **region**

---

## 👨‍💻 Maintainer

ALLFREE is curated and maintained by **KISHAN M PATIL**.

[![GitHub](https://img.shields.io/badge/GitHub-kishan--ict-181717?style=flat-square&logo=github)](https://github.com/kishan-ict)
[![Portfolio](https://img.shields.io/badge/Portfolio-kishan--portfolio-0a66c2?style=flat-square&logo=cloudflarepages&logoColor=white)](https://kishan-portfolio-10o.pages.dev)

---

## 📜 License

The repository is **private**. Contact the maintainer for permission before reusing the source, branding, content lists, or visual assets.

---

<div align="center">

**Made with 💚 by KISHAN M PATIL**

[⬆ Back to top](#allfree)

</div>
