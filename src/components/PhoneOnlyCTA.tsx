import React from "react";
import { Phone, AlertTriangle, ShieldCheck, FileCheck } from "lucide-react";
import { BRAND_PHONE, BRAND_PHONE_DISPLAY } from "@/lib/data";

export default function PhoneOnlyCTA() {
  return (
    <div className="bg-slate-50 border-2 border-dashed border-orange-300 rounded-3xl p-6 sm:p-8 my-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase text-[#f26522] tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            <Phone className="w-3.5 h-3.5" /> Direct Call Service — No Waiting Forms
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Have Your Details Ready & Call for Instant Dispatch
          </h3>
          <p className="text-sm text-slate-600 max-w-xl">
            We don&apos;t ask you to fill out complicated questionnaires or wait hours for an email reply. When you call, please have your heater brand, fuel type (gas/electric), and symptom ready.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <a
            href={`tel:${BRAND_PHONE}`}
            style={{ color: "#ffffff", textDecoration: "none" }}
            className="flex items-center gap-2.5 bg-[#ff5e14] hover:bg-[#e04800] !text-white text-white px-7 py-3.5 rounded-full font-black text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <Phone className="w-5 h-5 !text-white text-white shrink-0" style={{ color: "#ffffff" }} />
            <span className="!text-white text-white font-black" style={{ color: "#ffffff" }}>{BRAND_PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
