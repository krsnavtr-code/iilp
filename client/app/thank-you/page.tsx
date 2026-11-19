import { Metadata } from "next";
import IimsrThankYou from "@/subdomains/iimsr/thank-you";

export const metadata: Metadata = {
  title: "Thank You | IIMSR Admissions",
  description:
    "Thank you for your admission enquiry with Imperial Institute of Management Science & Research (IIMSR). Our academic counselling team will contact you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <IimsrThankYou subdomain="iimsr" />;
}
