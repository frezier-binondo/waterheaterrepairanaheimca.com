"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Clock, MapPin, ShieldCheck, Flame, Menu, X, ChevronDown, Wrench, Award, CheckCircle, Droplet } from "lucide-react";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY, SERVICES, LOCATIONS } from "@/lib/data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-md">
      {/* Drainhaus Top Bar */}
      <div className="bg-[#0a192f] text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          {/* Left: Badges */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[#ff5e14] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#ff5e14] animate-ping inline-block"></span>
              24/7 Emergency Dispatch • Anaheim, CA & North Orange County
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#ff5e14]" /> Response Time: 45–60 Mins
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Licensed California C-36 Contractors
            </span>
          </div>

          {/* Right: Phone & License */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-slate-400 text-[11px]">
              No Automated Forms • Direct Dispatch Only
            </span>
            <a
              href={`tel:${BRAND_PHONE}`}
              className="text-[#ff5e14] hover:text-white font-extrabold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call: {BRAND_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Drainhaus Middle Header Bar with Multi-Column Info */}
      <div className="hidden md:block bg-white border-b border-slate-100 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          {/* Logo with Brand Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-[#0a192f] group-hover:bg-[#ff5e14] flex items-center justify-center text-white shadow-md transition-colors duration-300">
              <Flame className="w-7 h-7 text-[#ff5e14] group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="block text-xl font-black text-[#0a192f] tracking-tight group-hover:text-[#ff5e14] transition-colors leading-tight">
                {BRAND_NAME}
              </span>
              <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
                Fast Licensed Water Heater Repair & Replacement
              </span>
            </div>
          </Link>

          {/* Three Drainhaus Info Badges */}
          <div className="flex items-center gap-8">
            {/* Location Info */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#ff5e14]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left text-xs">
                <span className="block font-bold text-[#0a192f]">Anaheim HQ</span>
                <span className="text-slate-500">Anaheim Blvd & Lincoln Ave</span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="hidden xl:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#ff5e14]">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-left text-xs">
                <span className="block font-bold text-[#0a192f]">Hours: 24/7/365</span>
                <span className="text-slate-500">Same-Day Priority Slots</span>
              </div>
            </div>

            {/* Emergency Call Box */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="w-11 h-11 rounded-full bg-[#ff5e14]/10 flex items-center justify-center text-[#ff5e14] shrink-0">
                <Phone className="w-5 h-5 animate-pulse" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-extrabold tracking-wider text-[#ff5e14]">
                  Call 24/7 Dispatch:
                </span>
                <a
                  href={`tel:${BRAND_PHONE}`}
                  className="text-lg font-black text-[#0a192f] hover:text-[#ff5e14] transition-colors leading-none"
                >
                  {BRAND_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drainhaus Dark Nav Bar with Menu Links & Emergency Button */}
      <div className="bg-[#004b87] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile view Logo */}
          <div className="md:hidden py-3 flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#ff5e14]">
              <Flame className="w-5 h-5" />
            </div>
            <Link href="/" className="font-extrabold text-sm text-white truncate max-w-[200px]">
              {BRAND_NAME}
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 font-bold text-sm tracking-wide">
            <Link
              href="/"
              className="px-4 py-4 hover:bg-[#0a192f] text-white transition-colors border-b-2 border-transparent hover:border-[#ff5e14]"
            >
              Home
            </Link>

            {/* Services Dropdown - All 12 Services */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className="px-4 py-4 hover:bg-[#0a192f] text-white transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-[#ff5e14]"
              >
                Services
                <ChevronDown className="w-4 h-4 text-sky-200" />
              </Link>
              {servicesDropdown && (
                <div className="absolute top-full -left-12 w-[600px] bg-white rounded-b-2xl shadow-2xl border-t-4 border-[#ff5e14] p-4 z-50 text-slate-800 grid grid-cols-2 gap-2">
                  <div className="col-span-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#ff5e14]">
                      All 12 Water Heater Services
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdown(false)}
                      className="text-xs font-bold text-[#004b87] hover:underline"
                    >
                      View Full Services Directory →
                    </Link>
                  </div>
                  {SERVICES.map((srv) => (
                    <Link
                      key={srv.id}
                      href={`/services#${srv.category === "repair" ? "repair" : srv.category === "emergency" ? "emergency" : srv.category === "commercial" ? "commercial" : "replacement"}`}
                      onClick={() => setServicesDropdown(false)}
                      className="p-2.5 rounded-lg hover:bg-orange-50/70 hover:text-[#ff5e14] transition-colors group flex items-start gap-2.5"
                    >
                      <Droplet className="w-4 h-4 text-[#004b87] group-hover:text-[#ff5e14] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-[#ff5e14] leading-tight">
                          {srv.name}
                        </span>
                        <span className="block text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                          {srv.shortDesc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <Link
                href="/locations"
                className="px-4 py-4 hover:bg-[#0a192f] text-white transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-[#ff5e14]"
              >
                Locations
                <ChevronDown className="w-4 h-4 text-sky-200" />
              </Link>
              {locationsDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-b-xl shadow-2xl border-t-4 border-[#ff5e14] py-2 z-50 text-slate-800">
                  <Link
                    href="/locations"
                    className="block px-4 py-2 text-xs font-black uppercase text-[#ff5e14] bg-orange-50 border-b border-orange-100"
                  >
                    North Orange County Hubs →
                  </Link>
                  <Link
                    href="/locations#anaheim-hills"
                    className="block px-4 py-2 text-xs font-semibold hover:bg-slate-50 hover:text-[#ff5e14]"
                  >
                    Anaheim Hills (92807, 92808)
                  </Link>
                  <Link
                    href="/locations#fullerton"
                    className="block px-4 py-2 text-xs font-semibold hover:bg-slate-50 hover:text-[#ff5e14]"
                  >
                    Fullerton (92831–92835)
                  </Link>
                  <Link
                    href="/locations#orange"
                    className="block px-4 py-2 text-xs font-semibold hover:bg-slate-50 hover:text-[#ff5e14]"
                  >
                    Orange (92865–92869)
                  </Link>
                  <Link
                    href="/locations#garden-grove"
                    className="block px-4 py-2 text-xs font-semibold hover:bg-slate-50 hover:text-[#ff5e14]"
                  >
                    Garden Grove (92840–92845)
                  </Link>
                  <Link
                    href="/locations#brea"
                    className="block px-4 py-2 text-xs font-semibold hover:bg-slate-50 hover:text-[#ff5e14]"
                  >
                    Brea & Placentia
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="px-4 py-4 hover:bg-[#0a192f] text-white transition-colors border-b-2 border-transparent hover:border-[#ff5e14]"
            >
              Blog
            </Link>

            <Link
              href="/faq"
              className="px-4 py-4 hover:bg-[#0a192f] text-white transition-colors border-b-2 border-transparent hover:border-[#ff5e14]"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="px-4 py-4 hover:bg-[#0a192f] text-white transition-colors border-b-2 border-transparent hover:border-[#ff5e14]"
            >
              Contact & Map
            </Link>
          </nav>

          {/* Right: Drainhaus High-Contrast Call Action Button */}
          <div className="flex items-center gap-3 py-2.5">
            <a
              href={`tel:${BRAND_PHONE}`}
              className="bg-[#ff5e14] hover:bg-[#e04800] text-white font-black text-sm px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BRAND_PHONE_DISPLAY}</span>
            </a>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-white hover:bg-white/10 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a192f] text-white px-4 pt-3 pb-6 space-y-2 border-t border-slate-700">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold border-b border-slate-800"
          >
            Home
          </Link>
          <div className="border-b border-slate-800 pb-2">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-white flex items-center justify-between"
            >
              <span>Services (All 12 Water Heater Solutions)</span>
              <span className="text-[#ff5e14] text-xs">View All →</span>
            </Link>
            <div className="grid grid-cols-1 gap-1 pl-3 pt-1 pb-2">
              {SERVICES.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services#${srv.category === "repair" ? "repair" : srv.category === "emergency" ? "emergency" : srv.category === "commercial" ? "commercial" : "replacement"}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs text-slate-300 hover:text-[#ff5e14] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e14]"></span>
                  <span>{srv.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/locations"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold border-b border-slate-800"
          >
            Locations (Anaheim & 5 Surrounding Cities)
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold border-b border-slate-800"
          >
            Plumbing Blog & Guides
          </Link>
          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold border-b border-slate-800"
          >
            FAQ & Pricing Estimates
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold border-b border-slate-800"
          >
            Contact & Service Map
          </Link>
          <div className="pt-3">
            <a
              href={`tel:${BRAND_PHONE}`}
              className="w-full flex items-center justify-center gap-2 bg-[#ff5e14] text-white py-3 rounded-lg font-black text-base shadow-lg"
            >
              <Phone className="w-5 h-5" /> Call Now: {BRAND_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
