import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  lastUpdated?: string;
  children: React.ReactNode;
  universityContext?: {
    name: string;
    relationship: "manipal" | "amity" | "ignou" | "general";
  };
}

export default function PolicyLayout({
  title,
  subtitle,
  badge = "Official Policy Document",
  lastUpdated = "2025-2026",
  children,
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex flex-col selection:bg-[#ffbd25] selection:text-[#071b4b]">
      {/* Top Compliance Bar */}
      <div className="bg-[#071b4b] text-slate-200 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-100">
              Imperial Institute of Management Science &amp; Research (IIMSR) • ISO 9001:2015 Certified Autonomous Institution
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-200">
            <span>
              Helpline:{" "}
              <a href="tel:+918287434343" className="text-[#f5c84b] font-bold hover:underline">
                +91 8287434343
              </a>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline">
              Email:{" "}
              <a href="mailto:info@iimsr.net.in" className="text-[#f5c84b] font-bold hover:underline">
                info@iimsr.net.in
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
                <Image
                  src="/images/iimsr-logo.png"
                  alt="IIMSR Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#071b4b] leading-none">
                  IIMSR
                </span>
                <span className="text-[10px] font-bold text-slate-600 tracking-wider uppercase mt-0.5">
                  Imperial Institute of Management Science &amp; Research
                </span>
              </div>
            </Link>
          </div>

          <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold">
            <Link
              href="/about-us"
              className="text-slate-600 hover:text-[#071b4b] transition-colors py-1"
            >
              About Us
            </Link>
            <Link
              href="/disclaimer"
              className="text-slate-600 hover:text-[#071b4b] transition-colors py-1"
            >
              Disclaimer
            </Link>
            <Link
              href="/contact-us"
              className="px-3.5 py-2 rounded-lg bg-[#071b4b] text-white hover:bg-[#0c2a75] transition-colors text-xs font-bold shadow-xs"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Title Hero Banner */}
      <section className="bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#071b4b] text-xs font-bold uppercase tracking-wider">
            {badge}
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-[#071b4b] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="text-xs text-slate-600 pt-1 font-medium">
            Academic Session: {lastUpdated} • Imperial Institute of Management Science &amp; Research
          </div>
        </div>
      </section>

      {/* Document Content */}
      <main className="flex-1 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs leading-relaxed text-sm sm:text-[15px] text-slate-700 space-y-8">
            {children}
          </div>
        </div>
      </main>

      {/* Footer Navigation Bar */}
      <footer className="bg-[#071b4b] text-slate-300 text-xs py-10 border-t border-slate-800 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 text-center sm:text-left">
            <div>
              <div className="text-lg font-black text-white">
                IIMSR – Imperial Institute of Management Science &amp; Research
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                ISO 9001:2015 Certified Autonomous Institution for Higher Studies • Registered with Govt. of Karnataka
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 font-semibold text-slate-200">
              <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              <Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          <div className="text-slate-300 text-[11px] leading-relaxed space-y-2">
            <p>
              <strong>Corporate &amp; Admission Office:</strong> E-48, Sector 3, Noida, Gautam Budh Nagar, Uttar Pradesh - 201301, India.
            </p>
            <p>
              <strong>Helpline:</strong> +91 8287434343 / +91 90272 39150 | <strong>Email:</strong> info@iimsr.net.in | <strong>Website:</strong> https://iimsr.net.in
            </p>
            <p className="text-slate-400 pt-2">
              © {new Date().getFullYear()} Imperial Institute of Management Science &amp; Research (IIMSR). All rights reserved. Providing industry-oriented online &amp; distance education programs in Management, Technology, Computer Applications, and Engineering Diplomas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
