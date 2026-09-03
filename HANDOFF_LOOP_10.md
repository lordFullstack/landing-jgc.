# HANDOFF — LOOP 10 → LOOP 11

## Qué se entrega
Sección Contacto/CTA con tratamiento de alto contraste (gradiente J/C/G),
botón variante `inverted` nueva en `Button.tsx`, manteniendo el sistema
dark. Botón sin `href` real — pendiente de canal de contacto.

## Qué falta para considerar LOOP 10 100% DONE
1. Jorge corre `npm install && npm run build`.
2. Confirmación visual/subjetiva de que el contraste "se siente fuerte" contra el resto de la página.
3. Proveer canal de contacto real para wirear el botón (y de paso los de Header/MobileNav, mismo pendiente).

## Qué recibe LOOP 11 (Footer)
- `components/layout/Footer.tsx` ya existe desde LOOP 01 con la
  estructura y links — LOOP 11 debe:
  1. Resolver **H3** (LOOP 05 QA): `/privacidad` y `/terminos` dan 404.
     Opciones: crear páginas mínimas, o quitar los links hasta tener
     contenido legal real (NO se debe inventar texto legal).
  2. Dar el tratamiento visual final según `MOCKUP_SPEC.md` sección 14.
- Variante `inverted` de `Button.tsx` disponible si el Footer la necesita.

## Para continuar en un nuevo chat

> Continúa JGC.LABS desde este ZIP. Lee docs/context y el último LOOP antes
> de modificar. No inventes contexto.
