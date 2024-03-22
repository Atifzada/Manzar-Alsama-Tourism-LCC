import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Manzar Alsamaa Tourism LLC",
  description: "Tour and travel app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
