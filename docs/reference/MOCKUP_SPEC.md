# JGC.LABS — MOCKUP_SPEC.md
## Visual Source of Truth — Official Landing

**Version:** 1.0  
**Status:** BASELINE / READY FOR MOCKUP LOCK  
**Brand:** JGC.LABS  
**Slogan:** Human vision. AI engineering. Real products.

---

# 0. PURPOSE

This document converts the approved JGC.LABS visual direction into executable UI rules for Claude.

Claude must treat this document as the visual source of truth.

The goal is to minimize interpretation during implementation.

When the final approved mockup image is present in `docs/reference/mockup/`, visual measurements from that mockup override provisional values in this document.

Claude MUST NOT invent visual behavior that contradicts this specification.

---

# 1. DESIGN PRINCIPLES

JGC.LABS must feel:

- premium
- technical
- intelligent
- human
- modern
- confident
- restrained
- product-focused

The visual language should communicate an AI-native product studio, NOT a generic AI startup.

Avoid:

- crypto aesthetic
- excessive neon
- excessive glow
- excessive glassmorphism
- noisy gradients
- stock photography
- decorative animation without purpose
- generic SaaS templates

---

# 2. GLOBAL CANVAS

## Primary mode

Dark-first.

## Background

Primary:
`#090A0F`

Secondary surfaces:
`#11131A`

Elevated surface:
`#151821`

Border:
white at approximately 8–12% opacity.

Text:
Primary: near-white.
Secondary: cool gray.
Muted: low-contrast gray, but never below accessible contrast for meaningful content.

## Accent system

J — Blue
`#3B6CFF`

G — Teal/Cyan
`#20D6C7`

C — Violet
`#8B5CF6`

Accent colors are used for identity, highlights, gradients and interactive states—not as full-screen fills.

---

# 3. TYPOGRAPHY

Preferred family:

`Inter`, `Geist Sans`, or equivalent modern grotesk.

If the existing project already has a deliberate typography system, preserve it unless it conflicts with this specification.

## Hierarchy

Hero display:
- 48–72px desktop
- 38–48px tablet
- 36–44px mobile
- weight 600–700
- tight line-height approximately 0.95–1.05

Section heading:
- 32–48px desktop
- 28–36px mobile
- weight 600–700

Body:
- 16–18px
- line-height 1.5–1.7

Small/meta:
- 12–14px
- medium/semibold where needed

## Rule

Do not use typography solely for decoration.

Headline hierarchy must remain readable on mobile.

---

# 4. GRID AND CONTAINER

Maximum content width:
`1200–1280px`

Horizontal padding:
Desktop: 32–48px
Tablet: 24–32px
Mobile: 20–24px

Default grid:
12 columns desktop.

Tablet:
8 columns.

Mobile:
4 columns / single-column flow.

Recommended section spacing:
Desktop: 96–144px vertical.
Mobile: 64–88px vertical.

Do not force identical spacing between every section. Rhythm should follow content hierarchy.

---

# 5. BORDER RADIUS

Primary cards:
20–28px

Small controls:
10–14px

Buttons:
12–16px

Hero visual container:
28–36px if applicable.

Use consistent radius tokens rather than arbitrary values.

---

# 6. SURFACES

Cards should use:

- dark surface
- subtle border
- very restrained shadow
- optional gradient highlight

Glass effect may be used selectively.

Glassmorphism MUST NOT reduce text readability.

---

# 7. HEADER

## Desktop

Structure:

LEFT:
JGC.LABS logo

CENTER/RIGHT:
Inicio
Nosotros
Método
Proyectos
Servicios
Contacto

CTA:
Hablemos

Header remains visually lightweight.

No oversized navigation bar.

## Mobile

Logo left.

Menu trigger right.

Navigation opens in an accessible full-width panel or sheet.

Touch target minimum:
44px.

Header may become sticky if it improves navigation.

---

# 8. HERO

## Objective

Immediately communicate:

WHO:
JGC.LABS

WHAT:
AI-native product lab

PROMISE:
Human vision. AI engineering. Real products.

## Composition

Desktop:
Two-zone composition.

Left:
eyebrow
headline
supporting copy
primary CTA
secondary CTA

Right:
JGC.LABS visual identity / abstract product-lab visual.

Mobile:
Single-column.

Priority order:
1. brand
2. headline
3. supporting message
4. CTA
5. visual

## Headline

Exact approved slogan:

Human vision.
AI engineering.
Real products.

Do not rewrite the slogan.

## CTA

Primary:
Hablemos de tu proyecto

Secondary:
Ver proyectos / Conoce nuestro método

Do not create more than two primary hero actions.

---

# 9. TEAM SECTION

## Heading

Nuestro equipo, tu ventaja

Three visual entities:

### Jorge
Product / Vision

### GPT
Architecture / Strategy

### Claude
Engineering / Execution

Layout:

Desktop:
3-column card/grid.

Mobile:
stacked cards or horizontally scrollable cards only if usability remains excellent.

Each card:
- identity
- role
- short responsibility
- subtle visual distinction

The visual treatment should communicate collaboration, not hierarchy of value.

---

# 10. METHOD SECTION

## Title

JGC Product Method™

Six stages:

01 Descubrir
02 Arquitectura
03 Especificar
04 Construir
05 Validar
06 Lanzar & Escalar

Desktop:
Bento/grid/timeline hybrid.

Mobile:
vertical sequence or compact cards.

Each stage:
- number
- title
- one concise explanation

Animation:
Stages may reveal progressively on scroll, but content must remain available without animation.

---

# 11. PROJECTS SECTION

## Title

Proyectos que generan impacto

Initial projects:

- Domicilios Riohacha
- ClubJugos
- Barber SaaS
- CrediApp
- Gastro POS

IMPORTANT:
Do not invent:
- revenue
- users
- growth
- clients
- conversion
- performance
- awards

unless supplied by Jorge.

## Card

Each project card can contain:
- name
- category
- description
- technology tags
- visual/preview
- demo link when available

Desktop:
Bento layout where it improves storytelling.

Mobile:
single-column cards.

---

# 12. SERVICES / DIFFERENTIATORS

Core messages:

- Enfoque en negocio
- Productos escalables
- Desarrollo con IA
- Transparencia total

Use compact visual blocks.

Avoid long service catalogues.

JGC.LABS should sell outcomes and capability, not a list of generic agency services.

---

# 13. CTA SECTION

Message:

¿Tienes una idea?

Convirtámosla en un producto real.

Primary action:

Hablemos de tu proyecto

Visual treatment:
strong contrast against surrounding content, but remain within the dark visual system.

---

# 14. FOOTER

Brand:
JGC.LABS

Slogan:
Human vision. AI engineering. Real products.

Links:
Inicio
Nosotros
Método
Proyectos
Servicios
Contacto

Legal:
Política de Privacidad
Términos y Condiciones

Footer must not become visually dense.

---

# 15. BUTTON SYSTEM

Primary:
- high contrast
- solid accent treatment
- clear label
- subtle hover
- visible focus

Secondary:
- transparent/dark
- subtle border
- same radius family

States:
default
hover
active
focus
disabled

Touch target:
minimum 44 × 44px.

---

# 16. MOTION

Motion is supportive, not decorative.

Use:

- fade
- translateY
- subtle scale
- opacity transitions
- gradient movement only where meaningful

Timing:
fast UI interaction: ~150–220ms
content reveal: ~350–600ms

Easing:
smooth, natural.

Avoid:
- infinite bouncing
- aggressive parallax
- constant floating
- large scale animations
- animation that delays content

Respect:
`prefers-reduced-motion`.

---

# 17. RESPONSIVE RULES

## Mobile

Width:
320px minimum target.

At mobile:
- no horizontal overflow
- no tiny text
- no desktop navigation
- CTA remains reachable
- cards stack naturally
- visual hierarchy remains identical

## Tablet

Allow intermediate grid behavior.

## Desktop

Use:
- wider hero
- multi-column sections
- Bento compositions
- increased negative space

The design must not simply stretch the mobile layout.

---

# 18. ACCESSIBILITY

Required:

- semantic headings
- landmark elements
- keyboard navigation
- visible focus
- accessible buttons
- accessible menu
- alt text for meaningful imagery
- decorative images marked appropriately
- contrast validation
- reduced-motion support

---

# 19. IMAGE / ASSET RULES

Brand assets belong in:

`public/brand/`

Project visuals:

`public/projects/`

Icons:

`public/icons/`

Prefer optimized SVG/WebP/AVIF where appropriate.

Do not add stock images unless explicitly approved.

---

# 20. COMPONENT RULES

Suggested component boundaries:

Header
Hero
Team
TeamCard
Method
MethodStep
Projects
ProjectCard
Services
CTA
Footer
Button
Container
Section
Badge
GlassCard

Do not create components only to reduce line count.

Components should represent meaningful reusable UI or domain concepts.

---

# 21. DESIGN TOKENS

Use centralized tokens.

Example conceptual tokens:

```text
--background
--surface
--surface-elevated
--border
--text-primary
--text-secondary
--text-muted

--accent-j
--accent-g
--accent-c

--radius-sm
--radius-md
--radius-lg
--radius-xl

--space-section
--space-container
```

Do not scatter brand colors throughout JSX.

---

# 22. VISUAL QA

Claude must verify:

### Desktop
1440px
1280px
1024px

### Tablet
768px

### Mobile
430px
390px
375px
320px

Check:

- alignment
- typography
- overflow
- CTA visibility
- card proportions
- section rhythm
- navigation
- animation
- contrast
- touch targets

---

# 23. MOCKUP FIDELITY

When the final mockup is available, Claude must compare implementation against it.

Priority:

1. layout
2. hierarchy
3. typography
4. spacing
5. color
6. component shape
7. imagery
8. motion

Do not "improve" the design by changing approved visual decisions.

If the implementation requires a deviation:

REPORT:
- deviation
- reason
- impact
- proposed solution

---

# 24. CONFLICT RESOLUTION

If mockup, code, or prior documentation disagree:

Priority:

1. Jorge's latest explicit decision
2. latest approved mockup
3. LOOP specification
4. Design System
5. existing implementation

Do not silently choose.

---

# 25. STATUS

This specification is the **baseline visual contract**.

Pixel-level values remain provisional until the actual approved mockup file is stored in:

`docs/reference/mockup/`

Once the final mockup is available, update this document to version 1.1 and lock:
- exact typography
- exact colors
- exact spacing
- exact dimensions
- exact responsive breakpoints
- exact animation behavior
- exact component variants

Until then, Claude must use the rules above and MUST NOT invent additional visual language.
