import Navbar from "@/components/shared/Navbar";
import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/shared/Footer";
export default function RootLayout({children}:{children:ReactNode}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
          <Navbar/>

        {children}

        {/* Footer */}
        <Footer/>
      </body>
    </html>
  );
}
