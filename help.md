# Cloudflare DNS & SSL

This extension adds automatic DNS management using Cloudflare and SSL certificate automation. Your application's domain names and security certificates are managed automatically through Cloudflare's network.

## What This Does

When you deploy your application, this extension:
- Automatically creates DNS records pointing your domain to your application
- Enables SSL/TLS encryption through Cloudflare
- Manages everything through GitHub Actions workflows
- Provides DDoS protection and CDN benefits from Cloudflare

## Prerequisites

Before using this extension:
1. Create a free Cloudflare account at https://cloudflare.com
2. Add your domain to Cloudflare
3. Update your domain's nameservers to Cloudflare's nameservers

## How to Set Up Cloudflare

### Step 1: Create Cloudflare Account and Add Domain

1. **Sign up for Cloudflare**: Go to https://cloudflare.com and click "Sign Up"
2. **Add a site**:
   - Click "Add a site" after logging in
   - Enter your domain name (e.g., `myapp.com`)
   - Choose the Free plan (or paid plan if you prefer)
   - Click "Add site"

### Step 2: Update Nameservers

Cloud flare will scan your existing DNS records and then show you nameservers:

1. **Copy Cloudflare's nameservers**: You'll see 2 nameservers (like `ns1.cloudflare.com` and `ns2.cloudflare.com`)
2. **Update your domain registrar**:
   - Log into your domain registrar (GoDaddy, Namecheap, etc.)
   - Find DNS or nameserver settings
   - Replace existing nameservers with Cloudflare's nameservers
   - Save changes

**Note**: Nameserver changes can take 24-48 hours to propagate.

### Step 3: Create API Token

1. **Go to API Tokens page**:
   - Log into Cloudflare
   - Click on your profile icon → My Profile
   - Go to "API Tokens" tab
   - Click "Create Token"

2. **Use "Edit zone DNS" template**:
   - Find "Edit zone DNS" and click "Use template"
   - Under Zone Resources, select:
     - Include → Specific zone → [Your domain]
   - Click "Continue to summary"
   - Click "Create Token"

3. **Copy the token**: You'll see your API token (starts with a long string of letters and numbers). **Save this - you won't see it again!**

---

## Configuration Fields

### Scaffold Configuration

These settings are configured during project setup.

#### Cloudflare API Key `cloudflareApiKey`
**What it is**: A secret key that allows automated systems (like GitHub Actions) to manage your Cloudflare DNS records.

**How to get it**:
1. Log into Cloudflare Dashboard
2. Go to your profile → API Tokens
3. Create a new token using "Edit zone DNS" template
4. Copy the token immediately (you won't see it again)

**Format**: A long alphanumeric string (approximately 40 characters)

**Example**: `YQSn-xWAQ5zfGoLWZbMOv1kzZLKF0vFUQ9Kp_1Zm`

**Important**:
- **Keep this secret!** Don't share it or commit it to code
- Store it securely in GitHub Secrets
- If compromised, delete the token in Cloudflare and create a new one

---

## How It Works

### DNS Records
When you deploy:
1. GitHub Actions uses your Cloudflare API token
2. Automatically creates/updates DNS records pointing to your application
3. Creates records for subdomains (e.g., `www`, `api`)
4. All changes happen during deployment

### SSL/TLS
Cloudflare automatically:
1. Provides SSL certificates for your domain
2. Encrypts traffic between users and Cloudflare
3. Manages certificate renewal
4. Offers flexible SSL modes

### Additional Benefits
By using Cloudflare, you also get:
- **DDoS protection**: Automatic protection against attacks
- **CDN**: Faster content delivery through global network
- **Caching**: Reduced server load
- **Analytics**: Traffic insights

---

## Common Issues

### "Invalid API Token"
**Problem**: The API token doesn't work.

**Solution**:
- Verify the token is copied correctly (no extra spaces)
- Check the token permissions include "Edit zone DNS"
- Ensure the token hasn't expired
- Create a new token if needed

### "Zone Not Found"
**Problem**: Cloudflare can't find your domain.

**Solution**:
- Verify your domain is added to Cloudflare
- Check that nameservers have been updated and propagated
- Ensure the domain is active (not pending)

### "SSL Certificate Errors"
**Problem**: HTTPS not working.

**Solution**:
- Check SSL/TLS mode in Cloudflare (Dashboard → SSL/TLS)
- Set to "Full" or "Full (strict)" for most applications
- Wait a few minutes for SSL to activate
- Clear browser cache

### "DNS Changes Not Reflecting"
**Problem**: DNS updates aren't visible.

**Solution**:
- Wait 5-10 minutes for Cloudflare propagation
- Clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)
- Check actual DNS records in Cloudflare Dashboard → DNS

---

## Cloudflare vs Route53

**Choose Cloudflare if**:
- You want built-in DDoS protection and CDN
- You prefer a simpler setup process
- You want the free tier benefits

**Choose Route53 if**:
- You're already heavily using AWS services
- You need advanced DNS routing (latency-based, geolocation)
- You prefer keeping everything in AWS

---

## Additional Resources

- **Cloudflare Dashboard**: https://dash.cloudflare.com
- **Cloudflare Documentation**: https://developers.cloudflare.com
- **API Token Guide**: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/
- **SSL/TLS Guide**: https://developers.cloudflare.com/ssl/

## Support

If you need help:
- Cloudflare Community: https://community.cloudflare.com
- Cloudflare Support: https://support.cloudflare.com
- Status Page: https://www.cloudflarestatus.com
