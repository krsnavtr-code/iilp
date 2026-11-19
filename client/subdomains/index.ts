import { SubdomainModule } from "./types";
import AmityOnlineMbaPage from "./amityonlinemba/page";
import AmityOnlineMbaThankYou from "./amityonlinemba/thank-you";
import { metadata as amityOnlineMbaMetadata } from "./amityonlinemba/metadata";

import AmityOnlineMcaPage from "./amityonlinemca/page";
import AmityOnlineMcaThankYou from "./amityonlinemca/thank-you";
import { metadata as amityOnlineMcaMetadata } from "./amityonlinemca/metadata";

import AmityOnlineBbaPage from "./amityonlinebba/page";
import AmityOnlineBbaThankYou from "./amityonlinebba/thank-you";
import { metadata as amityOnlineBbaMetadata } from "./amityonlinebba/metadata";

import OnlineManipalMbaPage from "./onlinemanipalmba/page";
import OnlineManipalMbaThankYou from "./onlinemanipalmba/thank-you";
import { metadata as onlineManipalMbaMetadata } from "./onlinemanipalmba/metadata";

import OnlineManipalMcaPage from "./onlinemanipalmca/page";
import OnlineManipalMcaThankYou from "./onlinemanipalmca/thank-you";
import { metadata as onlineManipalMcaMetadata } from "./onlinemanipalmca/metadata";

import OnlineManipalBbaPage from "./onlinemanipalbba/page";
import OnlineManipalBbaThankYou from "./onlinemanipalbba/thank-you";
import { metadata as onlineManipalBbaMetadata } from "./onlinemanipalbba/metadata";

import IgnouOnlineMbaPage from "./ignouonlinemba/page";
import IgnouOnlineMbaThankYou from "./ignouonlinemba/thank-you";
import { metadata as ignouOnlineMbaMetadata } from "./ignouonlinemba/metadata";

import IgnouOnlineMcaPage from "./ignouonlinemca/page";
import IgnouOnlineMcaThankYou from "./ignouonlinemca/thank-you";
import { metadata as ignouOnlineMcaMetadata } from "./ignouonlinemca/metadata";

import IimsrLandingPage from "./iimsr/page";
import IimsrThankYou from "./iimsr/thank-you";
import { metadata as iimsrMetadata } from "./iimsr/metadata";

export const SUBDOMAIN_REGISTRY: Record<string, SubdomainModule> = {
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
  mba: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "Online & Distance MBA | IIMSR Admissions",
      description: "Apply for IIMSR Online & Distance MBA with dual specialisations in HR, Finance, Marketing, IT and Operations.",
    },
  },
  iimsrmba: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "Online & Distance MBA | IIMSR Admissions",
      description: "Apply for IIMSR Online & Distance MBA with dual specialisations in HR, Finance, Marketing, IT and Operations.",
    },
  },
  bba: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "Online & Distance BBA | IIMSR Admissions",
      description: "Apply for IIMSR Online & Distance BBA program for career foundation in business administration.",
    },
  },
  iimsrbba: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "Online & Distance BBA | IIMSR Admissions",
      description: "Apply for IIMSR Online & Distance BBA program for career foundation in business administration.",
    },
  },
  bca: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "Online & Distance BCA | IIMSR Admissions",
      description: "Apply for IIMSR Online & Distance BCA program for software development and IT careers.",
    },
  },
  iimsrbca: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "Online & Distance BCA | IIMSR Admissions",
      description: "Apply for IIMSR Online & Distance BCA program for software development and IT careers.",
    },
  },
  mca: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "Online & Distance MCA | IIMSR Admissions",
      description: "Apply for IIMSR Online & Distance MCA program for advanced software engineering and cloud computing.",
    },
  },
  iimsrmca: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "Online & Distance MCA | IIMSR Admissions",
      description: "Apply for IIMSR Online & Distance MCA program for advanced software engineering and cloud computing.",
    },
  },
  btech: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "B.Tech & Engineering Diplomas | IIMSR Admissions",
      description: "Explore IIMSR B.Tech lateral entry and advance polytechnic engineering diplomas in Mechanical, Civil, CSE & Electrical.",
    },
  },
  iimsrbtech: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "B.Tech & Engineering Diplomas | IIMSR Admissions",
      description: "Explore IIMSR B.Tech lateral entry and advance polytechnic engineering diplomas in Mechanical, Civil, CSE & Electrical.",
    },
  },
  diploma: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "Advance Diplomas in Engineering & Management | IIMSR",
      description: "Fast-track 1-year and 2-year advance diploma programs after 10th, 10+2 and graduation.",
    },
  },
  iimsrdiploma: {
    Component: IimsrLandingPage,
    ThankYouComponent: IimsrThankYou,
    metadata: {
      ...iimsrMetadata,
      title: "Advance Diplomas in Engineering & Management | IIMSR",
      description: "Fast-track 1-year and 2-year advance diploma programs after 10th, 10+2 and graduation.",
    },
  },
  amityonlinemba: {
    Component: AmityOnlineMbaPage,
    ThankYouComponent: AmityOnlineMbaThankYou,
    metadata: amityOnlineMbaMetadata,
  },
  amityonlinemca: {
    Component: AmityOnlineMcaPage,
    ThankYouComponent: AmityOnlineMcaThankYou,
    metadata: amityOnlineMcaMetadata,
  },
  amityonlinebba: {
    Component: AmityOnlineBbaPage,
    ThankYouComponent: AmityOnlineBbaThankYou,
    metadata: amityOnlineBbaMetadata,
  },
  onlinemanipalmba: {
    Component: OnlineManipalMbaPage,
    ThankYouComponent: OnlineManipalMbaThankYou,
    metadata: onlineManipalMbaMetadata,
  },
  onlinemanipalmca: {
    Component: OnlineManipalMcaPage,
    ThankYouComponent: OnlineManipalMcaThankYou,
    metadata: onlineManipalMcaMetadata,
  },
  onlinemanipalbba: {
    Component: OnlineManipalBbaPage,
    ThankYouComponent: OnlineManipalBbaThankYou,
    metadata: onlineManipalBbaMetadata,
  },
  ignouonlinemba: {
    Component: IgnouOnlineMbaPage,
    ThankYouComponent: IgnouOnlineMbaThankYou,
    metadata: ignouOnlineMbaMetadata,
  },
  ignouonlinemca: {
    Component: IgnouOnlineMcaPage,
    ThankYouComponent: IgnouOnlineMcaThankYou,
    metadata: ignouOnlineMcaMetadata,
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
