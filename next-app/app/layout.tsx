import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/Providers";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@DevWizz/create-next-js",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  authModal
}: {
  children: ReactNode,
  authModal: ReactNode
}) {
  return (
    <html lang="en" className={cn("bg-white text-slate-900 antialiased light", inter.className)}>
      <body className="min-h-screen bg-slate-50 antialiased">
        <Providers>
          <Navbar />
          <div className="container max-w-7xl mx-auto h-full pt-24">
            {authModal}

            {children}
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
