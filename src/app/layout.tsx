import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ClickSpark";
import { Navigation } from "@/components/Navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Amina Bayoudh",
  description: "Portfolio focused on AI-driven security, network infrastructure, and modern UX.",
  keywords: ["portfolio", "cybersecurity", "ai", "ux", "networking"],
  authors: [{ name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Portfolio Owner" }],
  icons: {
    icon: "/assets/icons/A-icon.png",
    shortcut: "/assets/icons/A-icon.png",
    apple: "/assets/icons/A-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    title: process.env.NEXT_PUBLIC_AUTHOR_NAME || "My Portfolio",
    description: "Modern portfolio with glassmorphism design",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfairDisplay.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen w-full flex flex-col">
        <ClickSpark
          sparkColor="#8bd3ff"
          sparkSize={10}
          sparkRadius={18}
          sparkCount={8}
          duration={420}
        >
          <Navigation />
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
