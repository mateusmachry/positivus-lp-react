import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Positivus | Digital Marketing Agency - Navigating the Digital Landscape for Success",
  description: "Positivus is a digital marketing agency dedicated to helping businesses grow and succeed online. Our team specializes in SEO, PPC, social media marketing, and content creation to drive impactful results for your brand.",
  openGraph: {
    title: "Positivus | Digital Marketing Agency - Navigating the Digital Landscape for Success",
    description: "Discover how Positivus can elevate your online presence with expert digital marketing strategies. From SEO to social media and content creation, we help businesses succeed online."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
