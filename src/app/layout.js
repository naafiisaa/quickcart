import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/Providers/NextAuthProvider";
import { ThemeProvider } from "@/Providers/ThemeContext";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QuickCart",
  description: "Next.js 15 Product App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider>
       <NextAuthProvider>
           <AuthProvider >
          <Navbar />
          <Toaster />
          {children}
          <Footer />
         </AuthProvider>
        </NextAuthProvider>
      </ThemeProvider>
       
      </body>
    </html>
  );
}
