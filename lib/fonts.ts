import { Barlow } from "next/font/google";
import localFont from "next/font/local";

export const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});


export const blinkxBlack = localFont({
  src: "../public/fonts/blinkx-black.woff2",
  variable: "--font-sans",
});

export const blinkxBold = localFont({
  src: "../public/fonts/blinkx-bold.woff2",
  variable: "--font-sans",
});
