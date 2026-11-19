import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto text-3xl font-black">
          404
        </div>
        <h1 className="text-2xl font-black tracking-tight text-slate-900">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The requested admission page or program does not exist. Please return to the official IIMSR Admissions Portal.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block px-5 py-2.5 rounded-xl bg-[#071b4b] text-white text-xs font-bold hover:bg-[#0c2a75] transition-colors"
          >
            ← Return to IIMSR Home
          </Link>
        </div>
        <div className="pt-2">
          <span className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Imperial Institute of Management Science &amp; Research (IIMSR)
          </span>
        </div>
      </div>
    </div>
  );
}
