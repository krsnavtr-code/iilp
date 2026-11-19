import React from "react";

export default function PrivacyPolicyContent() {
  return (
    <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2">
          1. Information We Collect
        </h2>
        <p className="mb-3">
          <strong>Imperial Institute of Management Science &amp; Research (IIMSR)</strong> respects your privacy and is dedicated to protecting prospective students&apos; and website visitors&apos; personal information. When you submit an inquiry form or interact with our counselling team, we may collect:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
          <li>Full Name, Email Address, and Contact Mobile Number</li>
          <li>Current Educational Qualifications and Academic History</li>
          <li>Program, Specialization, and Course Preferences</li>
          <li>State, City, and Postal Pin Code</li>
          <li>IP Address, Browser Type, and Referring URL for analytics and fraud prevention</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-3">
          The information collected is used solely to:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
          <li>Provide free 1-on-1 academic counselling, course details, and eligibility assessments</li>
          <li>Deliver prospectus kits, fee structures, and application guidelines via phone, SMS, WhatsApp, or email</li>
          <li>Process enrollment and student portal registration upon admission confirmation</li>
          <li>Comply with regulatory and institutional accounting standards</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2">
          3. Data Security &amp; No Sale of Data
        </h2>
        <p className="mb-3">
          IIMSR never sells, trades, or rents candidate contact data to third-party marketing companies. Data is protected using modern encryption standards and accessed only by authorized admissions staff.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-2 border-b border-slate-100 pb-2">
          4. Contact Our Privacy Officer
        </h2>
        <p>
          To update your contact details or opt out of communications, write to:
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mt-2 text-xs">
          <strong>Email:</strong> info@iimsr.net.in | <strong>Address:</strong> E-48, Sector 3, Noida, Gautam Budh Nagar, Uttar Pradesh - 201301
        </div>
      </div>
    </div>
  );
}
