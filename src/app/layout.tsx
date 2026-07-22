import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";

export const metadata: Metadata = {
  title: "Santhosh V — Cloud & DevOps Engineer",
  description:
    "Portfolio of Santhosh V — Computer Science Engineering student specializing in Cloud Computing, AWS, DevOps, and scalable backend systems.",
  keywords: [
    "Santhosh V",
    "Cloud Engineer",
    "DevOps",
    "AWS",
    "Portfolio",
    "Backend Developer",
  ],
  authors: [{ name: "Santhosh V" }],
  openGraph: {
    title: "Santhosh V — Cloud & DevOps Engineer",
    description:
      "Building reliable cloud-native applications, CI/CD pipelines, and scalable infrastructure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santhosh V — Cloud & DevOps Engineer",
    description:
      "Building reliable cloud-native applications, CI/CD pipelines, and scalable infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
