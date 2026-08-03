import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { siteData } from "@/data/siteData";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Illinois Family Dentistry | Dallas TX Dental Practice",
  description:
    "Luxury, comfortable & personalized family dentistry in Dallas, TX. Comprehensive dental care, emergency appointments, cosmetic treatments, Invisalign, and pediatric care.",
  keywords: [
    "Illinois Family Dentistry",
    "Dentist Dallas TX",
    "Family Dentistry 75224",
    "Oak Cliff Dentist",
    "Emergency Dentist Dallas",
    "Cosmetic Dentistry Dallas",
    "Hablamos Español Dentista",
  ],
  authors: [{ name: "Illinois Family Dentistry" }],
  openGraph: {
    title: "Illinois Family Dentistry | Modern & Personal Dental Care in Dallas",
    description:
      "Experience luxury, family-first dental care in Dallas, TX. Flexible hours, evening appointments, and most insurance accepted.",
    url: "https://illinoisdentistrydallas.com",
    siteName: "Illinois Family Dentistry",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://illinoisdentistrydallas.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteData.name,
    description: siteData.tagline,
    telephone: siteData.phone,
    email: siteData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.address.street,
      addressLocality: siteData.address.city,
      addressRegion: siteData.address.state,
      postalCode: siteData.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.7237",
      longitude: "-96.8573",
    },
    openingHoursSpecification: siteData.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.time.split(" – ")[0] || "10:00",
      closes: h.time.split(" – ")[1] || "19:00",
    })),
    priceRange: "$$",
    acceptsReservations: "True",
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
