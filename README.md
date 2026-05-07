# 🧱 Brick

**Ultra-lightweight, zero-dependency, semantic HTML/CSS/JS UI component library.**

~6.7KB CSS + ~2.4KB JS (minified + gzipped). That's it.

---

## Why Brick?

Brick is a fully standalone UI component library with **zero dependencies**. No framework, no build step, no Node.js ecosystem bloat. Just include two tiny files and start building.

Semantic HTML elements and attributes are styled contextually out of the box — no classes needed for most components. A few dynamic components use lightweight Web Components.

## Features

- 🪶 **Ultra-lightweight** — ~9KB total (min+gz)
- 🔗 **Zero dependencies** — No frameworks, no npm garbage
- 📐 **Semantic HTML** — `<button>`, `<dialog>`, `<details>` styled directly
- ♿ **Accessible** — ARIA roles and keyboard navigation throughout
- 🌙 **Auto dark mode** — Respects system preferences via `light-dark()`
- 🎨 **Customizable** — Override CSS variables to theme everything
- ⚡ **Web Components** — Tabs, dropdowns as lightweight custom elements

## Quick Start

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@sourabhmahato/brick/brick.min.css">
<script src="https://unpkg.com/@sourabhmahato/brick/brick.min.js" defer></script>
```

### npm

```bash
npm install @sourabhmahato/brick
```

### Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <link rel="stylesheet" href="https://unpkg.com/@sourabhmahato/brick/brick.min.css">
  <script src="https://unpkg.com/@sourabhmahato/brick/brick.min.js" defer></script>
</head>
<body>
  <main style="max-width: 40rem; margin: 0 auto; padding: 2rem;">
    <h1>Hello Brick</h1>
    <p>This paragraph is styled automatically.</p>
    <button>Click me</button>
    <button class="outline">Or me</button>
  </main>
</body>
</html>
```

## Components

| Component | Type | Description |
|-----------|------|-------------|
| Typography | CSS | Headings, paragraphs, links, code, lists |
| Accordion | CSS | `<details>` / `<summary>` collapsibles |
| Alert | CSS | `role="alert"` with variants |
| Avatar | CSS | Image/text avatars with grouping |
| Badge | CSS | `.badge` with color variants |
| Breadcrumb | CSS | Semantic `<nav>` breadcrumbs |
| Button | CSS | `<button>` with variants, sizes, groups |
| Card | CSS | `.card` container |
| Dialog | CSS | `<dialog>` with animations |
| Dropdown | WC | `<bk-dropdown>` with positioning |
| Form | CSS | Inputs, selects, checkboxes, radios, range |
| Meter | CSS | `<meter>` element |
| Pagination | CSS | Button group pagination |
| Progress | CSS | `<progress>` element |
| Sidebar | CSS | App sidebar layout |
| Skeleton | CSS | Loading placeholders |
| Spinner | CSS | `aria-busy="true"` loaders |
| Switch | CSS | `<input role="switch">` toggles |
| Table | CSS | `<table>` styling |
| Tabs | WC | `<bk-tabs>` with keyboard nav |
| Toast | JS | `bk.toast()` notifications |
| Tooltip | JS | `data-tooltip` attribute |
| Grid | CSS | `.hstack` / `.vstack` layouts |
| Utilities | CSS | Helper classes |

**WC** = Web Component, **JS** = JavaScript API

## Customization

Override CSS variables to theme everything:

```css
:root {
  --primary: light-dark(#2563eb, #60a5fa);
  --primary-foreground: light-dark(#fff, #1e293b);
  --radius-medium: 0.5rem;
  --font-sans: 'Inter', system-ui, sans-serif;
}
```

See the [customization guide](docs/customizing.html) for all available variables.

## JavaScript API

```js
// Toast notifications
bk.toast('Saved!')
bk.toast('Done!', 'Success', { variant: 'success' })
bk.toast.clear()

// Tab events
document.querySelector('bk-tabs')
  .addEventListener('bk-tab-change', e => console.log(e.detail))
```

## Building from Source

Requires [esbuild](https://esbuild.github.io/).

```bash
npm install
make dist
```

Output in `dist/`:
- `brick.css` / `brick.min.css` — Full CSS bundle
- `brick.js` / `brick.min.js` — Full JS bundle

## Bundle Size

| File | Size |
|------|------|
| CSS (minified) | ~30KB |
| CSS (gzip) | ~6.7KB |
| JS (minified) | ~5.9KB |
| JS (gzip) | ~2.4KB |
| **Total (gzip)** | **~9.1KB** |

## License

MIT
