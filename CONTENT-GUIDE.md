# Content Structure Guide

## Directory Structure

```
src/content/
├── blog/              # Blog articles & insights
├── research/          # Whitepapers & research reports  
├── customer-stories/  # Testimonials & case studies
├── services/          # Service pages & detailed guides
├── evergreen/         # Educational/informational content
└── brand/             # About, team, values, company pages
```

## File Naming Convention

**Pattern:** `{type-prefix}-{slug}.md`

| Content Type | Prefix | Example |
|-------------|--------|---------|
| Service pages | `svc` | `svc-financial-planning.md` |
| Guides (deep) | `guide` | `guide-retirement-planning.md` |
| Evergreen/educational | `edu` | `edu-what-is-fiduciary.md` |
| Brand pages | `brand` | `brand-about.md` |
| Blog articles | `blog` | `blog-2024-market-outlook.md` |
| Customer stories | `story` | `story-smith-family.md` |
| Research/whitepapers | `wp` | `wp-2024-wealth-report.md` |

## Frontmatter Templates

### Services (`src/content/services/`)
```yaml
---
title: "Financial Planning Services"
description: "Comprehensive financial planning tailored to your goals"
heroImage: "/images/services/financial-planning.jpg"
cta: "Schedule a Consultation"
related: ["svc-wealth-management", "guide-retirement-planning"]
order: 1
---

[Content here]
```

### Evergreen (`src/content/evergreen/`)
```yaml
---
title: "What Is a Fiduciary Financial Advisor?"
description: "Understanding fiduciary duty and why it matters for your finances"
category: "fundamentals"
lastUpdated: 2024-01-15
related: ["edu-fee-only-vs-commission"]
---

[Content here]
```

### Brand (`src/content/brand/`)
```yaml
---
title: "About Capital Access"
description: "Our mission, values, and commitment to your financial success"
layout: "brand"
---

[Content here]
```

### Blog (`src/content/blog/`)
```yaml
---
title: "2024 Market Outlook: What Investors Should Know"
description: "Key trends and opportunities for the year ahead"
pubDate: 2024-01-10
author: "Sarah Mitchell"
image: "/images/blog/2024-outlook.jpg"
tags: ["investing", "market-trends", "outlook"]
---

[Content here]
```

### Customer Stories (`src/content/customer-stories/`)
```yaml
---
title: "The Smith Family: Planning for Retirement"
company: "Smith Family"
industry: "Healthcare"
pubDate: 2024-01-05
image: "/images/stories/smith-family.jpg"
services: ["wealth-management", "retirement-planning"]
results: "Achieved retirement goals 5 years ahead of schedule"
---

[Content here]
```

### Research (`src/content/research/`)
```yaml
---
title: "2024 Wealth Management Trends Report"
description: "Industry analysis and insights for high-net-worth investors"
pubDate: 2024-02-01
author: "James Chen"
image: "/images/research/2024-wealth-report.jpg"
tags: ["wealth-management", "trends", "research"]
downloadUrl: "/downloads/2024-wealth-report.pdf"
---

[Content here]
```

## Using Content in Astro

```astro
---
import { getCollection } from 'astro:content';

const services = await getCollection('services');
const blogPosts = await getCollection('blog');
---

{services.map(service => (
  <h2>{service.data.title}</h2>
))}
```

## Content Type Summary

| Type | Purpose | Update Frequency |
|------|---------|------------------|
| Services | Core offerings, detailed guides | Rarely |
| Evergreen | Educational content, FAQs | As needed |
| Brand | Company info, team, values | Rarely |
| Blog | News, insights, commentary | Weekly/Monthly |
| Customer Stories | Social proof, case studies | Monthly |
| Research | Whitepapers, reports | Quarterly |
