import { SubdomainModule } from "./types";

import AdmissionLandingPage from "./admission/page";
import AdmissionThankYou from "./admission/thank-you";
import { metadata as admissionMetadata } from "./admission/metadata";

import IimsrLandingPage from "./iimsr/page";
import IimsrThankYou from "./iimsr/thank-you";
import { metadata as iimsrMetadata } from "./iimsr/metadata";

export const SUBDOMAIN_REGISTRY: Record<string, SubdomainModule> = {
  // Main Admission Subdomains
  admission: {
    Component: AdmissionLandingPage,
    ThankYouComponent: AdmissionThankYou,
    metadata: admissionMetadata,
  },
  addmission: {
    Component: AdmissionLandingPage,
    ThankYouComponent: AdmissionThankYou,
    metadata: admissionMetadata,
  },
  admissions: {
    Component: AdmissionLandingPage,
    ThankYouComponent: AdmissionThankYou,
    metadata: admissionMetadata,
  },

  // General IIMSR Subdomains
  iimsr: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: iimsrMetadata,
  },
  iimsradmissions: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: iimsrMetadata,
  },
};

export function getSubdomainModule(subdomain: string): SubdomainModule | null {
  const normalized = (subdomain || "").toLowerCase().trim();
  return SUBDOMAIN_REGISTRY[normalized] || null;
}

export function getAllSubdomainSlugs(): string[] {
  return Object.keys(SUBDOMAIN_REGISTRY);
}

export function isValidSubdomain(subdomain: string): boolean {
  const normalized = (subdomain || "").toLowerCase().trim();
  return Boolean(SUBDOMAIN_REGISTRY[normalized]);
}
