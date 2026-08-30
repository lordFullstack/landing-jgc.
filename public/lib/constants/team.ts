import type { TeamMember } from "@/lib/types";

// Source: MOCKUP_SPEC.md, section 9. Roles son exactos; "responsibility"
// es una restitución directa del rol aprobado, no copy inventada — el
// spec no da una descripción de responsabilidad separada del rol.
// "accent" mapea las iniciales J/G/C a los tokens de color ya definidos
// en tailwind.config.ts (accent-j/g/c), coincidencia intencional con
// D-001 (JGC.LABS = Jorge × GPT × Claude).
export const TEAM: TeamMember[] = [
  {
    name: "Jorge",
    role: "Product / Vision",
    responsibility: "Product / Vision",
    accent: "j",
  },
  {
    name: "GPT",
    role: "Architecture / Strategy",
    responsibility: "Architecture / Strategy",
    accent: "g",
  },
  {
    name: "Claude",
    role: "Engineering / Execution",
    responsibility: "Engineering / Execution",
    accent: "c",
  },
];

export const TEAM_HEADING = "Nuestro equipo, tu ventaja";
