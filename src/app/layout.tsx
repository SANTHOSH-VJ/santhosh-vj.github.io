import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { DM_Sans, Inter } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const viewport: Viewport = {
  themeColor: "#030213",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://santhosh-vj.github.io"),
  title: {
    default: "Santhosh V — Cloud Engineer & DevOps Specialist",
    template: "%s | Santhosh V"
  },
  description: "Santhosh V is a Computer Science and Engineering student and Cloud Engineer specializing in AWS, cloud computing, DevOps, and full-stack development at R.M.D. Engineering College.",
  keywords: [
    "Santhosh V",
    "santhosh v",
    "santhosh-v",
    "santhoshv",
    "SanthoshV",
    "Santhosh",
    "santhosh",
    "santhosh-v",
    "santhoshv",
    "Santhosh V Portfolio",
    "Santhosh V GitHub",
    "Santhosh V LinkedIn",
    "Santhosh V RMD",
    "Santhosh V Cloud Engineer",
    "Santhosh V DevOps Engineer",
    "Santhosh V Software Engineer"
  ],
  authors: [{ name: "Santhosh V", url: "https://santhosh-vj.github.io" }],
  creator: "Santhosh V",
  publisher: "Santhosh V",
  applicationName: "Santhosh V Portfolio",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Santhosh V — Cloud Engineer & DevOps Specialist",
    description: "Santhosh V is a Computer Science and Engineering student and Cloud Engineer specializing in AWS, cloud computing, DevOps, and full-stack development at R.M.D. Engineering College.",
    url: "https://santhosh-vj.github.io",
    siteName: "Santhosh V Portfolio",
    images: [
      {
        url: "https://santhosh-vj.github.io/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Santhosh V - Cloud & DevOps Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santhosh V — Cloud Engineer & DevOps Specialist",
    description: "Santhosh V is a Computer Science and Engineering student and Cloud Engineer specializing in AWS, cloud computing, DevOps, and full-stack development.",
    images: ["https://santhosh-vj.github.io/og-image.jpg"],
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
  verification: {
    other: {
      "msvalidate.01": "2B4788D47C03A62F7FD43186A3200FE3",
    }
  },
  other: {
    "thumbnail": "https://santhosh-vj.github.io/og-image.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black">
          Skip to content
        </a>
        <div id="main-content">
          <LenisProvider>
            {children}
          </LenisProvider>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://santhosh-vj.github.io/#website",
                  "url": "https://santhosh-vj.github.io",
                  "name": "Santhosh V Portfolio"
                },
                {
                  "@type": "Person",
                  "@id": "https://santhosh-vj.github.io/#person",
                  "name": "Santhosh V",
                  "url": "https://santhosh-vj.github.io",
                  "image": "https://santhosh-vj.github.io/og-image.jpg",
                  "jobTitle": "Computer Science and Engineering Student",
                  "description": "Santhosh V is a Computer Science and Engineering student specializing in cloud computing, AWS, DevOps, and full-stack development.",
                  "affiliation": {
                    "@type": "CollegeOrUniversity",
                    "name": "R.M.D. Engineering College"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/vjsanthosh/",
                    "https://github.com/SANTHOSH-VJ"
                  ],
                  "knowsAbout": [
                    "AWS",
                    "Cloud Computing",
                    "DevOps",
                    "Docker",
                    "CI/CD",
                    "Serverless Architecture"
                  ]
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
