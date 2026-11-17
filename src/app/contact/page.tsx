import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, MapPin, Clock, ShieldCheck, CheckCircle2, AlertCircle, ExternalLink, Flame } from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, BRAND_ADDRESS, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_DIRECT_LINK, LOCATIONS } from "@/lib/data";
import CallBanner from "@/components/CallBanner";
import PhoneOnlyCTA from "@/components/PhoneOnlyCTA";

export const metadata: Metadata = {
  title: "Contact Us & Service Map | Water Heater Repair Anaheim CA",
  description: "Phone-only 24/7 water heater repair dispatch in Anaheim, CA. Interactive Google map, coverage zones, and licensed plumbing assistance. Call (456) 789-0123.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0b2238] to-[#163654] text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-orange-500/30">
            <Phone className="w-4 h-4 text-orange-500" />
            <span>24/7 Phone-Only Referral Network</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact Us & <span className="text-[#f26522]">Anaheim Service Map</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are a phone-first plumbing network: no frustrating lead forms, no waiting for automated callbacks. Speak directly to live dispatch.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${BRAND_PHONE}`}
              className="inline-flex items-center gap-2.5 bg-[#f26522] hover:bg-[#d85413] text-white px-8 py-3.5 rounded-full font-black text-lg shadow-xl transition-all animate-pulse-subtle"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call Dispatch: {BRAND_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Interactive Google Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Protocol & Map */}
          <div className="lg:col-span-8 content-body space-y-8 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2238] mb-4">
                Fastest Way to Get Water Heater Help in Anaheim
              </h2>
              <p>
                When dealing with an active water heater rupture or a failed gas valve, timing is critical. Email forms and web surveys introduce unnecessary delays. At <Link href="/">{BRAND_NAME}</Link>, our dispatch center operates strictly by phone so that an experienced specialist can evaluate your emergency immediately and route the closest licensed contractor to your doorstep.
              </p>
            </div>

            {/* Interactive Map Box Required by User Prompt */}
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl text-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block">
                    Verified Google Maps Location & Radius
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Anaheim Regional Headquarters & Service Zone
                  </h3>
                </div>
                <a
                  href={GOOGLE_MAPS_DIRECT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f26522] hover:bg-[#d85413] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shrink-0 w-fit"
                >
                  <MapPin className="w-4 h-4" /> Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Map */}
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-700 shadow-inner">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Anaheim CA Water Heater Repair Google Map"
                  className="w-full h-full filter saturate-150 contrast-105"
                ></iframe>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
                <span>Centrally stationed near Anaheim Blvd & Lincoln Ave, Anaheim, CA 92805</span>
                <span className="text-orange-400 font-semibold">Priority dispatch across all Anaheim ZIPs</span>
              </div>
            </div>

            {/* Caller Prep Guide */}
            <div className="bg-orange-50 border border-orange-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#f26522]" />
                What to Have Ready When Calling
              </h3>
              <p className="text-sm text-slate-700">
                To guarantee our technician brings the exact parts needed for same-day repair, please take 30 seconds to locate:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-800">
                <li><strong>Your Water Heater Fuel:</strong> Natural gas or 240V electric.</li>
                <li><strong>Brand & Model:</strong> Printed on the metal data plate (e.g., Rheem, Bradford White, A.O. Smith, Rinnai).</li>
                <li><strong>Nature of the Fault:</strong> Total cold water, lukewarm water, pilot light out, rumbling noise, or water leaking on the floor.</li>
              </ul>
              <p className="text-xs text-slate-500 pt-2 border-t border-orange-200">
                If you smell natural gas or sulfur, immediately exit your residence and contact{" "}
                <a
                  href="https://www.socalgas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#f26522] underline"
                >
                  SoCalGas <ExternalLink className="w-3 h-3 inline" />
                </a>{" "}
                or dial 911 from a safe distance before calling for mechanical repair.
              </p>
            </div>

            {/* Internal Silo Navigation Links */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-sm space-y-3">
              <h4 className="font-bold text-[#0b2238] text-base">
                Internal Service & City Portals
              </h4>
              <p>
                Learn more about our <Link href="/services#repair">Water Heater Repair Options</Link>, browse <Link href="/services#emergency">Emergency Burst Dispatch</Link>, inspect our <Link href="/services#tankless">Tankless Descaling Services</Link>, or check local notes for <Link href="/locations#anaheim-hills">Anaheim Hills</Link> and <Link href="/locations#fullerton">Fullerton</Link>.
              </p>
            </div>

            {/* Direct Phone Conversion Section */}
            <PhoneOnlyCTA />
          </div>

          {/* Right Column: Contact Details Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0b2238] text-white rounded-3xl p-6 sm:p-8 shadow-xl sticky top-24 border border-slate-800">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-2">
                Live Plumbing Dispatch
              </span>
              <h3 className="text-2xl font-black mb-3">
                Call Our Anaheim Line
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Available 24 hours a day, 7 days a week for burst tanks, gas leaks, and complete loss of domestic hot water.
              </p>

              <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-700 mb-6 space-y-3">
                <div className="text-xs text-slate-400 uppercase font-semibold">Toll-Free Dispatch</div>
                <a
                  href={`tel:${BRAND_PHONE}`}
                  className="text-2xl font-black text-orange-400 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-6 h-6" /> {BRAND_PHONE_DISPLAY}
                </a>
                <div className="text-xs text-slate-400">
                  Click to place a direct phone call from your phone.
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Service Headquarters:</strong>
                    Anaheim Blvd & Lincoln Ave, Anaheim, CA 92805
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Hours of Operation:</strong>
                    Monday – Sunday: 24/7 Emergency Dispatch
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Licensing Standards:</strong>
                    Network contractors vetted under California C-36 requirements
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/80">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-orange-400 mb-3">
                  Surrounding Cities Covered:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/locations#${loc.slug}`}
                      className="text-xs bg-slate-800 hover:bg-[#f26522] text-slate-300 hover:text-white px-2.5 py-1 rounded-md transition-colors font-medium"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CallBanner
          headline="Ready to Talk to an Anaheim Water Heater Specialist?"
          subtext="Call (456) 789-0123 now. Real local dispatchers ready to assist you."
        />
      </div>
    </div>
  );
}
