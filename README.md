# @majid-superior/sell-digital-assets-theme

Shared design tokens, Tailwind v4 theme, and CSS resets for the **Sell Digital Assets** platform.

## Features

- **Design Tokens**: Typed TypeScript constants for colors, typography, spacing, breakpoints, and layout.
- **Dual Module Output**: Full ESM (`.js`, `.d.ts`) and CommonJS (`.cjs`, `.d.cts`) builds.
- **Tailwind v4 CSS**: Pre-configured `@theme` CSS with light and dark mode variable sets.
- **Self-Hosted Web Fonts**: Bundled Plus Jakarta Sans variable font with zero external network dependencies.
- **CSS Resets & Utilities**: Normalization layer tailored for the platform.

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

### 2. In React / TypeScript

```tsx
import {
  TOKENS,
  COLOR_HEX_MAP,
  COLOR_TOKENS,
  LAYOUT_TOKENS,
  TYPOGRAPHY_TOKENS,
  type ThemeTokens,
  type ColorScheme,
} from "@majid-superior/sell-digital-assets-theme";

export function Header() {
  return (
    <header className="bg-surface text-on-surface border-b border-outline">
      <h1 className="text-display-hero">Sell Digital Assets</h1>
      <p style={{ color: COLOR_HEX_MAP.light.primary }}>
        Welcome to the marketplace!
      </p>
    </header>
  );
}
```

### 3. In Backend / Node.js (Email Templates, Canvas, etc.)

```typescript
import { COLOR_HEX_MAP, TOKENS } from "@majid-superior/sell-digital-assets-theme";

export function generateInvoiceHtml(orderId: string, amount: string) {
  return `
    <div style="font-family: ${TOKENS.typography.fonts.sans}; color: ${COLOR_HEX_MAP.light.onSurface};">
      <h2 style="color: ${COLOR_HEX_MAP.light.primary};">Invoice #${orderId}</h2>
      <p>Amount: ${amount}</p>
    </div>
  `;
}
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
