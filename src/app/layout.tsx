import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/seo/metadata";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
