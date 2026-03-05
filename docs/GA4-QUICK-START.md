# GA4 Quick Start Guide

## 5-Minute Setup

### 1. Create GA4 Property (2 min)
1. Go to [analytics.google.com](https://analytics.google.com)
2. Admin → Create Property → Web
3. Enter URL: `https://rz-projects.github.io/capitalaccess/`
4. Copy Measurement ID (G-XXXXXXXXXX)

### 2. Add Environment Variable (1 min)
Create `.env` file in project root:
```env
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_ENABLE_ANALYTICS=true
PUBLIC_REQUIRE_CONSENT=true
```

### 3. Deploy (2 min)
Push to GitHub. Add repository variables:
- Settings → Secrets → Actions → Variables
- Add `PUBLIC_GA_MEASUREMENT_ID`, `PUBLIC_ENABLE_ANALYTICS`, `PUBLIC_REQUIRE_CONSENT`

### 4. Verify
1. Visit your site
2. Accept cookies
3. Check GA4 Real-Time reports

## Events Tracked Automatically

| Event | When |
|-------|------|
| `page_view` | Every page load |
| `form_submission` | Contact form submit |
| `consultation_request` | Contact form submit |
| `cta_click` | Any button click |
| `navigation_click` | Nav link click |
| `external_link_click` | External link click |
| `scroll_depth` | 25%, 50%, 75%, 90%, 100% |
| `article_read` | Article scroll progress |
| `phone_click` | Phone number click |
| `email_click` | Email link click |

## Mark as Conversion

In GA4: Admin → Events → Toggle "Mark as conversion" for:
- `consultation_request` (primary)
- `form_submission` (primary)
- `phone_click` (secondary)

## Manual Event Tracking

```javascript
// Track custom event
window.analytics.trackEvent('event_name', {
  param1: 'value1'
});

// Track guide download
window.analytics.trackGuideDownload('Guide Name', 'pdf');

// Track consultation
window.analytics.trackConsultationRequest('hard-money');
```

## Debug

1. Install [GA Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
2. GA4 → Admin → DebugView
3. Check console: `localStorage.getItem('analytics_consent')`

## Common Issues

| Issue | Fix |
|-------|-----|
| No data | Wait 24-48 hours |
| Events not tracking | Check consent in localStorage |
| Banner not showing | Clear localStorage |
| DNT enabled | Expected - analytics disabled |

## Files

- `.env.example` - Environment template
- `src/components/GoogleAnalytics.astro` - GA4 script
- `src/components/AnalyticsTracker.astro` - Event tracking
- `src/components/CookieConsent.astro` - Consent banner
- `docs/GA4-SETUP.md` - Full documentation
