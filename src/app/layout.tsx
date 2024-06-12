import type { Metadata } from "next";
import "./globals.css";
import { montserrat, cantarell } from "@/atoms/fonts";
import Navbar from "@/components/navbar/Navbar";
export const metadata: Metadata = {
  title: "UrbanLux",
  description: "Go to website for buying Urban fashionwares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cantarell.className}`}>
      <body className="font-montserrat">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
