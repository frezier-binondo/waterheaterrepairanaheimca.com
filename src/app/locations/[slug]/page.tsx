import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Flame,
  Home,
  Building
} from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, LOCATIONS, SERVICES } from "@/lib/data";
import CallBanner from "@/components/CallBanner";
import PhoneOnlyCTA from "@/components/PhoneOnlyCTA";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) return {};

  return {
    title: `Water Heater Repair in ${location.name}, CA`,
    description: `Fast water heater repair, replacement, and tankless flush in ${location.name}, CA (${location.zipCodes}). Licensed local pros. Call (714) 987-1987.`,
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  // Sibling locations for navigation
  const siblingLocations = LOCATIONS.filter((l) => l.slug !== slug);

  return (
    <div className="w-full bg-[#f4f7fa]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0a192f] via-[#102a45] to-[#0a192f] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#ff5e14]/20 text-[#ff5e14] text-xs sm:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full border border-[#ff5e14]/30">
            <MapPin className="w-4 h-4 text-[#ff5e14]" />
            <span>Orange County Regional Service Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Water Heater Repair in <span className="text-[#ff5e14]">{location.name}, CA</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Serving ZIP Codes: {location.zipCodes}. {location.description}
          </p>

          <div className="pt-2">
            <a
              href={`tel:${BRAND_PHONE}`}
              className="inline-flex items-center gap-2.5 bg-[#ff5e14] hover:bg-[#e04800] text-white px-8 py-3.5 rounded-xl font-black text-lg shadow-xl transition-all animate-pulse-subtle"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call {location.name} Dispatch: {BRAND_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 content-body space-y-10 text-slate-700 leading-relaxed bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#ff5e14] mb-2">
                Local City Coverage
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] mb-4">
                Dedicated Water Heater Services for {location.name} Residents
              </h2>
              <p>
                Looking for dependable, fairly priced water heater repair or replacement in {location.name}? At <Link href="/">{BRAND_NAME}</Link>, we connect homeowners and commercial property managers throughout {location.name} with vetted, licensed California plumbers who diagnose the problem honestly, explain your options clearly, and quote the job upfront before turning a wrench.
              </p>
              <p className="mt-4">
                {location.description} Nearby landmarks and corridors include {location.landmarks}. Our mobile service trucks are strategically positioned to provide prompt same-day arrival for sudden leaks, failed heating elements, broken thermocouples, and complete hot water outages.
              </p>
            </div>

            {/* City Visual */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src={
                  location.slug === "anaheim-hills"
                    ? "/images/water-heater-tank.jpg"
                    : location.slug === "fullerton"
                    ? "/images/plumbing-fitting.jpg"
                    : location.slug === "orange"
                    ? "/images/water-heater-repair.jpg"
                    : location.slug === "garden-grove"
                    ? "/images/plumber-wrench.jpg"
                    : location.slug === "brea"
                    ? "/images/tankless-water-heater.jpg"
                    : "/images/pipes-valves.jpg"
                }
                alt={`Water heater service and repairs in ${location.name} CA`}
                width={1200}
                height={500}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            {/* Local Water Notes */}
            <div className="bg-[#f4f7fa] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-xl font-bold text-[#0a192f]">
                Local Water Characteristics & Plumbing Dynamics in {location.name}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {location.waterCharacteristics} In addition, regional water sourced across North Orange County contains significant calcium hardness, making annual sediment flushing and anode rod inspections critical to prevent loud popping sounds and premature tank rust.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                All repair and installation work performed in {location.name} complies with the{" "}
                <a
                  href="https://www.cslb.ca.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#ff5e14] underline"
                >
                  California Contractors State License Board (CSLB) <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>{" "}
                and municipal building codes, including seismic strapping and thermal expansion regulations.
              </p>
            </div>

            {/* All Services Available in This Location */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0a192f]">
                Water Heater Services Available in {location.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SERVICES.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug}`}
                    className="p-3 bg-slate-50 hover:bg-orange-50 rounded-xl border border-slate-200 hover:border-[#ff5e14] transition-colors flex items-center justify-between"
                  >
                    <span className="font-bold text-slate-900">{srv.name} in {location.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#ff5e14]" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Inbound & Internal Links (5 Internal Anchor Links Required) */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-sm space-y-3">
              <h4 className="font-bold text-[#0a192f] text-base">
                Explore Neighboring Communities & Diagnostic Guides
              </h4>
              <p>
                Browse our neighboring community hubs in <Link href="/locations/fullerton">Fullerton</Link>, <Link href="/locations/orange">Orange</Link>, <Link href="/locations/garden-grove">Garden Grove</Link>, <Link href="/locations/brea">Brea</Link>, and <Link href="/locations/placentia">Placentia</Link>. Or review our <Link href="/faq">Frequently Asked Questions</Link> for pricing estimates.
              </p>
            </div>

            {/* Direct Phone Conversion Box */}
            <PhoneOnlyCTA />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0a192f] text-white rounded-2xl p-6 sm:p-8 shadow-xl border-t-4 border-[#ff5e14] sticky top-24">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff5e14] block mb-2">
                {location.name} Hotline
              </span>
              <h3 className="text-2xl font-black mb-3">
                Need Help in {location.name}?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Connect directly with on-call licensed plumbers serving ZIP codes {location.zipCodes}.
              </p>

              <a
                href={`tel:${BRAND_PHONE}`}
                className="w-full flex items-center justify-center gap-2.5 bg-[#ff5e14] hover:bg-[#e04800] text-white py-4 px-6 rounded-xl font-black text-lg tracking-wide shadow-lg transition-all animate-pulse-subtle"
              >
                <Phone className="w-5 h-5" />
                <span>{BRAND_PHONE_DISPLAY}</span>
              </a>

              <div className="mt-8 pt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Licensed California C-36 Contractors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ff5e14] shrink-0" />
                  <span>Serving {location.zipCodes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Upfront written estimates</span>
                </div>
              </div>

              {/* Sibling Locations */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#ff5e14] mb-3">
                  Other Cities We Serve:
                </h4>
                <div className="space-y-1.5">
                  {siblingLocations.map((item) => (
                    <Link
                      key={item.id}
                      href={`/locations/${item.slug}`}
                      className="block text-xs text-slate-300 hover:text-white hover:underline truncate"
                    >
                      • Water Heater Repair in {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CallBanner
          headline={`Need Emergency Water Heater Service in ${location.name}?`}
          subtext="Call (714) 987-1987 now to speak directly with an on-call licensed plumbing professional."
        />
      </div>
    </div>
  );
}
