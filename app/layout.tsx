import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import ScrollTop from "@/components/scroll-top/scroll-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salim Baktash - Full Stack Developer",
  description:
    "Salim Baktash is a Full Stack Developer with expertise in frontend and backend development, cloud technologies, API integration, and performance optimization. He specializes in building scalable and high-performance web and mobile applications while maintaining clean and efficient code. With a strong foundation in multiple programming languages, frameworks, and databases, Salim delivers seamless digital experiences tailored to modern development needs.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "API Integration",
    "Cloud Technologies",
    "Scalable Applications",
    "Performance Optimization",
    "Software Engineering",
    "Mobile Development",
    "Clean Code",
    "Full Stack Developer",
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C",
    "C++",
    "Go",
    "PHP",
    "Rust",
    "Dart",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "Nest.js",
    "FastAPI",
    "Django",
    "Flask",
    "Spring Boot",
    "React Native",
    "Flutter",
    "PostgreSQL",
    "MySQL",
    "SQLite3",
    "MongoDB",
    "Redis",
    "Oracle",
    "DevOps",
    "Data Science",
    "Machine Learning",
    "Mobile Development",
  ],
  authors: [{ name: "Salim Baktash", url: "https://starkbak.net" }],
  applicationName: "StarkBak Portfolio",
  generator: "Next.js",
  metadataBase: new URL("https://starkbak.net"),
  openGraph: {
    type: "website",
    url: "https://starkbak.net",
    title: "Salim Baktash - Full Stack Developer",
    description:
      "Explore the portfolio of Salim Baktash, a Full Stack Developer with expertise in modern web and mobile development, delivering scalable and high-performance applications.",
    siteName: "StarkBak Portfolio",
    images: [
      {
        url: "https://starkbak.net/splash.png",
        width: 1200,
        height: 630,
        alt: "Salim Baktash - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@StarkBakTec",
    creator: "@StarkBakTec",
    title: "Salim Baktash - Full Stack Developer",
    description:
      "Discover the work of Salim Baktash, a Full Stack Developer specializing in modern web and mobile applications, delivering high-performance solutions.",
    images: ["https://starkbak.net/splash.png"],
  },
  alternates: {
    canonical: "https://starkbak.net",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Salim Baktash",
  url: "https://starkbak.net",
  sameAs: [
    "https://www.linkedin.com/in/mohammad-salim-8453a729b",
    "https://github.com/SSTechInd-Tec",
    "https://x.com/StarkBakTec?t=LkhI8Ia-lewG7-_sZASoVA&s=09",
    "https://www.facebook.com/share/1A2X9Hw6N4/",
    "https://www.instagram.com/starkbaktec/",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Netlinks Inc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}
