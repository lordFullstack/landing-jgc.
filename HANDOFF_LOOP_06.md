# HANDOFF — LOOP 06 → LOOP 07

## Qué se entrega
Sección Equipo con tratamiento visual final: 3 cards idénticas en tamaño
y tipografía, distinguidas solo por un acento de color por identidad
(J/G/C), sin jerarquía de valor. Sin copy duplicada entre role/responsibility.

## Qué falta para considerar LOOP 06 100% DONE
1. Jorge corre `npm install && npm run build` (acumulado desde LOOP 02, ver D-021).
2. Confirmar visualmente que el acento de color se lee como identidad, no como ranking.

## Qué recibe LOOP 07 (Método)
- `components/sections/Method.tsx` / `MethodStep.tsx` ya existen como
  placeholders de LOOP 01 — LOOP 07 les da el tratamiento visual final
  según `MOCKUP_SPEC.md` sección 10.
- Las 6 etapas del método (títulos exactos) están en
  `lib/constants/method.ts`, con `description` vacío y marcado PENDIENTE
  — la copy de cada etapa sigue sin existir; no se debe inventar en LOOP 07.
- Patrón de acento por identidad (J/G/C) de este loop puede servir de
  referencia de estilo, pero Método no tiene 3 entidades sino 6 etapas —
  no aplica el mismo mapeo 1:1.

## Para continuar en un nuevo chat

> Continúa JGC.LABS desde este ZIP. Lee docs/context y el último LOOP antes
> de modificar. No inventes contexto.
