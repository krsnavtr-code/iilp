"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CompliantFooter from "./components/CompliantFooter";

const WA_NUMBER = "919027239150";
const DISPLAY_PHONE = "90272 39150";
const HELPLINE_PHONE = "+91 8287434343";

interface CourseCategory {
  id: string;
  name: string;
  count: string;
  icon: string;
  description: string;
  popularCourses: { name: string; duration: string; eligibility: string; path?: string }[];
}

const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: "management",
    name: "Management Programs",
    count: "57 Courses",
    icon: "💼",
    description:
      "Career-boosting management degrees and executive diplomas designed for working professionals and fresh graduates.",
    popularCourses: [
      { name: "Online MBA (Dual Specialisation)", duration: "2 Years", eligibility: "Graduation (Any Stream)", path: "/admission" },
      { name: "Online BBA (Bachelor of Business Admin)", duration: "3 Years", eligibility: "10+2 / Higher Secondary", path: "/admission" },
      { name: "Executive MBA (Fast-Track)", duration: "1 Year", eligibility: "Graduation + Experience", path: "/admission" },
      { name: "Advance Diploma in Business Administration", duration: "1 Year", eligibility: "10+2 or Diploma", path: "/admission" },
      { name: "Post Graduate Diploma in HR / Finance / Marketing", duration: "1 Year", eligibility: "Graduation", path: "/admission" },
      { name: "Diploma in Tourism & Hospital Management", duration: "1 Year", eligibility: "10+2", path: "/admission" },
    ],
  },
  {
    id: "technical",
    name: "Technical & Software",
    count: "30 Courses",
    icon: "💻",
    description:
      "High-demand computer applications, software engineering, cloud computing, and IT certification programs.",
    popularCourses: [
      { name: "Online MCA (Master of Computer Applications)", duration: "2 Years", eligibility: "BCA / B.Sc / Graduate with Math", path: "/admission" },
      { name: "Online BCA (Bachelor of Computer Applications)", duration: "3 Years", eligibility: "10+2 (Any Stream)", path: "/admission" },
      { name: "Advance Diploma in Hardware & Networking", duration: "1 Year", eligibility: "10th / 10+2", path: "/admission" },
      { name: "Diploma in Software Engineering & Web Tech", duration: "1 Year", eligibility: "10+2 / ITI", path: "/admission" },
      { name: "Cyber Security & Information Assurance", duration: "6-12 Months", eligibility: "10+2 or Graduate", path: "/admission" },
    ],
  },
  {
    id: "engineering",
    name: "Engineering & Polytechnic",
    count: "36+ Courses",
    icon: "⚙️",
    description:
      "Comprehensive B.Tech degrees, lateral entry pathways, and advance polytechnic engineering diplomas.",
    popularCourses: [
      { name: "B.Tech Lateral Entry (Working Professionals)", duration: "3 Years", eligibility: "Polytechnic Diploma / B.Sc", path: "/admission" },
      { name: "Advance Diploma in Mechanical Engineering", duration: "3 Years / Lateral", eligibility: "10th / 10+2 / ITI", path: "/admission" },
      { name: "Advance Diploma in Civil Engineering", duration: "3 Years / Lateral", eligibility: "10th / 10+2 / ITI", path: "/admission" },
      { name: "Advance Diploma in Computer Science Engineering", duration: "3 Years / Lateral", eligibility: "10th / 10+2 / ITI", path: "/admission" },
      { name: "Advance Diploma in Electrical & Electronics", duration: "3 Years / Lateral", eligibility: "10th / 10+2 / ITI", path: "/admission" },
      { name: "Advance Diploma in Automobile Engineering", duration: "3 Years / Lateral", eligibility: "10th / 10+2 / ITI", path: "/admission" },
    ],
  },
  {
    id: "creative",
    name: "Design & Digital Marketing",
    count: "12 Courses",
    icon: "🎨",
    description:
      "Creative and new-age career specialisations in digital performance marketing, multimedia, and design.",
    popularCourses: [
      { name: "Bachelor Programme in Animation & Multimedia", duration: "3 Years", eligibility: "10+2 (Any Stream)", path: "/admission" },
      { name: "Advance Diploma in Interior Design", duration: "1 Year", eligibility: "10+2", path: "/admission" },
      { name: "Certified Digital Marketing Specialist", duration: "6 Months", eligibility: "10+2 or Graduate", path: "/admission" },
      { name: "Professional Financial Analysis & Accounting", duration: "1 Year", eligibility: "10+2 Commerce / Graduate", path: "/admission" },
    ],
  },
];

export default function RootHomePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("management");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleLeadSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity() || isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(form);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          phone: String(formData.get("phone") || "").trim(),
          state: String(formData.get("state") || "").trim(),
          qualification: String(formData.get("qualification") || "").trim(),
          program: String(formData.get("program") || "").trim(),
          specialisation: String(formData.get("program") || "").trim(),
          university: "Imperial Institute of Management Science & Research (IIMSR)",
          subdomain: "iimsr",
          source: "IIMSR Flagship Landing Page",
          adminEmail: "anand24h@gmail.com",
        }),
      });
    } catch (err) {
      console.warn("Lead submit notice:", err);
    } finally {
      setIsSubmitting(false);
      router.push("/thank-you");
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const activeCategory =
    COURSE_CATEGORIES.find((c) => c.id === activeTab) || COURSE_CATEGORIES[0];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex flex-col selection:bg-[#ffbd25] selection:text-[#071b4b]">
      {/* 1. Top Compliance & Helpline Announcement Bar */}
      <div className="bg-[#071b4b] text-white py-2 px-4 text-xs font-semibold border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              Admissions Open 2025-26 • Imperial Institute of Management Science &amp; Research • ISO 9001:2015 Certified
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs mx-auto sm:mx-0">
            <span>
              Helpline:{" "}
              <a href="tel:+918287434343" className="text-[#ffbd25] font-bold hover:underline">
                {HELPLINE_PHONE}
              </a>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20admission%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-bold hover:underline"
              >
                {DISPLAY_PHONE}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 relative flex-shrink-0">
              <Image
                src="/images/iimsr-logo.png"
                alt="IIMSR Official Emblem"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-black text-[#071b4b] leading-none tracking-tight">
                IIMSR
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 block mt-0.5 leading-tight uppercase">
                Imperial Institute of Management Science &amp; Research
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-700">
            <a href="#courses" className="hover:text-[#f07822] transition-colors">Courses</a>
            <a href="#advantages" className="hover:text-[#f07822] transition-colors">IIMSR Advantages</a>
            <a href="#procedure" className="hover:text-[#f07822] transition-colors">Admission Steps</a>
            <a href="#portal" className="hover:text-[#f07822] transition-colors">Student Portal</a>
            <a href="#faqs" className="hover:text-[#f07822] transition-colors">FAQs</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#apply"
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#ffc52c] to-[#f28a00] text-slate-900 font-extrabold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
            >
              Apply Online →
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 3. Hero Section with High-Converting Admission Lead Form */}
        <section
          id="apply"
          className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-50 via-slate-50 to-blue-50 py-10 sm:py-16 border-b border-slate-200 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff1d7] border border-[#ffd78c] text-[#8b4a00] font-extrabold text-xs tracking-wide">
                <span>⭐ ISO 9001:2015 CERTIFIED • AUTONOMOUS INSTITUTION</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#071b4b] leading-[1.08] tracking-tight">
                ONE EXAM. <br />
                <span className="text-[#f07822]">ONE DEGREE.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
                <strong className="text-[#071b4b] font-bold block mb-1">
                  Empowering Futures with Industry-Aligned Distance &amp; Online Education.
                </strong>
                Explore recognized BBA, MBA, BCA, MCA, B.Tech and Advance Engineering Diplomas. Flexible study modes designed for working professionals and career aspirants.
              </p>

              {/* Trust Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                  <div className="text-xl mb-1">🎓</div>
                  <div className="font-bold text-xs text-slate-900">170+ Courses</div>
                  <div className="text-[11px] text-slate-500">Degree &amp; Diplomas</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                  <div className="text-xl mb-1">📅</div>
                  <div className="font-bold text-xs text-slate-900">Weekend Classes</div>
                  <div className="text-[11px] text-slate-500">Video &amp; PPT Lectures</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                  <div className="text-xl mb-1">📝</div>
                  <div className="font-bold text-xs text-slate-900">Case-Study Exams</div>
                  <div className="text-[11px] text-slate-500">Flexible Online Format</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                  <div className="text-xl mb-1">🎁</div>
                  <div className="font-bold text-xs text-slate-900">Up to 50% Scholarship</div>
                  <div className="text-[11px] text-slate-500">Merit &amp; Need-Based</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                  <div className="text-xl mb-1">🤝</div>
                  <div className="font-bold text-xs text-slate-900">15% Reserved Seats</div>
                  <div className="text-[11px] text-slate-500">SC/ST/OBC/Defence</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                  <div className="text-xl mb-1">💼</div>
                  <div className="font-bold text-xs text-slate-900">Placement Assistance</div>
                  <div className="text-[11px] text-slate-500">500+ Corporate Network</div>
                </div>
              </div>

              {/* Direct Call & WhatsApp Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:+918287434343`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#071b4b] text-white font-extrabold text-xs sm:text-sm shadow-md hover:bg-[#0c2a75] transition-all"
                >
                  <span>📞 Call Helpline: +91 8287434343</span>
                </a>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20IIMSR%20admission%20guidance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md hover:bg-emerald-700 transition-all"
                >
                  <span>💬 WhatsApp: {DISPLAY_PHONE}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Lead Capture Form Box */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ffc52c] to-[#f28a00]"></div>

                <div className="mb-5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#f07822]">
                    Free Academic Counselling
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#071b4b] mt-0.5">
                    Apply for Admissions
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fill this quick form to receive course prospectus, syllabus details, and scholarship eligibility.
                  </p>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Candidate Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter full name"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm outline-none focus:border-[#071b4b] focus:ring-3 focus:ring-[#071b4b]/10 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm outline-none focus:border-[#071b4b] focus:ring-3 focus:ring-[#071b4b]/10 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number (10 Digits) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm outline-none focus:border-[#071b4b] focus:ring-3 focus:ring-[#071b4b]/10 bg-slate-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Qualification *
                      </label>
                      <select
                        name="qualification"
                        required
                        defaultValue=""
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs outline-none focus:border-[#071b4b] focus:ring-3 focus:ring-[#071b4b]/10 bg-white"
                      >
                        <option value="" disabled>Select</option>
                        <option value="Class 10">Class 10th</option>
                        <option value="Class 12">Class 12th</option>
                        <option value="Diploma">Diploma / ITI</option>
                        <option value="Graduate">Graduation</option>
                        <option value="Postgraduate">Postgraduate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        State / City *
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        placeholder="State or City"
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs outline-none focus:border-[#071b4b] focus:ring-3 focus:ring-[#071b4b]/10 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Programme of Interest *
                    </label>
                    <select
                      name="program"
                      required
                      defaultValue=""
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm outline-none focus:border-[#071b4b] focus:ring-3 focus:ring-[#071b4b]/10 bg-white"
                    >
                      <option value="" disabled>Choose Programme</option>
                      <option value="Online MBA (Dual Specialisation)">Online MBA (Dual Specialisation)</option>
                      <option value="Online BBA">Online BBA (Business Administration)</option>
                      <option value="Online MCA">Online MCA (Computer Applications)</option>
                      <option value="Online BCA">Online BCA (Computer Applications)</option>
                      <option value="B.Tech Lateral Entry / Engineering">B.Tech Engineering (Mechanical / Civil / CSE / Electrical)</option>
                      <option value="Advance Engineering Diploma">Advance Polytechnic / Engineering Diploma</option>
                      <option value="Advance Diploma in Business Admin">Advance Diploma in Business Administration</option>
                      <option value="Digital Marketing / Multimedia">Digital Marketing / Animation &amp; Multimedia</option>
                      <option value="Need Guidance">Need Guidance from Counsellor</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#ffc52c] to-[#f28a00] text-slate-900 font-extrabold text-sm shadow-md hover:brightness-105 active:scale-98 transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting Enquiry..." : "Get Free Admission Counselling →"}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center leading-normal">
                    🔒 100% Confidential. Your data is used exclusively for official IIMSR admission guidance.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Programs Explorer Section */}
        <section id="courses" className="py-14 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-black tracking-wider uppercase text-[#f07822]">
                ACADEMIC DISCIPLINES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#071b4b] mt-2 mb-3">
                Explore IIMSR Courses &amp; Faculties
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Choose from over 170+ internationally respected undergraduate, postgraduate, and professional diploma programs.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
              {COURSE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  type="button"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? "bg-[#071b4b] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      activeTab === cat.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Category Content */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#071b4b] flex items-center gap-2">
                    <span>{activeCategory.icon}</span>
                    <span>{activeCategory.name}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                    {activeCategory.description}
                  </p>
                </div>
                <a
                  href="#apply"
                  className="self-start sm:self-auto px-4 py-2 rounded-lg bg-[#071b4b] text-white text-xs font-bold hover:bg-[#0c2a75] transition-colors"
                >
                  Enquire for this Stream →
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCategory.popularCourses.map((c, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#f07822]/50 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                        <span className="bg-blue-50 text-[#071b4b] px-2 py-0.5 rounded-md">
                          ⏳ {c.duration}
                        </span>
                        <span className="text-[11px] text-emerald-600 font-bold">Admissions Open</span>
                      </div>
                      <h4 className="font-bold text-base text-slate-900 leading-snug mb-2">
                        {c.name}
                      </h4>
                      <div className="text-xs text-slate-500 mb-4">
                        <strong>Eligibility:</strong> {c.eligibility}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={c.path || "/iimsr"}
                        className="text-xs font-bold text-[#071b4b] hover:text-[#f07822] transition-colors"
                      >
                        Learn More ›
                      </Link>
                      <a
                        href="#apply"
                        className="text-xs font-extrabold px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. The IIMSR Advantage Section */}
        <section id="advantages" className="py-14 sm:py-20 bg-gradient-to-b from-[#f8fafc] to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black tracking-wider uppercase text-[#f07822]">
                WHY STUDY AT IIMSR
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#071b4b] mt-2 mb-3">
                The IIMSR Institutional Advantages
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Brings together worldwide accepted courses registered with the Government of Karnataka, certified for quality training and industry relevance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#071b4b] flex items-center justify-center text-2xl font-bold mb-4">
                  📜
                </div>
                <h3 className="font-serif text-lg font-bold text-[#071b4b] mb-2">
                  ISO 9001:2015 Certified
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Globus Certificate of Registration (ISO 9001:2015) certified for Quality Training Provider in Business and Technical Courses, adhering to international academic benchmarks.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl font-bold mb-4">
                  📚
                </div>
                <h3 className="font-serif text-lg font-bold text-[#071b4b] mb-2">
                  Weekend Classes &amp; E-Learning
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Offers weekend classes to management and engineering students at designated centers to remove FAQs, plus comprehensive online video lectures and PPT courseware.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4">
                  💻
                </div>
                <h3 className="font-serif text-lg font-bold text-[#071b4b] mb-2">
                  Case-Study Based Examination
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Students can opt to undertake examinations at designated centers or through case-based continuous evaluation. Examination schedules, admit cards, and results are published on the net.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-2xl font-bold mb-4">
                  🎖️
                </div>
                <h3 className="font-serif text-lg font-bold text-[#071b4b] mb-2">
                  15% Reservation &amp; 10% Concession
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  15% seats reserved in each stream for SC, ST, OBC, Handicapped, Armed Forces Personnel, Kashmiri Migrants &amp; War Widows&apos; Children with a 10% permissible fee discount.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center text-2xl font-bold mb-4">
                  🎁
                </div>
                <h3 className="font-serif text-lg font-bold text-[#071b4b] mb-2">
                  Up to 50% Merit Scholarships
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Generous scholarships offering up to 50% tuition fee waiver to meritorious and economically disadvantaged students, decided strictly on academic merit.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center text-2xl font-bold mb-4">
                  🚀
                </div>
                <h3 className="font-serif text-lg font-bold text-[#071b4b] mb-2">
                  Dedicated Placement Cell
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The active IIMSR placement cell helps students and working professionals secure promotions and rewarding placement in top corporate organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Admission Procedure (4-Step Road) */}
        <section id="procedure" className="py-14 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black tracking-wider uppercase text-[#f07822]">
                EASY &amp; TRANSPARENT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#071b4b] mt-2 mb-3">
                Simple 4-Step Admission Procedure
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Get enrolled into your chosen diploma or degree program without complicated hurdles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3 relative">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#071b4b] text-white font-black text-xl flex items-center justify-center">
                  1
                </div>
                <h3 className="font-bold text-base text-slate-900">Enquire Online</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submit the online enquiry form with your contact details and preferred course.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3 relative">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#f07822] text-white font-black text-xl flex items-center justify-center">
                  2
                </div>
                <h3 className="font-bold text-base text-slate-900">Counselling &amp; Eligibility</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An academic advisor assesses your qualification, career goals, and applicable fee concessions.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3 relative">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#071b4b] text-white font-black text-xl flex items-center justify-center">
                  3
                </div>
                <h3 className="font-bold text-base text-slate-900">Document Submission</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provide soft copies of educational certificates, photo ID, and category proof (if claiming discount).
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3 relative">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#16a34a] text-white font-black text-xl flex items-center justify-center">
                  4
                </div>
                <h3 className="font-bold text-base text-slate-900">Enrolment &amp; Study Access</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Receive your official Roll Number, student portal login, study material, and video lectures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Student Portal & Academic Services Section */}
        <section id="portal" className="py-14 sm:py-20 bg-[#071b4b] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-black tracking-wider uppercase text-[#ffbd25]">
                  STUDENT LEARNING ECOSYSTEM
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                  IIMSR Student Portal &amp; Digital Services
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Every enrolled student receives access to comprehensive digital services designed to support remote and blended learning:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10">
                    <span>📹</span>
                    <span>Recorded Video Lectures on Demand</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10">
                    <span>📑</span>
                    <span>PowerPoint (PPT) Lecture Notes</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10">
                    <span>📅</span>
                    <span>Exam Dates &amp; Admit Card Download</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10">
                    <span>🏆</span>
                    <span>Online Result &amp; Grade Verification</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h3 className="font-bold text-lg text-[#071b4b] mb-2">
                  Official Verification &amp; Portal
                </h3>
                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  Already a registered student? Visit the official institute portal to check your admission status, fee receipts, or examination timetable.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://iimsr.net.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 rounded-xl bg-[#071b4b] text-white text-center font-bold text-xs hover:bg-[#0c2a75] transition-colors"
                  >
                    Visit Official Portal (iimsr.net.in) ↗
                  </a>
                  <a
                    href="#apply"
                    className="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ffc52c] to-[#f28a00] text-slate-900 text-center font-extrabold text-xs shadow-md hover:brightness-105 transition-all"
                  >
                    New Admission Enquiry →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Frequently Asked Questions (FAQs) */}
        <section id="faqs" className="py-14 sm:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-black tracking-wider uppercase text-[#f07822]">
                CLARITY FIRST
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#071b4b] mt-2 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600">
                Transparent answers to common queries regarding IIMSR admissions, study modes, and evaluations.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "What is IIMSR and is it a recognized institution?",
                  a: "Imperial Institute of Management Science & Research (IIMSR) is an autonomous educational institution registered with the Government of Karnataka (India) and certified with Globus ISO 9001:2015 standards for Quality Training in Business and Technical Courses. It specializes in career-oriented distance and online learning programs.",
                },
                {
                  q: "Can working professionals manage these courses alongside their job?",
                  a: "Yes, absolutely! IIMSR programs are purposefully crafted for working professionals. Study materials, recorded video lectures, and PPTs are accessible 24/7. Weekend classes are conducted at designated centers, and exams can be taken through flexible case-based assessment.",
                },
                {
                  q: "What are the examination modes available?",
                  a: "Students can choose between two convenient modes: written examinations at designated institutional test centers, or continuous case-study based online assessment systems. Schedules, roll numbers, and results are published on the official web portal.",
                },
                {
                  q: "What fee concessions and scholarships are offered?",
                  a: "IIMSR reserves 15% seats in each stream for SC, ST, OBC, Persons with Disabilities, Armed Forces Personnel, Kashmiri Migrants, and Children of War Widows, alongside a 10% permissible fee discount with documentary proof. Additionally, up to 50% merit-based fee waivers are awarded.",
                },
                {
                  q: "How do I apply and what documents are required?",
                  a: "Fill out the admission enquiry form on this page or call our helpline (+91 8287434343). You will need self-attested soft copies of your 10th/12th/Graduation mark sheets, photo ID proof, and passport-size photographs.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    type="button"
                    className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#071b4b] flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xl text-slate-400 font-light">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 9. Mobile Sticky CTA Bottom Bar */}
      <div className="md:hidden flex fixed bottom-0 left-0 right-0 bg-white p-2.5 px-3 shadow-[0_-5px_20px_rgba(7,27,75,0.12)] z-30 gap-2.5 border-t border-slate-200">
        <a
          className="flex-1 py-3 px-2 rounded-xl text-xs font-extrabold bg-[#16a34a] text-white text-center flex items-center justify-center gap-1.5 shadow-sm active:brightness-95 transition-all"
          href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20IIMSR%20admission%20details.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Chat
        </a>
        <a
          className="flex-1 py-3 px-2 rounded-xl text-xs font-extrabold bg-gradient-to-br from-[#ffc52c] to-[#f28a00] text-slate-900 text-center flex items-center justify-center gap-1.5 shadow-sm active:brightness-95 transition-all"
          href="tel:+918287434343"
        >
          Call Helpline
        </a>
      </div>

      {/* 10. Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20IIMSR%20admission%20details.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Admission Chat"
        className="fixed right-4 bottom-20 md:bottom-6 w-13 h-13 rounded-full bg-[#16a34a] text-white flex items-center justify-center shadow-lg z-30 hover:scale-105 active:scale-95 transition-all"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* 11. Footer */}
      <CompliantFooter />
    </div>
  );
}
