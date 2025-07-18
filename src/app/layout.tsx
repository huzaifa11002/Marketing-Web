import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";
import BottomToTop from "./components/topToBottom";
import Script from "next/script";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // select weights as needed
  variable: '--font-poppins', // optional for Tailwind
});

export const metadata: Metadata = {
  title: "Influenca",
  description: "We are a Global Influencer Marketing Agency. Our team manages brand collaborations, creates influencer lists, sends emails, and scrapes data. Boost your sales with our help.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-43TJ7JSTTQ"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-43TJ7JSTTQ');
  `}
      </Script>
      <body className={poppins.className}>
        <Header />
        {children}
        <WhatsappIcon />
        <BottomToTop />
        <Footer />
      </body>
    </html>
  );
}
