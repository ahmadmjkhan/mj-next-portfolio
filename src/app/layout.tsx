import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MJ Portfolio",
  description: "portfolio website where you can know about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-peach-600 ${manrope.className}`}>
        {/* next top loader */}
        <NextTopLoader color="#5700FF" showSpinner={false} />

        <AOSInit />
        {children}
      </body>
    </html>
  );
}
