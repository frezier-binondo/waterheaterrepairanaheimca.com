import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and referral service disclosures for Water Heater Repair in Anaheim CA.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 content-body text-slate-700 leading-relaxed space-y-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2238]">Privacy Policy</h1>
      <p className="text-sm text-slate-500">Effective Date: November 2026</p>
      
      <p>
        {BRAND_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as a phone-only referral marketing service connecting consumers in Anaheim, CA and North Orange County with independent licensed plumbing professionals. This Privacy Policy details our information handling practices when you access our website or dial our hotline at <a href={`tel:${BRAND_PHONE}`}>{BRAND_PHONE_DISPLAY}</a>.
      </p>

      <h2 className="text-xl font-bold text-[#0b2238] mt-6">1. Phone-Only Nature & Information We Collect</h2>
      <p>
        Because our service is strictly phone-only, we do not require you to submit personal information via contact forms, emails, or account registrations. When you place a telephone call to our referral line, your telephone number, caller ID, and call recording or transcription may be gathered by our telecommunication provider solely to facilitate routing and matching with an on-call licensed plumbing professional in your neighborhood.
      </p>

      <h2 className="text-xl font-bold text-[#0b2238] mt-6">2. Use of Information</h2>
      <p>
        Information collected during telephone inquiries is used strictly to:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Directly match your plumbing inquiry with a qualified contractor servicing your ZIP code.</li>
        <li>Maintain quality assurance and telecommunications routing reliability.</li>
        <li>Comply with applicable legal, regulatory, and California consumer disclosure mandates.</li>
      </ul>

      <h2 className="text-xl font-bold text-[#0b2238] mt-6">3. Third-Party Independent Contractors</h2>
      <p>
        We connect callers with independent plumbing companies. Once connected, your service agreement, quotes, and payment terms are made directly between you and that independent professional. We encourage you to review their individual licensing and privacy practices.
      </p>

      <div className="pt-6 border-t border-slate-200">
        <Link href="/" className="font-semibold text-[#f26522] hover:underline">
          ← Return to Home
        </Link>
      </div>
    </div>
  );
}
