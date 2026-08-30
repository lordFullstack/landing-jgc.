import type { NavItem } from "@/lib/types";

// Source: MOCKUP_SPEC.md, section 7 (Header) and section 14 (Footer).
export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Método", href: "#metodo" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const NAV_CTA_LABEL = "Hablemos";

export const LEGAL_LINKS: NavItem[] = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Términos y Condiciones", href: "/terminos" },
];
