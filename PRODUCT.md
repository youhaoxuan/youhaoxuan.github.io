# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: hand-authored static HTML/CSS/JS, no build step. The user asked for "fancy, modern, interactive, reactive pages that fits github requirement"; GitHub Pages serves static files only, so interactivity is authored in vanilla JS rather than a framework. This replaces the previous implementation, which was Claude-artifact bundler output (440KB–1.3MB per page, React fetched from unpkg at runtime, no source files in the repo).

## Users

Hiring managers, technical recruiters, and engineering peers in battery and high-volume manufacturing — Tesla, Apple, Lyten, Sakuu and their competitors. They arrive from LinkedIn or a resume link, usually on a laptop, often scanning several candidates in one sitting. They are fluent in the vocabulary (Cpk, PFMEA, GR&R, OEE, ramp, buy-off) and are checking one thing: has this person actually run a line, or only written about one.

Secondary: academic and R&D contacts arriving from Google Scholar or a patent citation.

## Product Purpose

A personal professional site for Haoxuan You. It exists to make the case, in under a minute, that he carries a cell from bench chemistry through pilot to 24/7 mass production — and to hand a reader the resume, the patents, and the publications without friction. Success is a hiring manager reaching the contact link already convinced.

## Positioning

The span is the claim. Most battery engineers hold one end: either R&D and electrochemistry, or high-volume process control. He holds both — three lithium-sulfur patents and five publications on one end, a Tesla LFP line running at Cpk >1.67 on the other — and has personally carried the transfer between them (100× lithium-metal foil scale-up at Lyten, 7-station commissioning and ramp at Tesla).

## Operating Context

Readers evaluate fast and comparatively. They skim for verbs that imply ownership (commissioned, ramped, qualified, bought off) and for numbers with units. They distrust adjectives. Many will open the site on a phone between meetings, and a meaningful share read Mandarin as a first language.

## Capabilities and Constraints

- Static hosting on GitHub Pages at https://youhaoxuan.github.io/ — no server, no database, no build step.
- Four routes, preserved from the incumbent site: `/` (index), `/about.html`, `/projects.html`, `/experience.html`.
- Existing SEO must be preserved: canonical URLs, OG and Twitter tags, `google-site-verification`, `sitemap.xml`, `robots.txt`.
- The resume PDF must ship at `Haoxuan-You-Resume.pdf`. The incumbent site links to this path from two pages and the file is absent — a live 404.

## Brand Commitments

Name: Haoxuan You. Title: Battery Process & Manufacturing Engineer. Headshot at `assets/opt-headshot.jpg`. Voice: concrete and measured, closer to an 8D report than a pitch — claims carry numbers and units, adjectives are rationed. Fluent English and Mandarin Chinese, used daily with international OEM suppliers; this is a stated professional capability, not a footnote.

## Evidence on Hand

Real, all verifiable, all sourced from the current resume (`Haoxuan_You_Resume.docx`/`.pdf`, Google Drive):

- **Tesla, Process Engineer, LFP Cell Manufacturing (Dec 2025–present, Sparks NV):** Cpk >1.67; cycle time −15%; ramp from hundreds to tens of thousands of cells/day; module stack line 20% → 80% of design capacity; commissioning and buy-off of 7 new cell assembly stations with domestic and international OEM suppliers; top-cap weld fixture redesign (PEEK tape → screw-fastened PEEK block) extending replacement interval from 3 days to 2 weeks; FAI time −50% and shift-change downtime −40%; line rolled yield +10%; MES/SPC drift alerting worth ~+2% yield per station.
- **Lyten, Senior Battery Engineer (Mar–Dec 2025) and Battery Engineer (Apr 2022–Mar 2025), San Jose CA:** 100× lithium-metal foil throughput increase; defect rates −40%; cell-level mechanical design for polymer-coated lithium-metal anodes; Python/JMP automation.
- **Sakuu Corp., Battery Associate Engineer (Nov 2021–Apr 2022):** solid-state and lithium-metal assembly and test fixtures, uniform pressure distribution.
- **Purdue, Graduate Research Assistant (Aug 2019–Jul 2021):** SLM + CNC integrated system, custom high-pressure gas chamber, DOE-based repeatability.
- **3 patents** (WO2024118412A1, WO2025085743A1, WO2024259126A3 — all Lyten, Inc.) and **5 publications/conference papers** (2 accepted at the 247th ECS Meeting, Montréal).
- **Education:** M.S. ME Purdue 2021; B.S. ME University of Iowa 2019.
- **Awards:** Nominee, 2019 College of Engineering Outstanding Student Researcher; 1st Place Popular Choice, 2019 University of Iowa Research Open House.
- **Licensed figures** carried over from the incumbent projects page: six CC BY literature figures with full citation and DOI. Attribution text and DOIs must survive the redesign verbatim — the license requires it.
- **Absent, must not be fabricated:** testimonials, named customers, employer endorsements, salary or level information, and any metric not in the list above.

## Product Principles

1. **Numbers with units, or nothing.** Every claim on the site traces to the resume. No rounded-up superlatives, no invented metrics.
2. **Ownership verbs.** Commissioned, ramped, qualified, bought off, redesigned. The reader is checking whether he ran it or observed it.
3. **The span is the story.** R&D → pilot → high-volume is the through-line of the whole site, not a section of it.
4. **Preserve the record.** Existing projects, citations, patents, publications, and SEO carry forward intact; the container changes, the facts do not.
5. **Respect the skim.** A reader who gives the site fifteen seconds should leave with the span, the employer, and two hard numbers.

## Accessibility & Inclusion

WCAG 2.2 AA minimum: body text ≥4.5:1, large text ≥3:1, visible keyboard focus, reading order matching visual order. All motion honors `prefers-reduced-motion`. Color never the sole carrier of meaning — every stamped or passed state also carries text. Tap targets ≥44px. Must remain fully legible on a phone.
