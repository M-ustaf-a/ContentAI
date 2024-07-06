import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ContentAI",
  description: "",
  icons: {
    icon: "./logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights/>
        </body>
    </html>
    </ClerkProvider>
  );
}
