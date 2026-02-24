'use client';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { CartItem as CartItemType} from "../types/cart.types";
import { useState } from "react";
export default function CartItem({info}:{info:CartItemType}) {
    const [count,setCount] = useState(1);
  return <div className="space-y-4">
  <div className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col sm:flex-row gap-4 sm:items-center">
    <div className="flex items-center gap-4 flex-1">
      <div className="w-20 h-20 rounded-lg border border-gray-200 overflow-hidden bg-gray-100 flex items-center justify-center">
        <Image
          src={info.product.imageCover}
          alt={info.product.title}
          width={120}
          height={120}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-1 flex-1">
        <h3 className="font-semibold text-gray-900">
        {info.product.title}
        </h3>
        <span className="inline-block text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
        {info.product.category.name}
        </span>
        <div>
        <p className="font-bold text-primary-600 text-lg">
          {info.price} EGP
        </p>
        </div>
      </div>
    </div>

    <div className="flex sm:flex-col gap-4 sm:items-end justify-between sm:justify-between">
      <div className="flex items-center gap-3">
        <button
        onClick={()=>{
            if(count != 1){
              setCount(count -1)
            }
           }}
          type="button"
          className="w-9 h-9 rounded-md border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span className="min-w-6 text-center font-medium">{count}</span>
        <button
         onClick={()=>{
            if(count != info.product.quantity){
              setCount(count +1)
            }
           }}
          type="button"
          className="w-9 h-9 rounded-md border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Total</span>
        <span className="font-semibold text-gray-900">{count * info.price} EGP</span>
        <button
          type="button"
          className="w-9 h-9 rounded-md border border-red-100 text-red-500 hover:bg-red-50 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  </div>
</div>
}
