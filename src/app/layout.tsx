import Navbar from "@/components/shared/Navbar";
import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/shared/Footer";
import {Exo} from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const exo = Exo({
  subsets:["latin"],
  weight:["400","500","600","700","800","900"],
  variable: "--font-exo"
})
export default function RootLayout({children}:{children:ReactNode}) {
  return (
    <html lang="en">
      <body className={`${exo.className}`}>
        {/* Navbar */}
          <Navbar/>

        {children}

        {/* Footer */}
        <Footer/>
      </body>
    </html>
  );
}
