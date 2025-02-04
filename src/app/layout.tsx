import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import LenisScroll from "@/components/LenisScroll";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Yaswanth Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}
