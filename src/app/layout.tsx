import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

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
      <Head>
        {/* Preconnect and DNS-prefetch */}
        <link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net" />
        <link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net" />
      </Head>
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
        {children}
        <Script id="page-hide-inline-script" strategy="beforeInteractive">
          {`
            !function(){
              var e="body {opacity: 0 !important;}",
              t=document.createElement("style");
              t.type="text/css",
              t.id="page-hide-style",
              t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),
              document.head.appendChild(t),
              window.rmo=function(){
                var e=document.getElementById("page-hide-style");
                e&&(e.parentNode.removeChild(e),document.body.style.opacity="")
              },
              setTimeout(window.rmo,2000)
            }();
          `}
        </Script>
        {/* External async script */}
        <Script
          src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js?apiKey=054cda6ceec57459874ff26986452151:574042177a3bc6b117231976432284d8bdc07cec1d80b07bb593d931264bcd44"
          strategy="afterInteractive"
          async
        />
      </body>
    </html>
  );
}
