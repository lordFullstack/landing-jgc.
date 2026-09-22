# CHANGELOG

## 2026-09-22 — v2.17 — Fix crítico: leak de código + regresión del sistema de diseño
- **Leak de source code en producción**: el commit `687e9ee` ("fix") dejó una
  copia completa del repo (código fuente, `package.json`, `next.config.mjs`,
  `docs/context` internos, todos los `HANDOFF_LOOP_*`) anidada dentro de
  `public/`, servida tal cual por Next.js desde el sitio en vivo desde
  entonces. Eliminada; `public/` solo conserva `brand/`, `icons/`,
  `projects/` (placeholders reales).
- **Regresión del sistema de diseño**: el commit más reciente (`c95237a`,
  "actualización de la tipografía") sobrescribió por completo
  `tailwind.config.ts`, `app/globals.css` y `app/layout.tsx` con un paquete
  de fuente Geist Sans en vez de fusionarlo — se perdieron todos los colores
  del tema, radios, tipografía fluida (`text-hero`/`text-heading`), tokens
  de motion, `darkMode`, `metadataBase`/`openGraph` (D-026), el skip-link
  de accesibilidad y el manejo de `prefers-reduced-motion`. Restaurado
  desde el historial de git y fusionado con las reglas de peso tipográfico
  de Geist Sans (esas sí eran válidas).
- **Fuente Geist Sans nunca compiló**: "Geist" no es una Google Font, así
  que `next/font/google` fallaba con "Unknown font `Geist`" (el build
  nunca se corrió localmente tras ese cambio). Reemplazado por el paquete
  oficial `geist` de Vercel (`next/font/local` internamente).
- Restaurado `README.md` real del proyecto (el commit lo había
  reemplazado con el README de instalación del paquete de fuente).
- Agregado `package-lock.json` (resuelve D-023 — CI ya puede usar
  `cache: "npm"`) y `.claude/launch.json` para preview local.
- Verificado: `npm run build` pasa completo (lint + typecheck + build de
  producción) y QA visual manual en las 6 secciones + `/privacidad`.
- Nuevo D-028 registrado en DECISIONS.md.

## 2026-08-28 — v2.2 — LOOP 02
- LOOP 01 marcado DONE (build validado por Jorge).
- Añadidos tokens de tipografía fluida (text-hero, text-heading) según MOCKUP_SPEC sección 3.
- Añadidos tokens de motion (duration-fast, duration-content, ease-smooth) — provisional hasta confirmación de curva exacta.
- Button.tsx actualizado con sistema completo de estados (default/hover/active/focus/disabled) según sección 15.
- Headings de Hero/Team/Method/Projects/CTA migrados a los nuevos tokens tipográficos.
- Creado docs/reference/DESIGN_SYSTEM.md documentando el sistema.

## 2026-08-28 — v2.1 — LOOP 01
- Confirmado stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS.
- Montado scaffold completo del proyecto (config, app/, components/, lib/, public/).
- Definidos boundaries de componentes por sección según MOCKUP_SPEC.md.
- Aplicados tokens fundacionales de color/radio (Tailwind + CSS vars).
- Ensamblado app/page.tsx con orden de secciones del roadmap.
- Poblados lib/constants/* solo con copy/datos explícitamente aprobados; contenido no suministrado marcado como PENDIENTE (sin invención).
- Detectada y documentada restricción de red del entorno (no se pudo validar build con npm).
- Actualizados STATUS.md, DECISIONS.md, TODO.md.

## 2026-08-28 — v2.0
- Actualizado LOOP 00.
- Estándar ZIP convertido en regla obligatoria.
- Establecida memoria documental.
- Establecido handoff entre chats.
- Establecida Definition of Done.
- Establecido sistema de autoridad.
- Establecido roadmap de landing.

## 2026-08-28 — v2.3 — LOOP 03
- Resuelto conflicto entre dos prompts de LOOP 03 contradictorios (ver LOOP_03.md sección 0): se mantiene el roadmap original de LOOP_00 (03 = Base frontend, sin Header/Hero visual).
- Creado components/sections/ServiceCard.tsx; Services.tsx refactorizado para consistencia con el resto de secciones.
- Añadida accesibilidad base: skip link + landmark #main-content.
- Añadida SEO base: viewport, Open Graph, app/robots.ts, app/sitemap.ts — sin inventar dominio ni assets de marca.
- Actualizados STATUS.md, DECISIONS.md, TODO.md.

## 2026-08-28 — v2.4 — LOOP 04
- Header implementado: desktop (logo, nav, CTA lightweight) + sticky con glass sutil.
- Navegación mobile funcional: components/layout/MobileNav.tsx (panel de ancho completo, 44px touch targets, foco inicial, Escape, focus trap, aria-modal).
- Nuevo components/ui/MenuIcon.tsx (hamburguesa/cierre).
- Añadido keyframe panel-in en globals.css usando tokens de motion de LOOP 02.
- Header.tsx y MobileNav.tsx marcados "use client" (requieren hooks de React).
- Actualizados STATUS.md, TODO.md.

## 2026-08-28 — v2.5 — LOOP 05
- Hero implementado: composición de dos zonas en desktop, orden de prioridad mobile exacto.
- Nuevo components/sections/HeroVisual.tsx (visual abstracto decorativo, sin logo real).
- Nuevas constantes HERO_EYEBROW y HERO_SUPPORTING_COPY en lib/constants/copy.ts.
- Motion de entrada (animate-fade-up) con timing de content-reveal (450ms) y micro-stagger.
- Actualizados STATUS.md, TODO.md.

## 2026-08-28 — v2.5.1 — LOOP 05 aprobado conceptualmente
- Jorge aprueba LOOP 05 conceptualmente.
- D-020 APROBADA: HeroVisual.tsx queda como visual abstracto/decorativo FINAL del Hero, con función distinta al logo/imagotipo de marca. No se reemplaza automáticamente si aparece un artwork oficial — requiere nueva decisión explícita.
- LOOP 05 permanece SIN marcar DONE hasta que Jorge valide el build real (`npm install && npm run build`).
- Actualizados STATUS.md, DECISIONS.md, TODO.md.

## 2026-08-28 — v2.6 — LOOP 06
- D-021 registrada: Jorge autoriza continuar desarrollo sin esperar validación de build de LOOPs 02-05.
- Team.tsx / TeamCard.tsx: distinción visual sutil por entidad vía acento de color (accent-j/g/c), sin jerarquía entre cards.
- Añadido campo `accent` a TeamMember (lib/types.ts, lib/constants/team.ts).
- TeamCard ya no duplica role/responsibility cuando son el mismo texto.
- Actualizados STATUS.md, TODO.md.

## 2026-08-28 — v2.7 — LOOP 07
- Method.tsx / MethodStep.tsx: composición bento/timeline hybrid en desktop (nodo numerado + línea conectora entre cards de la misma fila), secuencia vertical simple en mobile.
- Nueva utilidad CSS .reveal-on-scroll en app/globals.css: fallback universal por montaje (fade-up) + progressive enhancement con animation-timeline: view() en navegadores compatibles. 100% CSS, sin JS, contenido siempre disponible sin animación (cumple spec sección 10).
- Actualizados STATUS.md, TODO.md.

## 2026-08-28 — v2.8 — LOOP 08
- ProjectCard.tsx: agregado bloque decorativo de visual/preview (placeholder neutro, sin inventar identidad) y demo link condicional (target=_blank, rel=noopener noreferrer).
- Reutilizada .reveal-on-scroll (LOOP 07) en cada ProjectCard.
- Documentada en Projects.tsx la decisión de diferir la composición bento con tamaños variables hasta tener copy real de proyectos.
- Confirmado (grep) que no se invention métricas de negocio prohibidas por el spec.
- Actualizados STATUS.md, TODO.md.

## 2026-08-28 — v2.9 — LOOP 09
- ServiceCard.tsx: bloques compactos (padding reducido, texto centrado), acento único (accent-g, no por-identidad).
- Services.tsx: agregado heading sr-only estructural (accesibilidad), sin inventar título de marketing (el spec no lo da).
- Reutilizada .reveal-on-scroll (LOOP 07) en cada ServiceCard.
- Actualizados STATUS.md, TODO.md.

## 2026-08-28 — v2.9.1 — CI
- Agregado .github/workflows/ci.yml (D-022): install + lint + build automático en cada push/PR a main vía GitHub Actions.
- Resuelve hacia adelante la limitación de red del entorno de Claude reportada desde LOOP 01 — ya no dependerá exclusivamente de que Jorge corra el build localmente.

## 2026-08-28 — v2.9.2 — Fix CI
- Corregido .github/workflows/ci.yml: quitado cache:"npm" (fallaba porque no existe package-lock.json en el repo todavía).
- Detectado: el repo en GitHub quedó nombrado "landing-jgc." con punto final — causa raíz del fallo de clonado en GitHub Desktop/Windows. Recomendado renombrar sin el punto (D-023).

## 2026-08-28 — v2.9.3 — Fix build real (primer error de CI)
- next.config.ts -> next.config.mjs: Next.js 14 no soporta config en TypeScript (esa feature es de versiones posteriores). Fix confirmado por el primer log real de GitHub Actions.
- tailwind.config.ts se mantiene sin cambios (Tailwind sí soporta .ts nativamente).

## 2026-08-30 — v2.10 — Build validado en producción
- Sitio desplegado y funcionando en https://landing-jgc.vercel.app/.
- LOOPs 01-09 marcados DONE (D-025) — se resuelve el bloqueo de build real (D-021).
- CI (GitHub Actions) confirmado operativo tras los fixes de next.config.mjs y cache de npm.

## 2026-08-30 — v2.11 — Dominio confirmado
- D-026: Jorge confirma que no comprará dominio propio; landing-jgc.vercel.app queda como dominio oficial permanente.
- Nuevo lib/site-config.ts (SITE_URL) como fuente única del dominio.
- app/layout.tsx: agregado metadataBase y openGraph.url con la URL real.
- app/sitemap.ts y app/robots.ts actualizados a URLs absolutas.
- og:image sigue pendiente (falta asset de marca, no el dominio).

## 2026-08-30 — v2.12 — LOOP 05 FINAL QA
- QA real ejecutado sobre https://landing-jgc.vercel.app/ (fetch HTTP + revisión de código).
- H1 (MEDIUM, corregido): Hero.tsx — agregado aria-label exacto al H1 ("Human vision. AI engineering. Real products."), spans visuales marcados aria-hidden.
- H2 (HIGH, corregido): Button.tsx ahora acepta href opcional (retrocompatible); Hero CTAs wireados a #contacto y #metodo (antes no hacían nada al hacer click).
- H3 (HIGH, reportado, no corregido): /privacidad y /terminos del Footer devuelven 404 — fuera de alcance de LOOP 05, queda documentado para LOOP 11.
- LOOP 05 declarado READY FOR APPROVAL, condicionado a QA manual de Jorge en ítems no verificables desde este entorno (responsive visual, consola, motion real, foco por teclado).
- Actualizados STATUS.md, DECISIONS.md.

## 2026-08-30 — v2.13 — LOOP 10
- CTA.tsx: tratamiento de alto contraste (gradiente from-accent-j via-accent-c to-accent-g), texto blanco, botón variante inverted.
- Button.tsx: nueva variante `inverted` (aditiva, retrocompatible) para botones sobre fondos vívidos, manteniendo el sistema dark.
- Reutilizada .reveal-on-scroll en el CTA.
- Documentado: el botón de Contacto no tiene href real por falta de canal de contacto suministrado por Jorge (mismo pendiente que Header/MobileNav, ver H2 de LOOP 05 QA).
- Actualizados STATUS.md, TODO.md.

## 2026-08-30 — v2.14 — LOOP 11
- Resuelto H3 (QA LOOP 05): creadas app/privacidad/page.tsx y app/terminos/page.tsx (placeholder honesto, sin texto legal inventado), vía components/layout/LegalPagePlaceholder.tsx.
- Footer.tsx: hover states en links de navegación y legales, consistentes con Header (LOOP 04).
- app/sitemap.ts actualizado con las 2 rutas nuevas.
- Actualizados STATUS.md, TODO.md.

## 2026-08-30 — v2.15 — LOOP 12 (Responsive, auditoría)
- Auditoría de código completa sobre MOCKUP_SPEC.md sección 17 (Responsive Rules). Sin cambios de código: sin hallazgos bloqueantes.
- Verificación numérica de clamp() de text-hero/text-heading en los 8 breakpoints exactos (320-1440px).
- Documentada como intencional la decisión de Team.tsx (md:grid-cols-3 sin sm intermedio) — evita jerarquía visual involuntaria con 3 items (sección 9 del spec).
- Identificado ajuste fino opcional (LOW, no aplicado): text-hero da 50px a 768px, levemente sobre el rango tablet de referencia (38-48).
- Actualizados STATUS.md, TODO.md.
