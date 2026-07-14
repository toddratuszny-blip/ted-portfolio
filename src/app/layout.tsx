import type { Metadata } from "next";
import { Raleway, Sora } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
});

const sora = Sora({
  variable: "--font-sora",
  style: "normal",
  subsets: ["latin"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "Portfolio | Strategic Brand Marketing & Creative Direction",
  description:
    "Portfolio showcasing brand strategy, creative direction, integrated marketing, and content development for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
