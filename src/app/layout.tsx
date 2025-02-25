import type { Metadata } from "next";
import "./globals.css";
import { outfit } from "./fonts";
export const metadata: Metadata = {
  title: "Resorts Landing Page",
  description: "Explore luxury resorts and book your dream vacation with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-primary ${outfit.className}`}>{children}</body>
    </html>
  );
}
