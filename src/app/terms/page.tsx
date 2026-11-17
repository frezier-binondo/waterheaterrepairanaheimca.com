import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service and contractor referral disclosures for Water Heater Repair in Anaheim CA.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 content-body text-slate-700 leading-relaxed space-y-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2238]">Terms of Service & Referral Disclosure</h1>
      <p className="text-sm text-slate-500">Effective Date: November 2026</p>

      <p>
        Please read these Terms of Service carefully before utilizing this website or calling our referral telephone number at <a href={`tel:${BRAND_PHONE}`}>{BRAND_PHONE_DISPLAY}</a>.
      </p>

      <h2 className="text-xl font-bold text-[#0b2238] mt-6">1. Referral Service Notice</h2>
      <p>
        <strong>{BRAND_NAME}</strong> is an advertising and consumer referral service that connects property owners in Anaheim and Orange County with independent, third-party plumbing contractors. We do not directly provide contracting services, plumbing repairs, or warranty guarantees. All contractor licenses, insurance certifications, labor warranties, and written estimates are entered into solely between the customer and the matched independent plumbing pro.
      </p>

      <h2 className="text-xl font-bold text-[#0b2238] mt-6">2. California Licensing & Contractor Verification</h2>
      <p>
        While we strive to match consumers exclusively with reputable, state-licensed contractors holding valid C-36 plumbing licenses, consumers are encouraged to verify contractor credentials directly through the California Contractors State License Board (CSLB) prior to authorizing repair or installation work.
      </p>

      <h2 className="text-xl font-bold text-[#0b2238] mt-6">3. Estimates & Pricing</h2>
      <p>
        Any price ranges mentioned on this website are approximate informational guidelines. Actual repair or replacement costs depend upon specific equipment make, model, local municipal permit fees, and individual job complexity. Upfront written quotes must be agreed upon with the technician prior to commencement of work.
      </p>

      <div className="pt-6 border-t border-slate-200">
        <Link href="/" className="font-semibold text-[#f26522] hover:underline">
          ← Return to Home
        </Link>
      </div>
    </div>
  );
}
