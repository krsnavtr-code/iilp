import { Metadata } from "next";
import { getAllSubdomainSlugs } from "@/subdomains";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import ContactUsContent from "@/app/components/policies/ContactUsContent";

interface PageProps {
  params: Promise<{ subdomain: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSubdomainSlugs();
  return slugs.map((subdomain) => ({ subdomain }));
}

function getUniversityContext(subdomain: string) {
  const norm = (subdomain || "").toLowerCase();
  if (norm.includes("manipal")) {
    return {
      name: "Online Manipal (Manipal University Jaipur)",
      relationship: "manipal" as const,
    };
  }
  if (norm.includes("amity")) {
    return {
      name: "Amity University Online",
      relationship: "amity" as const,
    };
  }
  if (norm.includes("ignou")) {
    return {
      name: "IGNOU (Indira Gandhi National Open University)",
      relationship: "ignou" as const,
    };
  }
  return {
    name: "Imperial Institute of Management Science & Research (IIMSR)",
    relationship: "general" as const,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subdomain } = await params;
  const context = getUniversityContext(subdomain);
  return {
    title: `Contact Us & Admissions Support | ${context.name}`,
    description: `Connect with admissions counsellors for ${context.name} programs, fees, and eligibility guidance.`,
  };
}

export default async function SubdomainContactUsPage({ params }: PageProps) {
  const { subdomain } = await params;
  const context = getUniversityContext(subdomain);

  return (
    <PolicyLayout
      title="Contact Us & Admissions Helpline"
      subtitle={`Academic counseling and admission guidance for ${context.name}`}
      badge="Direct Support & Corporate Address"
      universityContext={context}
    >
      <ContactUsContent />
    </PolicyLayout>
  );
}
