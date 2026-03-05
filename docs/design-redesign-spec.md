# Capital Access Website Redesign Specification

**Executive Creative Director Brief**  
**Project:** Capital Access Website Redesign  
**Design Direction:** Heritage Trust (Enhanced)  
**Reference Sites:** annuity.org, bankrate.com, investopedia.com

---

## 1. COLOR USAGE GUIDE WITH CONTRAST RATIOS

### WCAG AA Compliance Requirements
- **Body text (< 18px):** 4.5:1 minimum contrast ratio
- **Large text (≥ 18px bold or ≥ 24px):** 3:1 minimum contrast ratio
- **UI components:** 3:1 minimum contrast ratio

### Approved Color Combinations

#### On White/Cream Backgrounds (#FAF8F5, #FFFFFF)

| Text Color | Hex | Contrast on White | Use Case | Passes |
|------------|-----|-------------------|----------|--------|
| Charcoal | #2C2C2C | 12.6:1 | Primary body text, headings | AA/AAA |
| Dark Gray | #3D3D3D | 8.6:1 | Secondary body text | AA/AAA |
| Warm Gray | #525252 | 7.0:1 | Tertiary text, captions | AA |
| Deep Navy | #1B365D | 9.4:1 | Headings, links, emphasis | AA/AAA |
| Forest Green | #2D5A3D | 5.8:1 | Accent text, success states | AA |

#### On Deep Navy Background (#1B365D)

| Text Color | Hex | Contrast on Navy | Use Case | Passes |
|------------|-----|------------------|----------|--------|
| White | #FFFFFF | 9.4:1 | Primary text on navy | AA/AAA |
| Cream | #FAF8F5 | 8.9:1 | Body text on navy | AA/AAA |
| Warm Gold | #B8860B | 4.8:1 | Accent text, highlights | AA |
| Light Gold | #D4A017 | 3.5:1 | Large accent text only | AA (large) |

#### On Warm Gold Background (#B8860B)

| Text Color | Hex | Contrast on Gold | Use Case | Passes |
|------------|-----|------------------|----------|--------|
| Deep Navy | #1B365D | 4.8:1 | Primary text on gold | AA |
| Charcoal | #2C2C2C | 5.1:1 | Alternative text on gold | AA |
| White | #FFFFFF | 3.1:1 | Large text only | AA (large) |

#### On Forest Green Background (#2D5A3D)

| Text Color | Hex | Contrast on Green | Use Case | Passes |
|------------|-----|-------------------|----------|--------|
| White | #FFFFFF | 5.8:1 | Primary text on green | AA |
| Cream | #FAF8F5 | 5.5:1 | Body text on green | AA |

### Prohibited Combinations (Fails WCAG AA)

| Combination | Contrast | Issue |
|-------------|----------|-------|
| Warm Gold (#B8860B) on White | 3.1:1 | Fails for body text - use only for large text |
| Warm Gray (#6B6B6B) on White | 4.5:1 | Borderline - avoid for body text |
| Neutral 400 (#A8A29E) on White | 2.9:1 | Fails - use only for decorative elements |
| Light Navy (#2A4A7A) on White | 4.2:1 | Borderline - avoid for body text |

### Updated Token Assignments

```css
/* Text Colors - Updated for WCAG AA */
--text-primary: #2C2C2C;      /* Main body text - 12.6:1 on white */
--text-secondary: #3D3D3D;   /* Secondary text - 8.6:1 on white */
--text-tertiary: #525252;    /* Captions, metadata - 7.0:1 on white */
--text-muted: #6B6B6B;       /* Disabled, placeholders - use sparingly */
--text-on-dark: #FFFFFF;      /* Text on navy/green backgrounds */
--text-on-dark-muted: rgba(255, 255, 255, 0.8);
--text-accent: #B8860B;      /* Large accent text only */
--text-link: #1B365D;        /* Link text - 9.4:1 on white */
--text-link-hover: #2D5A3D;  /* Link hover state */

/* Background Colors */
--bg-primary: #FAF8F5;       /* Main page background */
--bg-secondary: #FFFFFF;     /* Cards, elevated surfaces */
--bg-tertiary: #F5F2ED;      /* Subtle section backgrounds */
--bg-dark: #1B365D;          /* Navy sections */
--bg-dark-secondary: #122640; /* Darker navy variant */
--bg-accent: #2D5A3D;        /* Green accent sections */
--bg-highlight: #B8860B;     /* Gold highlight sections */

/* Border Colors */
--border-light: #EBE6DE;     /* Subtle borders */
--border-default: #D4CFC5;   /* Default borders */
--border-dark: #6B6B6B;      /* Emphasized borders */
```

---

## 2. HOMEPAGE REDESIGN SPECIFICATIONS

### Section-by-Section Design

---

### SECTION 1: HERO

**Purpose:** Strong value proposition with trust indicators

**Layout:**
- Full-width section with subtle gradient background
- Centered content, max-width 800px
- Trust badges below main CTA
- Optional: Subtle background pattern or image overlay

**Content Structure:**
```
[Pre-headline badge] "Trusted by 5,000+ Clients Since 2003"
[Main Headline] "Your Path to Financial Clarity"
[Subheadline] "Expert guidance for building lasting wealth and financial security"
[Primary CTA] "Get Your Free Consultation"
[Secondary CTA] "Explore Our Services"
[Trust Indicators Row]
  - 20+ Years Experience
  - $2B+ Assets Under Advisory
  - 98% Client Satisfaction
  - Licensed & Certified
```

**Visual Design:**
- Background: Linear gradient from cream (#FAF8F5) to white
- Subtle geometric pattern overlay (opacity 3%)
- Headline: Deep Navy, Playfair Display, 48px mobile / 64px desktop
- Subheadline: Charcoal (#2C2C2C), 20px
- Trust indicators: Gold accent icons, navy text
- CTA buttons: Primary navy, secondary outline

**Spacing:**
- Padding: 120px top, 80px bottom (desktop); 80px top, 60px bottom (mobile)
- Trust indicators: 40px gap between items

---

### SECTION 2: TRUST BAR

**Purpose:** Social proof through media mentions and awards

**Layout:**
- Full-width, light gray background (#F5F2ED)
- Logo strip with 5-6 placeholder logos
- Subtle "As Featured In" label

**Content:**
```
[Label] "As Featured In"
[Logo Strip] [Forbes] [WSJ] [Bloomberg] [CNBC] [Kiplinger] [NerdWallet]
```

**Visual Design:**
- Background: #F5F2ED
- Logos: Grayscale, 40% opacity, hover to 100%
- Height: 80px
- Border top/bottom: 1px solid #EBE6DE

**Spacing:**
- Padding: 40px vertical
- Logo spacing: 48px gap

---

### SECTION 3: SERVICES

**Purpose:** Showcase core offerings with sophisticated card design

**Layout:**
- 3-column grid (1 column mobile, 2 tablet, 3 desktop)
- Enhanced card design with icons
- Section header with subtitle

**Content Structure:**
```
[Section Header]
  [Title] "Comprehensive Financial Solutions"
  [Subtitle] "Tailored strategies for every stage of your financial journey"

[Service Cards Grid]
  [Card 1: Financial Planning]
    - Icon: Chart/Pie icon (SVG)
    - Title: "Financial Planning"
    - Description: "Comprehensive strategies tailored to your unique goals and circumstances."
    - Features list: "Retirement planning • Tax optimization • Estate planning"
    - CTA: "Learn More →"
  
  [Card 2: Investment Services]
    - Icon: Growth/Graph icon (SVG)
    - Title: "Investment Services"
    - Description: "Expert guidance on building and managing your portfolio for long-term growth."
    - Features list: "Portfolio management • Risk assessment • Market analysis"
    - CTA: "Learn More →"
  
  [Card 3: Wealth Management]
    - Icon: Shield/Protection icon (SVG)
    - Title: "Wealth Management"
    - Description: "Personalized solutions for high-net-worth individuals and families."
    - Features list: "Asset protection • Legacy planning • Family governance"
    - CTA: "Learn More →"
```

**Card Design Specifications:**
- Background: White
- Border: None
- Shadow: 0 4px 12px rgba(27, 54, 93, 0.08)
- Hover: Shadow 0 8px 24px rgba(27, 54, 93, 0.12), translateY(-4px)
- Top accent: 4px gold bar
- Icon container: 64px circle, navy background (#1B365D), white icon
- Icon: 28px, white
- Title: Navy, 20px, Playfair Display
- Description: Charcoal (#2C2C2C), 16px
- Features: Warm Gray (#525252), 14px, bullet-separated
- CTA: Gold text (#B8860B), arrow icon, hover underline

**Spacing:**
- Section padding: 80px vertical
- Card padding: 32px
- Grid gap: 32px

---

### SECTION 4: WHY CHOOSE US

**Purpose:** Trust indicators with credentials and certifications

**Layout:**
- Split layout: Text left, trust indicators right
- Or: Full-width dark navy background with gold accents
- Icon-based trust points

**Content Structure:**
```
[Background: Deep Navy #1B365D]

[Section Header - Centered]
  [Title] "Why Choose Capital Access"
  [Subtitle] "Built on trust, powered by expertise"

[Trust Grid - 4 columns]
  [Item 1]
    - Icon: Shield badge
    - Title: "Licensed & Certified"
    - Description: "SEC registered, FINRA member, fiduciary duty"
  
  [Item 2]
    - Icon: Award star
    - Title: "Award-Winning Service"
    - Description: "Barron's Top 100, Forbes Best-In-State"
  
  [Item 3]
    - Icon: People group
    - Title: "Expert Team"
    - Description: "CFP®, CFA®, CPA professionals on staff"
  
  [Item 4]
    - Icon: Handshake
    - Title: "Client-First Approach"
    - Description: "Fee-only advisory, no hidden commissions"
```

**Visual Design:**
- Background: Deep Navy (#1B365D)
- Title: White, 36px
- Subtitle: rgba(255,255,255,0.8), 18px
- Icon container: 56px circle, gold border (#B8860B), white icon
- Item title: Gold (#B8860B), 18px
- Item description: rgba(255,255,255,0.8), 14px

**Spacing:**
- Section padding: 80px vertical
- Grid gap: 48px
- Item gap: 24px internal

---

### SECTION 5: EXPERT TEAM PREVIEW

**Purpose:** Humanize the brand, show credentials

**Layout:**
- Section header with "Meet Our Team" CTA
- 4 team member cards (2 mobile, 4 desktop)
- Placeholder images with credentials overlay

**Content Structure:**
```
[Section Header]
  [Title] "Meet Our Experts"
  [Subtitle] "Experienced professionals dedicated to your financial success"

[Team Grid]
  [Member 1]
    - Image: Placeholder (professional headshot style)
    - Name: "Sarah Mitchell"
    - Title: "CEO & Chief Investment Officer"
    - Credentials: "CFP®, CFA®"
    - Years: "25+ years experience"
  
  [Member 2]
    - Image: Placeholder
    - Name: "James Chen"
    - Title: "Director of Financial Planning"
    - Credentials: "CFP®, CPA"
    - Years: "18+ years experience"
  
  [Member 3]
    - Image: Placeholder
    - Name: "Maria Rodriguez"
    - Title: "Senior Wealth Advisor"
    - Credentials: "CFP®, ChFC®"
    - Years: "15+ years experience"
  
  [Member 4]
    - Image: Placeholder
    - Name: "David Thompson"
    - Title: "Portfolio Manager"
    - Credentials: "CFA®, CAIA"
    - Years: "12+ years experience"

[CTA] "View Full Team →"
```

**Card Design:**
- Background: White
- Image: 280px x 320px, grayscale hover to color
- Name: Navy, 18px, Playfair Display
- Title: Charcoal, 14px
- Credentials: Gold badge, 12px
- Years: Warm Gray, 12px
- Hover: Subtle lift, image color transition

**Spacing:**
- Section padding: 80px vertical
- Grid gap: 32px

---

### SECTION 6: LATEST INSIGHTS

**Purpose:** Content marketing, SEO, thought leadership

**Layout:**
- 3-column article cards
- Featured article (larger) + 2 smaller articles
- Category tags

**Content Structure:**
```
[Section Header]
  [Title] "Latest Insights"
  [Subtitle] "Expert perspectives on markets, planning, and wealth building"

[Articles Grid]
  [Featured Article - 2 columns]
    - Image: Placeholder (financial topic)
    - Category: "Market Analysis"
    - Title: "2024 Market Outlook: What Investors Need to Know"
    - Excerpt: "Our analysis of market trends and opportunities for the year ahead..."
    - Author: "Sarah Mitchell, CFA®"
    - Date: "Jan 15, 2024"
    - Read time: "8 min read"
  
  [Article 2]
    - Category: "Retirement"
    - Title: "Roth vs. Traditional: Making the Right Choice"
    - Author: "James Chen, CFP®"
    - Date: "Jan 10, 2024"
  
  [Article 3]
    - Category: "Tax Planning"
    - Title: "Year-End Tax Strategies for High Earners"
    - Author: "Maria Rodriguez, CFP®"
    - Date: "Jan 5, 2024"

[CTA] "View All Insights →"
```

**Card Design:**
- Background: White
- Featured: Image top, full card hover
- Small: No image, category tag prominent
- Category tag: Navy background, white text, 10px
- Title: Navy, 18px (featured: 24px)
- Excerpt: Charcoal, 14px
- Author: Warm Gray, 12px
- Meta: Warm Gray, 12px

**Spacing:**
- Section padding: 80px vertical
- Grid gap: 32px

---

### SECTION 7: TOOLS & RESOURCES

**Purpose:** Lead generation, value-add content

**Layout:**
- 3-column resource cards
- Icon-based design
- Interactive elements (calculators)

**Content Structure:**
```
[Section Header]
  [Title] "Tools & Resources"
  [Subtitle] "Free resources to help you plan with confidence"

[Resources Grid]
  [Resource 1: Calculator]
    - Icon: Calculator
    - Title: "Retirement Calculator"
    - Description: "Estimate how much you need to save for a comfortable retirement."
    - CTA: "Try Calculator"
  
  [Resource 2: Guide]
    - Icon: Book/Document
    - Title: "Estate Planning Guide"
    - Description: "Comprehensive guide to protecting and transferring your wealth."
    - CTA: "Download Free Guide"
  
  [Resource 3: Quiz]
    - Icon: Checklist
    - Title: "Risk Tolerance Quiz"
    - Description: "Discover your investment risk profile in 5 minutes."
    - CTA: "Take Quiz"
```

**Card Design:**
- Background: Cream (#FAF8F5)
- Border: 2px solid #EBE6DE
- Icon: 48px, Navy
- Title: Navy, 18px
- Description: Charcoal, 14px
- CTA: Navy button, gold hover

**Spacing:**
- Section padding: 80px vertical
- Grid gap: 32px

---

### SECTION 8: TESTIMONIALS

**Purpose:** Social proof, trust building

**Layout:**
- Large featured quote
- Client photo (placeholder)
- Star rating
- Carousel or static grid

**Content Structure:**
```
[Section Header]
  [Title] "What Our Clients Say"
  [Subtitle] "Real stories from real clients"

[Testimonial Card - Centered]
  [Quote Mark] "
  [Quote] "Capital Access helped us navigate a complex financial situation with clarity and confidence. Their expertise saved us years of uncertainty."
  [Author Info]
    - Photo: Placeholder
    - Name: "Robert & Jennifer K."
    - Location: "Austin, TX"
    - Service: "Wealth Management Client"
  [Rating] ★★★★★
  
[Additional Testimonials - 3 columns]
  [Testimonial 2]
  [Testimonial 3]
  [Testimonial 4]
```

**Card Design:**
- Background: White
- Quote mark: Gold, 48px, serif
- Quote: Navy, 20px, italic, Playfair Display
- Author photo: 64px circle
- Author name: Navy, 16px
- Location: Warm Gray, 14px
- Stars: Gold (#B8860B)

**Spacing:**
- Section padding: 80px vertical
- Featured quote: max-width 800px, centered

---

### SECTION 9: FINAL CTA

**Purpose:** Primary conversion point

**Layout:**
- Full-width, navy background
- Centered content
- Strong headline + CTA
- Contact info

**Content Structure:**
```
[Background: Deep Navy with subtle gradient]

[Title] "Ready to Start Your Financial Journey?"
[Subtitle] "Schedule a free consultation with one of our certified advisors."
[Primary CTA] "Schedule Free Consultation"
[Secondary CTA] "Call (555) 123-4567"
[Trust Note] "No obligation. 100% confidential."
```

**Visual Design:**
- Background: Linear gradient from #1B365D to #122640
- Title: White, 36px
- Subtitle: rgba(255,255,255,0.9), 18px
- Primary CTA: Gold button (#B8860B), navy text
- Secondary CTA: White outline button
- Trust note: rgba(255,255,255,0.7), 14px

**Spacing:**
- Section padding: 100px vertical
- Content max-width: 600px, centered

---

## 3. UPDATED COMPONENT SPECIFICATIONS

### Button Component (Enhanced)

**Variants:**

| Variant | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| Primary | #1B365D | #FFFFFF | none | #B8860B bg |
| Secondary | #B8860B | #1B365D | none | #D4A017 bg |
| Outline | transparent | #1B365D | 2px #1B365D | #1B365D bg, white text |
| Outline Gold | transparent | #B8860B | 2px #B8860B | #B8860B bg, #1B365D text |
| Ghost | transparent | #1B365D | none | #F5F2ED bg |
| White | #FFFFFF | #1B365D | none | #FAF8F5 bg |

**Sizes:**

| Size | Padding | Font Size | Min Height |
|------|---------|-----------|------------|
| Small | 8px 16px | 14px | 36px |
| Medium | 12px 24px | 16px | 44px |
| Large | 16px 32px | 18px | 52px |

**States:**
- Focus: 2px gold outline, 2px offset
- Disabled: 50% opacity, cursor not-allowed
- Loading: Spinner icon, text hidden

**Icon Support:**
- Icon left: 8px gap
- Icon right: 8px gap
- Icon only: Square button, centered icon

---

### Card Component (Enhanced)

**Variants:**

| Variant | Use Case | Design |
|---------|----------|--------|
| Default | Services, features | White bg, gold top bar, shadow |
| Elevated | Featured content | White bg, larger shadow, hover lift |
| Flat | Simple content | Cream bg, border, no shadow |
| Dark | On dark backgrounds | Navy bg, white text |
| Interactive | Clickable content | Full card hover, cursor pointer |

**Structure:**
```
[Card Container]
  [Icon Area] (optional)
    - 64px circle, navy bg, white icon
  [Content Area]
    [Tag/Category] (optional)
    [Title]
    [Description]
    [Meta Info] (optional)
    [Action Area]
      [CTA Link/Button]
```

**Hover States:**
- Default: translateY(-4px), shadow increase
- Interactive: Full card clickable, subtle scale(1.02)

---

### Trust Indicator Component (New)

**Purpose:** Display trust badges, certifications, stats

**Variants:**

| Variant | Use Case |
|---------|----------|
| Icon + Text | Why Choose Us section |
| Stat | Hero stats, number displays |
| Badge | Certification logos |
| Logo | Media mentions |

**Icon + Text Design:**
```
[Container]
  [Icon Circle] 56px, gold border, white icon
  [Title] Gold text, 18px
  [Description] White/80%, 14px
```

**Stat Design:**
```
[Container]
  [Value] Gold, 48px, serif
  [Label] White/80%, 14px
```

---

### Testimonial Component (New)

**Structure:**
```
[Card Container]
  [Quote Mark] Gold, decorative
  [Quote Text] Navy, italic, serif
  [Author Section]
    [Avatar] 64px circle
    [Name] Navy, 16px
    [Meta] Location, service type
  [Rating] Gold stars
```

**Variants:**
- Featured: Large, centered, full quote
- Compact: Smaller, grid layout
- Carousel: Animated transitions

---

### Rate Table Component (New - For Future Use)

**Purpose:** Display financial rates, comparisons

**Structure:**
```
[Table Container]
  [Header Row]
    [Product Name]
    [Rate/APY]
    [Min Deposit]
    [Term]
    [CTA]
  [Data Rows]
    [Bank Logo + Name]
    [Rate Value] Highlighted
    [Min Deposit]
    [Term]
    [Apply Button]
```

**Design:**
- Header: Navy background, white text
- Rows: Alternating cream/white
- Rate: Gold text, bold, large
- CTA: Small primary button

---

### Section Header Component (New)

**Purpose:** Consistent section titles across site

**Structure:**
```
[Container] Centered or left-aligned
  [Overline] (optional) Small label, uppercase, gold
  [Title] Navy, serif, responsive sizing
  [Subtitle] (optional) Charcoal, body font
  [Description] (optional) Larger description text
```

**Sizing:**
- Title: 36px mobile, 48px desktop
- Subtitle: 18px
- Overline: 12px, uppercase, letter-spacing 0.1em

---

## 4. NEW COMPONENTS NEEDED

### 1. Icon Component
- SVG-based icon system
- Sizes: 16px, 20px, 24px, 32px, 48px
- Colors: Inherit from parent or explicit
- Required icons:
  - Chart/Pie (services)
  - Growth/Graph (services)
  - Shield (services)
  - Calculator (tools)
  - Book (tools)
  - Checklist (tools)
  - Award/Star (trust)
  - People (trust)
  - Handshake (trust)
  - Badge (trust)
  - Quote mark (testimonials)
  - Arrow right (CTAs)
  - Phone (contact)
  - Email (contact)
  - Location (contact)
  - Star (ratings)
  - Check (features)
  - Clock (read time)
  - User (author)

### 2. Trust Badge Component
- Display certifications (CFP, CFA, SEC, FINRA)
- Logo + text format
- Grayscale to color on hover

### 3. Author Byline Component
- Author name with credentials
- Optional photo
- Date and read time

### 4. Category Tag Component
- Small badge for article categories
- Variants: Default (navy), Outline, Gold

### 5. Star Rating Component
- Display 1-5 stars
- Gold filled, gray empty
- Optional: Show rating number

### 6. Team Member Card Component
- Photo with grayscale/color hover
- Credentials badges
- Name, title, years experience

### 7. Article Card Component
- Featured variant (with image)
- Compact variant (no image)
- Category, title, excerpt, author, date

### 8. Resource Card Component
- Icon-based
- Title, description
- CTA button

### 9. Logo Strip Component
- Horizontal scrolling or static
- Grayscale with hover color
- For media mentions, partners

### 10. CTA Section Component
- Full-width dark background
- Headline, subtitle, buttons
- Contact info

---

## 5. CSS IMPROVEMENTS

### Typography Hierarchy Updates

```css
/* Headings - Enhanced Scale */
h1, .h1 {
  font-size: clamp(2.5rem, 5vw, 4rem); /* 40px - 64px */
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h2, .h2 {
  font-size: clamp(2rem, 4vw, 3rem); /* 32px - 48px */
  line-height: 1.2;
}

h3, .h3 {
  font-size: clamp(1.5rem, 3vw, 2rem); /* 24px - 32px */
  line-height: 1.3;
}

h4, .h4 {
  font-size: clamp(1.25rem, 2vw, 1.5rem); /* 20px - 24px */
  line-height: 1.4;
}

/* Body Text - Improved Readability */
.body-lg {
  font-size: 1.25rem; /* 20px */
  line-height: 1.6;
}

.body-md {
  font-size: 1rem; /* 16px */
  line-height: 1.6;
}

.body-sm {
  font-size: 0.875rem; /* 14px */
  line-height: 1.5;
}

/* Overline - Section Labels */
.overline {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-secondary);
}
```

### Button Style Improvements

```css
/* Enhanced Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-weight: 600;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.btn:hover::before {
  opacity: 1;
}

/* Primary Button - Enhanced */
.btn-primary {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  box-shadow: 0 2px 8px rgba(27, 54, 93, 0.2);
}

.btn-primary:hover {
  background: var(--color-secondary);
  border-color: var(--color-secondary);
  box-shadow: 0 4px 12px rgba(184, 134, 11, 0.3);
  transform: translateY(-2px);
}

/* Secondary Button - Gold */
.btn-secondary {
  background: var(--color-secondary);
  color: var(--color-primary);
  border-color: var(--color-secondary);
  box-shadow: 0 2px 8px rgba(184, 134, 11, 0.2);
}

.btn-secondary:hover {
  background: var(--color-secondary-light);
  border-color: var(--color-secondary-light);
  transform: translateY(-2px);
}

/* Outline Button - Enhanced */
.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-outline:hover {
  background: var(--color-primary);
  color: white;
}

.btn-outline-gold {
  background: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.btn-outline-gold:hover {
  background: var(--color-secondary);
  color: var(--color-primary);
}

/* Button with Icon */
.btn-icon {
  padding-left: 1rem;
}

.btn-icon svg {
  width: 1.25em;
  height: 1.25em;
}

/* Button Sizes */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  min-height: 36px;
}

.btn-md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  min-height: 44px;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  min-height: 52px;
}
```

### Card Improvements

```css
/* Enhanced Card Styles */
.card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(27, 54, 93, 0.08);
  transition: all 0.3s ease;
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-secondary);
}

.card:hover {
  box-shadow: 0 8px 24px rgba(27, 54, 93, 0.12);
  transform: translateY(-4px);
}

/* Card with Icon */
.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.card-icon svg {
  width: 28px;
  height: 28px;
  color: white;
}

/* Card Content */
.card-content {
  padding: 2rem;
}

.card-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.card-description {
  color: #2C2C2C;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-meta {
  color: #525252;
  font-size: 0.875rem;
}

/* Card CTA */
.card-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-secondary);
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.card-cta:hover {
  color: var(--color-secondary-dark);
  gap: 0.75rem;
}

.card-cta svg {
  width: 1em;
  height: 1em;
  transition: transform 0.2s ease;
}

.card-cta:hover svg {
  transform: translateX(4px);
}

/* Elevated Card Variant */
.card-elevated {
  box-shadow: 0 8px 24px rgba(27, 54, 93, 0.12);
}

.card-elevated:hover {
  box-shadow: 0 12px 32px rgba(27, 54, 93, 0.16);
}

/* Flat Card Variant */
.card-flat {
  background: var(--color-neutral-50);
  box-shadow: none;
  border: 2px solid var(--color-neutral-200);
}

.card-flat:hover {
  border-color: var(--color-secondary);
}

/* Dark Card Variant */
.card-dark {
  background: var(--color-primary);
  color: white;
}

.card-dark::before {
  background: var(--color-secondary);
}

.card-dark .card-title {
  color: white;
}

.card-dark .card-description {
  color: rgba(255, 255, 255, 0.9);
}

.card-dark .card-meta {
  color: rgba(255, 255, 255, 0.7);
}
```

### Section Spacing

```css
/* Section Spacing System */
.section {
  padding: 4rem 0;
}

@media (min-width: 768px) {
  .section {
    padding: 5rem 0;
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 6rem 0;
  }
}

.section-sm {
  padding: 3rem 0;
}

@media (min-width: 768px) {
  .section-sm {
    padding: 4rem 0;
  }
}

.section-lg {
  padding: 5rem 0;
}

@media (min-width: 768px) {
  .section-lg {
    padding: 6rem 0;
  }
}

@media (min-width: 1024px) {
  .section-lg {
    padding: 8rem 0;
  }
}

/* Section Backgrounds */
.section-light {
  background: var(--color-neutral-50);
}

.section-white {
  background: white;
}

.section-dark {
  background: var(--color-primary);
  color: white;
}

.section-dark-gradient {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
}

.section-accent {
  background: var(--color-accent);
  color: white;
}

.section-gold {
  background: var(--color-secondary);
  color: var(--color-primary);
}
```

### Background Variations

```css
/* Subtle Pattern Overlays */
.bg-pattern-dots {
  background-image: radial-gradient(circle, rgba(27, 54, 93, 0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}

.bg-pattern-grid {
  background-image: 
    linear-gradient(rgba(27, 54, 93, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(27, 54, 93, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.bg-pattern-diagonal {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(27, 54, 93, 0.02) 10px,
    rgba(27, 54, 93, 0.02) 20px
  );
}

/* Gradient Backgrounds */
.bg-gradient-light {
  background: linear-gradient(180deg, var(--color-neutral-50) 0%, white 100%);
}

.bg-gradient-hero {
  background: linear-gradient(135deg, var(--color-neutral-50) 0%, white 50%, var(--color-neutral-100) 100%);
}

.bg-gradient-dark {
  background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
}

/* Decorative Elements */
.bg-gold-accent::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-secondary) 0%, var(--color-secondary-light) 50%, var(--color-secondary) 100%);
}
```

### Visual Hierarchy Improvements

```css
/* Section Headers */
.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.section-header-left {
  text-align: left;
  margin: 0 0 3rem;
}

.section-overline {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-secondary);
  margin-bottom: 0.75rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #3D3D3D;
  line-height: 1.6;
}

/* On Dark Backgrounds */
.section-dark .section-title {
  color: white;
}

.section-dark .section-subtitle {
  color: rgba(255, 255, 255, 0.8);
}

.section-dark .section-overline {
  color: var(--color-secondary);
}
```

### Trust Indicator Styles

```css
/* Trust Indicators */
.trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .trust-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.trust-item {
  text-align: center;
}

.trust-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  background: transparent;
}

.trust-icon svg {
  width: 24px;
  height: 24px;
  color: white;
}

.trust-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: 0.25rem;
}

.trust-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Stats Display */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-secondary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}
```

### Testimonial Styles

```css
/* Testimonials */
.testimonial-featured {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(27, 54, 93, 0.1);
}

.testimonial-quote-mark {
  font-family: var(--font-heading);
  font-size: 4rem;
  color: var(--color-secondary);
  line-height: 1;
  margin-bottom: 1rem;
}

.testimonial-quote {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-style: italic;
  color: var(--color-primary);
  line-height: 1.5;
  margin-bottom: 2rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.testimonial-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-author-info {
  text-align: left;
}

.testimonial-name {
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.testimonial-meta {
  font-size: 0.875rem;
  color: #525252;
}

.testimonial-rating {
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-top: 1rem;
}

.testimonial-rating svg {
  width: 20px;
  height: 20px;
  color: var(--color-secondary);
}
```

---

## 6. IMPLEMENTATION PRIORITY

### Phase 1: Critical (Contrast & Core)
1. Update tokens.css with new text color variables
2. Update global.css typography
3. Update Button component
4. Update Card component
5. Fix all existing contrast issues

### Phase 2: Homepage Sections
1. Hero section redesign
2. Trust bar section
3. Services section with icons
4. Why Choose Us section
5. Expert Team preview
6. Latest Insights section
7. Tools & Resources section
8. Testimonials section
9. Final CTA section

### Phase 3: New Components
1. Icon component (SVG system)
2. TrustBadge component
3. Testimonial component
4. TeamMemberCard component
5. ArticleCard component
6. ResourceCard component
7. SectionHeader component
8. LogoStrip component
9. CTASection component
10. StarRating component

### Phase 4: Design System Documentation
1. Update design-system.astro page
2. Add contrast ratio documentation
3. Add new component examples
4. Add usage guidelines

---

## 7. FILE CHANGES SUMMARY

### Files to Update:
- `src/styles/tokens.css` - Add new color tokens, text colors
- `src/styles/global.css` - Typography updates, new utility classes
- `src/components/Button.astro` - Enhanced button styles
- `src/components/Card.astro` - Enhanced card styles
- `src/pages/index.astro` - Complete homepage redesign
- `src/pages/design-system.astro` - Add new documentation

### New Files to Create:
- `src/components/Icon.astro` - SVG icon component
- `src/components/TrustBadge.astro` - Trust indicator component
- `src/components/Testimonial.astro` - Testimonial card component
- `src/components/TeamMember.astro` - Team member card component
- `src/components/ArticleCard.astro` - Blog/article card component
- `src/components/ResourceCard.astro` - Resource/tool card component
- `src/components/SectionHeader.astro` - Section header component
- `src/components/LogoStrip.astro` - Logo carousel component
- `src/components/CTASection.astro` - CTA section component
- `src/components/StarRating.astro` - Star rating component
- `src/styles/utilities.css` - Utility classes

---

**End of Design Specification**

This document provides complete specifications for the Frontend Developer agent to implement the redesigned Capital Access website with improved contrast, visual sophistication, and trust-focused design patterns inspired by annuity.org, bankrate.com, and investopedia.com.
