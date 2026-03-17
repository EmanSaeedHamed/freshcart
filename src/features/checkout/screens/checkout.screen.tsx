'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faHouse,
  faLocationDot,
  faBuilding,
  faPhone,
  faCreditCard,
  faWallet,
  faCheck,
  faBagShopping,
  faCaretUp,
  faCaretDown,
  faTruck,
  faLock,
  faShieldHalved,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard, faCcAmex } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ShippingForm from "../components/ShippingForm";
import PaymentMethod from "../components/PaymentMethod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, ShippingAddressValues } from "../schemas/checkout.schema";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "@/store/store";
import { createCashOrder, createOnlineOrder } from "../server/checkout.actions";
import { toast } from "react-toastify";
import { clearCart } from "@/features/cart/store/cart.slice";
import { useRouter } from "next/navigation";


const PLACEHOLDER_ITEMS = [
  { name: "Woman Standard Fit Knitted Cardigan", qty: "1 - M/R EGP", price: "1,497", img: "https://placehold.co/64x64/e5e7eb/9ca3af?text=1" },
  { name: "Relaxed Fit Knitted Joggers Lilac", qty: "1 - M/R EGP", price: "1,497", img: "https://placehold.co/64x64/e5e7eb/9ca3af?text=2" },
  { name: "Oversized Fit Knitted Sweater Cream", qty: "1 - M/R EGP", price: "998", img: "https://placehold.co/64x64/e5e7eb/9ca3af?text=3" },
];

export default function CheckoutScreen() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {cartId} = useSelector((appState:AppState)=>appState.cart)
    const [paymentMethod , setPaymentMethod] = useState<"cash" | "card">("cash")
   const {register, handleSubmit, formState: {errors}, reset} = useForm({
    defaultValues: {
        details: '',
        phone: '',
        city: ''
    },
    resolver: zodResolver(checkoutSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
   });
   
   const onSubmit:SubmitHandler<ShippingAddressValues> = async (values)=>{
    try {
        if(!cartId) {
            toast.error("cart is empty")
            return;
        }
        if(paymentMethod == 'cash') {
            const response = await createCashOrder(cartId, values);
            if(response.status == "success") {
                dispatch(clearCart());
                toast.success("order created succussfully");
                reset();
                setTimeout(()=>{router.push('/')},2000)
            }
        } else{
            const response = await createOnlineOrder(cartId, values, location.origin);
            console.log(response);
            
            if(response.status == "success") {
                dispatch(clearCart());
                toast.loading("redirecting you to payment gateway");
                reset();
                setTimeout(()=>{location.href = response.session.url},2000)
            }
        }


    } catch (error) {
        throw error;
    }
    
   }



  return <>
      <section className="bg-gray-50 py-10">
        <div className="container space-y-8">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
                <FontAwesomeIcon icon={faListCheck} className="text-lg" />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  Complete Your Order
                </h1>
                <p className="text-gray-500 text-sm sm:text-base">
                  Review your items and complete your purchase.
                </p>
              </div>
            </div>
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              <span className="text-lg">&#8592;</span>
              <span>Back to Cart</span>
            </Link>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit(onSubmit)}
           className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Address */}
              <ShippingForm register={register} errors={errors}/>

              {/* Payment Method */}
              <PaymentMethod changeMethod={setPaymentMethod} selectedMethod={paymentMethod}/>
            </div>

            {/* Right column - Order Summary */}
            <aside className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-3 bg-primary-700 px-4 py-3 text-white">
                <FontAwesomeIcon icon={faBagShopping} className="text-lg" />
                <div>
                  <h2 className="font-semibold">Order Summary</h2>
                  <p className="text-sm text-primary-100">3 items</p>
                </div>
              </div>
              <div className="space-y-4 p-4">
                <div className="max-h-48 space-y-4 overflow-y-auto">
                  {PLACEHOLDER_ITEMS.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.qty}</p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-1">
                        <span className="text-sm font-semibold text-gray-900">
                          {item.price}
                        </span>
                        <div className="flex flex-col">
                          <button type="button" className="text-gray-400 hover:text-gray-600">
                            <FontAwesomeIcon icon={faCaretUp} className="text-xs" />
                          </button>
                          <button type="button" className="text-gray-400 hover:text-gray-600">
                            <FontAwesomeIcon icon={faCaretDown} className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 border-t border-gray-200 pt-3 text-sm">
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">3,992 EGP</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faTruck} className="text-primary-600" />
                      Shipping
                    </span>
                    <span className="font-semibold text-primary-600">FREE</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-primary-600">3,992 EGP</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary-600 py-3.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faCheck} className="text-base" />
                  <FontAwesomeIcon icon={faBagShopping} className="text-base" />
                  <span>Place Order</span>
                </button>
                <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-gray-500">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-primary-600 text-sm" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faTruck} className="text-primary-600 text-sm" />
                    <span>Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faArrowRotateLeft} className="text-primary-600 text-sm" />
                    <span>Easy Returns</span>
                  </div>
                </div>
              </div>
            </aside>
          </form>
        </div>
      </section>
    </>
}
