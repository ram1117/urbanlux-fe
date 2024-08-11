import type { Metadata } from "next";
import "./globals.css";
import { montserrat, cantarell } from "@/atoms/fonts";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";
import ChatWindow from "@/components/chat/ChatWindow";
export const metadata: Metadata = {
  title: "UrbanTrend",
  description: "Go to website for buying Urban and street fashion",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentUser } = await getAuthenticatedAppForUser();

  return (
    <html lang="en" className={`${montserrat.variable} ${cantarell.variable}`}>
      <body className="font-montserrat bg-light">
        <header>
          <Navbar initialUser={currentUser?.toJSON()} />
        </header>
        {children}
        <ChatWindow></ChatWindow>
        <Footer />
      </body>
    </html>
  );
}
