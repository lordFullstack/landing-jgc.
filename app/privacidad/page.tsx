import type { Metadata } from "next";
import LegalPagePlaceholder from "@/components/layout/LegalPagePlaceholder";

export const metadata: Metadata = {
  title: "Política de Privacidad — JGC.LABS",
};

export default function PrivacidadPage() {
  return <LegalPagePlaceholder title="Política de Privacidad" />;
}
