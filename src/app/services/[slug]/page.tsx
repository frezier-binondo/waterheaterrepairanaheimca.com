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
  Droplet,
  CheckCircle,
  HelpCircle,
  Zap,
  Award
} from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, SERVICES, LOCATIONS } from "@/lib/data";
import CallBanner from "@/components/CallBanner";
import PhoneOnlyCTA from "@/components/PhoneOnlyCTA";

// Load parsed Excel content and comprehensive technical content
import excelServices from "@/lib/excel-services.json";
import serviceDetails from "@/lib/services-detail-content.json";
import universalContent from "@/lib/services-universal-content.json";

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
    description: `${service.shortDesc} Fast same-day water heater service across Anaheim. Licensed California contractors. Call (456) 789-0123.`,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const excelData = (excelServices as Record<string, any>)[slug];
  const details = (serviceDetails as Record<string, any>)[slug];
  const univ = universalContent;

  // Other services for internal linking (at least 5 internal links)
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <div className="w-full bg-[#f4f7fa]">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#0a192f] via-[#102a45] to-[#0a192f] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#ff5e14]/20 text-[#ff5e14] text-xs sm:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full border border-[#ff5e14]/30">
            <Flame className="w-4 h-4 text-[#ff5e14]" />
            <span>Dedicated Anaheim Water Heater Silo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {service.name} in <span className="text-[#ff5e14]">Anaheim, CA</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {service.shortDesc} Professional diagnostics, upfront written quotes, and same-day service from licensed California C-36 plumbing contractors.
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

      {/* 2. MAIN 1,000+ WORD COMPREHENSIVE SERVICE CONTENT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 content-body space-y-10 text-slate-700 leading-relaxed bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm text-base">
            
            {/* Overview Section */}
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#ff5e14] mb-2">
                Specialized Service Overview • {details?.serviceCategory || service.name}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] mb-4">
                Reliable, Licensed {service.name} Across Anaheim & Orange County
              </h2>
              <p>
                When your hot water supply fails, finding a licensed and experienced plumber who understands your exact water heater configuration is critical. At <Link href="/">{BRAND_NAME}</Link>, we connect residential homeowners, multi-family landlords, and commercial business operators throughout Anaheim with pre-vetted, licensed California plumbing professionals who specialize in {service.name.toLowerCase()}.
              </p>
              <p className="mt-4">
                Water heating systems operate continuously under heavy pressure, high electrical amperage, or pressurized natural gas. Minor component faults—such as a calcified dip tube, failing thermocouple, or drifting thermostat—can quickly cause complete hot water failure or catastrophic flooding if left unaddressed. Our mobile network partners arrive with fully equipped trucks carrying universal elements, valves, and diagnostic analyzers to resolve your {service.name.toLowerCase()} requirements in a single prompt visit.
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
                    : service.slug.includes("installation")
                    ? "/images/water-heater-installation.jpg"
                    : service.slug.includes("replacement")
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

            {/* In-Depth Technical Diagnostics & Safety Protocol */}
            {details && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#0a192f]">
                  Our Multi-Point Diagnostic & Safety Protocol for {service.name}
                </h3>
                <p>
                  Every service visit begins with a systematic inspection of the heat source, fuel lines, venting, safety valves, and electrical circuitry. Our partner technicians follow rigorous diagnostic standards to isolate the root cause before recommending a component repair or replacement:
                </p>
                <div className="space-y-2.5 my-4">
                  {details.diagnosticsSteps.map((step: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="w-6 h-6 rounded-full bg-[#ff5e14] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-sm text-slate-800 leading-normal">{step}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic">
                  Technical Focus: {details.techFocus}.
                </p>
              </div>
            )}

            {/* Component Failure & Troubleshooting Guide */}
            {details && details.commonFailures && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#0a192f]">
                  Common Component Failures & Professional Solutions
                </h3>
                <p>
                  Water heaters rarely break down without warning. Review the most frequent mechanical issues diagnosed by Anaheim plumbing specialists:
                </p>
                <div className="space-y-4 my-4">
                  {details.commonFailures.map((failure: any, idx: number) => (
                    <div key={idx} className="p-4 rounded-xl border-l-4 border-[#ff5e14] bg-slate-50 border border-slate-200 shadow-xs space-y-1.5">
                      <h4 className="font-bold text-[#0a192f] text-base flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-[#ff5e14]" />
                        {failure.component}
                      </h4>
                      <p className="text-xs text-slate-600">
                        <strong className="text-slate-800">Symptom:</strong> {failure.symptom}
                      </p>
                      <p className="text-xs text-slate-700">
                        <strong className="text-emerald-700">Solution:</strong> {failure.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Orange County Hard Water & Mineral Scale Impact */}
            <div className="bg-[#f4f7fa] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-xl font-bold text-[#0a192f]">
                Orange County Hard Water & Its Impact on {service.name}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {univ.hardWaterSection}
              </p>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200">
                Official water quality reports can be verified directly at the{" "}
                <a
                  href="https://www.ocwd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#ff5e14] underline"
                >
                  Orange County Water District <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>.
              </p>
            </div>

            {/* Local Anaheim Neighborhood Dynamics */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a192f]">
                Local Anaheim Housing Types & Regional Plumbing Dynamics
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {univ.neighborhoodSection}
              </p>
              {details?.anaheimInsights && (
                <div className="p-4 bg-orange-50/70 rounded-xl border border-orange-200 text-xs text-slate-800 leading-relaxed">
                  <strong>Local Insight:</strong> {details.anaheimInsights}
                </div>
              )}
            </div>

            {/* California Plumbing Code, Seismic Safety & Permits */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0a192f]">
                California Plumbing Code & City of Anaheim Building Permits
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {univ.codePermitSection}
              </p>
              <p className="text-xs text-slate-600">
                For complete contractor license verifications and state consumer guides, visit the{" "}
                <a
                  href="https://www.cslb.ca.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#ff5e14] underline"
                >
                  California Contractors State License Board (CSLB) <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>{" "}
                and the{" "}
                <a
                  href="https://www.anaheim.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#ff5e14] underline"
                >
                  City of Anaheim Building Division <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>.
              </p>
            </div>

            {/* Pricing Expectations & Upfront Quotes */}
            {details?.pricingBreakdown && (
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-[#0a192f] text-lg">
                  Transparent Pricing & Written Estimates
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.pricingBreakdown}
                </p>
                <p className="text-xs text-slate-500">
                  Every technician provides an itemized quote before any work commences so there are never hidden surprises or unexpected fees.
                </p>
              </div>
            )}

            {/* Caller Preparation Guidance */}
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl space-y-3">
              <h4 className="font-bold text-amber-950 text-base flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-700" />
                What Callers Should Have Ready Before Calling
              </h4>
              <p className="text-xs text-amber-900 leading-relaxed">
                {univ.callerGuidanceSection}
              </p>
            </div>

            {/* Internal Silo Navigation Links (At least 5 Internal Links) */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-sm space-y-3">
              <h4 className="font-bold text-[#0a192f] text-base">
                Related Water Heater Services in Anaheim & Surrounding Cities
              </h4>
              <p>
                Explore other specialized service silos in our network:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-semibold text-[#004b87]">
                {otherServices.slice(0, 6).map((item) => (
                  <Link
                    key={item.id}
                    href={`/services/${item.slug}`}
                    className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-[#ff5e14] hover:text-[#ff5e14] transition-colors truncate"
                  >
                    • {item.name}
                  </Link>
                ))}
              </div>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200">
                Looking for service in a specific city? Visit our regional portals for{" "}
                <Link href="/locations/anaheim-hills" className="font-bold text-[#ff5e14] underline">Anaheim Hills</Link>,{" "}
                <Link href="/locations/fullerton" className="font-bold text-[#ff5e14] underline">Fullerton</Link>,{" "}
                <Link href="/locations/orange" className="font-bold text-[#ff5e14] underline">Orange</Link>,{" "}
                <Link href="/locations/garden-grove" className="font-bold text-[#ff5e14] underline">Garden Grove</Link>,{" "}
                <Link href="/locations/brea" className="font-bold text-[#ff5e14] underline">Brea</Link>, and{" "}
                <Link href="/locations/placentia" className="font-bold text-[#ff5e14] underline">Placentia</Link>.
              </p>
            </div>

            {/* Direct Phone Conversion Box */}
            <PhoneOnlyCTA />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0a192f] text-white rounded-2xl p-6 sm:p-8 shadow-xl border-t-4 border-[#ff5e14] sticky top-24">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff5e14] block mb-2">
                Priority Anaheim Dispatch
              </span>
              <h3 className="text-2xl font-black mb-3">
                Need {service.name}?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Connect directly with our local Anaheim dispatch team. We match you with licensed, on-call plumbing contractors.
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
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Residential & commercial coverage</span>
                </div>
              </div>

              {/* Related Service Directory */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#ff5e14] mb-3">
                  All Water Heater Silos:
                </h4>
                <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                  {SERVICES.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services/${item.slug}`}
                      className={`block text-xs py-1 transition-colors truncate ${
                        item.slug === slug
                          ? "text-[#ff5e14] font-bold"
                          : "text-slate-300 hover:text-white hover:underline"
                      }`}
                    >
                      • {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Regional Coverage Links */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#ff5e14] mb-3">
                  Service Area Hubs:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/locations/${loc.slug}`}
                      className="text-xs bg-slate-800 hover:bg-[#ff5e14] text-slate-300 hover:text-white px-2.5 py-1 rounded transition-colors font-semibold"
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

      {/* 3. CALL TO ACTION BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CallBanner
          headline={`Need Fast ${service.name} in Anaheim?`}
          subtext="Call (456) 789-0123 now to speak directly with an on-call licensed plumbing professional."
        />
      </div>
    </div>
  );
}
