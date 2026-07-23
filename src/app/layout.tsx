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
  description: "Portfolio of Santhosh V, a Cloud Engineer specializing in AWS, DevOps, cloud computing, and scalable backend applications. Graduate of R.M.D.",
  keywords: [
    "Santhosh V",
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
    description: "Building reliable cloud-native applications, CI/CD pipelines, and scalable infrastructure. Explore my projects and certifications.",
    url: "https://santhosh-vj.github.io",
    siteName: "Santhosh V Portfolio",
    images: [
      {
        url: "/og-image.jpg", 
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
    description: "Building reliable cloud-native applications, CI/CD pipelines, and scalable infrastructure.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    other: {
      "msvalidate.01": "2B4788D47C03A62F7FD43186A3200FE3",
    }
  },
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
      </body>
    </html>
  );
}
