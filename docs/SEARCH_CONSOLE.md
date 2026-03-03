# Google Search Console — Unseen Alineadores

Search Console tells Google your site exists and lets you monitor how it ranks.

---

## Setup (5 minutes)

### 1. Add the Property

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **"Add property"**
3. Choose **"URL prefix"**
4. Enter: `https://unseen-five.vercel.app` (or your custom domain)

### 2. Verify Ownership

Easiest method for Vercel:
1. Choose **"HTML tag"** verification
2. Copy the meta tag (looks like `<meta name="google-site-verification" content="xxxxx" />`)
3. Add it to `app/layout.tsx` inside `<head>`:
   ```tsx
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
4. Deploy, then click **Verify** in Search Console

### 3. Submit the Sitemap

Next.js auto-generates a sitemap. Submit it:
1. In Search Console → **Sitemaps** (left menu)
2. Enter: `sitemap.xml`
3. Click **Submit**

### 4. Request Indexing

1. Go to **URL Inspection** (top search bar)
2. Enter your homepage URL
3. Click **"Request Indexing"**
4. Google will crawl and index the page within 1-3 days

---

## What to Monitor

- **Performance** → see what search terms people use to find you
- **Coverage** → make sure all pages are indexed without errors
- **Core Web Vitals** → page speed and user experience scores

Check once a week for the first month, then monthly.
