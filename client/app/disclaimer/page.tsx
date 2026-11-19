import { Metadata } from "next";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import DisclaimerContent from "@/app/components/policies/DisclaimerContent";

export const metadata: Metadata = {
  title: "Statutory Disclaimer & Disclosures | IIMSR",
  description:
    "Official statutory disclaimer detailing Imperial Institute of Management Science & Research (IIMSR) autonomous status, registrations, and examination guidelines.",
};

export default function DisclaimerPage() {
  return (
    <PolicyLayout
      title="Statutory Disclaimer & Institutional Disclosures"
      subtitle="Mandatory disclosures regarding autonomous status, course approvals, and examination procedures"
      badge="Mandatory Statutory Disclosure"
    >
      <DisclaimerContent />
    </PolicyLayout>
  );
}
