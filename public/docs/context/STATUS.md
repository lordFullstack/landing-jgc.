# STATUS

Proyecto: JGC.LABS Official Landing
Contexto: v2.9
Estado: LOOP 08 entregado — LOOP 09 entregado, pendiente QA/build de Jorge
Próximo: LOOP 10 — Contacto

Equipo:
Jorge — Product / Vision / Final Authority
GPT — Architecture / Strategy
Claude — Engineering / Implementation

Stack confirmado: Next.js 14 (App Router) + TypeScript + Tailwind CSS.
Build local: validado por Jorge hasta LOOP 01. LOOPs 02–09 pendientes de
validación de build real — D-021 sigue vigente.

Servicios (LOOP 09): 4 bloques compactos con acento único (no por-
identidad, a diferencia de Team). Heading de la sección es sr-only
(estructural), no hay título de marketing suministrado — no se inventó.

CI: agregado `.github/workflows/ci.yml` (D-022) — valida install/lint/
build automáticamente en cada push/PR a `main` vía GitHub Actions. A
partir de que Jorge suba el repo a GitHub, esto reemplaza la necesidad
de correr el build manualmente en cada loop.

Regla: cada loop se entrega como ZIP con estructura montada y contexto
actualizado.
