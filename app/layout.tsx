import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Alex_Brush } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { siteData } from "@/data/siteData";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Illinois Family Dentistry | Smiles You Can Trust in Dallas, TX",
  description:
    "Smiles You Can Trust! High-Quality Family Dentistry in Dallas TX, Tailored for Every Member. Reserve Your Family’s Spot Now! 2300 W Illinois Ave. Call 469-809-1919.",
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
  icons: {
    icon: [
      { url: "/img/teeth-img.webp", type: "image/webp" },
      { url: "/icon.webp", type: "image/webp" },
    ],
    shortcut: "/img/teeth-img.webp",
    apple: "/img/teeth-img.webp",
  },
  openGraph: {
    title: "Illinois Family Dentistry | Dentist in Dallas, TX | Family Dentistry",
    description:
      "Smiles You Can Trust! High-Quality Family Dentistry in Dallas TX. Open weekdays until 7 PM & Saturdays. Medicaid/CHIP & PPO accepted. Hablamos Español.",
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
      suppressHydrationWarning
      className={`${outfit.variable} ${plusJakartaSans.variable} ${alexBrush.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/img/teeth-img.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/img/teeth-img.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
