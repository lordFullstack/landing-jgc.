# HANDOFF — LOOP 05 (FINAL QA) → LOOP 10

## Qué se entrega
QA real ejecutado sobre producción (https://landing-jgc.vercel.app/),
combinando fetch HTTP real + revisión de código (sin navegador visual
disponible en este entorno). Dos issues corregidos, uno reportado sin
tocar por estar fuera de alcance.

## Estado: LOOP 05 — READY FOR APPROVAL
Condicionado a que Jorge confirme manualmente los ítems que este entorno
no puede verificar (ver LOOP_05.md sección 3): responsive visual real,
consola del navegador, comportamiento real de motion/prefers-reduced-motion,
foco por teclado, overflow horizontal, render visual del HeroVisual.

## Fixes aplicados en este QA
1. **H1 (MEDIUM):** `Hero.tsx` — `aria-label` exacto en el H1, spans
   visuales marcados `aria-hidden`. Slogan 100% fiel para lectores de
   pantalla, sin tocar el layout visual.
2. **H2 (HIGH):** `Button.tsx` acepta `href` opcional (retrocompatible —
   confirmado que Header/MobileNav/CTA section siguen igual). Hero CTAs
   ahora navegan a `#contacto` y `#metodo`.

## Issue reportado, NO corregido (fuera de alcance)
**H3 (HIGH):** `/privacidad` y `/terminos` del Footer devuelven 404 en
producción. Es un problema de Footer (LOOP 11), no de Hero. Decisión
pendiente de Jorge: ¿crear páginas mínimas ahora, quitar los links
temporalmente, o esperar a LOOP 11?

## Nota para LOOP 10+ (Contacto y en adelante)
El mismo patrón de H2 (botones sin `href`/`onClick`) existe todavía en
`CTA.tsx`, `Header.tsx` y `MobileNav.tsx` — no se tocaron en este QA por
estar fuera del alcance de Hero. Cuando se construya LOOP 10 (Contacto),
conviene revisar y wirear esos también.

## Para continuar en un nuevo chat

> Continúa JGC.LABS desde este ZIP. Lee docs/context y el último LOOP antes
> de modificar. No inventes contexto.
