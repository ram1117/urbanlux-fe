import type { Metadata } from "next";
import "./globals.css";
import { montserrat, cantarell } from "@/atoms/fonts";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
export const metadata: Metadata = {
  title: "UrbanLux",
  description: "Go to website for buying Urban and street fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cantarell.variable}`}>
      <body className="font-montserrat">
        <header>
          <Navbar />
        </header>

        {children}

        <Footer />
      </body>
    </html>
  );
}
