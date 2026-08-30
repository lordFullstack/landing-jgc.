# DECISIONS

D-001 — JGC.LABS = Jorge × GPT × Claude.
D-002 — Slogan oficial: Human vision. AI engineering. Real products.
D-003 — Jorge = Product/Vision/Authority; GPT = Architecture/Strategy; Claude = Engineering.
D-004 — La landing se construye desde cero.
D-005 — Dirección visual dark-first, premium, minimalista, tecnológica y mobile-first.
D-006 — Stack preferido: Next.js + React + TypeScript + Tailwind CSS, sujeto a inspección.
D-007 — No cambiar stack, arquitectura o funcionalidades sin aprobación.
D-008 — Cada loop se entrega como ZIP autocontenido con estructura y documentación.
D-009 — La memoria oficial vive en docs/context y no depende del chat.
D-010 — Stack CONFIRMADO para LOOP 01: Next.js 14 (App Router) + TypeScript + Tailwind CSS. Bloqueado — no cambiar sin autorización de Jorge (aprobado 2026-08-28).
D-011 — docs/reference/MOCKUP_SPEC.md es el contrato visual base hasta que exista imagen de mockup final en docs/reference/mockup/.
D-012 — CTA secundario del Hero fijado por defecto en "Conoce nuestro método" (spec ofrecía dos opciones) — pendiente de confirmación de Jorge en LOOP 05.
D-013 — Ningún dato de copy/proyecto no suministrado explícitamente por Jorge se inventa; se deja marcado como PENDIENTE en el código y la documentación.
D-014 — LOOP 01 marcado DONE: build validado localmente por Jorge (2026-08-28).
D-015 — Tokens tipográficos fluidos (`text-hero`, `text-heading`) y tokens de motion (`duration-fast/content`, `ease-smooth`) establecidos en LOOP 02. Curva de easing es PROVISIONAL, pendiente de confirmación antes de LOOP 13.
D-016 — Resuelto conflicto entre dos prompts de LOOP 03: se mantiene el roadmap original de LOOP_00 (03 = Base frontend; 04 = Header; 05 = Hero, como loops separados). Decisión de Jorge, 2026-08-28.
D-017 — La documentación de contexto permanece en `docs/context/` (reafirma D-009); no se adopta la convención `/docs/` propuesta por uno de los prompts en conflicto.
D-018 — `metadataBase` y `og:image` quedan sin definir hasta que exista dominio y asset de marca reales — no se inventa información de negocio (LOOP 03).
D-019 — Header implementado como sticky con glass sutil (`bg-background/80` + `backdrop-blur-sm`), amparado por el spec ("may become sticky if it improves navigation"). LOOP 04.
D-020 — APROBADA (2026-08-28). HeroVisual.tsx queda como el visual abstracto/decorativo FINAL del Hero. No se reemplaza automáticamente por el logo/imagotipo cuando este exista: cumplen funciones distintas — logo/imagotipo = identidad de marca; HeroVisual = lenguaje visual/conceptual del Hero. Si en el futuro surge un artwork oficial específico para el Hero, se evalúa con una NUEVA decisión explícita, nunca reemplazando esta silenciosamente.
D-021 — Jorge autoriza avanzar a LOOP 06 sin haber confirmado aún el build real de LOOPs 02–05 (anula temporalmente el bloqueo que él mismo había establecido). El build sigue PENDIENTE y LOOPs 02–05 NO quedan marcados DONE por esto — solo se destraba la continuidad de trabajo. Riesgo asumido por Jorge: si el build falla al validarse, los errores podrían acumularse en varios loops en vez de aislarse en uno.
D-022 — Agregado `.github/workflows/ci.yml`: valida `npm install`, `npm run lint` y `npm run build` automáticamente en cada push/PR a `main`, corriendo en un runner de GitHub (no en el entorno de Claude ni requiere que Jorge lo corra localmente cada vez). No introduce dependencias al proyecto ni cambia stack/arquitectura — es tooling de CI. Resuelve, hacia adelante, la limitación de red reportada desde LOOP 01.
