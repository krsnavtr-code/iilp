import React from "react";
import Link from "next/link";

interface DisclaimerContentProps {
  universityContext?: {
    name?: string;
    shortName?: string;
    relationship?: string;
  };
}

export default function DisclaimerContent(_props?: DisclaimerContentProps) {
  return (
    <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2">
          1. Statutory Admission &amp; Regulatory Disclosure
        </h2>
        <p className="mb-3">
          This portal (including its dynamic subdomain landing pages) is operated by <strong>Imperial Institute of Management Science &amp; Research (IIMSR)</strong>, an autonomous educational institution registered with the Government of Karnataka (India) and holding Globus Certificate of Registration (ISO 9001:2015) for being a Quality Training Provider in Business and Technical Courses.
        </p>
        <p className="mb-3">
          The information contained on this website is for general educational counselling, curriculum orientation, and admission inquiry purposes. Prospective students are advised to review the specific guidelines, academic syllabus, examination criteria, and institutional credentials before submitting fees or enrolling.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2">
          2. Autonomous Status &amp; Degree / Diploma Recognition
        </h2>
        <p className="mb-3">
          IIMSR conducts autonomous academic, technical, and management training programs designed to impart practical, industry-demanded skills. Programs may be pursued through distance learning, online learning, or blended weekend sessions.
        </p>
        <p className="mb-3">
          Recognition, equivalency, and credit transfers depend on individual employers, statutory bodies, or receiving institutions. Students are encouraged to request official syllabi and course regulations from our counsellors to verify compatibility with their intended career or educational goals.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2">
          3. Examination System &amp; Results
        </h2>
        <p className="mb-3">
          Students can choose to undertake written examinations at authorized examination centers or participate in continuous case-study based online assessment systems. Examination schedules, admit cards, and student results are published transparently on our official website (<a href="https://iimsr.net.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold underline">https://iimsr.net.in</a>).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2">
          4. Reservation &amp; Scholarships
        </h2>
        <p className="mb-3">
          IIMSR reserves 15% seats for SC, ST, OBC, Persons with Disabilities, Armed Forces Personnel, Kashmiri Migrants, and Children of War Widows, with a 10% permissible fee discount upon verification of legitimate documentary proof. Merit-based fee waivers of up to 50% are awarded based on institutional evaluation.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2">
          5. Contact for Inquiries &amp; Verification
        </h2>
        <p>
          For official verification of enrollment, roll numbers, syllabus details, or fee receipts, please contact the administrative desk:
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-2 text-xs space-y-1">
          <div><strong>Address:</strong> E-48, Sector 3, Noida, Gautam Budh Nagar, Uttar Pradesh - 201301</div>
          <div><strong>Helpline:</strong> +91 8287434343 / +91 90272 39150</div>
          <div><strong>Email:</strong> info@iimsr.net.in</div>
        </div>
      </div>
    </div>
  );
}
