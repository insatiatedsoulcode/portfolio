import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Deepak Kumar Singh - Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Deepak Kumar Singh - A passionate Full Stack Developer with expertise in React, Node.js, AI/ML, and modern web technologies. Explore my projects, experience, and achievements.",
  keywords: ["Deepak Kumar Singh", "Full Stack Developer", "React Developer", "Node.js", "AI/ML", "Web Development", "Portfolio"],
  authors: [{ name: "Deepak Kumar Singh" }],
  creator: "Deepak Kumar Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deepakkumarsingh.dev",
    title: "Deepak Kumar Singh - Full Stack Developer",
    description: "Portfolio showcasing my work in Full Stack Development, AI/ML, and modern web technologies.",
    siteName: "Deepak Kumar Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar Singh - Full Stack Developer",
    description: "Portfolio showcasing my work in Full Stack Development, AI/ML, and modern web technologies.",
    creator: "@deepakkumarsingh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
