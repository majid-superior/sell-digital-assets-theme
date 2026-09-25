# @majid-superior/sell-digital-assets-theme

Shared design tokens, Tailwind v4 theme, React theme engine, and brand SVG iconography for the **Sell Digital Assets** platform.

## Features

- **Design Tokens**: Typed TypeScript constants for colors, typography, spacing, breakpoints, and layout.
- **Tailwind v4 CSS**: Pre-configured `@theme` CSS with light and dark mode variable sets, resets, and self-hosted fonts.
- **React Theme Engine**: Zero-friction theme state management (`<ThemeProvider>`, `useTheme`) synchronizing HTML `data-theme` attribute and `dark` class with `localStorage` and system color scheme.
- **Brand SVG Iconography**: Standardized React SVG components matching design system geometry (`Github`, `Google`, `Discord`, `Twitter`, `Figma`, etc.).
- **Self-Hosted Web Fonts**: Bundled Plus Jakarta Sans variable font with zero external network dependencies.
- **Dual Module Output**: Full ESM (`.js`, `.d.ts`) and CommonJS (`.cjs`, `.d.cts`) builds.
- **Subpath Exports**: Dedicated entry points (`/react`, `/icons`, `/css`) for optimized bundle sizes and tree-shaking.

---

## Installation

```bash
npm install @majid-superior/sell-digital-assets-theme
```

### GitHub Packages Authentication

If consuming from GitHub Packages (`npm.pkg.github.com`), configure your project `.npmrc`:

```ini
@majid-superior:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

---

## Usage

### 1. In CSS / Tailwind v4

Import the full theme into your main CSS stylesheet (e.g. `src/index.css` or `src/app/globals.css`):

```css
@import "tailwindcss";

/* Import shared theme tokens, resets, and typography */
@import "@majid-superior/sell-digital-assets-theme/css";
```

You can also import individual stylesheets:

```css
/* Theme tokens only */
@import "@majid-superior/sell-digital-assets-theme/css/theme.css";

/* Resets only */
@import "@majid-superior/sell-digital-assets-theme/css/reset.css";

/* Fonts only */
@import "@majid-superior/sell-digital-assets-theme/css/fonts.css";
```

### 2. React Theme Engine (`@majid-superior/sell-digital-assets-theme/react`)

Wrap your application in `ThemeProvider` and consume with `useTheme`:

```tsx
import { ThemeProvider, useTheme } from "@majid-superior/sell-digital-assets-theme/react";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ThemeToggle />
    </ThemeProvider>
  );
}
```

### 3. Brand SVG Icons (`@majid-superior/sell-digital-assets-theme/icons`)

```tsx
import {
  Brand,
  Github,
  Google,
  Discord,
  Twitter,
  Figma,
} from "@majid-superior/sell-digital-assets-theme/icons";

export function Footer() {
  return (
    <footer>
      <Brand size={24} />
      <div className="flex gap-2">
        <Github size={18} />
        <Google size={18} />
        <Discord size={18} />
      </div>
    </footer>
  );
}
```

### 4. Design Tokens (`@majid-superior/sell-digital-assets-theme`)

```tsx
import {
  TOKENS,
  COLOR_HEX_MAP,
  COLOR_TOKENS,
  LAYOUT_TOKENS,
  TYPOGRAPHY_TOKENS,
} from "@majid-superior/sell-digital-assets-theme";
```

---

## Development

```bash
# Install dependencies
npm install

# Build package (tsup + CSS copy)
npm run build

# Dry-run publish package contents
npm pack --dry-run
```

## License

MIT
