import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Phone, CheckCircle2, ShieldCheck, Clock, ExternalLink, ArrowRight, Building, Home, Compass } from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, LOCATIONS, SERVICES } from "@/lib/data";
import CallBanner from "@/components/CallBanner";
import PhoneOnlyCTA from "@/components/PhoneOnlyCTA";

export const metadata: Metadata = {
  title: "Water Heater Service Areas Near Anaheim, CA",
  description: "Prompt water heater repair and installation across Anaheim, Anaheim Hills, Fullerton, Orange, Garden Grove, Brea, and Placentia. Call (456) 789-0123.",
};

export default function LocationsPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#0b2238] to-[#163654] text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-orange-500/30">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>North & Central Orange County Service Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Water Heater Service Areas in <span className="text-[#f26522]">Anaheim & Nearby</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fast, licensed mobile plumbers dispatched within roughly 20 miles of central Anaheim. Find your city below for localized water condition notes and neighborhood coverage.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${BRAND_PHONE}`}
              className="inline-flex items-center gap-2.5 bg-[#f26522] hover:bg-[#d85413] text-white px-7 py-3 rounded-full font-bold text-base shadow-lg transition-all animate-pulse-subtle"
            >
              <Phone className="w-5 h-5" />
              <span>Call Local Dispatch: {BRAND_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area: 2000 Words locally optimized across Anaheim & 5 Nearby Sub-Pages/Markets */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 content-body space-y-12 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2238] mb-4">
                Local Neighborhood & Regional Plumbing Architecture
              </h2>
              <p>
                Water heater performance and lifespan vary substantially depending on where you live in Orange County. Elevation shifts in hillside communities create higher static water pressure, historic bungalows feature narrow closet cavities that demand custom low-boy tanks, while multi-family neighborhoods place relentless peak demands on central hot water supplies.
              </p>
              <p className="mt-4">
                At <Link href="/">{BRAND_NAME}</Link>, we connect you with vetted, licensed California plumbers who live and work right in your community. Whether you require same-day diagnosis for an electric water heater in Anaheim Hills or an emergency replacement in Old Towne Orange, our technicians arrive equipped with region-specific knowledge, heavy-duty seismic bracing, and parts tailored to your municipal water characteristics.
              </p>
            </div>

            {/* Core Hub: Anaheim (The Central Hub) */}
            <div id="anaheim" className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-[#0b2238] flex items-center gap-2">
                  <Building className="w-6 h-6 text-[#f26522]" />
                  Anaheim (Central Service Base)
                </h3>
                <span className="text-xs bg-orange-100 text-[#f26522] font-extrabold px-3 py-1 rounded-full">
                  ZIP Codes: 92801 – 92809
                </span>
              </div>
              <p>
                Anaheim is our primary service headquarters. From mid-century post-war tract homes in West Anaheim to high-rise lofts in the Platinum Triangle and bustling hotels surrounding Disneyland and the Anaheim Convention Center, our partner pros service all heater models.
              </p>
              <p>
                Municipal regulations by the{" "}
                <a
                  href="https://www.anaheim.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#f26522] underline"
                >
                  City of Anaheim Building Division <ExternalLink className="w-3.5 h-3.5" />
                </a>{" "}
                strictly require safety inspections for all water heater installations, ensuring seismic earthquake strapping is bolted to structural framing and low-NOx burners protect regional air quality.
              </p>
              <div className="text-sm pt-2">
                <strong>Explore services:</strong> <Link href="/services#repair">Anaheim Water Heater Repair</Link> | <Link href="/services#tankless">Anaheim Tankless Descaling</Link> | <Link href="/services#replacement">Anaheim Emergency Replacement</Link>.
              </div>
            </div>

            {/* Sub-Location 1: Anaheim Hills */}
            <div id="anaheim-hills" className="pt-8 border-t border-slate-200 space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-[#0b2238] flex items-center gap-2">
                  <Compass className="w-6 h-6 text-[#f26522]" />
                  1. Anaheim Hills, CA
                </h3>
                <span className="text-xs bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-full border border-slate-200">
                  ZIP Codes: 92807, 92808
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/water-heater-tank.jpg"
                  alt="High-capacity residential water heater installation in Anaheim Hills CA"
                  width={1200}
                  height={450}
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>

              <h4 className="font-bold text-[#0b2238] text-lg">
                High Water Pressure & Large-Capacity Estate Demands
              </h4>
              <p>
                Anaheim Hills features picturesque hillside custom estates and planned communities built primarily from the 1980s through the 2000s along Nohl Ranch Road, Serrano Avenue, and Weir Canyon. Because of dramatic municipal elevation gradients, incoming street water pressure in Anaheim Hills frequently exceeds 80 to 110 PSI—well above the safe residential maximum of 60 to 75 PSI.
              </p>
              <p>
                Excessive water pressure places violent stress on water heater tank seams, temperature-and-pressure (T&P) relief valves, and flexible supply connectors. When our partner technicians service an Anaheim Hills residence, they always test your main pressure-reducing valve (PRV) and expansion tank to protect your new or repaired water heater from sudden burst fractures.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                <strong>Nearby Connections:</strong> Sibling service in <Link href="/locations#orange">Orange</Link> and <Link href="/locations#placentia">Placentia</Link>. View <Link href="/services#repair">Anaheim Hills Water Heater Repair</Link>.
              </div>
            </div>

            {/* Sub-Location 2: Fullerton */}
            <div id="fullerton" className="pt-8 border-t border-slate-200 space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-[#0b2238] flex items-center gap-2">
                  <Home className="w-6 h-6 text-[#f26522]" />
                  2. Fullerton, CA
                </h3>
                <span className="text-xs bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-full border border-slate-200">
                  ZIP Codes: 92831, 92832, 92833, 92834, 92835
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/plumbing-fitting.jpg"
                  alt="Fullerton water heater valve and pipe fitting repair"
                  width={1200}
                  height={450}
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>

              <h4 className="font-bold text-[#0b2238] text-lg">
                Historic Plumbing Retrofits & Student Multi-Family Demand
              </h4>
              <p>
                Fullerton is a vibrant community blending historic pre-war neighborhoods, a bustling downtown culinary district, and dense multi-family apartments supporting the Cal State Fullerton (CSUF) campus. Older properties in the Sunny Hills and Downtown Fullerton corridors frequently feature aging galvanized water lines, undersized 1/2&quot; gas pipes, and confined closet installations.
              </p>
              <p>
                When older water heaters fail in Fullerton, technicians often find significant sediment accumulations and failing thermocouple safety probes. Local network pros specialize in retrofitting older venting stacks, converting tight utility closets to wall-mounted tankless units, and handling full permits through the Fullerton Building Department.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                <strong>Nearby Connections:</strong> Sibling service in <Link href="/locations#placentia">Placentia</Link> and <Link href="/locations#brea">Brea</Link>. Review our <Link href="/services#emergency">Fullerton Emergency Burst Tank Assistance</Link>.
              </div>
            </div>

            {/* Sub-Location 3: Orange */}
            <div id="orange" className="pt-8 border-t border-slate-200 space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-[#0b2238] flex items-center gap-2">
                  <Home className="w-6 h-6 text-[#f26522]" />
                  3. Orange, CA
                </h3>
                <span className="text-xs bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-full border border-slate-200">
                  ZIP Codes: 92865, 92866, 92867, 92868, 92869
                </span>
              </div>

              <h4 className="font-bold text-[#0b2238] text-lg">
                Old Towne Plaza Historic Structures & Tight Space Conversions
              </h4>
              <p>
                The City of Orange is renowned for Old Towne Orange—the largest National Register Historic District in California. Many century-old Craftsman bungalows, Victorian homes, and mid-century residences feature unique architectural restrictions: water heaters tucked into crawl spaces, attics, or tiny service porches with low ceiling clearances.
              </p>
              <p>
                Replacing or repairing a water heater in Orange requires seasoned plumbing craftsmanship that respects original structural timbers while maintaining 100% compliance with contemporary California building standards. Network pros provide specialty low-boy storage tanks, high-efficiency direct-vent tankless solutions, and emergency leak repairs for homes and restaurants surrounding the historic Plaza Circle.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                <strong>Nearby Connections:</strong> Sibling service in <Link href="/locations#anaheim-hills">Anaheim Hills</Link> and <Link href="/locations#garden-grove">Garden Grove</Link>. See <Link href="/services#replacement">Orange Water Heater Replacement</Link>.
              </div>
            </div>

            {/* Sub-Location 4: Garden Grove */}
            <div id="garden-grove" className="pt-8 border-t border-slate-200 space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-[#0b2238] flex items-center gap-2">
                  <Building className="w-6 h-6 text-[#f26522]" />
                  4. Garden Grove, CA
                </h3>
                <span className="text-xs bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-full border border-slate-200">
                  ZIP Codes: 92840, 92841, 92842, 92843, 92844, 92845
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/plumber-wrench.jpg"
                  alt="Plumbing wrench tightening water heater flex connector in Garden Grove CA"
                  width={1200}
                  height={450}
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>

              <h4 className="font-bold text-[#0b2238] text-lg">
                High-Density Multi-Family & Hospitality Corridor Demand
              </h4>
              <p>
                Garden Grove encompasses dense single-family residential tracts, extensive condominium complexes, and a booming hotel corridor along Harbor Boulevard bordering the resort area. With multiple occupants in single-family dwellings and duplexes, 40-gallon water heaters are frequently overtaxed, leading to rapid element burnout, gas valve fatigue, and persistent hot water shortages during morning peaks.
              </p>
              <p>
                Technicians serving Garden Grove specialize in upsizing tanks to 50 or 75 gallons, installing high-recovery Bradford White atmospheric gas heaters, and integrating advanced tankless systems with dedicated recirculation lines to deliver instant hot water without wasting hundreds of gallons down the drain.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                <strong>Nearby Connections:</strong> Sibling service in <Link href="/locations#orange">Orange</Link> and <Link href="/locations#fullerton">Fullerton</Link>. Learn about <Link href="/services#tankless">Garden Grove Tankless Descaling</Link>.
              </div>
            </div>

            {/* Sub-Location 5: Brea & Placentia */}
            <div id="brea" className="pt-8 border-t border-slate-200 space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-[#0b2238] flex items-center gap-2">
                  <Compass className="w-6 h-6 text-[#f26522]" />
                  5. Brea & Placentia, CA
                </h3>
                <span className="text-xs bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-full border border-slate-200">
                  ZIP Codes: 92821, 92823 (Brea) & 92870 (Placentia)
                </span>
              </div>

              <h4 className="font-bold text-[#0b2238] text-lg">
                Modern Energy Upgrades & Mature Suburban Subdivisions
              </h4>
              <p>
                Brea and Placentia represent North Orange County’s classic suburban heartland. Brea features modern hillside developments near Carbon Canyon and lively commercial retail near Brea Mall, where homeowners actively seek high-efficiency ENERGY STAR® water heaters and hybrid heat pump units that qualify for local utility rebates.
              </p>
              <p>
                In Placentia, established single-family homes in neighborhoods surrounding Kraemer Memorial Park and Old Town Placentia frequently house water heaters that have passed their 10th anniversary. Because North Orange County’s water has heavy mineral hardness, these older tanks accumulate thick calcium beds that cause violent knocking sounds. We connect Brea and Placentia homeowners with licensed contractors for preventative sediment flushing, sacrificial anode rod replacements, and same-day replacements.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                <strong>Related Services:</strong> <Link href="/services#maintenance">Brea Water Heater Tune-Up</Link> | <Link href="/services#replacement">Placentia Water Heater Replacement</Link> | <Link href="/faq">Review Pricing FAQs</Link>.
              </div>
            </div>

            {/* Direct Phone Conversion Section */}
            <PhoneOnlyCTA />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0b2238] text-white rounded-3xl p-6 sm:p-8 shadow-xl sticky top-24 border border-slate-800">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-2">
                On-Call Mobile Coverage
              </span>
              <h3 className="text-2xl font-black mb-3">
                Find Your Local Dispatch Zone
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Calling our direct phone line connects you to dispatchers who check real-time truck locations across Anaheim, Brea, Fullerton, Orange, and Garden Grove.
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
                  <Clock className="w-4 h-4 text-orange-400" /> 7 Days a week: 24-Hour Emergency Dispatch
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Licensed California C-36 Contractors
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" /> Transparent quotes prior to work
                </div>
              </div>

              {/* Service Directory */}
              <div className="mt-8 pt-6 border-t border-slate-700/80">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-orange-400 mb-3">
                  Water Heater Silos
                </h4>
                <ul className="text-xs space-y-2 text-slate-300">
                  <li>
                    <Link href="/services#repair" className="hover:text-white underline">
                      • Residential Water Heater Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#emergency" className="hover:text-white underline">
                      • Emergency Burst Tank Containment
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#tankless" className="hover:text-white underline">
                      • Tankless Flush & Diagnostic Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#replacement" className="hover:text-white underline">
                      • Code-Compliant Tank Replacement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#commercial" className="hover:text-white underline">
                      • Commercial Heavy-Duty Boilers
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
          headline="Live in North Orange County and Lost Hot Water?"
          subtext="Call (456) 789-0123 right now to be matched with an on-call licensed plumber servicing your exact neighborhood."
        />
      </div>
    </div>
  );
}
