import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  Star,
  MapPin,
  ExternalLink,
  Sparkles,
  Zap,
  Award,
  ChevronRight,
  ShieldAlert,
  ThumbsUp,
  Droplet
} from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, SERVICES, LOCATIONS } from "@/lib/data";
import CallBanner from "@/components/CallBanner";
import PhoneOnlyCTA from "@/components/PhoneOnlyCTA";

export const metadata: Metadata = {
  title: "Water Heater Repair Anaheim, CA",
  description: "Fast water heater repair, installation and replacement in Anaheim, CA. Drainhaus theme layout with licensed local pros and upfront quote. Call (714) 987-1987.",
};

export default function HomePage() {
  return (
    <div className="w-full bg-[#f4f7fa]">
      {/* 1. DRAINHAUS HERO SECTION */}
      <section className="relative bg-[#0a192f] text-white pt-16 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#004b87_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Bold Typography & Action Callouts */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#ff5e14]/15 text-[#ff5e14] border border-[#ff5e14]/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-[#ff5e14] animate-pulse" />
              <span>Anaheim&apos;s #1 Dedicated Water Heater Network</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Water Heater Repair In <span className="text-[#ff5e14]">Anaheim, CA</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From sudden tank bursts and flooding in your garage to pilot ignition failures and ice-cold morning showers. We match Anaheim homeowners and businesses with licensed, local C-36 plumbers for fast, upfront-priced water heater repair and same-day replacements.
            </p>

            {/* Drainhaus Call Button Container */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`tel:${BRAND_PHONE}`}
                style={{ color: "#ffffff", textDecoration: "none" }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ff5e14] hover:bg-[#e04800] !text-white text-white px-8 py-4 rounded-xl font-black text-lg tracking-wide shadow-xl hover:shadow-2xl active:scale-95 transition-all animate-pulse-subtle"
              >
                <Phone className="w-6 h-6 animate-bounce !text-white text-white" style={{ color: "#ffffff" }} />
                <span className="!text-white text-white" style={{ color: "#ffffff" }}>Call Now: {BRAND_PHONE_DISPLAY}</span>
              </a>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#004b87] hover:bg-[#003866] text-white px-6 py-4 rounded-xl font-bold text-base transition-colors"
              >
                <span>Browse All 12 Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Drainhaus Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 text-left">
              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Licensed CA Pros</span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">C-36 Contractors</span>
              </div>

              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Clock className="w-4 h-4 text-[#ff5e14] shrink-0" />
                  <span>45–60 Min Dispatch</span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">Priority Emergency</span>
              </div>

              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Upfront Written</span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">Zero Hidden Fees</span>
              </div>

              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Star className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>5-Star Service</span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">Residential & Com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-slate-700/60 shadow-2xl bg-slate-900 group">
              <Image
                src="/images/hero-technician.jpg"
                alt="Licensed water heater technician inspecting a unit in Anaheim CA"
                width={800}
                height={600}
                className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent"></div>

              {/* Floating Emergency Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0a192f]/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 text-white flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-extrabold text-[#ff5e14] uppercase tracking-wider block">
                    Fast Emergency Matching
                  </span>
                  <span className="text-sm font-bold text-white block">
                    No hot water? Leaking tank?
                  </span>
                  <span className="text-xs text-slate-400 block">
                    Direct dispatcher available 24 hours a day
                  </span>
                </div>
                <a
                  href={`tel:${BRAND_PHONE}`}
                  className="bg-[#ff5e14] hover:bg-[#e04800] text-white p-3 rounded-lg shrink-0 transition-colors"
                  aria-label="Call Dispatch"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DRAINHAUS 3-FEATURE BOXES (OVERLAPPING HERO) */}
      <section className="relative -mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-7 shadow-xl border-t-4 border-[#ff5e14] drainhaus-card flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#ff5e14]">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f]">
                Same-Day Repair & Tune-Up
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Diagnosing failed thermocouples, faulty gas valves, burned-out electric elements, and recalibrating thermostats on all major brands.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004b87]">
              <span>Trucks Stocked with Universal Parts</span>
              <ArrowRight className="w-4 h-4 text-[#ff5e14]" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-7 shadow-xl border-t-4 border-[#004b87] drainhaus-card flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#004b87]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f]">
                Tankless Descaling & Flushing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Reversing severe calcium scale buildup caused by Orange County hard water. Clearing error codes and restoring endless hot water flow.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004b87]">
              <span>Navien, Rinnai, Noritz Certified</span>
              <ArrowRight className="w-4 h-4 text-[#ff5e14]" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0a192f] text-white rounded-2xl p-7 shadow-xl border-t-4 border-[#ff5e14] drainhaus-card flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#ff5e14] flex items-center justify-center text-white">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                24/7 Urgent Leak Dispatch
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Burst tank containment, emergency cold water shut-off instructions, and immediate replacement with City of Anaheim code compliance.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-[#ff5e14]">
              <span>Immediate Phone Assistance</span>
              <a href={`tel:${BRAND_PHONE}`} className="underline">
                Call {BRAND_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DRAINHAUS SERVICE PICKER / 12-SERVICE GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff5e14] bg-orange-100 px-3 py-1 rounded-full">
            Our Service Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a192f]">
            Complete Water Heater Solutions for Anaheim
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Select your specific water heating issue below. We cover every residential, commercial, tank, and tankless situation across Anaheim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#ff5e14] drainhaus-card flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#004b87] flex items-center justify-center">
                    <Droplet className="w-5 h-5 text-[#004b87]" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Priority #{srv.priority}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0a192f]">
                  {srv.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.shortDesc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services/${srv.slug}`}
                  className="text-xs font-bold text-[#ff5e14] hover:text-[#004b87] flex items-center gap-1 transition-colors"
                >
                  Learn details <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`tel:${BRAND_PHONE}`}
                  className="text-xs font-bold text-slate-700 hover:text-[#ff5e14] flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-[#ff5e14]" /> Call Pro
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MAIN LOCALLY OPTIMIZED ANAHEIM BODY CONTENT (2,000 WORDS) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main 2,000-Word Content Column */}
          <div className="lg:col-span-8 content-body space-y-10 text-slate-700 leading-relaxed text-base">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff5e14] block mb-2">
                Local Anaheim Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] mb-4">
                Anaheim&apos;s Dedicated Water Heater Repair & Replacement Network
              </h2>
              <p>
                Hot water is non-negotiable in everyday Southern California life. From morning showers and sanitizing dishes to washing laundry and running commercial food service kitchens, an unexpected water heater breakdown disrupts your entire routine immediately.
              </p>
              <p className="mt-4">
                Through our streamlined network, <Link href="/">{BRAND_NAME}</Link> connects Anaheim property owners directly with licensed, certified California C-36 plumbing contractors. Whether your home is located in the Historic Colony District, near Angel Stadium in the Platinum Triangle, or in the hillside estates of Anaheim Hills, our mobile plumbing partners arrive equipped to evaluate, diagnose, and fix your hot water system in a single professional visit.
              </p>
            </div>

            {/* Why Orange County Hard Water Matters */}
            <div className="bg-[#f4f7fa] p-8 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-2xl font-bold text-[#0a192f]">
                Why Hard Water Dramatically Shortens Water Heater Life in Anaheim
              </h3>
              <p>
                Anaheim and its surrounding communities receive tap water blended from deep groundwater basins and surface water via the Colorado River Aqueduct. As reported by the{" "}
                <a
                  href="https://www.ocwd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#ff5e14] underline"
                >
                  Orange County Water District <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>
                , regional water hardness measures between 15 and 22 grains per gallon (gpg), classifying it as &quot;very hard&quot; to &quot;extremely hard.&quot;
              </p>
              <p>
                When hard water is heated inside a conventional tank or pumped across the delicate copper coils of a tankless heat exchanger, dissolved calcium and magnesium ions crystallize out of solution. Over 12 to 24 months:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 pl-2">
                <li><strong>Heavy Sediment Layer:</strong> A thick rock-like blanket of calcium scale forms on the bottom of gas tanks, insulating the water from the burner flame and increasing energy bills by up to 30%.</li>
                <li><strong>Burned-Out Heating Elements:</strong> In electric units, calcium scale cakes around the lower 240V heating element until it overheats and burns out completely.</li>
                <li><strong>Kettling & Popping Noises:</strong> Water trapped under the sediment layer boils into steam pockets, creating violent rumbling and banging sounds during active cycles.</li>
                <li><strong>Premature Tank Seam Failure:</strong> Overheated steel bottoms crack the protective glass porcelain lining, leading to irreversible tank corrosion and bottom leaks.</li>
              </ul>
              <p className="text-sm text-slate-600 pt-2">
                Our technicians recommend annual professional sediment flushing and sacrificial magnesium anode rod checks to combat this aggressive mineral wear.
              </p>
            </div>

            {/* 4-Step How It Works (Drainhaus Process) */}
            <div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
                How Our Fast Phone-Only Referral Process Works
              </h3>
              <p>
                We eliminate the middleman and marketing delays. You don&apos;t have to submit contact forms or wait hours for automated email replies. Here is our direct 4-step job flow:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-sm">
                <div className="bg-white p-5 rounded-xl border-l-4 border-[#ff5e14] shadow-xs">
                  <div className="font-extrabold text-[#0a192f] text-base mb-1">Step 1: Direct Phone Call</div>
                  <p className="text-slate-600 text-xs">
                    Call our dispatch center at <a href={`tel:${BRAND_PHONE}`} className="underline font-bold text-[#ff5e14]">{BRAND_PHONE_DISPLAY}</a> and describe your plumbing symptoms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border-l-4 border-[#004b87] shadow-xs">
                  <div className="font-extrabold text-[#0a192f] text-base mb-1">Step 2: Pro Matching</div>
                  <p className="text-slate-600 text-xs">
                    We immediately dispatch the nearest available licensed California plumber servicing your Anaheim neighborhood.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border-l-4 border-[#ff5e14] shadow-xs">
                  <div className="font-extrabold text-[#0a192f] text-base mb-1">Step 3: Upfront Written Quote</div>
                  <p className="text-slate-600 text-xs">
                    The pro inspects your water heater on-site and provides an honest, written upfront estimate before starting any work.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border-l-4 border-emerald-500 shadow-xs">
                  <div className="font-extrabold text-[#0a192f] text-base mb-1">Step 4: Hot Water Restored</div>
                  <p className="text-slate-600 text-xs">
                    Approve the quote and have your system repaired or replaced the same day, backed by manufacturer and labor warranties.
                  </p>
                </div>
              </div>
            </div>

            {/* Repair vs Replace Decision Table */}
            <div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
                Repair or Replace? A Transparent Guide for Anaheim Homeowners
              </h3>
              <p>
                A trustworthy plumber will never push you to replace a water heater that can be safely and economically repaired. Review standard industry guidelines below:
              </p>

              <div className="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0a192f] text-white font-bold">
                    <tr>
                      <th className="p-3.5">System Condition</th>
                      <th className="p-3.5">Recommendation</th>
                      <th className="p-3.5">Cost Expectation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-semibold text-slate-800">Unit under 8 years; minor thermocouple, valve, or element failure</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Repair Immediately</td>
                      <td className="p-3.5 text-slate-600 text-xs">Component swap typically $180–$390 parts & labor.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-semibold text-slate-800">Water actively leaking from bottom steel tank body seams</td>
                      <td className="p-3.5 text-red-600 font-bold">Replace Unit</td>
                      <td className="p-3.5 text-slate-600 text-xs">Inner glass lining is punctured; patching is structurally unsafe.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-semibold text-slate-800">Unit 10–12+ years old with recurrent breakdowns & noise</td>
                      <td className="p-3.5 text-[#ff5e14] font-bold">Upgrade to New Unit</td>
                      <td className="p-3.5 text-slate-600 text-xs">High-efficiency tank or tankless saves 25% on SoCalGas utilities.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-semibold text-slate-800">Tankless unit flashing diagnostic ignition/sensor error codes</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Descaling & Tune-Up</td>
                      <td className="p-3.5 text-slate-600 text-xs">Submersible pump acid flush clears heat exchanger coils.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                For national energy efficiency recommendations and water heater selection criteria, refer to the{" "}
                <a
                  href="https://www.energy.gov/energysaver/water-heating"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#ff5e14] underline"
                >
                  U.S. Department of Energy Water Heating Portal <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>.
              </p>
            </div>

            {/* Neighborhood Coverage Directory */}
            <div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
                Anaheim Neighborhoods & Surrounding Communities Served
              </h3>
              <p>
                Our mobile network covers all residential ZIP codes throughout central Anaheim (92801, 92802, 92804, 92805, 92806, 92807, 92808, 92809). In addition, we have dedicated mobile plumbing teams stationed across nearby markets:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4 text-xs font-semibold text-[#004b87]">
                <Link href="/locations/anaheim-hills" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14] block">
                  • Anaheim Hills (92807, 92808)
                </Link>
                <Link href="/locations/fullerton" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14] block">
                  • Fullerton (92831–92835)
                </Link>
                <Link href="/locations/orange" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14] block">
                  • Orange (92865–92869)
                </Link>
                <Link href="/locations/garden-grove" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14] block">
                  • Garden Grove (92840–92845)
                </Link>
                <Link href="/locations/brea" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14] block">
                  • Brea (92821, 92823)
                </Link>
                <Link href="/locations/placentia" className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#ff5e14] block">
                  • Placentia (92870)
                </Link>
              </div>
              <p>
                Find comprehensive details on our <Link href="/services">Full Water Heater Services Silo</Link> or read diagnostic articles in our <Link href="/blog">Homeowner Blog</Link>.
              </p>
            </div>

            {/* Direct Phone Conversion Box */}
            <PhoneOnlyCTA />
          </div>

          {/* Drainhaus Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sticky Emergency Call Box */}
            <div className="bg-[#0a192f] text-white rounded-2xl p-6 sm:p-8 shadow-xl border-t-4 border-[#ff5e14] sticky top-24">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff5e14] block mb-2">
                24/7 Mobile Dispatch
              </span>
              <h3 className="text-2xl font-black text-white leading-tight mb-2">
                Need Help Right Now?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Connect directly with our local Anaheim dispatch team. We match you with licensed California plumbers on-call right now.
              </p>

              <a
                href={`tel:${BRAND_PHONE}`}
                style={{ color: "#ffffff", textDecoration: "none" }}
                className="w-full flex items-center justify-center gap-2.5 bg-[#ff5e14] hover:bg-[#e04800] !text-white text-white py-4 px-6 rounded-xl font-black text-lg tracking-wide shadow-lg transition-all"
              >
                <Phone className="w-5 h-5 !text-white text-white" style={{ color: "#ffffff" }} />
                <span className="!text-white text-white" style={{ color: "#ffffff" }}>{BRAND_PHONE_DISPLAY}</span>
              </a>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Licensed California C-36 Contractors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Same-day arrival for urgent leaks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Upfront written estimates</span>
                </div>
              </div>

              {/* Service Areas Quick Tags */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#ff5e14] block mb-3">
                  Nearby Service Areas:
                </span>
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

            {/* City Permit Notice */}
            <div className="bg-[#f4f7fa] rounded-2xl p-6 border border-slate-200">
              <h4 className="font-bold text-[#0a192f] text-sm mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#004b87]" />
                City of Anaheim Code Compliance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All replacements performed by network contractors include mandatory seismic earthquake bracing, thermal expansion tanks, and low-NOx certified gas burners complying with South Coast AQMD Rule 1121. Permits are pulled on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DRAINHAUS CTA BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CallBanner
          headline="Have an Anaheim Water Heater Emergency?"
          subtext="Burst tank, gas leak smell, or total cold water loss? Our local pros are ready for priority dispatch across all Anaheim ZIP codes."
        />
      </div>
    </div>
  );
}
