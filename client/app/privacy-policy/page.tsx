import { Metadata } from "next";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import PrivacyPolicyContent from "@/app/components/policies/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | IIMSR - Imperial Institute of Management Science & Research",
  description:
    "IIMSR Privacy Policy detailing candidate data protection, counseling inquiry handling, and institutional privacy practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How IIMSR collects, uses, and safeguards your educational counseling and admission inquiry data"
      badge="Data Protection & Privacy"
    >
      <PrivacyPolicyContent />
    </PolicyLayout>
  );
}
