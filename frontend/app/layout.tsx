import type { Metadata } from "next";
import { Urbanist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoMatrix | IT & Business Process Automation",
  description:
    "AutoMatrix designs and runs the digital systems, AI workflows and outsourced operations that let growing businesses move faster.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
