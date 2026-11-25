import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Phone,
  Wrench,
  Flame,
  AlertTriangle,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Zap,
  ExternalLink,
  Droplet,
  ChevronRight,
  Settings,
  Sparkles,
  Building2,
  Gauge
} from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, SERVICES, LOCATIONS } from "@/lib/data";
import CallBanner from "@/components/CallBanner";
import PhoneOnlyCTA from "@/components/PhoneOnlyCTA";

export const metadata: Metadata = {
  title: "Water Heater Services in Anaheim, CA",
  description: "Explore all 12 water heater services in Anaheim CA: repair, emergency burst containment, tankless descaling, gas/electric repair, maintenance, commercial systems. Call (714) 987-1987.",
};

// Map each service slug to its dedicated custom photo
const serviceImages: Record<string, string> = {
  "water-heater-repair": "/images/water-heater-repair.jpg",
  "emergency-water-heater-repair": "/images/water-heater-burst-leak.jpg",
  "tankless-water-heater-repair": "/images/tankless-water-heater.jpg",
  "water-heater-installation": "/images/water-heater-installation.jpg",
  "water-heater-replacement": "/images/water-heater-tank.jpg",
  "gas-water-heater-repair": "/images/pipes-valves.jpg",
  "electric-water-heater-repair": "/images/boiler-heating.jpg",
  "water-heater-maintenance": "/images/water-heater-maintenance.jpg",
  "commercial-water-heater-repair": "/images/commercial-water-heater.jpg",
  "water-heater-leak-repair": "/images/water-heater-burst-leak.jpg",
  "water-heater-thermostat-repair": "/images/plumbing-fitting.jpg",
  "water-heater-pilot-light-repair": "/images/plumber-wrench.jpg",
};

// Detailed paragraph content for each of the 12 services
const serviceDescriptions: Record<string, { summary: string; bullets: string[]; highlights: string }> = {
  "water-heater-repair": {
    summary: "Most water heater failures in Anaheim do not require full unit replacements. From worn thermocouples and burned-out electric elements to failing gas control valves and sediment-clogged dip tubes, our network technicians diagnose the root cause on-site and execute same-day repairs using universal replacement components.",
    bullets: [
      "Precision diagnosis of upper & lower 240V electric heating elements and thermostats.",
      "Testing of atmospheric gas burner assemblies, thermocouples, and thermopile millivolt output.",
      "Inspection and replacement of Temperature & Pressure (T&P) safety relief valves.",
      "Clearing of calcified brass drain valves and restoration of water temperature balance."
    ],
    highlights: "Trucks carry factory-certified parts for Bradford White, Rheem, A.O. Smith, and State water heaters."
  },
  "emergency-water-heater-repair": {
    summary: "When an active water leak, burst tank, or hazardous gas odor occurs, waiting days for an appointment is not an option. Our Anaheim emergency dispatch unit routes on-call licensed plumbers with an average response time of 45 to 60 minutes across all Anaheim ZIP codes.",
    bullets: [
      "Immediate telephonic coaching on cold water shutoff and gas/electrical disconnection.",
      "24/7 priority response for flooding tanks, scalding relief discharges, and combustion odors.",
      "Water extraction and containment assistance to protect subfloors and drywall.",
      "Same-day emergency tank or tankless replacements when tanks cannot be safely salvaged."
    ],
    highlights: "Priority dispatch active 24 hours a day, 7 days a week, 365 days a year across North Orange County."
  },
  "tankless-water-heater-repair": {
    summary: "Tankless demand water heaters provide continuous hot water in a compact space, but Orange County's hard water creates heavy mineral scaling inside narrow heat exchanger tubes. Our factory-trained specialists handle complete descaling flushes, error code diagnostics, and burner calibrations.",
    bullets: [
      "Diagnostic code retrieval and clearing for Navien, Rinnai, Noritz, and Rheem units.",
      "Submersible pump virgin-acid descaling to dissolve rock-hard calcium and limescale.",
      "Flame rod carbon cleaning, igniter electrode gap adjustment, and intake air screen de-linting.",
      "Resolution of the 'cold water sandwich' and water flow turbine sensor replacements."
    ],
    highlights: "Restores maximum thermal efficiency and eliminates fluctuating shower temperatures."
  },
  "water-heater-installation": {
    summary: "A correct installation determines how efficiently and safely your water heater performs over its 10 to 15-year lifespan. Network contractors size each system to match your home's peak-hour demand and manage the entire City of Anaheim building permit and inspection process.",
    bullets: [
      "First-hour rating (FHR) and flow rate calculations tailored to household bathrooms.",
      "California Seismic Zone 4 dual heavy-gauge earthquake strapping bolted to wood studs.",
      "Thermal expansion tank installation on closed backflow-prevented municipal meters.",
      "South Coast AQMD Rule 1121 compliant ultra-low NOx certified gas burners."
    ],
    highlights: "Turnkey installation packages include old unit disconnect, delivery, permit filing, and haul-away."
  },
  "water-heater-replacement": {
    summary: "When a conventional storage tank passes the 10-year mark or develops rust corrosion through the outer steel shell, replacement is the safest, most economical path forward. We replace leaking, inefficient, or undersized units with high-efficiency ENERGY STAR models.",
    bullets: [
      "Safe, sanitary draining and disconnect of end-of-life water heaters.",
      "Installation of premium 40, 50, or 75-gallon atmospheric gas or 240V electric storage tanks.",
      "Upgraded 1/4-turn full-port brass ball valves and new stainless steel flex connectors.",
      "Environmentally responsible haul-away and metal recycling of the old tank."
    ],
    highlights: "Most like-for-like replacements are completed in under 3 to 4 hours with same-day hot water restoration."
  },
  "gas-water-heater-repair": {
    summary: "Natural gas water heaters require specialized combustion safety precautions. Our licensed C-36 plumbers inspect gas supply lines, draft hoods, pilot burner assemblies, and air intake screens to guarantee safe, efficient, and 100% code-compliant operation.",
    bullets: [
      "Combustible gas leak sniffing along all iron pipe threads and yellow gas flex lines.",
      "Burner chamber cleaning and vacuuming of lint from the FVIR flame arrestor screen.",
      "Draft hood chimney draft testing to eliminate carbon monoxide backdrafting risks.",
      "Electronic Honeywell and Robertshaw gas control valve testing and calibration."
    ],
    highlights: "Safety-first repairs that eliminate gas odors, sooting, and pilot outages."
  },
  "electric-water-heater-repair": {
    summary: "Electric water heaters are straightforward but involve high-voltage 240V electrical circuits in direct contact with water. If your electric unit has tripped its breaker, produces lukewarm water, or runs out of hot water in minutes, our technicians can diagnose and fix it rapidly.",
    bullets: [
      "Lockout-tagout 240V safety de-energization and multi-meter voltage verification.",
      "Continuity and resistance testing of upper and lower 4500W heating elements.",
      "Sequential calibration testing of upper logic thermostat and lower secondary thermostat.",
      "Emergency Cut-Off (ECO) high-limit reset switch testing and terminal re-wiring."
    ],
    highlights: "Fast element replacements using high-grade, low-watt density resistored components."
  },
  "water-heater-maintenance": {
    summary: "With Anaheim water hardness measuring between 15 and 22 grains per gallon, regular maintenance is the single most cost-effective way to prevent unexpected tank ruptures. Annual hydro-flushing and sacrificial anode rod inspections can add up to 5 years to your water heater's life.",
    bullets: [
      "High-pressure power flushing to evacuate calcified calcium pebble beds from the tank base.",
      "Sacrificial magnesium and aluminum anode rod inspection and replacement.",
      "Manual lift testing and seat clearance of the Temperature & Pressure relief valve.",
      "Comprehensive multi-point visual inspection of gas lines, venting, and water connections."
    ],
    highlights: "Lowers monthly energy bills by 15-25% by restoring direct thermal transfer."
  },
  "commercial-water-heater-repair": {
    summary: "Hot water outages in commercial properties—such as hotels near the Anaheim Convention Center, restaurants in Downtown Anaheim, laundromats, or apartment buildings—violate Orange County health codes and stop operations instantly. We offer high-capacity commercial solutions.",
    bullets: [
      "Service for commercial boilers, high-recovery gas tanks, and multi-unit tankless racks.",
      "Diagnostic troubleshooting of commercial recirculation pumps and loop check valves.",
      "Health department 140°F+ sanitization compliance testing for food service facilities.",
      "Priority commercial emergency response with flexible after-hours scheduling."
    ],
    highlights: "Dedicated commercial technicians experienced in high-BTU and multi-tenant systems."
  },
  "water-heater-leak-repair": {
    summary: "Not every water heater leak requires replacing the entire tank. Leaks originating from copper flex connectors, temperature relief discharge pipes, heating element gaskets, or drain valves can be repaired cost-effectively in a single visit.",
    bullets: [
      "Precision acoustic and dye tracing to differentiate between fitting leaks and tank ruptures.",
      "Replacement of cheap factory plastic drain valves with heavy-duty full-port brass valves.",
      "Installation of commercial-grade braided stainless steel flexible water supply lines.",
      "New EPDM rubber gaskets for electric heating element flanges to eliminate weeping."
    ],
    highlights: "Honest leak evaluation: if it's repairable we fix it; if the tank shell is rusted we explain your options."
  },
  "water-heater-thermostat-repair": {
    summary: "Water that is scalding hot presents severe burn hazards, while water that never gets hot enough makes daily chores frustrating. Our technicians test, recalibrate, and replace malfunctioning water heater thermostats across both gas and electric systems.",
    bullets: [
      "Digital immersion thermometer testing at fixtures to verify the safe 120°F target.",
      "Electric upper and lower bimetal contact snap testing and calibration.",
      "Gas control valve internal thermal bulb sensor resistance measurements.",
      "High-limit reset switch replacement to prevent repeat emergency lockouts."
    ],
    highlights: "Eliminates dangerous temperature swings and protects your family from accidental scalding."
  },
  "water-heater-pilot-light-repair": {
    summary: "A pilot light that repeatedly extinguishes is one of the most frequent gas water heater complaints in Anaheim. Our plumbers safely relight pilots, clean soot from burner orifices, and replace failing thermocouples or electronic igniters.",
    bullets: [
      "Disassembly and compressed-air cleaning of the microscopic pilot orifice jet.",
      "Millivolt generator and heavy-duty thermocouple / thermopile replacements.",
      "Piezoelectric push-button spark igniter repair and electrode gap adjustment.",
      "Combustion air draft inspection to prevent outdoor wind drafts from blowing out pilot flames."
    ],
    highlights: "Safe, lasting pilot repairs that prevent hazardous unburned gas buildup."
  }
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#f4f7fa]">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#0a192f] via-[#102a45] to-[#0a192f] text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#ff5e14]/20 text-[#ff5e14] text-xs sm:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full border border-[#ff5e14]/30">
            <Wrench className="w-4 h-4 text-[#ff5e14]" />
            <span>Comprehensive Water Heater Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Water Heater Services in <span className="text-[#ff5e14]">Anaheim, CA</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our complete 12-service directory. From quick thermocouple and element repairs to whole-home tankless conversions, commercial boilers, and 24/7 emergency burst tank containment.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${BRAND_PHONE}`}
              style={{ color: "#ffffff", textDecoration: "none" }}
              className="inline-flex items-center gap-2.5 bg-[#ff5e14] hover:bg-[#e04800] !text-white text-white px-8 py-3.5 rounded-xl font-black text-lg shadow-xl transition-all animate-pulse-subtle"
            >
              <Phone className="w-5 h-5 animate-bounce !text-white text-white" style={{ color: "#ffffff" }} />
              <span className="!text-white text-white" style={{ color: "#ffffff" }}>Call Dispatch: {BRAND_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Main 12-Service Content Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Service Silo Listing: ALL 12 SERVICES PRESENT */}
          <div className="lg:col-span-8 content-body space-y-16 text-slate-700 leading-relaxed bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#ff5e14] block mb-2">
                12 Dedicated Water Heater Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] mb-4">
                Specialized Water Heating Solutions for Anaheim Properties
              </h2>
              <p>
                A water heater is among the hardest-working mechanical appliances in your home, functioning continuously under pressure and extreme thermal cycling. At <Link href="/">{BRAND_NAME}</Link>, we do not offer generic handyman fixes; we connect Anaheim homeowners and businesses directly with specialized plumbing technicians trained on exact manufacturer specifications, gas combustion dynamics, and California municipal safety codes.
              </p>
              <p className="mt-4">
                Whether you own a single-family home in the Historic Colony, run a busy restaurant near the Anaheim Convention Center, or manage an apartment complex in West Anaheim, our network delivers prompt, professional diagnostic visits. Before any repair or installation begins, you receive an itemized, upfront quote so you retain complete control over your home investment.
              </p>
            </div>

            {/* Render all 12 services in full detail */}
            {SERVICES.map((srv, index) => {
              const info = serviceDescriptions[srv.slug];
              const imgPath = serviceImages[srv.slug] || "/images/water-heater-repair.jpg";

              return (
                <article
                  key={srv.id}
                  id={srv.slug}
                  className="space-y-6 pt-10 border-t border-slate-200 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#ff5e14] shrink-0 font-black text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-[#0a192f]">
                          {srv.name} in Anaheim, CA
                        </h3>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                          Priority #{srv.priority} • {srv.category.toUpperCase()} SILO
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#ff5e14] bg-orange-50 hover:bg-[#ff5e14] hover:text-white px-3.5 py-1.5 rounded-lg border border-orange-200 transition-all"
                    >
                      <span>Dedicated Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Service Photo */}
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src={imgPath}
                      alt={`${srv.name} in Anaheim CA`}
                      width={1200}
                      height={500}
                      className="w-full h-60 sm:h-72 object-cover"
                    />
                  </div>

                  {/* Summary */}
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {info?.summary || srv.shortDesc}
                  </p>

                  {/* Key Highlights & Bullets */}
                  {info?.bullets && (
                    <div className="bg-[#f4f7fa] p-5 rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-xs font-extrabold uppercase text-[#0a192f] block tracking-wider">
                        Key Diagnostics & Deliverables:
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {info.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {info.highlights && (
                        <p className="text-xs text-[#004b87] font-semibold pt-2 border-t border-slate-200">
                          {info.highlights}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Dual Action Strip */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-bold">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="text-[#ff5e14] hover:text-[#004b87] hover:underline flex items-center gap-1"
                    >
                      Read full 1,000+ word guide for {srv.name} →
                    </Link>
                    <a
                      href={`tel:${BRAND_PHONE}`}
                      className="inline-flex items-center gap-1.5 bg-[#0a192f] hover:bg-[#ff5e14] text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call for {srv.name}</span>
                    </a>
                  </div>
                </article>
              );
            })}

            {/* Direct Call Section */}
            <PhoneOnlyCTA />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0a192f] text-white rounded-3xl p-6 sm:p-8 shadow-xl sticky top-24 border border-slate-800">
              <span className="text-xs font-extrabold text-[#ff5e14] uppercase tracking-wider block mb-2">
                Fast Phone-Only Scheduling
              </span>
              <h3 className="text-2xl font-black mb-3">
                All 12 Services On-Call
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Skip automated web forms and speak directly to our Anaheim dispatch team. We route certified local plumbers carrying universal parts on their trucks.
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
                  <Clock className="w-4 h-4 text-[#ff5e14]" /> Average arrival: 45 to 60 mins
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Fully insured California C-36 contractors
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" /> Transparent written quotes before work
                </div>
              </div>

              {/* Jump List for All 12 Services */}
              <div className="mt-8 pt-6 border-t border-slate-700/80">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#ff5e14] mb-3">
                  Jump to Any Service:
                </h4>
                <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1 text-xs">
                  {SERVICES.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.slug}`}
                      className="block text-slate-300 hover:text-white hover:underline truncate py-0.5"
                    >
                      • {s.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Service Areas Directory */}
              <div className="mt-8 pt-6 border-t border-slate-700/80">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#ff5e14] mb-3">
                  Regional Service Hubs:
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

      {/* 3. Call Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CallBanner
          headline="Have Questions About Which Service You Need?"
          subtext="Call our Anaheim dispatch line anytime at (714) 987-1987. Describe what you see, and we will send the right specialist."
        />
      </div>
    </div>
  );
}
