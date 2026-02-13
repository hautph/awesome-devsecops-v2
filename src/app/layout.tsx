import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awesome DevSecOps - Master Security in DevOps",
  description: "Your comprehensive guide to DevSecOps practices, tools, and learning resources. Master security integration across the entire DevOps lifecycle.",
  keywords: ["DevSecOps", "Security", "DevOps", "CI/CD", "SAST", "DAST", "Container Security", "Cloud Security"],
  authors: [{ name: "Awesome DevSecOps Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Awesome DevSecOps",
    description: "Master security integration across the entire DevOps lifecycle",
    url: "https://devsecops.dev",
    siteName: "Awesome DevSecOps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awesome DevSecOps",
    description: "Master security integration across the entire DevOps lifecycle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
