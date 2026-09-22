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
D-023 — Fix de CI: se quitó `cache: "npm"` de `ci.yml` porque el repo no tiene `package-lock.json` commiteado todavía (Claude no puede generarlo sin red). Se puede reactivar cuando exista ese lockfile en el repo. Además se detectó que el repo en GitHub quedó nombrado `landing-jgc.` (con punto final) — causó el fallo de clonado en GitHub Desktop en Windows. Recomendación: renombrar el repo sin el punto final.
D-024 — Fix de build real (primer error detectado por el CI en GitHub Actions): Next.js 14 NO soporta `next.config.ts` (esa feature llegó en versiones posteriores) — falla con "Configuring Next.js via next.config.ts is not supported". Reemplazado por `next.config.mjs` (JS + JSDoc para tipado). `tailwind.config.ts` NO se toca — Tailwind sí soporta `.ts` nativamente vía su transpilador interno (jiti), no tiene el mismo problema.
D-025 — Build validado en producción: sitio desplegado y funcionando en https://landing-jgc.vercel.app/ (confirmado 2026-08-30). LOOPs 01–09 quedan DONE — el bloqueo de build real (D-021) queda resuelto.
D-026 — Jorge confirma: NO se comprará dominio propio. `https://landing-jgc.vercel.app` queda como el dominio oficial permanente. Se agregó `lib/site-config.ts` (constante `SITE_URL`) y se actualizaron `app/layout.tsx` (`metadataBase`, `openGraph.url`), `app/sitemap.ts` y `app/robots.ts` para usar la URL absoluta real. `og:image` sigue pendiente — falta el asset de marca, no el dominio.
D-028 — Fix crítico (2026-09-22): commit `687e9ee` había dejado el código
fuente completo, configs y docs internos duplicados dentro de `public/`,
expuestos en el sitio en vivo — eliminado. El commit `c95237a`
("actualización de la tipografía") sobrescribió tailwind.config.ts,
globals.css y layout.tsx en vez de fusionarlos, borrando todo el sistema
de diseño (colores, radios, tipografía fluida, motion, dark mode,
metadataBase/openGraph, skip-link, prefers-reduced-motion) — restaurado
desde git history. Además el import `Geist` vía `next/font/google` nunca
pudo compilar (Geist Sans no es una Google Font); reemplazado por el
paquete oficial `geist` de Vercel. Ver CHANGELOG v2.17 para detalle
completo. Build y QA visual verificados antes de continuar con cualquier
loop nuevo.

D-027 — LOOP 05 FINAL QA (2026-08-30) sobre producción real. Hallazgos y resolución: H1 (MEDIUM, corregido) — slogan del H1 sin espacio de texto real entre spans, se agregó `aria-label` exacto. H2 (HIGH, corregido) — CTAs del Hero sin `href`/`onClick`; `Button.tsx` ahora soporta `href` opcional (retrocompatible), CTAs wireados a `#contacto`/`#metodo`. H3 (HIGH, reportado, NO corregido) — links de Footer `/privacidad` y `/terminos` devuelven 404; queda fuera de alcance de LOOP 05, candidato a LOOP 11. LOOP 05 declarado READY FOR APPROVAL condicionado a QA manual de Jorge en ítems no verificables sin navegador (responsive visual, consola, motion real, foco por teclado).

D-029 — Canal de contacto confirmado por Jorge (2026-09-22): WhatsApp
(`573205390468`), sin formulario/backend. Se agregó `WHATSAPP_URL` a
`lib/site-config.ts` (mensaje inicial precargado) y se conectaron los 3
botones "Hablemos" que no tenían acción real (Header desktop, MobileNav,
CTA section) — abren `wa.me` en pestaña nueva. El CTA primario del Hero
sigue apuntando a `#contacto` a propósito (scroll hasta la sección donde
está el botón de WhatsApp real). Desbloquea la "DECISIÓN A VALIDAR POR
JORGE" #1 de `docs/context/DYNAMIC_WEB_SPEC.md` (LOOP 01 del paquete
JGC_WEB_DYNAMIC_LOOPS). Email descartado por ahora, solo WhatsApp.
