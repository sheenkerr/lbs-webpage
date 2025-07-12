import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/ui/Navigation/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lee Baw Seng Chinese Opera House",
  description: "Lee Baw Seng Chinese Opera House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="mx-auto max-w-0.5 px-4 ">
        <NavBar />
          </div>
        {children}
        {/* Figure out why scrollable? */}
        <footer className="bg-background border-t py-4 mt-8">
          <div className="container mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground">
            Credits
          </div>
        </footer>


      </body>

    </html>
  );
}
