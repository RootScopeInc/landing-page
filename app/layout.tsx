import { ThemeProvider } from "@/app/theme-provider";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import React from "react";
import "./globals.css";
const font = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RootScope",
  description: "A blackbox recorder for your infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
