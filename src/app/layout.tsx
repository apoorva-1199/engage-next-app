import type { Metadata, Viewport } from "next";
import "@/styles/globals.scss";
import Head from "next/head";
import AppShell from "@/containers/AppShell";

export const metadata: Metadata = {
  title: "Engage",
  description:
    "Engage provides Learning management system for Spanish leraners. It is compatible with mobile and desktop devices.",
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    title: "Apple Web App",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
