import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepak Kumar Singh | Senior Full Stack Developer | Java, Spring Boot, AI/ML Expert",
  description: "Experienced Senior Full Stack Developer with 9+ years expertise in Java, Spring Boot, Angular, React, AI/ML, and AWS. Based in Pune, India. Specializing in enterprise solutions, microservices, and performance optimization.",
  keywords: [
    // Personal Brand
    "Deepak Kumar Singh", "Deepak Singh Developer", "Deepak Kumar","Deepak Singh",
    
    // Technical Skills
    "Full Stack Developer", "Java Developer", "Spring Boot Expert", 
    "Angular Developer", "React Developer", "Next.js Developer",
    "AI Developer", "ML Developer", "Python Developer", "Node.js Developer",
    
    // Specializations
    "Microservices Architect", "AWS Certified", "DevOps Engineer",
    "Enterprise Developer", "Government Project Expert", "Performance Optimization",
    "CI/CD Specialist", "API Design", "Database Design",
    
    // Location Based
    "Pune Developer", "India Developer", "Maharashtra Developer",
    "Remote Developer India", "Freelance Developer Pune",
    
    // Industry Keywords
    "Software Engineer", "Tech Lead", "Solution Architect",
    "Senior Developer", "Backend Developer", "Frontend Developer",
    "Web Developer", "Mobile Developer", "Cloud Developer",
    
    // Technologies
    "Java", "Spring Boot", "Spring Framework", "Hibernate",
    "Angular", "React", "Next.js", "TypeScript", "JavaScript",
    "Python", "Django", "Flask", "Node.js", "Express.js",
    "AWS", "Docker", "Kubernetes", "Jenkins", "Git",
    "MongoDB", "MySQL", "PostgreSQL", "Redis",
    "AI", "Machine Learning", "Deep Learning", "Data Science"
  ],
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
    title: "Deepak Kumar Singh | Senior Full Stack Developer | Java, Spring Boot, AI/ML Expert",
    description: "Experienced Senior Full Stack Developer with 9+ years expertise in Java, Spring Boot, Angular, React, AI/ML, and AWS. Based in Pune, India.",
    siteName: "Deepak Kumar Singh Portfolio",
    images: [
      {
        url: "https://singhdeepak.me/images/profile-og.jpg",
        width: 1200,
        height: 630,
        alt: "Deepak Kumar Singh - Senior Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar Singh | Senior Full Stack Developer | Java, Spring Boot, AI/ML Expert",
    description: "Experienced Senior Full Stack Developer with 9+ years expertise in Java, Spring Boot, Angular, React, AI/ML, and AWS. Based in Pune, India.",
    creator: "@deepakkumarsingh",
    images: ["https://singhdeepak.me/images/profile-twitter.jpg"],
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  category: "Technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://singhdeepak.me",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.5204;73.8567",
    "ICBM": "18.5204, 73.8567",
  },
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
    "jobTitle": "Senior Full Stack Developer",
    "description": "Experienced Senior Full Stack Developer with 9+ years expertise in Java, Spring Boot, Angular, React, AI/ML, and AWS. Specializing in enterprise solutions, microservices, and performance optimization.",
    "url": "https://singhdeepak.me",
    "image": "https://singhdeepak.me/images/profile.jpg",
    "email": "deepak@singhdeepak.me",
    "telephone": "+91-XXXXXXXXXX",
    "sameAs": [
      "https://www.linkedin.com/in/insatiatedsoul/",
      "https://github.com/insatiatedsoulcode",
      "https://twitter.com/deepakkumarsingh",
      "https://medium.com/@deepakkumarsingh",
      "https://dev.to/deepakkumarsingh"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "India",
      "postalCode": "411001"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5204",
      "longitude": "73.8567"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "INTECH Creative Services Private Limited",
      "url": "https://intechcreative.com"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Full Stack Software Engineer",
      "occupationLocation": {
        "@type": "City",
        "name": "Pune, Maharashtra, India"
      },
      "skills": [
        "Java", "Spring Boot", "Angular", "React", "Next.js", "AWS", "DevOps", 
        "Docker", "Kubernetes", "Microservices", "CI/CD", "Python", "Node.js",
        "AI/ML", "Data Science", "Performance Optimization", "Enterprise Architecture"
      ]
    },
    "knowsAbout": [
      "Java Development", "Spring Boot", "Angular", "React", "Next.js", "AWS", "DevOps", 
      "Docker", "Kubernetes", "Microservices", "CI/CD", "Python", "Node.js",
      "AI/ML", "Data Science", "Performance Optimization", "Enterprise Architecture",
      "Government Projects", "Compliance Solutions", "Team Leadership"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Amity University",
        "url": "https://www.amity.edu/"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "Manipal Institute of Technology",
        "url": "https://manipal.edu/mit.html"
      }
    ],
    "award": [
      "National Science Olympiad Award 2006",
      "All India Rank 239 - National Cyber Olympiad 2007"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Java User Group Pune"
      },
      {
        "@type": "Organization", 
        "name": "Pune Tech Community"
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
        
        {/* Performance and SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Deepak Kumar Singh" />
        <meta name="application-name" content="Deepak Kumar Singh Portfolio" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
