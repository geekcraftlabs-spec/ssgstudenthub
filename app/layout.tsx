import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { AuthProvider } from "@/app/context/AuthContext";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-playfair" 
});

export const metadata = {
  title: "School Platform – Sandton School Group",
  description: "School management platform for Sandton School Group.",
  icons: { icon: "/images/mainlogo.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-[#F8F9FA] text-[#1A2A3A] antialiased font-sans`}>
        <AuthProvider>
          <Navbar />
          <main className="pt-20 min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}