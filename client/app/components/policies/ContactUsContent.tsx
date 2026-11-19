"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ContactUsContent() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          qualification: String(formData.get("qualification") || "").trim(),
          program: String(formData.get("course") || "").trim(),
          specialisation: String(formData.get("course") || "").trim(),
          university: "Imperial Institute of Management Science & Research (IIMSR)",
          subdomain: "iimsr",
          source: "IIMSR Contact Us Page",
          adminEmail: "anand24h@gmail.com",
        }),
      });
      setSubmitted(true);
      router.push("/thank-you");
    } catch (err) {
      console.warn("Contact form submit error:", err);
      setSubmitted(true);
      router.push("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2">
          Contact IIMSR Admission &amp; Student Support Desk
        </h2>
        <p className="text-sm text-slate-600">
          Whether you are exploring diploma, undergraduate, or postgraduate degree options, our dedicated admission advisors and student coordinators are here to assist you with eligibility verification, syllabus overviews, fee structures, and enrolment.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Office Address */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#071b4b] flex items-center justify-center text-lg font-bold">
            📍
          </div>
          <h3 className="text-sm font-bold text-slate-900">Corporate &amp; Admission Office</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            E-48, Sector 3, Noida, Gautam Budh Nagar, Uttar Pradesh - 201301, India.
          </p>
        </div>

        {/* Card 2: Phone & WhatsApp */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-lg font-bold">
            📞
          </div>
          <h3 className="text-sm font-bold text-slate-900">Phone &amp; WhatsApp</h3>
          <p className="text-xs text-slate-600">
            Helpline:{" "}
            <a href="tel:+918287434343" className="font-bold text-[#071b4b] hover:underline">
              +91 8287434343
            </a>
            <br />
            Alternate / WhatsApp:{" "}
            <a href="https://wa.me/919027239150" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">
              +91 90272 39150
            </a>
          </p>
        </div>

        {/* Card 3: Email & Hours */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-lg font-bold">
            ✉️
          </div>
          <h3 className="text-sm font-bold text-slate-900">Email &amp; Support Hours</h3>
          <p className="text-xs text-slate-600">
            Email:{" "}
            <a href="mailto:info@iimsr.net.in" className="font-bold text-[#071b4b] hover:underline">
              info@iimsr.net.in
            </a>
            <br />
            Hours: Monday – Saturday: 9:30 AM – 6:30 PM IST
          </p>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <h3 className="text-lg font-bold text-[#071b4b] mb-1">
          Send an Online Admission Enquiry
        </h3>
        <p className="text-xs text-slate-600 mb-5">
          Fill out the form below. An academic counsellor will review your profile and reach out within 15 minutes.
        </p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800">
            <div className="text-3xl mb-2">✓</div>
            <h4 className="font-bold text-base">Enquiry Submitted Successfully!</h4>
            <p className="text-xs mt-1">Our counsellor will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-[#071b4b] focus:ring-2 focus:ring-[#071b4b]/10"
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
                  placeholder="Enter your email"
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-[#071b4b] focus:ring-2 focus:ring-[#071b4b]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number (10 digits) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-[#071b4b] focus:ring-2 focus:ring-[#071b4b]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Highest Qualification *
                </label>
                <select
                  name="qualification"
                  required
                  defaultValue=""
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-[#071b4b] focus:ring-2 focus:ring-[#071b4b]/10 bg-white"
                >
                  <option value="" disabled>Select qualification</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 12">Class 12</option>
                  <option value="Diploma">Diploma / Polytechnic</option>
                  <option value="Graduate">Graduation / Bachelor Degree</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Working Professional">Working Professional</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Interested Course / Faculty *
                </label>
                <select
                  name="course"
                  required
                  defaultValue=""
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-[#071b4b] focus:ring-2 focus:ring-[#071b4b]/10 bg-white"
                >
                  <option value="" disabled>Select interested program</option>
                  <option value="Online MBA">Online MBA (Master of Business Administration)</option>
                  <option value="Online BBA">Online BBA (Bachelor of Business Administration)</option>
                  <option value="Online MCA">Online MCA (Master of Computer Applications)</option>
                  <option value="Online BCA">Online BCA (Bachelor of Computer Applications)</option>
                  <option value="B.Tech Distance/Lateral">B.Tech (Civil / Mechanical / CSE / Electrical)</option>
                  <option value="Advance Engineering Diploma">Advance Polytechnic / Engineering Diploma</option>
                  <option value="Executive Management Diploma">Executive Management Diploma / PGDM</option>
                  <option value="Digital Marketing / Design">Digital Marketing / Interior Design / Animation</option>
                  <option value="Other / Need Counselling">Other / Need Counselling</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#ffc52c] to-[#f28a00] text-slate-900 font-extrabold text-sm shadow-md hover:brightness-105 active:scale-98 transition-all cursor-pointer disabled:opacity-75"
            >
              {isSubmitting ? "Submitting..." : "Submit Admission Enquiry →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
