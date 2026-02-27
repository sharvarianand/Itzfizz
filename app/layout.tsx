import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "W E L C O M E  I T Z F I Z Z — Scroll-Driven Hero Animation",
  description:
    "A stunning scroll-driven hero section animation built with Next.js 14, GSAP ScrollTrigger, and Tailwind CSS for Itzfizz Digital.",
  keywords: [
    "GSAP",
    "ScrollTrigger",
    "Next.js",
    "Tailwind CSS",
    "scroll animation",
    "Itzfizz Digital",
    "internship",
  ],
  authors: [{ name: "Itzfizz Digital Intern" }],
  openGraph: {
    title: "Itzfizz Hero — Scroll-Driven Animation",
    description:
      "Premium GSAP scroll animation for Itzfizz Digital internship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
