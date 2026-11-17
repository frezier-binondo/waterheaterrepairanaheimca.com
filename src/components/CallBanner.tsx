import React from "react";
import { Phone, ShieldCheck, Clock, Zap, Flame, Award } from "lucide-react";
import { BRAND_PHONE, BRAND_PHONE_DISPLAY } from "@/lib/data";

interface CallBannerProps {
  headline?: string;
  subtext?: string;
}

export default function CallBanner({
  headline = "Need Immediate Water Heater Help in Anaheim?",
  subtext = "Speak directly to an on-call licensed plumbing professional now. No hold times or automated lead forms.",
}: CallBannerProps) {
  return (
    <aside aria-label="Emergency Call Banner" className="w-full bg-[#0a192f] text-white py-12 px-6 sm:px-10 rounded-2xl shadow-2xl relative overflow-hidden border-2 border-[#ff5e14]/40">
      {/* Decorative background water/flame wave effect */}
      <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-[#004b87]/40 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="text-center md:text-left space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#ff5e14]/20 text-[#ff5e14] text-xs uppercase font-extrabold px-3 py-1 rounded-full border border-[#ff5e14]/30">
            <Flame className="w-3.5 h-3.5 text-[#ff5e14]" /> Rapid Phone-Only Dispatch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
            {headline}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {subtext}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300 pt-1">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#ff5e14]" /> 45–60 Min Response</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Licensed California C-36</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-400" /> Upfront Written Pricing</span>
          </div>
        </div>

        <div className="shrink-0 flex flex-col items-center gap-2">
          <a
            href={`tel:${BRAND_PHONE}`}
            className="flex items-center gap-3 bg-[#ff5e14] hover:bg-[#e04800] text-white px-8 py-4 rounded-xl font-black text-xl sm:text-2xl tracking-wide shadow-xl hover:shadow-2xl active:scale-95 transition-all animate-pulse-subtle"
          >
            <Phone className="w-6 h-6 animate-bounce" />
            <span>{BRAND_PHONE_DISPLAY}</span>
          </a>
          <span className="text-xs text-slate-400 font-medium tracking-wide">
            Tap to call directly from your mobile phone
          </span>
        </div>
      </div>
    </aside>
  );
}
