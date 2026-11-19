import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface CompliantFooterProps {
  universityName?: string;
  universityShortName?: string;
  programName?: string;
  partnershipType?: string;
  theme?: "dark" | "navy" | "slate" | "white";
}

export default function CompliantFooter({
  universityName = "Imperial Institute of Management Science & Research",
  universityShortName = "IIMSR",
  programName = "Higher Education Degree & Diploma Programmes",
  theme = "navy",
}: CompliantFooterProps) {
  const isDark = theme !== "white";
  const bgClass =
    theme === "navy"
      ? "bg-[#071b4b] text-[#c9d8ee] border-white/10"
      : theme === "slate"
      ? "bg-slate-950 text-slate-400 border-slate-800"
      : theme === "white"
      ? "bg-white text-slate-700 border-slate-200"
      : "bg-[#061638] text-slate-300 border-white/10";

  return (
    <footer className={`pt-12 pb-24 sm:pb-12 border-t text-xs ${bgClass} transition-colors`}>
      <div className="w-[min(1220px,94%)] mx-auto space-y-10">
        {/* Row 1: Brand, Accreditations, and Links */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b ${isDark ? "border-white/10" : "border-slate-200"}`}>
          {/* Column 1: Brand & Role */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src="/images/iimsr-logo.png"
                  alt="IIMSR Emblem"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
                  IIMSR
                </span>
                <span className="text-[10px] font-bold text-slate-300 tracking-wider uppercase mt-0.5">
                  Imperial Institute of Management Science &amp; Research
                </span>
              </div>
            </div>

            <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"} max-w-lg leading-relaxed`}>
              <strong className={isDark ? "text-white" : "text-slate-900"}>IIMSR</strong> is an ISO 9001:2015 certified autonomous educational institution registered with the Government of Karnataka (India). We groom students to administer and manage ever-changing global business dynamics through flexible online, distance, and blended degree and diploma courses.
            </p>

            <div className={`pt-2 text-[11px] ${isDark ? "text-slate-300" : "text-slate-600"} space-y-1`}>
              <div>
                <strong className={isDark ? "text-white" : "text-slate-800"}>Corporate &amp; Admission Office:</strong> E-48, Sector 3, Noida, Gautam Budh Nagar, Uttar Pradesh - 201301, India.
              </div>
              <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <span>
                  Helpline:{" "}
                  <a href="tel:+918287434343" className={`${isDark ? "text-amber-300" : "text-blue-700 font-bold"} hover:underline`}>
                    +91 8287434343
                  </a>
                </span>
                <span>•</span>
                <span>
                  WhatsApp:{" "}
                  <a href="https://wa.me/919027239150" target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-emerald-400" : "text-emerald-600 font-bold"} hover:underline`}>
                    +91 90272 39150
                  </a>
                </span>
                <span>•</span>
                <span>
                  Email:{" "}
                  <a href="mailto:info@iimsr.net.in" className={`${isDark ? "text-blue-300" : "text-blue-700 font-medium"} hover:underline`}>
                    info@iimsr.net.in
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Legal & Policy Pages */}
          <div className="space-y-3">
            <h4 className={`${isDark ? "text-white" : "text-slate-900 font-black"} text-sm tracking-wide uppercase text-[11px]`}>
              Institute Policies &amp; Info
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link
                  href="/about-us"
                  className={`${isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-[#0066ff]"} hover:underline transition-colors flex items-center gap-1.5`}
                >
                  <span className="text-[#f07822]">›</span> About IIMSR &amp; Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className={`${isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-[#0066ff]"} hover:underline transition-colors flex items-center gap-1.5`}
                >
                  <span className="text-[#f07822]">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className={`${isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-[#0066ff]"} hover:underline transition-colors flex items-center gap-1.5`}
                >
                  <span className="text-[#f07822]">›</span> Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className={`${isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-[#0066ff]"} hover:underline transition-colors flex items-center gap-1.5`}
                >
                  <span className="text-[#f07822]">›</span> Statutory Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={`${isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-[#0066ff]"} hover:underline transition-colors flex items-center gap-1.5`}
                >
                  <span className="text-[#f07822]">›</span> Contact &amp; Counselling Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="space-y-3">
            <h4 className={`${isDark ? "text-white" : "text-slate-900 font-black"} text-sm tracking-wide uppercase text-[11px]`}>
              Popular Academic Courses
            </h4>
            <ul className={`space-y-1.5 text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              <li>
                <Link href="/admission" className={`${isDark ? "hover:text-white" : "hover:text-slate-900 font-medium"} transition-colors`}>
                  Online MBA (Dual Specialisations)
                </Link>
              </li>
              <li>
                <Link href="/admission" className={`${isDark ? "hover:text-white" : "hover:text-slate-900 font-medium"} transition-colors`}>
                  Online BBA (Business Administration)
                </Link>
              </li>
              <li>
                <Link href="/admission" className={`${isDark ? "hover:text-white" : "hover:text-slate-900 font-medium"} transition-colors`}>
                  Online MCA (Computer Applications)
                </Link>
              </li>
              <li>
                <Link href="/admission" className={`${isDark ? "hover:text-white" : "hover:text-slate-900 font-medium"} transition-colors`}>
                  Online BCA (Computer Applications)
                </Link>
              </li>
              <li>
                <Link href="/admission" className={`${isDark ? "hover:text-white" : "hover:text-slate-900 font-medium"} transition-colors`}>
                  B.Tech Engineering &amp; Lateral Entry
                </Link>
              </li>
              <li>
                <Link href="/admission" className={`${isDark ? "hover:text-white" : "hover:text-slate-900 font-medium"} transition-colors`}>
                  Advance Polytechnic &amp; Engg. Diplomas
                </Link>
              </li>
              <li>
                <a href="https://iimsr.net.in" target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-amber-300 hover:text-white" : "text-blue-700"} font-medium transition-colors`}>
                  Official Portal (iimsr.net.in) ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2: Statutory Notice Box */}
        <div className={`border rounded-2xl p-5 sm:p-6 text-[11px] leading-relaxed space-y-2.5 ${
          isDark
            ? "bg-white/5 border-white/10 text-slate-300"
            : "bg-amber-50/70 border-amber-200 text-slate-800 shadow-sm"
        }`}>
          <div className={`flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"} font-bold text-xs uppercase tracking-wider`}>
            <span className="text-amber-400">ℹ️</span>
            <span>Accreditation &amp; Academic Notice:</span>
          </div>

          <p>
            <strong>Imperial Institute of Management Science &amp; Research (IIMSR)</strong> is an autonomous institution registered with the Government of Karnataka (India) and certified with Globus ISO 9001:2015 standards for Quality Training in Business &amp; Technical Courses. IIMSR reserves 15% seats in each stream for SC, ST, OBC, Persons with Disabilities, Armed Forces Personnel, Kashmiri Migrants, and Children of War Widows, alongside permissible fee concessions. Case-study and center-based examinations, online roll numbers, admit cards, and results are published on the official web portal (<code className="text-amber-300">iimsr.net.in</code>).
          </p>
        </div>

        {/* Row 3: Bottom Copyright & Verification Line */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px] ${isDark ? "text-slate-400" : "text-slate-600"} text-center sm:text-left`}>
          <div>
            © {new Date().getFullYear()} <strong className={isDark ? "text-white" : "text-slate-900"}>Imperial Institute of Management Science &amp; Research (IIMSR)</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className={isDark ? "text-slate-300" : "text-slate-600"}>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span className={`${isDark ? "text-emerald-400" : "text-emerald-700"} font-semibold`}>Autonomous Higher Studies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
