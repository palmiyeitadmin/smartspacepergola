import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smart Space Pergola | 15% More Space with Patented Design | Powered by Palmiye",
  description: "Smart Space Pergola gives you 15% more usable outdoor area with its patented L-shaped pillar design. German engineering, powered by Palmiye. Configure and buy directly.",
  keywords: ["pergola", "outdoor living", "smart space", "palmiye", "bioclimatic pergola", "garden pergola"],
  openGraph: {
    title: "Smart Space Pergola — Buy Smaller, Live Larger",
    description: "Get 15% more usable space with our patented corner design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${outfit.variable} font-sans antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
