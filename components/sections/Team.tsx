import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import TeamCard from "@/components/sections/TeamCard";
import { TEAM, TEAM_HEADING } from "@/lib/constants/team";

/** LOOP 01 placeholder. Visual polish scoped to LOOP 06 — Equipo. */
export default function Team() {
  return (
    <Section id="nosotros">
      <Container>
        <h2 className="text-heading font-semibold">{TEAM_HEADING}</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TEAM.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
