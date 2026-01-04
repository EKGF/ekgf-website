# Deployment Guide

This document provides instructions for deploying the EKGF website to
Vercel.

## Prerequisites

- GitHub account with access to the EKGF organization
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Domain access to `ekgf.org`

## Step 1: Push to GitHub

1. Create a new repository named `ekgf-website` in the EKGF GitHub
   organization:

   ```bash
   # Navigate to the project directory
   cd /Users/jgeluk/Work/ekgf-website

   # Initialize git (if not already done)
   git init

   # Add the remote
   git remote add origin https://github.com/EKGF/ekgf-website.git

   # Add all files
   git add .

   # Commit
   git commit -m "feat: initial EKGF website implementation

   - Add Next.js 15 with TypeScript, Tailwind CSS, and shadcn/ui
   - Implement landing page with hero and documentation grid
   - Create About, Resources, and Contact pages
   - Add dark mode support with next-themes
   - Integrate Google Analytics
   - Add SEO optimization with metadata and sitemap
   - Implement contact form with server actions"

   # Push to main
   git push -u origin main
   ```

## Step 2: Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import the `EKGF/ekgf-website` repository
4. Configure the project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `pnpm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `pnpm install` (auto-detected)

## Step 3: Configure Environment Variables

No environment variables are required for the basic deployment.
However, if you integrate Resend for email in the future:

1. In Vercel project settings → Environment Variables
2. Add:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

## Step 4: Configure Custom Domain

### Option A: Using Vercel DNS (Recommended)

1. In Vercel project settings → Domains
2. Add domain: `ekgf.org`
3. Vercel will provide nameservers (e.g., `ns1.vercel-dns.com`)
4. Update your domain registrar to use Vercel's nameservers:
   - Go to your domain registrar (where ekgf.org is registered)
   - Find the DNS/Nameserver settings
   - Replace existing nameservers with Vercel's nameservers
   - Save changes (propagation takes 24-48 hours)

5. Also add `www.ekgf.org` as a domain and Vercel will auto-redirect
   to `ekgf.org`

### Option B: Using Existing DNS Provider

1. In Vercel project settings → Domains
2. Add domain: `ekgf.org`
3. Vercel will show you DNS records to add:
   - **A Record**: `76.76.21.21`
   - **CNAME Record** (for www): `cname.vercel-dns.com`

4. Add these records in your current DNS provider:

   ```
   Type    Name    Value
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com
   ```

5. Click "Verify" in Vercel once DNS records are added

## Step 5: SSL Certificate

Vercel automatically provisions and renews SSL certificates for custom
domains. No action required.

## Step 6: Verify Deployment

1. Once DNS propagates, visit https://ekgf.org
2. Test all pages:
   - Home (`/`)
   - About (`/about`)
   - Resources (`/resources`)
   - Contact (`/contact`)
3. Test dark mode toggle
4. Test contact form submission
5. Verify analytics in Google Analytics dashboard

## Continuous Deployment

Every push to the `main` branch will automatically trigger a new
deployment on Vercel.

### Preview Deployments

Pull requests automatically get preview deployments with unique URLs
for testing before merging.

## Monitoring

### Analytics

- **Google Analytics**: View in GA4 dashboard (Property ID:
  G-9LCW4TSSRP)
- **Vercel Analytics**: Enable in project settings for web vitals and
  performance metrics

### Error Tracking

Consider adding error tracking with:

- Sentry
- Vercel's built-in error reporting

## Post-Deployment Tasks

### 1. Update Existing Documentation Sites

Update the header/navigation of existing MkDocs sites to link back to
the new main site:

- `method.ekgf.org` → Add link to `ekgf.org`
- `catalog.ekgf.org` → Add link to `ekgf.org`
- `maturity.ekgf.org` → Add link to `ekgf.org`
- `principles.ekgf.org` → Add link to `ekgf.org`

### 2. Submit Sitemap to Search Engines

1. **Google Search Console**:
   - Go to https://search.google.com/search-console
   - Add property for `ekgf.org`
   - Verify ownership (Google Analytics verification already in place)
   - Submit sitemap: `https://ekgf.org/sitemap.xml`

2. **Bing Webmaster Tools**:
   - Go to https://www.bing.com/webmasters
   - Add site
   - Submit sitemap: `https://ekgf.org/sitemap.xml`

### 3. Configure Resend for Contact Form (Optional)

To enable email sending from the contact form:

1. Sign up for [Resend](https://resend.com) (free tier: 3,000
   emails/month)
2. Add and verify your domain (`ekgf.org`)
3. Generate an API key
4. Add API key to Vercel environment variables:
   ```
   RESEND_API_KEY=re_...
   ```
5. Update `/src/app/actions/contact.ts` to uncomment the Resend
   integration code
6. Install Resend SDK:
   ```bash
   pnpm add resend
   ```
7. Redeploy

### 4. Set up Redirects (if needed)

If there was a previous ekgf.org site, add redirects in `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `pnpm run build`

### DNS Not Resolving

- Wait 24-48 hours for DNS propagation
- Check DNS propagation: https://www.whatsmydns.net
- Verify DNS records are correct

### Contact Form Not Working

- Check server action logs in Vercel dashboard
- Verify form validation (open browser console)
- Test with Resend integration

## Cost

**Vercel Hobby Tier (Free)**:

- Bandwidth: 100 GB/month
- Build execution: 100 hours/month
- Serverless function execution: 100 GB-hours/month
- Edge middleware invocations: 1M/month

This should be more than sufficient for the EKGF website. If you
exceed limits, upgrade to Pro ($20/month per user).

## Support

For issues:

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- EKGF GitHub: https://github.com/EKGF/ekgf-website/issues
