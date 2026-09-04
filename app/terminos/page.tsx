import type { Metadata } from "next";
import LegalPagePlaceholder from "@/components/layout/LegalPagePlaceholder";

export const metadata: Metadata = {
  title: "Términos y Condiciones — JGC.LABS",
};

export default function TerminosPage() {
  return <LegalPagePlaceholder title="Términos y Condiciones" />;
}
