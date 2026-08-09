import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoDrawer from "@/components/InfoDrawer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Xedge Global Ltd — Accounting, Advisory & Tax Solutions",
  description:
    "Xedge Global Ltd helps ambitious businesses streamline finance and operations through reliable accounting, strategic tax advisory, and end-to-end business solutions from our London HQ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${outfit.variable} ${jakarta.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <InfoDrawer />
      </body>
    </html>
  );
}
