import "./globals.css";
import { DM_Sans, Luckiest_Guy } from "next/font/google";
import Script from "next/script";


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
  weight: "400",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://wewillwokyou.co.uk"),
  title: {
    default: "We Will Wok You | Asian Street Food Truck in Milton Keynes",
    template: "%s | We Will Wok You",
  },
  description:
    "Milton Keynes based street food truck serving fresh, bold, Asian-style noodles and wok-fried dishes. Find us at events, pop-ups, business parks and MK hotspots.",
  keywords: [
    "street food Milton Keynes",
    "Asian street food MK",
    "noodle truck MK",
    "food truck Milton Keynes",
    "wok food Milton Keynes",
    "MK food events",
    "Milton Keynes catering",
  ],
  alternates: {
    canonical: "https://wewillwokyou.co.uk",
  },
  authors: [{ name: "We Will Wok You" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "We Will Wok You | Asian Street Food in Milton Keynes",
    description:
      "Milton Keynes street food truck serving bold, fresh Asian-style dishes from our signature red noodle truck.",
    url: "https://wewillwokyou.co.uk",
    siteName: "We Will Wok You",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "We Will Wok You - Asian Street Food Truck in MK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Will Wok You",
    description:
      "Asian-style street food truck serving noodles and wok-fried dishes in Milton Keynes.",
    images: ["/og-image.jpg"],
  },
};

// ✅ THIS is what actually adds the viewport meta tag
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${luckiestGuy.variable}`}>
      <body>
        {children}
        {/* JSON-LD Schema for We Will Wok You */}
        <Script
          id="wok-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodTruck",
              name: "We Will Wok You",
              image: "https://wewillwokyou.co.uk/og-image.jpg",
              url: "https://wewillwokyou.co.uk",
              telephone: "+441234567890",
              servesCuisine: [
                "Asian",
                "Street Food",
                "Noodles",
                "Wok-Fried"
              ],
              priceRange: "££",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Milton Keynes",
                addressRegion: "Buckinghamshire",
                addressCountry: "GB"
              },
              sameAs: [
                "https://www.instagram.com/wewillwokyoumk/",
                "https://www.facebook.com/wewillwokyoumk"
              ],
              "brand": {
                  "@type": "Brand",
                  "name": "We Will Wok You"
                }
              
            })
          }}
        />  
      </body>
    </html>
  );
}