import { Metadata } from "next";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import TermsConditionsContent from "@/app/components/policies/TermsConditionsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | IIMSR - Imperial Institute of Management Science & Research",
  description:
    "Terms and Conditions governing the use of IIMSR educational counseling and online admissions inquiry services.",
};

export default function TermsConditionsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions of Service"
      subtitle="Institutional terms governing website access, admission inquiries, and student counselling"
      badge="Legal Terms & Conditions"
    >
      <TermsConditionsContent />
    </PolicyLayout>
  );
}
