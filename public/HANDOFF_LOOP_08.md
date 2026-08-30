# HANDOFF — LOOP 08 → LOOP 09

## Qué se entrega
Sección Proyectos con tratamiento visual final: placeholder de
visual/preview, demo link condicional, motion reutilizada de LOOP 07.
Sin ninguna métrica de negocio inventada (confirmado explícitamente).

## Qué falta para considerar LOOP 08 100% DONE
1. Jorge corre `npm install && npm run build` (acumulado, D-021).
2. Cuando exista contenido real de algún proyecto (categoría, descripción,
   tecnologías, demo), avisar cuál para cargarlo en
   `lib/constants/projects.ts` sin tocar el resto.
3. Decidir si se retoma la composición bento con tamaños variables una vez
   exista ese contenido (ver `LOOP_08.md` sección 3).

## Qué recibe LOOP 09 (Servicios / Diferenciadores)
- `components/sections/Services.tsx` / `ServiceCard.tsx` ya existen desde
  LOOP 01/03 — LOOP 09 les da el tratamiento visual final según
  `MOCKUP_SPEC.md` sección 12.
- Los 4 títulos de servicio (exactos) están en `lib/constants/services.ts`,
  con `description` vacío y marcado PENDIENTE.
- `.reveal-on-scroll` (LOOP 07) disponible para reutilizar si corresponde.

## Para continuar en un nuevo chat

> Continúa JGC.LABS desde este ZIP. Lee docs/context y el último LOOP antes
> de modificar. No inventes contexto.
