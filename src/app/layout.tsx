import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

// Fonts Setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud-Hub: Manage Your Cloud Storage",
  description:
    "Manage all your cloud storage services like Google Drive, OneDrive, Dropbox, and more, from one place.",
  icons: {
    icon: "/favicon.ico", // Path to favicon file
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Essential Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0052cc" />

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Cloud-Hub: Manage your cloud storage from one place"
        />
        <meta name="author" content="Pranto Paul" />
        <meta
          name="keywords"
          content="cloud storage, SaaS, cloud management, file management"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) for Social Media */}
        <meta
          property="og:title"
          content="Cloud-Hub: All Your Cloud Storage in One Place"
        />
        <meta
          property="og:description"
          content="Easily manage your Google Drive, Dropbox, OneDrive, and more from a single platform."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud-Hub" />
        <meta
          name="twitter:description"
          content="Manage all your cloud storage from one place."
        />
        <meta name="twitter:image" content="/favicon.ico" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
