# JGC.LABS — Official Landing

Human vision. AI engineering. Real products.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Tipografía: Geist Sans (`next/font/google`, variable `--font-geist`)

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Luego abrir http://localhost:3000

Para validar el build de producción:

```bash
npm run build
```

## Estructura

```
app/                  Rutas (App Router), layout raíz, estilos globales
components/layout/    Header, Footer, Container, Section
components/ui/        Button, Badge, GlassCard
components/sections/  Hero, Team, Method, Projects, Services, CTA (+ *Card/*Step)
lib/constants/        Copy y datos de contenido (solo lo aprobado en el spec)
lib/types.ts          Tipos compartidos
docs/context/         Fuente de verdad del proyecto (STATUS, DECISIONS, TODO, CHANGELOG, LOOPs)
docs/reference/       MOCKUP_SPEC.md — contrato visual
public/               brand/ projects/ icons/
```

## Fuente de verdad

Antes de modificar cualquier cosa, leer:

1. `docs/context/LOOP_00.md`
2. `docs/context/STATUS.md`
3. `docs/context/DECISIONS.md`
4. `docs/reference/MOCKUP_SPEC.md`
5. `docs/context/TODO.md`

No inventar contexto no documentado.
