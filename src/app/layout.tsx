import type { Metadata } from "next";
import { GFS_Neohellenic, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const neohellenic = GFS_Neohellenic({
  variable: "--font-neohellenic",
  subsets: ["greek", "latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Coops",
  description: "Projects, writing, and taste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neohellenic.className} ${inter.variable} antialiased min-h-screen`}
      >
        <div className="texture-overlay min-h-screen">
          <Nav />
          <main className="max-w-2xl mx-auto px-6 pb-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
