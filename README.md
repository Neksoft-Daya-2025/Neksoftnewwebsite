# NekSoft website

The repository root preserves the files deployed in Hostinger's public web directory. The original deployment snapshot is tagged v1.

The node-app directory contains the recovered Hostinger Node application, including its backend, dependency lockfile, prebuilt frontend and server bundles, and the four editable frontend files present on the server. Use Node.js 22.15 or newer and run npm ci and npm start from node-app to run the prebuilt application.

The original frontend source tree, Vite and TypeScript configuration, and build scripts were missing from the deployed copy. A fresh frontend build requires those files. Supply deployment settings and persistent data separately.

## SEO and measurement update — 19 November 2026

The public HTML shell loads an optional-consent analytics script. The live GTM container is `GTM-TM4KTVQS` and the existing GA4 web stream is `G-4X8SMFJH89` (property 397180068). The container loads only after analytics opt-in. Advertising consent and user-provided data collection are disabled. Explicit events cover sanitized page views, contact-method clicks, and a `generate_lead` event only when `/api/contact` creates a new inquiry with HTTP 201. Duplicate responses and failed submissions do not generate a lead event. Inquiry names, email addresses and messages are not sent to analytics. `generate_lead` is registered as a GA4 key event without a default monetary value.

`node-app/server/editorial.mjs` serves the Insights hub, two website-planning articles and a factual Joy Travel Tours portfolio overview. These routes are included in the XML sitemap and linked from the public footer. Article content is managed in that module, independently of the existing CMS page editor. The main React pages retain their existing structure; the prebuilt bundles and partial footer source include the Insights link and corrected inquiry disclosure.

Live checks covered all 22 sitemap URLs, canonical metadata, one H1 per page and internal links. Labelled test inquiries were verified in the CRM and archived. GA4 Realtime received the inquiry event. SMTP/OAuth notification delivery and sales-owner assignment remain to be configured; successful database saving does not establish inbox delivery. Google indexing and third-party link publication remain external processing steps.

## Loading and crawler follow-up — 23 November 2026

Public pages now serve the original Manrope and IBM Plex Mono WOFF2 files from the same origin, retaining their original weight definitions, Unicode coverage, `font-display: swap`, and font licenses. The critical Manrope Latin file is preloaded. The module dependency map reuses `App-home-seo-20261119.css`, which is the original base CSS plus the existing homepage heading override, instead of requesting that base CSS a second time. Cache-busted entry, App and AdminApp bundles reference the same synchronized module graph.

Single mobile PageSpeed runs before and after these changes measured homepage performance 74 to 85 (LCP 4.5s to 3.4s) and Website Solutions performance 93 to 96 (LCP 1.8s to 1.1s). Lab results vary; homepage LCP remains an optimization priority. All 22 sitemap URLs passed the post-change status, H1, canonical and internal-link checks. Google individual inspection confirms `/solutions` and `/website-solutions` are indexed. A fresh Google smartphone rendering of Website Solutions is styled and reports no JavaScript messages.

The remaining Google live-test resource warning identified `/api/public/site`, the already-public published-content endpoint. Robots now explicitly allows only that endpoint with `Allow: /api/public/site$`; admin and other API routes remain disallowed. Google's robots cache and existing historical 5xx validation require Google-side processing. SMTP/OAuth remains unconfigured.
