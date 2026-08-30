export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  /** Short responsibility line. Placeholder copy is marked explicitly. */
  responsibility: string;
  /**
   * Distinción visual sutil por entidad (sección 9: "subtle visual
   * distinction" / "communicates collaboration, not hierarchy").
   * Mapea 1:1 a las iniciales J/G/C de JGC.LABS y a los tokens de acento
   * ya aprobados en tailwind.config.ts — no es un color nuevo.
   */
  accent: "j" | "g" | "c";
}

export interface MethodStage {
  number: string;
  title: string;
  /**
   * One concise explanation per MOCKUP_SPEC section 10.
   * NOT supplied in the approved spec yet — left as a flagged placeholder.
   * Do not ship without Jorge's copy approval.
   */
  description: string;
}

export interface Project {
  name: string;
  /** Not supplied in MOCKUP_SPEC — placeholder until Jorge provides it. */
  category: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
}

export interface ServiceBlock {
  title: string;
  description: string;
}
