import React from "react";
import Link from "next/link";

export default function AboutUsContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          1. About IIMSR
        </h2>
        <p className="mb-3">
          <strong>Imperial Institute of Management Science &amp; Research (IIMSR)</strong> is one of India&apos;s leading autonomous educational institutions for higher studies. Registered with the Government of Karnataka (India) and holding Globus Certificate of Registration (ISO 9001:2015) for being a Quality Training Provider in Business &amp; Technical Courses, IIMSR is committed to grooming students to understand, administer, and manage ever-changing global business dynamics.
        </p>
        <p>
          Headquartered in Noida, Uttar Pradesh, with student services spanning India and international locations, IIMSR provides distance, online, and blended education pathways in Management, Computer Applications, Engineering, and Professional Diplomas.
        </p>
      </div>

      {/* Vision, Mission, and Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="text-base font-bold text-[#071b4b] mb-2">Our Vision</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            To provide high-quality, practical skills at affordable rates to individuals across India, capacitating a competent workforce that competes favourably in the national and global job market.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <div className="text-2xl mb-2">🚀</div>
          <h3 className="text-base font-bold text-[#071b4b] mb-2">Our Mission</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            To offer industry-integrated academic programs combining researched curriculum with hands-on practice, grooming future leaders, managers, and technical specialists.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <div className="text-2xl mb-2">💡</div>
          <h3 className="text-base font-bold text-[#071b4b] mb-2">Our Philosophy</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Education must be accessible, flexible, and relevant to modern industrial demands. We believe every learner deserves the opportunity to upgrade their qualifications without career disruption.
          </p>
        </div>
      </div>

      {/* Corporate Identity & Statutory Details */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <span>🏛️</span> Institutional Identity &amp; Statutory Details
        </h3>
        <p className="text-xs text-slate-600">
          In full transparency with prospective students, regulatory bodies, and academic partners, the institutional profile of IIMSR is presented below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Institution Name:
            </span>
            <span className="font-bold text-slate-900 text-sm">
              Imperial Institute of Management Science &amp; Research (IIMSR)
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Quality Certification:
            </span>
            <span className="text-slate-800 font-semibold">
              ISO 9001:2015 Certified (Globus Registration)
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Institutional Status:
            </span>
            <span className="text-slate-800">
              Autonomous Educational Institute of International Standards; Registered with Govt. of Karnataka
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Official Portal:
            </span>
            <a href="https://iimsr.net.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold hover:underline">
              https://iimsr.net.in
            </a>
          </div>
          <div className="space-y-1 md:col-span-2">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Corporate &amp; Admission Office:
            </span>
            <span className="text-slate-800 font-medium">
              E-48, Sector 3, Noida, Gautam Budh Nagar, Uttar Pradesh - 201301, India
            </span>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Admission Helpline:
            </span>
            <a href="tel:+918287434343" className="text-blue-700 font-bold hover:underline">
              +91 8287434343 / +91 90272 39150
            </a>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px] block">
              Official Email:
            </span>
            <a href="mailto:info@iimsr.net.in" className="text-blue-700 font-bold hover:underline">
              info@iimsr.net.in
            </a>
          </div>
        </div>
      </div>

      {/* Key Academic Advantages */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          2. The IIMSR Advantage
        </h2>
        <div className="space-y-3 text-sm text-slate-600">
          <p>
            <strong>Flexible Study Options:</strong> IIMSR offers weekend classes to management and technical students at designated centers to resolve doubts, alongside complete online learning resources including recorded video lectures, PPT presentations, and comprehensive course kits.
          </p>
          <p>
            <strong>Modern Examination System:</strong> Students can choose to undertake written examinations at test centers or complete evaluations through case-study based online systems. Examination schedules, admit cards, and results are published on the official web portal for total transparency.
          </p>
          <p>
            <strong>Social Inclusion &amp; Reservation:</strong> IIMSR reserves 15% seats in each stream for SC, ST, OBC, Persons with Disabilities (Handicapped), Armed Forces Personnel, Kashmiri Migrants, and Children of War Widows, alongside a 10% permissible fee discount upon submission of documentary proof.
          </p>
          <p>
            <strong>Merit Scholarships:</strong> Up to 50% tuition fee waiver scholarships are awarded to meritorious and economically disadvantaged students at the discretion of the Academic Council.
          </p>
          <p>
            <strong>Placement Cell Assistance:</strong> The dedicated IIMSR placement wing works continuously to assist students and alumni in securing rewarding career opportunities in leading corporate enterprises.
          </p>
        </div>
      </div>

      {/* Academic Streams */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
          3. Faculties &amp; Programs Offered
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <h4 className="font-bold text-sm text-[#071b4b] mb-1.5">Management Programs (57+ Courses)</h4>
            <p className="text-slate-600">BBA, MBA (Dual &amp; Executive), Post Graduate Diplomas in Human Resource Management, Financial Management, Marketing, Operations, Logistics &amp; Supply Chain, Tourism, and Hospital Administration.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <h4 className="font-bold text-sm text-[#071b4b] mb-1.5">Technical &amp; Software (30+ Courses)</h4>
            <p className="text-slate-600">BCA, MCA, Software Engineering, Hardware &amp; Networking, Cyber Security, Artificial Intelligence, and Cloud Computing.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <h4 className="font-bold text-sm text-[#071b4b] mb-1.5">Engineering &amp; Polytechnic Diplomas</h4>
            <p className="text-slate-600">B.Tech, M.Tech, and Advance Diplomas in Civil Engineering, Mechanical, Computer Science, Electrical &amp; Electronics, Automobile, and Chemical Engineering.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <h4 className="font-bold text-sm text-[#071b4b] mb-1.5">Design &amp; Contemporary Careers</h4>
            <p className="text-slate-600">Animation &amp; Multimedia Technology, Interior Design, Digital Performance Marketing, and Security Management.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#071b4b] to-[#0f2d7a] rounded-xl p-6 text-white text-center space-y-3">
        <h3 className="text-lg font-bold">Have Questions About Admissions or Course Eligibility?</h3>
        <p className="text-xs text-blue-100 max-w-lg mx-auto">
          Our admission counsellors provide personalized 1-on-1 guidance to help you select the ideal academic program aligned with your career goals.
        </p>
        <div className="pt-2">
          <Link
            href="/contact-us"
            className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#ffc52c] to-[#f28a00] text-slate-900 font-extrabold text-xs shadow-md hover:brightness-105 transition-all"
          >
            Connect With an Admission Counsellor →
          </Link>
        </div>
      </div>
    </div>
  );
}
