# Capital Access

Financial marketing website built with Astro.

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: CSS Custom Properties (Design Tokens)
- **Content**: Markdown/MDX
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── content/
│   │   ├── blog/
│   │   ├── research/
│   │   └── customer-stories/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── global.css
│       └── tokens.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Design System

This project uses the **Heritage Trust** design direction:

- **Primary**: Deep Navy (#1B365D)
- **Secondary**: Warm Gold (#B8860B)
- **Accent**: Forest Green (#2D5A3D)
- **Fonts**: Playfair Display (headings), Source Sans Pro (body)

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Run TypeScript checks |

## License

ISC
