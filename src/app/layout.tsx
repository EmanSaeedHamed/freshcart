import Navbar from "@/components/shared/Navbar";
import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/shared/Footer";
import '@fortawesome/fontawesome-svg-core/styles';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
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
