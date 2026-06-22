import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "RowMend Studio | Spreadsheet Cleanup and CRM Data Cleanup",
  description:
    "RowMend Studio helps small businesses clean spreadsheets, repair CRM and contact exports, and receive reviewed files with clear scope, timing, and pricing before work begins.",
  applicationName: "RowMend Studio",
  alternates: siteUrl
    ? {
        canonical: "/",
      }
    : undefined,
  openGraph: {
    title: "RowMend Studio | Spreadsheet Cleanup and CRM Data Cleanup",
    description:
      "Reviewed spreadsheet cleanup, CRM/contact data cleanup, and practical back-office support for small businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RowMend Studio | Spreadsheet Cleanup and CRM Data Cleanup",
    description:
      "Spreadsheet cleanup, CRM export cleanup, and reviewed delivery for small teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased light">
      <body className="min-h-full bg-canvas text-ink">{children}</body>
    </html>
  );
}
