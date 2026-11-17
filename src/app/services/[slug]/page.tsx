import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Phone,
  Flame,
  Wrench,
  AlertTriangle,
  ArrowRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ExternalLink,
  ChevronRight,
  Droplet
} from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, SERVICES, LOCATIONS, ServiceItem } from "@/lib/data";
import CallBanner from "@/components/CallBanner";
import PhoneOnlyCTA from "@/components/PhoneOnlyCTA";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.name} in Anaheim, CA`,
    description: `${service.shortDesc} Call (456) 789-0123 for fast, licensed same-day assistance across Anaheim, CA.`,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 5);

  return (
    <div className="w-full bg-[#f4f7fa]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0a192f] via-[#102a45] to-[#0a192f] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#ff5e14]/20 text-[#ff5e14] text-xs sm:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full border border-[#ff5e14]/30">
            <Flame className="w-4 h-4 text-[#ff5e14]" />
            <span>Anaheim Dedicated Service Silo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {service.name} in <span className="text-[#ff5e14]">Anaheim, CA</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {service.shortDesc} Certified local California C-36 plumbing professionals on-call across Anaheim and North Orange County.
          </p>

          <div className="pt-2">
            <a
              href={`tel:${BRAND_PHONE}`}
              className="inline-flex items-center gap-2.5 bg-[#ff5e14] hover:bg-[#e04800] text-white px-8 py-3.5 rounded-xl font-black text-lg shadow-xl transition-all animate-pulse-subtle"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call Dispatch: {BRAND_PHONE_DISPLAY}</span>
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
                Specialized Plumbing Service
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] mb-4">
                Professional {service.name} for Anaheim Homes & Businesses
              </h2>
              <p>
                When dealing with {service.name.toLowerCase()} in Anaheim, CA, timely and licensed intervention is vital. Water heating systems operate under extreme water pressure and high thermal cycling. Minor component failures can quickly escalate into widespread property flooding, gas leaks, or electrical short circuits if unaddressed.
              </p>
              <p className="mt-4">
                At <Link href="/">{BRAND_NAME}</Link>, we connect you with vetted, licensed California plumbing contractors specialized in {service.name.toLowerCase()}. Our partner plumbers arrive with fully stocked trucks carrying universal heating elements, thermocouples, pressure relief valves, and digital diagnostic gear to resolve your issue during the initial service call.
              </p>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src={
                  service.slug.includes("tankless")
                    ? "/images/tankless-water-heater.jpg"
                    : service.slug.includes("commercial")
                    ? "/images/boiler-heating.jpg"
                    : service.slug.includes("leak") || service.slug.includes("emergency")
                    ? "/images/pipes-valves.jpg"
                    : service.slug.includes("installation") || service.slug.includes("replacement")
                    ? "/images/water-heater-tank.jpg"
                    : service.slug.includes("maintenance")
                    ? "/images/hard-water-scale.jpg"
                    : service.slug.includes("thermostat") || service.slug.includes("pilot")
                    ? "/images/plumbing-fitting.jpg"
                    : "/images/water-heater-repair.jpg"
                }
                alt={`${service.name} in Anaheim CA`}
                width={1200}
                height={500}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            {/* Common Symptoms & Diagnostics */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a192f]">
                Common Signs You Need {service.name}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 pl-2">
                <li>Complete lack of hot water or sudden drops to lukewarm temperatures.</li>
                <li>Water pooling or dripping beneath the unit, flex connectors, or brass drain valves.</li>
                <li>Loud popping, rumbling, or boiling noises caused by hard-water calcium sediment.</li>
                <li>Pilot light that refuses to ignite, flickers yellow, or shuts off immediately.</li>
                <li>High-limit reset button tripping repeatedly on 240V electric water heaters.</li>
                <li>Diagnostic error codes flashing on digital tankless displays (Navien, Rinnai, Noritz).</li>
              </ul>
            </div>

            {/* Local Anaheim Code & Hard Water Focus */}
            <div className="bg-[#f4f7fa] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-[#0a192f] text-lg">
                Anaheim Municipal Plumbing Standards & Hard Water Impact
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Orange County water is naturally hard, averaging 15 to 22 grains per gallon according to the{" "}
                <a
                  href="https://www.ocwd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#ff5e14] underline"
                >
                  Orange County Water District <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>. This mineral intensity accelerates element burnout and valve calcification.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Furthermore, all replacement and repair jobs comply strictly with the{" "}
                <a
                  href="https://www.cslb.ca.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#ff5e14] underline"
                >
                  California Contractors State License Board (CSLB) <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>{" "}
                and City of Anaheim building codes, including mandatory seismic earthquake strapping and low-NOx burner standards.
              </p>
            </div>

            {/* Neighborhoods & Regional Links (5 Internal Anchor Links Required) */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0a192f]">
                Serving Anaheim & Surrounding North Orange County Areas
              </h3>
              <p className="text-sm">
                We dispatch mobile plumbing specialists throughout all Anaheim ZIP codes (92801–92809) as well as our neighboring service hubs:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-[#004b87]">
                <Link href="/locations#anaheim-hills" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14]">
                  • Anaheim Hills (92807, 92808)
                </Link>
                <Link href="/locations#fullerton" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14]">
                  • Fullerton (92831–92835)
                </Link>
                <Link href="/locations#orange" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14]">
                  • Orange (92865–92869)
                </Link>
                <Link href="/locations#garden-grove" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14]">
                  • Garden Grove (92840–92845)
                </Link>
                <Link href="/locations#brea" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14]">
                  • Brea & Placentia
                </Link>
                <Link href="/services" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14]">
                  • All 12 Water Heater Services
                </Link>
              </div>
            </div>

            {/* Direct Phone Conversion Box */}
            <PhoneOnlyCTA />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Call Box */}
            <div className="bg-[#0a192f] text-white rounded-2xl p-6 sm:p-8 shadow-xl border-t-4 border-[#ff5e14] sticky top-24">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff5e14] block mb-2">
                Priority Dispatch
              </span>
              <h3 className="text-2xl font-black mb-3">
                Need {service.name}?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Call our direct phone dispatch. A licensed plumber will diagnose your system and quote the work upfront.
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
                  <span>45–60 minute response time</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Upfront written estimates</span>
                </div>
              </div>

              {/* Other Related Services */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#ff5e14] mb-3">
                  Other Services:
                </h4>
                <div className="space-y-1.5">
                  {otherServices.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services/${item.slug}`}
                      className="block text-xs text-slate-300 hover:text-white hover:underline truncate"
                    >
                      • {item.name}
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
          headline={`Need Fast ${service.name} in Anaheim?`}
          subtext="Call (456) 789-0123 now to speak directly with an on-call licensed plumbing professional."
        />
      </div>
    </div>
  );
}
