import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND_NAME, BRAND_PHONE, BRAND_PHONE_DISPLAY } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://waterheaterrepairanaheimca.com"),
  title: "Water Heater Repair Anaheim, CA",
  description:
    "Top-rated water heater repair, replacement, tankless descaling and emergency plumbing referral network in Anaheim, CA. Licensed local pros and upfront pricing.",
  keywords: [
    "water heater repair anaheim ca",
    "emergency water heater repair anaheim",
    "tankless water heater repair anaheim",
    "water heater replacement anaheim",
    "water heater installation anaheim",
    "plumber anaheim",
    "orange county water heater repair",
  ],
  verification: {
    google: "ARmHZ0RD9x4XbVqxg3-I9r5SVusErDQ3yfjJdVP08YQ",
  },
  authors: [{ name: BRAND_NAME }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://waterheaterrepairanaheimca.com",
    siteName: BRAND_NAME,
    title: "Water Heater Repair Anaheim, CA",
    description: "Reliable, transparent water heater repair and installation service across Anaheim, CA and North Orange County.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Water Heater Repair in Anaheim CA",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema for LocalBusiness, Organization & WebSite
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://waterheaterrepairanaheimca.com/#website",
        "url": "https://waterheaterrepairanaheimca.com",
        "name": BRAND_NAME,
        "description": "Professional Water Heater Repair & Replacement Referral Service in Anaheim, CA",
        "publisher": {
          "@id": "https://waterheaterrepairanaheimca.com/#organization",
        },
      },
      {
        "@type": "PlumbingService",
        "@id": "https://waterheaterrepairanaheimca.com/#organization",
        "name": BRAND_NAME,
        "url": "https://waterheaterrepairanaheimca.com",
        "telephone": "+17149871987",
        "priceRange": "$$",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Anaheim Blvd & Lincoln Ave",
          "addressLocality": "Anaheim",
          "addressRegion": "CA",
          "postalCode": "92805",
          "addressCountry": "US",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.8378,
          "longitude": -117.9145,
        },
        "areaServed": [
          { "@type": "City", "name": "Anaheim" },
          { "@type": "AdministrativeArea", "name": "Anaheim Hills" },
          { "@type": "City", "name": "Fullerton" },
          { "@type": "City", "name": "Orange" },
          { "@type": "City", "name": "Garden Grove" },
          { "@type": "City", "name": "Brea" },
          { "@type": "City", "name": "Placentia" },
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ARmHZ0RD9x4XbVqxg3-I9r5SVusErDQ3yfjJdVP08YQ" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-orange-500 selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Floating Mobile Sticky Call Bar - Phone-Only conversion requirement */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b2238]/95 backdrop-blur-md p-3 border-t border-orange-500/30 sm:hidden shadow-2xl flex items-center justify-between gap-3">
          <div className="text-left">
            <span className="block text-[10px] text-orange-400 font-bold uppercase tracking-wider">
              24/7 Anaheim Dispatch
            </span>
            <span className="block text-sm font-extrabold text-white">
              {BRAND_PHONE_DISPLAY}
            </span>
          </div>
          <a
            href={`tel:${BRAND_PHONE}`}
            style={{ color: "#ffffff", textDecoration: "none" }}
            className="flex-1 max-w-[200px] flex items-center justify-center gap-2 bg-[#ff5e14] hover:bg-[#e04800] !text-white text-white py-2.5 px-4 rounded-xl font-black text-sm shadow-lg animate-pulse-subtle"
          >
            <span style={{ color: "#ffffff" }} className="!text-white text-white">Call Now</span>
          </a>
        </div>
      </body>
    </html>
  );
}
