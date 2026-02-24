import Navbar from "@/components/shared/Navbar";
import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/shared/Footer";
import {Exo} from 'next/font/google';
import Providers from "@/components/providers/Providers";
import "../lib/fontawesome"
import { verifyToken } from "@/features/auth/server/auth.actions";
import { CartState } from "@/features/cart/store/cart.slice";
import { getUserCart } from "@/features/cart/server/cart.actions";
const exo = Exo({
  subsets:["latin"],
  weight:["400","500","600","700","800","900"],
  variable: "--font-exo"
})

let defaultCart: CartState = {
 numOfCartItems: 0,
  cartId: null,
  products: [],
  totalCartPrice: 0,
  isLoading: false,
  error: null
};
export default async function RootLayout({children}:{children:ReactNode}) {
  const authValues = await verifyToken();
  let cartState = defaultCart;
  if(authValues.isAuthanticated){
    try {
      const cartResponse = await getUserCart();
      console.log("SSR CART", cartResponse);
      cartState = {
        numOfCartItems: cartResponse.numOfCartItems,
  cartId: cartResponse.cartId,
  products: cartResponse.data.products,
  totalCartPrice: cartResponse.data.totalCartPrice,
  isLoading: false,
  error: null,
      }
    } catch (error) {
      cartState = defaultCart;
    }
  }
  return (
    <html lang="en">
      <body className={`${exo.className}`}>
       <Providers preloadedState={{auth: authValues , cart: cartState}}>
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
