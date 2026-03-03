# Custom Domain Setup — Unseen Alineadores

The site is currently at `unseen-five.vercel.app`. A proper domain builds trust.

---

## Step 1: Buy a Domain

Recommended registrars for `.com.ar`:
- [nic.ar](https://nic.ar) — official Argentine registry ($$$, but `.com.ar` feels local)
- [Namecheap](https://namecheap.com) — for `.com` domains (cheaper, international)
- [Google Domains](https://domains.google) — simple, integrates well

**Suggested domains** (check availability):
- `unseenalineadores.com.ar`
- `unseen.com.ar`
- `unseenaligners.com`

## Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → select the **unseen** project
2. Go to **Settings** → **Domains**
3. Type your domain (e.g. `unseenalineadores.com.ar`) → **Add**
4. Vercel will show you DNS records to add. Typically:
   - **Type:** `A` → **Value:** `76.76.21.21`
   - **Type:** `CNAME` → **Name:** `www` → **Value:** `cname.vercel-dns.com`
5. Go to your domain registrar's DNS settings and add those records
6. Wait 5-30 minutes for DNS propagation
7. Vercel will auto-provision an SSL certificate (HTTPS)

## Step 3: Update References

After the domain is live, update these in the codebase:

- `app/layout.tsx` → `openGraph.url` and `alternates.canonical`
- `app/layout.tsx` → `jsonLd.url`
- Google Business Profile → website URL
- Google Search Console → add the new domain as a property

## Step 4: Redirect

Vercel automatically redirects `www` to the apex domain (or vice versa). You can configure which is primary in **Settings → Domains**.
