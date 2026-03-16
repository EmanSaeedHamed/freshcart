'use client';
import CartItem from "../components/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faTag,
  faLock,
  faShieldHalved,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { AppState } from "@/store/store";
import Link from "next/link";
import CartEmpty from "../components/CartEmpty";

export default function CartScreen() {
    const {products,totalCartPrice,numOfCartItems,cartId,error,isLoading} = useSelector((state:AppState)=>state.cart)
    console.log(products);
    
  return <>
    {numOfCartItems != 0? 
<section className="bg-gray-50 py-10">
        <div className="container space-y-8">
          {/* Header */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Shopping Cart
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                You have{" "}
                <span className="text-primary-600 font-semibold">{numOfCartItems} {numOfCartItems > 1 ? "items" : "item"}</span> in
                your cart
              </p>
            </div>
  
            <button
              type="button"
              className="text-sm text-gray-400 hover:text-primary-600 transition-colors"
            >
              Clear all items
            </button>
          </div>
          <button
      type="button"
      className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
    >
      <Link className="space-x-2" href={'/'}>
      <span className="text-lg">&#8592;</span>
      <span>Continue Shopping</span></Link>
    </button>
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {
                products.map((product)=><CartItem info={product} key={product._id} />)
              }
            </div>

            {/* Order summary */}
            <aside className="rounded-2xl border border-gray-200 bg-white p-6 space-y-6 shadow-sm">
              {/* Title + items count */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Order Summary
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    {numOfCartItems} {numOfCartItems > 1 ? "items" : "item"} in your cart
                  </p>
                </div>
              </div>
  
              {/* Free shipping banner */}
              <div className="flex gap-3 rounded-xl bg-emerald-500 px-4 py-3 text-white">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/80">
                  <FontAwesomeIcon icon={faTruckFast} className="text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Free Shipping!</p>
                  <p className="text-xs text-emerald-50">
                    You qualify for free delivery
                  </p>
                </div>
              </div>
  
              {/* Price details */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Subtotal ({numOfCartItems} {numOfCartItems > 1 ? "items" : "item"})</span>
                  <span className="font-semibold text-gray-900">{totalCartPrice} EGP</span>
                </div>
  
                <div className="flex items-center justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>
  
                <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-primary-600">
                    {totalCartPrice} EGP
                  </span>
                </div>
              </div>
  
              {/* Promo code */}
              <button
                type="button"
                className="w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 py-3 text-sm font-medium text-gray-500 hover:border-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faTag} className="text-base text-primary-500" />
                <span>Apply Promo Code</span>
              </button>
  
              {/* Checkout button */}
              <button
                type="button"
                className="w-full rounded-xl bg-primary-600 py-3.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
               <Link href={'/checkout'}>
               <FontAwesomeIcon icon={faLock} className="text-base" />
               <span>Secure Checkout</span>
               </Link>
              </button>
  
              {/* Benefits */}
              <div className="flex items-center justify-center gap-6 pt-1 text-[11px] text-gray-500">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    className="text-emerald-500 text-sm"
                  />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faBolt}
                    className="text-primary-500 text-sm"
                  />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section> : <CartEmpty/>}
    </> ;
}


