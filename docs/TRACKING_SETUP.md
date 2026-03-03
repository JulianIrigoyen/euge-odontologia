# Tracking Setup — Unseen Alineadores

This site uses **Google Tag Manager (GTM)** to manage all tracking (Google Analytics, Meta Pixel, conversions, etc.) from a single dashboard — no code changes needed after initial setup.

---

## Step-by-step Setup

### 1. Create a GTM Container

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Sign in with a Google account (use the one that owns the business)
3. Click **"Create Account"**
   - Account Name: `Unseen Alineadores`
   - Country: `Argentina`
4. Under **Container Setup**:
   - Container name: `unseen-web`
   - Target platform: **Web**
5. Click **Create** → Accept Terms of Service
6. You'll see your container ID at the top: **`GTM-XXXXXXX`** — copy it

### 2. Add the GTM ID to Vercel

1. Go to [vercel.com](https://vercel.com) → select the **unseen** project
2. Go to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Key:** `NEXT_PUBLIC_GTM_ID`
   - **Value:** `GTM-XXXXXXX` (paste your container ID)
   - **Environments:** check all (Production, Preview, Development)
4. Click **Save**
5. Go to **Deployments** → click the **"..."** menu on the latest deployment → **Redeploy**

GTM is now live on the site.

### 3. Add Google Analytics (GA4) inside GTM

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property:
   - Property name: `Unseen Alineadores`
   - Time zone: `Argentina`
   - Currency: `ARS`
3. Set up a **Web** data stream:
   - URL: your Vercel domain (e.g. `unseen-five.vercel.app`)
   - Stream name: `Unseen Web`
4. Copy the **Measurement ID** (looks like `G-XXXXXXXXXX`)
5. Back in **GTM** ([tagmanager.google.com](https://tagmanager.google.com)):
   - Go to **Tags** → **New**
   - Tag type: **Google Analytics: GA4 Configuration**
   - Measurement ID: paste `G-XXXXXXXXXX`
   - Triggering: **All Pages**
   - Name the tag: `GA4 - Unseen`
   - Click **Save**
6. Click **Submit** (top right) → **Publish**

GA4 is now tracking pageviews.

### 4. Add Meta Pixel (Facebook/Instagram) inside GTM

1. Go to [business.facebook.com](https://business.facebook.com) → **Events Manager**
2. Click **"Connect Data Sources"** → **Web** → **Meta Pixel**
3. Name it `Unseen Pixel` → **Create**
4. Copy the **Pixel ID** (a number like `123456789012345`)
5. In **GTM**:
   - Go to **Tags** → **New**
   - Tag type: **Custom HTML**
   - Paste this code (replace `YOUR_PIXEL_ID`):
     ```html
     <script>
       !function(f,b,e,v,n,t,s)
       {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
       n.callMethod.apply(n,arguments):n.queue.push(arguments)};
       if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
       n.queue=[];t=b.createElement(e);t.async=!0;
       t.src=v;s=b.getElementsByTagName(e)[0];
       s.parentNode.insertBefore(t,s)}(window, document,'script',
       'https://connect.facebook.net/en_US/fbevents.js');
       fbq('init', 'YOUR_PIXEL_ID');
       fbq('track', 'PageView');
     </script>
     ```
   - Triggering: **All Pages**
   - Name: `Meta Pixel - Unseen`
   - Click **Save**
6. Click **Submit** → **Publish**

### 5. Track WhatsApp Clicks as Conversions (optional but recommended)

In **GTM**:

1. Go to **Triggers** → **New**
   - Trigger type: **Click - Just Links**
   - Fire on: **Some Link Clicks**
   - Condition: `Click URL` → `contains` → `wa.me`
   - Name: `WhatsApp Click`
   - Save

2. Go to **Tags** → **New**
   - Tag type: **Google Analytics: GA4 Event**
   - Configuration Tag: select your GA4 tag
   - Event Name: `whatsapp_click`
   - Triggering: **WhatsApp Click** (the trigger you just created)
   - Name: `GA4 Event - WhatsApp Click`
   - Save

3. **Submit** → **Publish**

Now every WhatsApp click is tracked as a conversion event in GA4.

---

## How it Works (Technical)

The GTM snippet is in `app/layout.tsx`. It reads the container ID from `NEXT_PUBLIC_GTM_ID`:

- If the env var is **not set**, no tracking scripts load (zero performance impact)
- If it **is set**, GTM loads asynchronously in `<head>` with a `<noscript>` fallback in `<body>`

This means:
- **Local dev** has no tracking (unless you add a `.env.local` file)
- **Production** tracks everything via GTM
- To add/remove any tracking, use the GTM dashboard — never touch code

## Local Testing

To test tracking locally, create `.env.local`:

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Then run `npm run dev`. Use the [GTM Preview mode](https://tagmanager.google.com) (Tag Assistant) to debug.

---

## Checklist

- [ ] GTM container created
- [ ] `NEXT_PUBLIC_GTM_ID` env var set in Vercel
- [ ] Site redeployed after adding env var
- [ ] GA4 property created and tag added in GTM
- [ ] Meta Pixel created and tag added in GTM (if running Instagram/Facebook ads)
- [ ] WhatsApp click event configured in GTM
- [ ] GTM published (hit Submit → Publish after every change)
