import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Otri — Frontend Engineer & Design Systems",
  description:
    "Frontend engineer based in Jakarta, obsessed with design systems, component architecture, and the tooling that keeps teams moving.",
  keywords: [
    "frontend developer",
    "design system",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Jakarta",
  ],
  authors: [{ name: "Otrinanda Gandhi" }],
  openGraph: {
    title: "Otri — Frontend Engineer & Design Systems",
    description:
      "Frontend engineer based in Jakarta, obsessed with design systems and component architecture.",
    url: "https://otri.dev",
    siteName: "otri.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otri — Frontend Engineer & Design Systems",
    description:
      "Frontend engineer based in Jakarta, obsessed with design systems and component architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}