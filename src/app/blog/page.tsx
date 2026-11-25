import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Clock, Calendar, ArrowRight, ShieldAlert, Phone, ExternalLink, Wrench } from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, BLOG_POSTS } from "@/lib/data";
import CallBanner from "@/components/CallBanner";
import PhoneOnlyCTA from "@/components/PhoneOnlyCTA";

export const metadata: Metadata = {
  title: "Plumbing & Water Heater Blog | Anaheim Homeowner Guides",
  description: "Expert water heater maintenance, troubleshooting error codes, and hard water prevention guides for Anaheim & Orange County homeowners. Call (714) 987-1987.",
};

export default function BlogPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0b2238] to-[#163654] text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-orange-500/30">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>Orange County Water Heater Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Plumbing Advice & <span className="text-[#f26522]">Water Heater Guides</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Essential maintenance tips, troubleshooting walk-throughs, and cost analysis written specifically for Anaheim and Southern California homeowners.
          </p>
        </div>
      </section>

      {/* Main Blog Post Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Articles Stream */}
          <div className="lg:col-span-8 content-body space-y-16 text-slate-700 leading-relaxed">
            
            {/* Blog Post 1 */}
            <article id="hard-water" className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="bg-orange-100 text-[#f26522] px-3 py-1 rounded-full uppercase tracking-wider">
                    {BLOG_POSTS[0].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {BLOG_POSTS[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {BLOG_POSTS[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2238] hover:text-[#f26522] transition-colors">
                  {BLOG_POSTS[0].title}
                </h2>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={BLOG_POSTS[0].image}
                  alt="Hard water sediment in water heater tank"
                  width={1200}
                  height={600}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              <p className="font-medium text-slate-900 text-lg leading-relaxed">
                {BLOG_POSTS[0].excerpt}
              </p>

              <div className="space-y-4">
                {BLOG_POSTS[0].content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <p>
                For official data on regional water hardness testing, you can reference the{" "}
                <a
                  href="https://www.ocwd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#f26522] underline"
                >
                  Orange County Water District Water Quality Report <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>. If your tank is banging or popping, schedule a flush with our team.
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
                <span className="text-slate-500">Related: <Link href="/services#maintenance">Annual Water Heater Flushing</Link> | <Link href="/locations#anaheim-hills">Anaheim Hills Service Area</Link></span>
                <a href={`tel:${BRAND_PHONE}`} className="text-[#f26522] hover:underline flex items-center gap-1">
                  Call for a Maintenance Flush →
                </a>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article id="repair-vs-replace" className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full uppercase tracking-wider">
                    {BLOG_POSTS[1].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {BLOG_POSTS[1].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {BLOG_POSTS[1].readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2238] hover:text-[#f26522] transition-colors">
                  {BLOG_POSTS[1].title}
                </h2>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={BLOG_POSTS[1].image}
                  alt="Checking water heater serial number and age"
                  width={1200}
                  height={600}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              <p className="font-medium text-slate-900 text-lg leading-relaxed">
                {BLOG_POSTS[1].excerpt}
              </p>

              <div className="space-y-4">
                {BLOG_POSTS[1].content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
                <span className="text-slate-500">Related: <Link href="/services#repair">Water Heater Repair</Link> | <Link href="/services#replacement">Replacement Silo</Link> | <Link href="/locations#fullerton">Fullerton Services</Link></span>
                <a href={`tel:${BRAND_PHONE}`} className="text-[#f26522] hover:underline flex items-center gap-1">
                  Get an Honest Assessment →
                </a>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article id="tankless-codes" className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-wider">
                    {BLOG_POSTS[2].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {BLOG_POSTS[2].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {BLOG_POSTS[2].readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2238] hover:text-[#f26522] transition-colors">
                  {BLOG_POSTS[2].title}
                </h2>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={BLOG_POSTS[2].image}
                  alt="Modern tankless digital error codes"
                  width={1200}
                  height={600}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              <p className="font-medium text-slate-900 text-lg leading-relaxed">
                {BLOG_POSTS[2].excerpt}
              </p>

              <div className="space-y-4">
                {BLOG_POSTS[2].content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
                <span className="text-slate-500">Related: <Link href="/services#tankless">Tankless Descaling Service</Link> | <Link href="/locations#orange">Orange Service Area</Link> | <Link href="/faq">Common FAQs</Link></span>
                <a href={`tel:${BRAND_PHONE}`} className="text-[#f26522] hover:underline flex items-center gap-1">
                  Call for Tankless Troubleshooting →
                </a>
              </div>
            </article>

            {/* Direct Phone Conversion Section */}
            <PhoneOnlyCTA />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0b2238] text-white rounded-3xl p-6 sm:p-8 shadow-xl sticky top-24 border border-slate-800">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-2">
                Have a Plumbing Emergency?
              </span>
              <h3 className="text-2xl font-black mb-3">
                Don&apos;t Wait for Blog Answers
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                If your water heater is actively leaking, sparking, or filling your garage with gas odors, call our emergency hotline immediately.
              </p>

              <a
                href={`tel:${BRAND_PHONE}`}
                className="w-full flex items-center justify-center gap-3 bg-[#f26522] hover:bg-[#d85413] text-white py-4 px-6 rounded-2xl font-black text-lg tracking-wide shadow-lg transition-all animate-pulse-subtle"
              >
                <Phone className="w-5 h-5" />
                <span>{BRAND_PHONE_DISPLAY}</span>
              </a>

              <div className="mt-8 pt-6 border-t border-slate-700/80">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-orange-400 mb-3">
                  Key Diagnostic Articles
                </h4>
                <ul className="text-xs space-y-3 text-slate-300">
                  <li>
                    <a href="#hard-water" className="hover:text-white underline block">
                      1. How Orange County Hard Water Destroys Water Heaters
                    </a>
                  </li>
                  <li>
                    <a href="#repair-vs-replace" className="hover:text-white underline block">
                      2. The 50% Rule: Should You Repair or Replace?
                    </a>
                  </li>
                  <li>
                    <a href="#tankless-codes" className="hover:text-white underline block">
                      3. Decoding Tankless Error Codes & Flame Failures
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/80 text-xs text-slate-400">
                All articles are reviewed by certified California C-36 plumbing tradespeople for code and safety accuracy.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CallBanner
          headline="Suspect Your Water Heater Has Mineral Sediment?"
          subtext="Call (714) 987-1987 today to schedule a comprehensive sediment flush and safety inspection before your tank ruptures."
        />
      </div>
    </div>
  );
}
