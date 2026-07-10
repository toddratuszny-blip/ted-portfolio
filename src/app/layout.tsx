import type { Metadata } from "next";
import { Raleway, Sora } from "next/font/google";
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
  title: "Portfolio",
  // description: "",
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
      <body>{children}</body>
    </html>
  );
}
