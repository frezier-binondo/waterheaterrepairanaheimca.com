import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Wrench, Flame, AlertTriangle, ShieldCheck, Clock, CheckCircle2, ArrowRight, Zap, ExternalLink } from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, SERVICES } from "@/lib/data";
import CallBanner from "@/components/CallBanner";
import PhoneOnlyCTA from "@/components/PhoneOnlyCTA";

export const metadata: Metadata = {
  title: "Water Heater Services in Anaheim, CA",
  description: "Explore all 12 water heater services in Anaheim CA. Fast diagnosis, emergency leak repair, tankless descaling, gas/electric replacement. Call (456) 789-0123.",
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0b2238] to-[#163654] text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-orange-500/30">
            <Wrench className="w-4 h-4 text-orange-500" />
            <span>Comprehensive Water Heater Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Water Heater Services in <span className="text-[#f26522]">Anaheim, CA</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From quick thermocouple and thermostat swaps to whole-home tankless conversions and 24/7 emergency burst tank containment. Browse our 12 specialized water heater silos below.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${BRAND_PHONE}`}
              className="inline-flex items-center gap-2.5 bg-[#f26522] hover:bg-[#d85413] text-white px-7 py-3 rounded-full font-bold text-base shadow-lg transition-all animate-pulse-subtle"
            >
              <Phone className="w-5 h-5" />
              <span>Call Dispatch: {BRAND_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area: 800+ Words locally optimized content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Service Silo Listing & Descriptions */}
          <div className="lg:col-span-8 content-body space-y-12 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2238] mb-4">
                Specialized Water Heating Solutions for Anaheim Properties
              </h2>
              <p>
                A water heater is among the hardest-working mechanical appliances in your home, functioning continuously under pressure and extreme thermal cycling. At <Link href="/">{BRAND_NAME}</Link>, we do not offer generic handyman fixes; we connect Anaheim homeowners and businesses directly with specialized plumbing technicians trained on exact manufacturer specifications, gas combustion dynamics, and California municipal safety codes.
              </p>
              <p className="mt-4">
                Whether you own a single-family home in the Historic Colony, run a busy restaurant near the Anaheim Convention Center, or manage an apartment complex in West Anaheim, our network delivers prompt, professional diagnostic visits. Before any repair or installation begins, you receive an itemized, upfront quote so you retain complete control over your home investment.
              </p>
            </div>

            {/* Service Category 1: General & Emergency Repair Silo */}
            <div id="repair" className="space-y-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#f26522]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0b2238]">
                    1. Water Heater Repair & Diagnostics
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Gas, Electric, Thermostats, Elements & Valves
                  </span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/images/water-heater-repair.jpg"
                  alt="Plumber repairing residential water heater in Anaheim"
                  width={1200}
                  height={500}
                  className="w-full h-56 sm:h-72 object-cover"
                />
              </div>

              <p>
                Over 80% of water heater problems can be permanently resolved with precision component replacement. When a homeowner notices lukewarm water, a pilot light that repeatedly extinguishes, or strange rumbling sounds from the tank, our technicians immediately test the electrical resistance of the upper and lower elements, calibrate the thermostat, test gas supply pressure, and inspect the pilot orifice.
              </p>
              <p>
                Our repair services strictly adhere to the{" "}
                <a
                  href="https://www.cslb.ca.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#f26522] underline"
                >
                  California Contractors State License Board (CSLB) <ExternalLink className="w-3.5 h-3.5" />
                </a>{" "}
                safety guidelines for high-voltage and natural gas appliance servicing. We carry universal replacement thermocouples, 4500W heating elements, and Robertshaw/White-Rodgers gas control valves on trucks for instant same-day resolution.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                <strong>Related services in this silo:</strong>{" "}
                <Link href="/services#emergency">Emergency Water Heater Repair</Link>,{" "}
                <Link href="/services#tankless">Tankless Descaling Service</Link>, and{" "}
                <Link href="/locations#anaheim-hills">Anaheim Hills Water Heater Repair</Link>.
              </div>
            </div>

            {/* Service Category 2: Emergency Burst Tank & Active Leaks */}
            <div id="emergency" className="space-y-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0b2238]">
                    2. Emergency Burst Tank & Leak Dispatch
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    24/7 Fast Containment & Water Cut-Off
                  </span>
                </div>
              </div>

              <p>
                An active water heater leak can release 40 to 75 gallons of scalding water in minutes, quickly ruining hardwood floors, soaking drywall, and initiating toxic mold proliferation. If you see water flooding around your tank or notice steam blowing vigorously from the Temperature & Pressure (T&P) relief valve, treat this as a true emergency.
              </p>
              <p>
                When you call our emergency line, our dispatch operators will first talk you through immediately shutting off the cold water shutoff valve above the heater and cutting the dedicated circuit breaker or gas supply. We then dispatch the nearest available on-call plumber in Anaheim for rapid arrival, water extraction coordination, and immediate unit swap.
              </p>
              <p>
                Learn more about our local service coverage in <Link href="/locations#fullerton">Fullerton</Link>, <Link href="/locations#orange">Orange</Link>, and <Link href="/locations#garden-grove">Garden Grove</Link>.
              </p>
            </div>

            {/* Service Category 3: Tankless Water Heater Solutions */}
            <div id="tankless" className="space-y-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0b2238]">
                    3. Tankless Water Heater Repair & Descaling
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Navien, Rinnai, Noritz & Rheem Demand Units
                  </span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/images/tankless-water-heater.jpg"
                  alt="Modern tankless water heater installation and repair"
                  width={1200}
                  height={500}
                  className="w-full h-56 sm:h-72 object-cover"
                />
              </div>

              <p>
                Tankless systems offer virtually endless hot water and compact wall-mounted footprints, making them tremendously popular across Anaheim homes. However, because Orange County water is loaded with dissolved calcium and lime, minerals rapidly bake onto the thin copper heat exchanger fins.
              </p>
              <p>
                This scale buildup triggers overheating error codes, sudden flame failures, and the dreaded &quot;cold water sandwich.&quot; Our factory-trained tankless technicians utilize specialized submersible circulation pumps and food-grade virgin descaling solutions to thoroughly clear the heat exchanger, restore full thermal heat transfer, clean intake air screens, and calibrate digital modulating gas valves.
              </p>
            </div>

            {/* Service Category 4: Replacement & Code-Compliant Installation */}
            <div id="replacement" className="space-y-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0b2238]">
                    4. Water Heater Replacement & Installation
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Permitted Same-Day Installs with Haul-Away
                  </span>
                </div>
              </div>

              <p>
                When a water heater tank reaches 10 to 12 years of age or develops rust perforation through the outer casing, replacement is the only safe and cost-effective solution. Our network plumbers carry premium, energy-efficient Bradford White, Rheem, and A.O. Smith units in common 40, 50, and 75-gallon capacities.
              </p>
              <p>
                Every replacement performed through our network strictly satisfies the California Plumbing Code (CPC), including:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 pl-2">
                <li>Heavy-gauge seismic earthquake strapping anchored directly into wall studs.</li>
                <li>Thermal expansion tank installation for closed backflow-prevented municipal water meters.</li>
                <li>South Coast Air Quality Management District (SCAQMD) Rule 1121 compliant ultra-low NOx gas burners.</li>
                <li>Proper 3/4&quot; copper Temperature & Pressure discharge lines terminated safely to the exterior.</li>
                <li>City of Anaheim plumbing permit processing and final municipal sign-off.</li>
              </ul>
              <p>
                Find location-specific installation details for <Link href="/locations#brea">Brea</Link> and <Link href="/locations#placentia">Placentia</Link>, or read our guide in the <Link href="/blog">Plumbing Knowledge Base</Link>.
              </p>
            </div>

            {/* Service Category 5: Commercial Water Heating Systems */}
            <div id="commercial" className="space-y-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0b2238]">
                    5. Commercial High-Recovery Water Heaters
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Hotels, Restaurants, Laundromats & Multi-Family
                  </span>
                </div>
              </div>

              <p>
                Hot water downtime in a commercial establishment like an Anaheim hotel, commercial kitchen, or salon directly violates Orange County Health Department regulations and halts revenue immediately. Our commercial plumbing pros prioritize after-hours service, dual-recirculating pump repairs, high-BTU gas line sizing, and high-recovery commercial boiler maintenance to guarantee your operation never skips a beat.
              </p>
            </div>

            {/* Direct Call Section */}
            <PhoneOnlyCTA />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0b2238] text-white rounded-3xl p-6 sm:p-8 shadow-xl sticky top-24 border border-slate-800">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-2">
                Fast Phone-Only Scheduling
              </span>
              <h3 className="text-2xl font-black mb-3">
                Speak Directly with an Anaheim Technician
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Skip the wait and speak to real dispatchers right now. We explain your repair options and quote the job clearly before work begins.
              </p>

              <a
                href={`tel:${BRAND_PHONE}`}
                className="w-full flex items-center justify-center gap-3 bg-[#f26522] hover:bg-[#d85413] text-white py-4 px-6 rounded-2xl font-black text-lg tracking-wide shadow-lg transition-all animate-pulse-subtle"
              >
                <Phone className="w-5 h-5" />
                <span>{BRAND_PHONE_DISPLAY}</span>
              </a>

              <div className="mt-8 pt-6 border-t border-slate-700/80 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" /> Average arrival: 60 to 90 mins
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Fully insured California contractors
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" /> Permits & haul-away handled for you
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/80">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-orange-400 mb-3">
                  Read Homeowner Guides
                </h4>
                <ul className="text-xs space-y-2 text-slate-300">
                  <li>
                    <Link href="/blog#hard-water" className="hover:text-white underline">
                      • How Orange County Hard Water Damages Heaters
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-white underline">
                      • Top 10 Water Heater FAQ & Cost Estimates
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white underline">
                      • Contact Details & Coverage Map
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CallBanner
          headline="Have Questions About Which Service You Need?"
          subtext="Call our Anaheim dispatch line anytime at (456) 789-0123. Describe what you see, and we will send the right specialist."
        />
      </div>
    </div>
  );
}
