import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kushalsk.com"),
  title: "Kushal S K — Performance Marketer | Meta Ads & Google Ads Specialist",
  description:
    "Performance Marketer managing ₹80+ Lakhs monthly ad spend across Meta Ads and Google Ads. Specializing in ROAS improvement, CPA reduction, and growth marketing for Fintech, EdTech, and high-growth brands.",
  keywords: [
    "Performance Marketer",
    "Meta Ads Specialist",
    "Google Ads Specialist",
    "Growth Marketing",
    "Paid Media Manager",
    "ROAS Optimization",
    "Kushal S K",
  ],
  authors: [{ name: "Kushal S K" }],
  openGraph: {
    title: "Kushal S K — Performance Marketer",
    description:
      "Driving scalable growth through data-driven advertising. Managing ₹80+ Lakhs monthly ad spend across Fintech, EdTech & high-growth brands.",
    url: "https://kushalsk.com",
    siteName: "Kushal S K — Performance Marketer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushal S K — Performance Marketer",
    description:
      "Performance Marketer driving scalable growth through data-driven advertising across Meta Ads and Google Ads.",
  },
  icons: {
    icon: "/icons/favicon.svg",
  },
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
