import { Metadata } from "next";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import AboutUsContent from "@/app/components/policies/AboutUsContent";

export const metadata: Metadata = {
  title: "About Us | IIMSR - Imperial Institute of Management Science & Research",
  description:
    "Learn about Imperial Institute of Management Science & Research (IIMSR), an ISO 9001:2015 certified autonomous educational institution offering distance & online education.",
};

export default function AboutUsPage() {
  return (
    <PolicyLayout
      title="About IIMSR"
      subtitle="Imperial Institute of Management Science & Research • ISO 9001:2015 Certified Autonomous Institution"
      badge="Institutional Profile & Credentials"
    >
      <AboutUsContent />
    </PolicyLayout>
  );
}
