import { Metadata } from "next";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import ContactUsContent from "@/app/components/policies/ContactUsContent";

export const metadata: Metadata = {
  title: "Contact Us & Admission Office | IIMSR",
  description:
    "Contact Imperial Institute of Management Science & Research (IIMSR) helpline at +91 8287434343 or visit our corporate office at Sector 3, Noida, Uttar Pradesh.",
};

export default function ContactUsPage() {
  return (
    <PolicyLayout
      title="Contact IIMSR Admission Desk"
      subtitle="Connect with our academic counsellors for immediate admission guidance, course eligibility, and prospectus"
      badge="Admissions Helpline & Office Location"
    >
      <ContactUsContent />
    </PolicyLayout>
  );
}
