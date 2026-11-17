import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, Flame, ExternalLink, Droplet, ArrowRight } from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_DIRECT_LINK } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a192f] text-slate-300 pt-16 pb-12 border-t-4 border-[#ff5e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Drainhaus Google Map Card */}
        <div className="mb-14 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs uppercase font-black tracking-widest text-[#ff5e14]">
                Our Local Anaheim Dispatch & Service Coverage
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Serving All Anaheim Neighborhoods & North Orange County
              </h3>
            </div>
            <a
              href={GOOGLE_MAPS_DIRECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff5e14] hover:bg-[#e04800] text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors w-fit"
            >
              <MapPin className="w-4 h-4" /> Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-slate-700 relative">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Water Heater Repair Anaheim CA Service Area Map"
              className="w-full h-full filter saturate-150 contrast-105"
            ></iframe>
          </div>
          <p className="text-xs text-slate-400 mt-3 text-center">
            Rapid service dispatched across Anaheim ZIP Codes: 92801, 92802, 92804, 92805, 92806, 92807, 92808, 92809.
          </p>
        </div>

        {/* Drainhaus 4-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#ff5e14] flex items-center justify-center text-white shadow-md">
                <Flame className="w-6 h-6" />
              </div>
              <span className="font-black text-white text-base tracking-tight leading-tight">
                {BRAND_NAME}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Anaheim’s dedicated phone-first plumbing referral network. Connecting Orange County property owners with certified, pre-vetted water heater technicians for fast diagnosis, repairs, and replacements.
            </p>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="text-[11px] text-slate-400 font-bold uppercase">24/7 Urgent Hotline</div>
              <a
                href={`tel:${BRAND_PHONE}`}
                className="text-lg font-black text-[#ff5e14] hover:text-white flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" /> {BRAND_PHONE_DISPLAY}
              </a>
              <div className="text-[11px] text-slate-400">Speak directly to an on-call dispatcher.</div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-white font-black text-sm mb-4 tracking-wide border-l-4 border-[#ff5e14] pl-3">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#repair" className="hover:text-white transition-colors">
                  Water Heater Repair (Gas & Electric)
                </Link>
              </li>
              <li>
                <Link href="/services#emergency" className="hover:text-white transition-colors">
                  Emergency Burst Tank Dispatch
                </Link>
              </li>
              <li>
                <Link href="/services#tankless" className="hover:text-white transition-colors">
                  Tankless Descaling & Repairs
                </Link>
              </li>
              <li>
                <Link href="/services#replacement" className="hover:text-white transition-colors">
                  Water Heater Replacement & Codes
                </Link>
              </li>
              <li>
                <Link href="/services#install" className="hover:text-white transition-colors">
                  Heat Pump & Low-NOx Installs
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-white transition-colors">
                  Commercial Boiler Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#ff5e14] font-bold hover:underline">
                  Browse All 12 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h4 className="text-white font-black text-sm mb-4 tracking-wide border-l-4 border-[#ff5e14] pl-3">
              Service Areas (20-Mi Radius)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/locations#anaheim-hills" className="hover:text-white transition-colors">
                  Anaheim Hills (92807, 92808)
                </Link>
              </li>
              <li>
                <Link href="/locations#fullerton" className="hover:text-white transition-colors">
                  Fullerton (92831–92835)
                </Link>
              </li>
              <li>
                <Link href="/locations#orange" className="hover:text-white transition-colors">
                  Orange (92865–92869)
                </Link>
              </li>
              <li>
                <Link href="/locations#garden-grove" className="hover:text-white transition-colors">
                  Garden Grove (92840–92845)
                </Link>
              </li>
              <li>
                <Link href="/locations#brea" className="hover:text-white transition-colors">
                  Brea (92821, 92823)
                </Link>
              </li>
              <li>
                <Link href="/locations#placentia" className="hover:text-white transition-colors">
                  Placentia (92870)
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-[#ff5e14] font-bold hover:underline">
                  Full Service Area Coverage →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Caller Checklist */}
          <div>
            <h4 className="text-white font-black text-sm mb-4 tracking-wide border-l-4 border-[#ff5e14] pl-3">
              Caller Preparation
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              When calling our dispatch line, have the following details ready for rapid technician matching:
            </p>
            <ul className="text-xs space-y-2 text-slate-300 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#ff5e14] font-bold">1.</span>
                <span>Type of heater: Natural Gas, Electric 240V, or Tankless</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff5e14] font-bold">2.</span>
                <span>Approximate age & brand from rating plate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff5e14] font-bold">3.</span>
                <span>Active status: Flooding puddle, gas odor, or lukewarm</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> California C-36 Plumbing Standards
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-4 h-4 text-[#ff5e14]" /> Mon–Sun: 24-Hour Emergency Dispatch
              </div>
            </div>
          </div>
        </div>

        {/* Referral Service Mandatory Disclosure & Copyright */}
        <div className="pt-8 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Referral Service Disclosure:</strong> {BRAND_NAME} is an independent plumbing referral service that connects homeowners and businesses in Anaheim, CA with licensed, insured local plumbing professionals. All contractor licenses, insurance certifications, service warranties, and quotes are established directly between the homeowner and the independent plumbing contractor. In compliance with California state advertising laws and CSLB guidelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/60 pt-4">
            <p>© 2026 {BRAND_NAME}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-slate-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-slate-400 transition-colors">
                Contact & Dispatch
              </Link>
              <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
