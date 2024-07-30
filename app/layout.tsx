import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ContentAI",
  description:
    "Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.",
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
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
