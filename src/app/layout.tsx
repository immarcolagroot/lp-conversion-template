import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Header from "@/components/Header";
import Poster from "@/components/Poster";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "LP Conversion Template",
  description: "Leading page with high conversion template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Poster />
        <Header />
        {children}
      </body>
    </html>
  );
}
