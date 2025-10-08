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
  title: "Deepak Kumar Singh | Full Stack Developer",
  description: "Experienced Full Stack Developer specializing in Java, Spring Boot, Angular, and MERN Stack. 9+ years in software development, implementation, and project management.",
  keywords: ["Deepak Kumar Singh", "Full Stack Developer", "Java Developer", "Spring Boot", "Angular", "MERN Stack", "AWS", "DevOps", "Pune", "India", "Software Engineer", "Backend Developer", "Frontend Developer", "AI/ML", "Microservices", "CI/CD"],
  authors: [{ name: "Deepak Kumar Singh" }],
  creator: "Deepak Kumar Singh",
  publisher: "Deepak Kumar Singh",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://singhdeepak.me",
    title: "Deepak Kumar Singh | Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in Java, Spring Boot, Angular, and MERN Stack. 9+ years in software development, implementation, and project management.",
    siteName: "Deepak Kumar Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar Singh | Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in Java, Spring Boot, Angular, and MERN Stack. 9+ years in software development, implementation, and project management.",
    creator: "@deepakkumarsingh",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Deepak Kumar Singh",
    "jobTitle": "Full Stack Developer",
    "description": "Experienced Full Stack Developer specializing in Java, Spring Boot, Angular, and MERN Stack. 9+ years in software development, implementation, and project management.",
    "url": "https://singhdeepak.me",
    "image": "https://singhdeepak.me/images/profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/insatiatedsoul/",
      "https://github.com/insatiatedsoulcode",
      "https://twitter.com/deepakkumarsingh"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressCountry": "India"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "INTECH Creative Services Private Limited"
    },
    "knowsAbout": [
      "Java", "Spring Boot", "Angular", "React", "Next.js", "AWS", "DevOps", 
      "Docker", "Kubernetes", "Microservices", "CI/CD", "Python", "Node.js"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Amity University"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "Manipal Institute of Technology"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
