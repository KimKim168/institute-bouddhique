import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";

import Navbar from "@/components/my-navbar";
import MyFooter from "@/components/my-footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-color2 ${geistSans.variable} ${geistMono.variable} antialiased ${poppins.className}`}
      >
        <Navbar />
        {children}
        <MyFooter />
      </body>
    </html>
  );
}
