# @majid-superior/sell-digital-assets-theme

Shared design tokens, Tailwind v4 theme, React theme engine, iconography, and common UI primitives for the **Sell Digital Assets** ecosystem.

## Features

- **Design Tokens**: Typed TypeScript constants for colors, typography, spacing, breakpoints, and layout.
- **Tailwind v4 CSS**: Pre-configured `@theme` CSS with light and dark mode variable sets, resets, and self-hosted fonts.
- **React Theme Engine**: Zero-friction theme state management (`<ThemeProvider>`, `useTheme`) synchronizing HTML `data-theme` attribute and `dark` class with `localStorage` and system color scheme.
- **Complete Iconography**:
  - **Brand Icons**: Standardized React SVG components matching design system geometry (`Brand`, `Github`, `Google`, `Twitter`, `X`, `Facebook`, `Instagram`, `LinkedIn`, `YouTube`, `TikTok`, `Discord`, `Reddit`, `Dribbble`, `Twitch`, `Figma`).
  - **Semantic UI Icons**: Unified icons with `IconProps` (`Search`, `Cart`, `Explore`, `Categories`, `Sell`, `Menu`, `Close`, `ThemeLight`, `ThemeDark`, `Magic`, `Next`, `Back`, `Home`, `Send`, `Success`, `Security`, `Performance`, `Rating`, `Verified`, `ServerError`, `NoResults`, `Check`, `Eye`, `EyeOff`, `Lock`, `Mail`, `User`).
- **Common Reusable UI Primitives**: Accessible, styled with design tokens and Tailwind v4 classes:
  - `Button` (with variants, sizes, loading spinner, and icon slots)
  - `Card` primitives (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`)
  - `Badge` (pill with status variants and sizes)
  - `Input`, `Label`, `Checkbox` (consistent focus ring, border, and background)
  - `Spinner`, `Skeleton`, `EmptyState`
  - `Modal` (accessible dialog with backdrop dismiss and escape key support)
- **Self-Hosted Web Fonts**: Bundled Plus Jakarta Sans variable font with zero external network dependencies.
- **Dual Module Output**: Full ESM (`.js`, `.d.ts`) and CommonJS (`.cjs`, `.d.cts`) builds.
- **Subpath Exports**: Dedicated entry points (`/components`, `/icons`, `/react`, `/css`) for optimized bundle sizes and tree-shaking.

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

### 2. Common Reusable UI Components (`@majid-superior/sell-digital-assets-theme/components`)

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Input,
  Label,
  Checkbox,
  EmptyState,
  Modal,
  Spinner,
  Skeleton,
} from "@majid-superior/sell-digital-assets-theme/components";
import { Search, Cart } from "@majid-superior/sell-digital-assets-theme/icons";

export function ProductCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="primary">Featured</Badge>
          <Badge variant="success">Verified</Badge>
        </div>
        <CardTitle>Digital Asset Package</CardTitle>
        <CardDescription>High quality developer UI components</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Includes complete source code and Figma design files.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-lg font-bold text-primary">$49</span>
        <Button variant="primary" size="md" rightIcon={<Cart size={16} />}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### 3. Iconography (`@majid-superior/sell-digital-assets-theme/icons`)

```tsx
import {
  // Brand SVGs
  Brand,
  Github,
  Google,
  Twitter,
  Figma,
  // Semantic UI Icons
  Search,
  Cart,
  Explore,
  Categories,
  ThemeLight,
  ThemeDark,
  type IconProps,
} from "@majid-superior/sell-digital-assets-theme/icons";

export function HeaderNav() {
  return (
    <div className="flex items-center gap-4">
      <Brand size={28} />
      <Search size={20} className="text-on-surface-variant" />
      <Cart size={20} className="text-on-surface" />
    </div>
  );
}
```

### 4. React Theme Engine (`@majid-superior/sell-digital-assets-theme/react`)

```tsx
import { ThemeProvider, useTheme } from "@majid-superior/sell-digital-assets-theme/react";
import { ThemeLight, ThemeDark } from "@majid-superior/sell-digital-assets-theme/icons";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-outline-variant/30 text-on-surface"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <ThemeLight size={18} /> : <ThemeDark size={18} />}
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

### 5. Design Tokens (`@majid-superior/sell-digital-assets-theme`)

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
