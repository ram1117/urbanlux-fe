import { Cantarell, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--var-montserrat",
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const cantarell = Cantarell({
  variable: "--var-cantarell",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});
