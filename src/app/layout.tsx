import Navbar from "@/components/shared/Navbar";
import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/shared/Footer";
import {Exo} from 'next/font/google';
import Providers from "@/components/providers/Providers";
import "../lib/fontawesome"
import { verifyToken } from "@/features/auth/server/auth.actions";
const exo = Exo({
  subsets:["latin"],
  weight:["400","500","600","700","800","900"],
  variable: "--font-exo"
})
export default async function RootLayout({children}:{children:ReactNode}) {
  const authValues = await verifyToken();
  return (
    <html lang="en">
      <body className={`${exo.className}`}>
       <Providers preloadedState={{auth: authValues}}>
         {/* Navbar */}
          <Navbar/>
        {children}
        {/* Footer */}
        <Footer/>
       </Providers>
      </body>
    </html>
  );
}
