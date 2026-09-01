# Graph Report - michette-bakery  (2026-09-01)

## Corpus Check
- 27 files · ~890,895 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 144 nodes · 148 edges · 18 communities (9 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4453d3dc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- page.tsx
- devDependencies
- compilerOptions
- Footer.tsx
- MenuFilter.tsx
- dependencies
- include
- layout.tsx
- README.md
- PackagingShowcase.tsx
- AGENTS.md
- eslint.config.mjs
- next.config.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `scripts` - 7 edges
3. `include` - 7 edges
4. `ProductItem` - 5 edges
5. `FarahLogo()` - 4 edges
6. `lib` - 4 edges
7. `framer-motion` - 2 edges
8. `gsap` - 2 edges
9. `next` - 2 edges
10. `react` - 2 edges

## Surprising Connections (you probably didn't know these)
- `OrderInquiryModalProps` --references--> `ProductItem`  [EXTRACTED]
  src/components/OrderInquiryModal/OrderInquiryModal.tsx → src/components/MenuFilter/MenuFilter.tsx
- `QuickViewModalProps` --references--> `ProductItem`  [EXTRACTED]
  src/components/QuickViewModal/QuickViewModal.tsx → src/components/MenuFilter/MenuFilter.tsx

## Import Cycles
- None detected.

## Communities (18 total, 4 thin omitted)

### Community 0 - "page.tsx"
Cohesion: 0.09
Nodes (18): ArtisanalMenu(), ArtisanalMenuProps, leftColItems, MenuItem, rightColItems, CustomOrderModal(), ModalProps, FeaturedItems() (+10 more)

### Community 1 - "devDependencies"
Cohesion: 0.08
Nodes (25): eslint, eslint-config-next, gh-pages, devDependencies, eslint, eslint-config-next, gh-pages, @types/node (+17 more)

### Community 2 - "compilerOptions"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 3 - "Footer.tsx"
Cohesion: 0.19
Nodes (9): Footer(), FooterProps, payments, HowItStarted(), HowItStartedProps, FarahLogo(), LogoProps, Navbar() (+1 more)

### Community 4 - "MenuFilter.tsx"
Cohesion: 0.23
Nodes (6): CATEGORIES, MENU_PRODUCTS, MenuFilterProps, ProductItem, OrderInquiryModalProps, QuickViewModalProps

### Community 5 - "dependencies"
Cohesion: 0.18
Nodes (11): framer-motion, gsap, dependencies, framer-motion, gsap, next, react, react-dom (+3 more)

### Community 6 - "include"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 7 - "layout.tsx"
Cohesion: 0.40
Nodes (3): metadata, montserrat, playfair

### Community 8 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **74 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+69 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 91 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `compilerOptions` to `include`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _74 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09401709401709402 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._