import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { HelpCircle, Phone, CheckCircle2, ShieldCheck, ChevronDown, ExternalLink } from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, FAQS } from "@/lib/data";
import CallBanner from "@/components/CallBanner";
import PhoneOnlyCTA from "@/components/PhoneOnlyCTA";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Anaheim Water Heater Repair & Costs",
  description: "Get answers to 10 crucial water heater questions: repair costs, tank vs. tankless, emergency leaking steps, Anaheim permits, and flushing. Call (714) 987-1987.",
};

export default function FAQPage() {
  // Schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0b2238] to-[#163654] text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-orange-500/30">
            <HelpCircle className="w-4 h-4 text-orange-500" />
            <span>Homeowner Help & Cost Breakdown</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Frequently Asked <span className="text-[#f26522]">Questions</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Direct, transparent answers regarding repair timelines, pricing expectations, emergency shutoffs, Anaheim building permits, and Orange County hard water issues.
          </p>
        </div>
      </section>

      {/* Main FAQ Content Section with 10 Detailed Questions & Answers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 10 FAQs List */}
          <div className="lg:col-span-8 content-body space-y-6 text-slate-700 leading-relaxed">
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-orange-300 transition-colors"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2238] flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-orange-100 text-[#f26522] font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </h3>
                  <div className="mt-4 pl-10 text-slate-600 text-sm sm:text-base leading-relaxed border-l-2 border-orange-200">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contextual Inbound SEO Linking */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-sm space-y-3">
              <h4 className="font-bold text-[#0b2238] text-base">
                Looking for Specific Repair Solutions or Regional Coverage?
              </h4>
              <p>
                Browse our detailed guides for <Link href="/services#repair">Gas & Electric Water Heater Repair</Link>, explore our <Link href="/services#emergency">Emergency Burst Dispatch</Link>, discover <Link href="/services#tankless">Tankless Descaling Services</Link>, or check our localized notes for <Link href="/locations#anaheim-hills">Anaheim Hills</Link> and <Link href="/locations#fullerton">Fullerton</Link>.
              </p>
              <p>
                For official state licensing checks on any plumbing contractor, visit the{" "}
                <a
                  href="https://www.cslb.ca.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#f26522] underline"
                >
                  California Contractors State License Board <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>.
              </p>
            </div>

            {/* Direct Phone Conversion Section */}
            <PhoneOnlyCTA />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0b2238] text-white rounded-3xl p-6 sm:p-8 shadow-xl sticky top-24 border border-slate-800">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-2">
                Have a Unique Problem?
              </span>
              <h3 className="text-2xl font-black mb-3">
                Speak to a Master Plumber
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                If your question isn&apos;t covered above, our on-call Anaheim technicians can diagnose your symptoms over the phone in just 2 minutes.
              </p>

              <a
                href={`tel:${BRAND_PHONE}`}
                style={{ color: "#ffffff", textDecoration: "none" }}
                className="w-full flex items-center justify-center gap-3 bg-[#ff5e14] hover:bg-[#e04800] !text-white text-white py-4 px-6 rounded-2xl font-black text-lg tracking-wide shadow-lg transition-all animate-pulse-subtle"
              >
                <Phone className="w-5 h-5 !text-white text-white" style={{ color: "#ffffff" }} />
                <span className="!text-white text-white" style={{ color: "#ffffff" }}>{BRAND_PHONE_DISPLAY}</span>
              </a>

              <div className="mt-8 pt-6 border-t border-slate-700/80 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Honest advice on repair vs. replace</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Licensed California C-36 Contractors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero hidden call-out fees or gimmicks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CallBanner
          headline="Ready to Get Your Hot Water Restored Today?"
          subtext="Call our Anaheim dispatch hotline at (714) 987-1987 for immediate priority assistance."
        />
      </div>
    </div>
  );
}
