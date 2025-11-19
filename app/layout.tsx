import type { Metadata } from "next";
import { Geist, Geist_Mono,Montserrat,Nunito } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import MyNavbar from "@/app/sections/TopBar/MyNavbar";
import Footer from "@/app/sections/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// 2. Configure the Montserrat font object
const montserrat = Montserrat({
  variable: "--font-montserrat", // Define the CSS variable name
  subsets: ["latin"],
  // Add this line to force Next.js to download these specific weights
  weight: ["400", "500", "600", "700"],
});


//nunito
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  
})

export const metadata: Metadata = {
  title: "Foundasite",
  description: " The aim to empower youth to become resilient, innovative, and self-reliant leaders",
   icons: {
    icon: '/images/app_logo.png', // path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}  ${nunito.variable} antialiased`}
      >
        <MyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
