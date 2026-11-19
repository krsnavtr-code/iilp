import { Metadata } from "next";
import { getAllSubdomainSlugs } from "@/subdomains";
import PolicyLayout from "@/app/components/policies/PolicyLayout";
import AboutUsContent from "@/app/components/policies/AboutUsContent";

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
    title: `About Us | ${context.name}`,
    description: `Learn about ${context.name}, an ISO 9001:2015 certified autonomous educational institution offering distance & online courses.`,
  };
}

export default async function SubdomainAboutUsPage({ params }: PageProps) {
  const { subdomain } = await params;
  const context = getUniversityContext(subdomain);

  return (
    <PolicyLayout
      title={`About ${context.name}`}
      subtitle="ISO 9001:2015 Certified Autonomous Institution • Registered with Govt. of Karnataka"
      badge="Institutional Profile & Credentials"
      universityContext={context}
    >
      <AboutUsContent />
    </PolicyLayout>
  );
}
