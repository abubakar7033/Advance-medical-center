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
  title: {
    default: "Advanced Professional Imaging Medical Center | Expert Radiology Readings",
    template: "%s | Advanced Professional Imaging Medical Center"
  },
  description: "Board-certified radiologists providing expert medical imaging readings across all modalities. Fast 24-48hr turnaround, HIPAA compliant, and secure teleradiology services for healthcare providers.",
  keywords: [
    "medical imaging",
    "radiology readings",
    "teleradiology",
    "X-ray readings",
    "MRI readings",
    "CT scan readings",
    "ultrasound readings",
    "mammogram readings",
    "nuclear medicine",
    "PET scans",
    "HIPAA compliant",
    "board-certified radiologists",
    "medical center California",
    "Buena Park radiology"
  ],
  authors: [{ name: "Advanced Professional Imaging Medical Center" }],
  creator: "Advanced Professional Imaging Medical Center",
  publisher: "Advanced Professional Imaging Medical Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://advance-medical-center.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Advanced Professional Imaging Medical Center | Expert Radiology Readings',
    description: 'Board-certified radiologists providing expert medical imaging readings across all modalities. Fast 24-48hr turnaround, HIPAA compliant teleradiology services.',
    url: 'https://advance-medical-center.vercel.app',
    siteName: 'Advanced Professional Imaging Medical Center',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Advanced Professional Imaging Medical Center - Expert Medical Imaging Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#004E8C" />
        <link rel="canonical" href="https://advance-medical-center.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
