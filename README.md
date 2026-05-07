# 🧱 Brick UI

> Semantic, minimal, zero dependencies. ~9KB CSS and JS.

Brick is an ultra-lightweight HTML + CSS, semantic UI component library with zero dependencies. No framework, build, or dev complexity. Just include the tiny CSS and JS files and you are good to go building decent looking web applications with most commonly needed components and elements.

Semantic tags and attributes are styled contextually out of the box without classes, forcing best practices, and reducing markup class pollution. A few dynamic components are WebComponents and use minimal JavaScript.

I wrote this to use in my own projects after getting sick of the ridiculous bloat, dependencies, and rug-pulls in Javascript UI/component libraries.

See live demo and docs at [brick docs](docs/index.html)

**IMPORTANT:** The lib is currently sub v1 and is likely to have breaking changes until it hits v1.

---

## Installation

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@sourabhmahato/brick/brick.min.css">
<script src="https://unpkg.com/@sourabhmahato/brick/brick.min.js" defer></script>
```

### npm

```bash
npm install @sourabhmahato/brick
```

## Building

Requires [esbuild](https://esbuild.github.io/).

```bash
npm install
make dist
```

## License

MIT
