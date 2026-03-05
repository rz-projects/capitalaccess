# Google Analytics 4 Setup Guide

This document provides comprehensive instructions for setting up and using Google Analytics 4 (GA4) on the Capital Access website.

## Table of Contents

1. [Initial GA4 Setup](#initial-ga4-setup)
2. [Environment Configuration](#environment-configuration)
3. [Custom Events Reference](#custom-events-reference)
4. [Conversion Tracking](#conversion-tracking)
5. [Enhanced Measurement](#enhanced-measurement)
6. [Privacy & Compliance](#privacy--compliance)
7. [Viewing Reports](#viewing-reports)
8. [Troubleshooting](#troubleshooting)

---

## Initial GA4 Setup

### Step 1: Create a GA4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Admin** (gear icon) in the bottom left
3. Click **Create Account** or select existing account
4. Fill in account details:
   - Account name: `Capital Access`
   - Data sharing settings: Adjust as needed
5. Click **Next**

### Step 2: Create a Property

1. Property name: `Capital Access Website`
2. Reporting time zone: Select your timezone
3. Currency: USD
4. Click **Next**
5. Answer business questions (industry: Finance/Real Estate)
6. Click **Create**

### Step 3: Set Up Data Stream

1. Choose **Web** platform
2. Enter website URL: `https://rz-projects.github.io/capitalaccess/`
3. Stream name: `Capital Access Website`
4. Click **Create stream**

### Step 4: Get Your Measurement ID

1. In the data stream details, find **Measurement ID**
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID - you'll need it for the environment variable

---

## Environment Configuration

### Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Measurement ID:
   ```env
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   PUBLIC_ENABLE_ANALYTICS=true
   PUBLIC_REQUIRE_CONSENT=true
   ```

### Production Deployment (GitHub Pages)

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **Variables** tab
4. Add repository variables:
   - `PUBLIC_GA_MEASUREMENT_ID`: Your GA4 Measurement ID
   - `PUBLIC_ENABLE_ANALYTICS`: `true`
   - `PUBLIC_REQUIRE_CONSENT`: `true` (for GDPR/CCPA compliance)

### Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `PUBLIC_GA_MEASUREMENT_ID` | GA4 Measurement ID | `G-ABC123XYZ9` |
| `PUBLIC_ENABLE_ANALYTICS` | Enable/disable tracking | `true` or `false` |
| `PUBLIC_REQUIRE_CONSENT` | Require cookie consent | `true` or `false` |

---

## Custom Events Reference

The following custom events are automatically tracked:

### Page Views
- **Event Name**: `page_view`
- **Triggered**: Automatically on page load
- **Parameters**:
  - `page_title`: Page title
  - `page_location`: Full URL
  - `page_path`: Path portion of URL

### Contact Form Submission
- **Event Name**: `form_submission`
- **Triggered**: When contact form is submitted
- **Parameters**:
  - `form_type`: `contact_form`
  - `form_name`: `contact_form`
  - `deal_type`: Selected financing type
  - `has_phone`: Boolean
  - `has_message`: Boolean

### Consultation Request
- **Event Name**: `consultation_request`
- **Triggered**: When contact form is submitted
- **Parameters**:
  - `deal_type`: Selected financing type
  - `conversion_type`: `consultation`

### CTA Button Clicks
- **Event Name**: `cta_click`
- **Triggered**: When any `.btn` element is clicked
- **Parameters**:
  - `cta_name`: Button text
  - `cta_location`: Section where button appears
  - `link_url`: Destination URL
  - `link_domain`: Destination domain

### Navigation Clicks
- **Event Name**: `navigation_click`
- **Triggered**: When nav links are clicked
- **Parameters**:
  - `nav_item`: Link text
  - `nav_level`: 1 (main nav), 2 (dropdown), 0 (footer)
  - `link_url`: Destination URL

### External Link Clicks
- **Event Name**: `external_link_click`
- **Triggered**: When links to external domains are clicked
- **Parameters**:
  - `link_url`: Full URL
  - `link_text`: Link text
  - `link_domain`: External domain
  - `outbound`: `true`

### Scroll Depth
- **Event Name**: `scroll_depth`
- **Triggered**: At 25%, 50%, 75%, 90%, 100% scroll
- **Parameters**:
  - `scroll_percentage`: Percentage scrolled
  - `scroll_threshold`: Threshold reached

### Article Reads
- **Event Name**: `article_read`
- **Triggered**: At 25%, 50%, 75%, 100% of article content
- **Parameters**:
  - `article_title`: Article title
  - `article_category`: Article category
  - `read_percentage`: Percentage read

### Phone Clicks
- **Event Name**: `phone_click`
- **Triggered**: When tel: links are clicked
- **Parameters**:
  - `phone_number`: Phone number
  - `conversion_type`: `phone_call`

### Email Clicks
- **Event Name**: `email_click`
- **Triggered**: When mailto: links are clicked
- **Parameters**:
  - `email_address`: Email address

### Guide Downloads (Future)
- **Event Name**: `guide_download`
- **Triggered**: When guide is downloaded
- **Parameters**:
  - `guide_name`: Guide name
  - `guide_type`: Guide type
  - `conversion_type`: `download`

---

## Conversion Tracking

### Setting Up Conversions in GA4

1. Go to **Admin** > **Events**
2. Click **Create event** or find existing events
3. Mark events as conversions:

#### Primary Conversions
- `consultation_request` - Main conversion goal
- `form_submission` - All form submissions
- `phone_click` - Phone call conversions

#### Secondary Conversions
- `guide_download` - Content downloads
- `email_click` - Email engagement

### How to Mark Events as Conversions

1. In GA4, go to **Admin** > **Events**
2. Find the event you want to mark
3. Toggle **Mark as conversion** to ON
4. Conversions appear in **Reports** > **Engagement** > **Conversions**

---

## Enhanced Measurement

GA4 Enhanced Measurement is enabled by default and tracks:

### Automatic Tracking
- **Page views**: All page views
- **Scrolls**: 90% scroll threshold
- **Outbound clicks**: External link clicks
- **Site search**: Search queries (if search is implemented)
- **Video engagement**: YouTube video interactions
- **File downloads**: PDF, etc. downloads

### Custom Enhanced Measurement

Our implementation adds:
- More granular scroll tracking (25%, 50%, 75%, 90%, 100%)
- CTA-specific tracking
- Navigation path tracking
- Article reading progress

### Disabling Enhanced Measurement

If you want to disable any enhanced measurement:

1. Go to **Admin** > **Data Streams** > **Web**
2. Click the stream name
3. Under **Enhanced measurement**, click gear icon
4. Toggle off features you don't want

---

## Privacy & Compliance

### GDPR Compliance

The implementation includes:

1. **Cookie Consent Banner**
   - Shown on first visit
   - Allows accept/decline/manage preferences
   - Stores consent in localStorage

2. **Consent Mode**
   - Analytics storage denied by default
   - Only enabled after explicit consent
   - Respects user preferences

3. **Do Not Track**
   - Checks browser DNT setting
   - Disables tracking if DNT is enabled

### CCPA Compliance

- **Privacy Policy**: Link to privacy policy in consent banner
- **Opt-out**: Users can decline or manage preferences
- **No sale of data**: Analytics data is not sold

### Privacy Policy Update

Update your privacy policy to include:

```markdown
## Analytics

We use Google Analytics 4 to understand how visitors use our website. 
This helps us improve our content and services.

**What we track:**
- Pages you visit
- How you found our site
- How long you stay on pages
- What you click on

**What we DON'T track:**
- Personal identification
- Your name or email (unless you submit a form)
- Sensitive personal data

**Your choices:**
- Accept analytics cookies
- Decline analytics cookies
- Change preferences at any time

We respect Do Not Track signals and your privacy choices.
```

---

## Viewing Reports

### Real-Time Reports

1. Go to **Reports** > **Realtime**
2. See current active users
3. View events in last 30 minutes

### Standard Reports

#### Acquisition
- **Reports** > **Acquisition** > **Traffic acquisition**
- See where visitors come from

#### Engagement
- **Reports** > **Engagement** > **Pages and screens**
- Most viewed pages
- **Reports** > **Engagement** > **Events**
- All events tracked
- **Reports** > **Engagement** > **Conversions**
- Conversion events

#### Monetization (if applicable)
- **Reports** > **Monetization** > **Ecommerce purchases**

### Custom Reports (Explorations)

1. Go to **Explore**
2. Create custom analysis
3. Recommended explorations:
   - **Funnel exploration**: Track conversion funnels
   - **Path exploration**: User journeys
   - **Segment overlap**: User segments

### Key Metrics to Monitor

| Metric | Description | Target |
|--------|-------------|--------|
| Users | Unique visitors | Growth |
| Sessions | Visit sessions | Growth |
| Page Views | Total pages viewed | Growth |
| Avg. Session Duration | Time on site | > 2 min |
| Bounce Rate | Single page visits | < 60% |
| Consultation Requests | Form submissions | Growth |
| Conversion Rate | Requests / Sessions | > 2% |

---

## Troubleshooting

### Analytics Not Working

1. **Check environment variables**
   ```bash
   # In .env file
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   PUBLIC_ENABLE_ANALYTICS=true
   ```

2. **Check browser console**
   - Look for JavaScript errors
   - Verify gtag.js is loading

3. **Check GA4 DebugView**
   - Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
   - Go to **Admin** > **DebugView**
   - See events in real-time

### Consent Issues

1. **Banner not showing**
   - Check `PUBLIC_REQUIRE_CONSENT=true`
   - Clear localStorage: `localStorage.clear()`

2. **Events not tracking after consent**
   - Check localStorage: `localStorage.getItem('analytics_consent')`
   - Should be `'true'`

### Do Not Track

If DNT is enabled in browser:
- Analytics will not initialize
- This is expected behavior
- Check: `navigator.doNotTrack`

### Testing Events

Use the browser console:

```javascript
// Test event tracking
window.analytics.trackEvent('test_event', { test_param: 'value' });

// Check consent
localStorage.getItem('analytics_consent');

// Update consent
window.updateAnalyticsConsent(true);
```

### Common Issues

| Issue | Solution |
|-------|----------|
| No data in GA4 | Wait 24-48 hours for data to appear |
| Events not showing | Check DebugView for real-time data |
| Double counting | Ensure GA4 script only loads once |
| Consent not working | Clear localStorage and refresh |

---

## Manual Event Tracking

For custom events not automatically tracked:

```javascript
// Track custom event
window.analytics.trackEvent('custom_event_name', {
  param1: 'value1',
  param2: 'value2'
});

// Track guide download
window.analytics.trackGuideDownload('Real Estate Guide', 'pdf');

// Track consultation
window.analytics.trackConsultationRequest('hard-money');
```

---

## Files Created

| File | Purpose |
|------|---------|
| `.env.example` | Environment variable template |
| `src/components/GoogleAnalytics.astro` | GA4 script injection |
| `src/components/AnalyticsTracker.astro` | Event tracking logic |
| `src/components/CookieConsent.astro` | Consent banner |
| `src/types/analytics.d.ts` | TypeScript definitions |
| `src/layouts/BaseLayout.astro` | Updated to include GA4 |
| `docs/GA4-SETUP.md` | This documentation |

---

## Support

For issues with:
- **GA4 Setup**: [Google Analytics Help](https://support.google.com/analytics)
- **This Implementation**: Check troubleshooting section or review code

---

**Last Updated**: 2026-03-05
