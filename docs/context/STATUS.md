# STATUS

Proyecto: JGC.LABS Official Landing
Contexto: v2.11
Estado: LOOPs 01–09 DONE — build validado en producción, dominio confirmado
Próximo: LOOP 10 — Contacto

Equipo:
Jorge — Product / Vision / Final Authority
GPT — Architecture / Strategy
Claude — Engineering / Implementation

Stack confirmado: Next.js 14 (App Router) + TypeScript + Tailwind CSS.
Build: VALIDADO EN PRODUCCIÓN — https://landing-jgc.vercel.app/ (D-025).
CI activo en GitHub Actions (.github/workflows/ci.yml) valida cada push
automáticamente.

Dominio: CONFIRMADO (D-026) — landing-jgc.vercel.app es permanente,
Jorge no comprará dominio propio. metadataBase/og:url/sitemap/robots ya
usan esta URL real (lib/site-config.ts). Solo falta og:image (asset de
marca, no dominio).

Repo: GitHub (lordFullstack/landing-jgc). Nota: verificar que el nombre
del repo ya no tenga el punto final detectado en D-023.

Regla: cada loop se entrega como ZIP con estructura montada y contexto
actualizado.
