import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/professional-theme.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MotionProvider from "@/components/MotionProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import VisitorTracker from "@/components/VisitorTracker";

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
  description: "Experienced Senior Full Stack Developer with 9+ years expertise in Java, Spring Boot, Angular, React, AI/ML, and AWS. Based in Varanasi, India. Specializing in enterprise solutions, microservices, and performance optimization.",
  keywords: [
    // Personal Brand
    "Deepak Kumar Singh", "Deepak Singh Developer", "Deepak Kumar","Deepak Singh",
    //Colleges
    "Amity University", "Manipal Institute of Technology",
    //Awards
    "National Science Olympiad Award 2006", "All India Rank 239 - National Cyber Olympiad 2007",  "Science All India Rank 1",
    //Companies
    "INTECH Creative Services Private Limited", "Complinity Technology", "Tashee Linux Services", "Quality Council of India", "Nav Info Tech", "DP World",

    // Technical Skills
    "Full Stack Developer", "Java Developer", "Spring Boot Expert", 
    "Angular Developer", "React Developer", "Next.js Developer",
    "AI Developer", "ML Developer", "Python Developer", "Node.js Developer",
    
    // Specializations
    "Microservices Architect", "AWS Certified", "DevOps Engineer",
    "Enterprise Developer", "Government Project Expert", "Performance Optimization",
    "CI/CD Specialist", "API Design", "Database Design",
    
    // Location Based
    "Varanasi Developer", "India Developer", "Uttar Pradesh Developer",
    "Remote Developer India", "Freelance Developer Varanasi","Pune",
    
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
    url: "https://www.singhdeepak.me",
    title: "Deepak Kumar Singh | Senior Full Stack Developer | Java, Spring Boot, AI/ML Expert",
    description: "Experienced Senior Full Stack Developer with 9+ years expertise in Java, Spring Boot, Angular, React, AI/ML, and AWS. Based in Varanasi, India.",
    siteName: "Deepak Kumar Singh Portfolio",
    images: [
      {
        url: "https://www.singhdeepak.me/images/profile-og.svg",
        width: 1200,
        height: 630,
        alt: "Deepak Kumar Singh - Senior Full Stack Developer | Java, Spring Boot, AI/ML Expert | Available for Freelance Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar Singh | Senior Full Stack Developer | Java, Spring Boot, AI/ML Expert",
    description: "Experienced Senior Full Stack Developer with 9+ years expertise in Java, Spring Boot, Angular, React, AI/ML, and AWS. Based in Varanasi, India.",
    creator: "@deepakkumarsingh",
    images: ["https://www.singhdeepak.me/images/profile-og.svg"],
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  category: "Technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://www.singhdeepak.me",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Varanasi",
    "geo.position": "25.3176;82.9739",
    "ICBM": "25.3176, 82.9739",
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
    "url": "https://www.singhdeepak.me",
    "image": "https://www.singhdeepak.me/images/profile-og.svg",
    "email": "deepak@singhdeepak.me",
    "telephone": "+91-9650801379",
    "sameAs": [
      "https://www.linkedin.com/in/insatiatedsoul/",
      "https://github.com/insatiatedsoulcode",
      "https://twitter.com/deepakkumarsingh",
      "https://medium.com/@deepakkumarsingh",
      "https://dev.to/deepakkumarsingh"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Varanasi",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India",
      "postalCode": "221001"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.3176",
      "longitude": "82.9739"
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
        "name": "Varanasi, Uttar Pradesh, India"
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
        
        {/* Additional Open Graph Meta Tags for WhatsApp */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:alt" content="Deepak Kumar Singh - Senior Full Stack Developer | Java, Spring Boot, AI/ML Expert | Available for Freelance Projects" />
        <meta property="og:updated_time" content="2025-01-15T19:22:49.000Z" />
        
        {/* WhatsApp Specific Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Deepak Kumar Singh Portfolio" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Deepak Kumar" />
        <meta property="profile:last_name" content="Singh" />
        <meta property="profile:username" content="deepakkumarsingh" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <AuthProvider>
          <MotionProvider>
            <VisitorTracker />
            {children}
          </MotionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
