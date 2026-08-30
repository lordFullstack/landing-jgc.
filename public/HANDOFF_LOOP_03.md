# HANDOFF — LOOP 03 → LOOP 04

## Qué se entrega
Arquitectura frontend consolidada: componentes consistentes en todas las
secciones, accesibilidad base (skip link) y SEO base (viewport, Open
Graph, robots, sitemap). Sin implementación visual de Header/Hero —
eso es explícitamente LOOP 04 y LOOP 05.

## Conflicto resuelto
Ver `docs/context/LOOP_03.md` sección 0 y `DECISIONS.md` D-016/D-017.
LOOP 03 = Base frontend (roadmap original). Docs en `docs/context/`.

## Qué falta para considerar LOOP 03 100% DONE
1. Jorge corre `npm install && npm run build` localmente.
2. Verificar con teclado que el skip link funciona.
3. Verificar `/robots.txt` y `/sitemap.xml` en `npm run dev`.

## Qué recibe LOOP 04
- Header.tsx existente (placeholder de LOOP 01) como punto de partida —
  implementar navegación mobile funcional (menú/sheet accesible, focus
  management, Escape para cerrar), comportamiento en scroll si corresponde,
  y el tratamiento visual final según `MOCKUP_SPEC.md` sección 7 y
  `DESIGN_SYSTEM.md`.
- Design System de LOOP 02 (tipografía fluida, motion, estados de botón) listo para usarse.
- D-012 (CTA secundario del Hero) sigue vigente, no toca Header.

## Para continuar en un nuevo chat

> Continúa JGC.LABS desde este ZIP. Lee docs/context y el último LOOP antes
> de modificar. No inventes contexto.
