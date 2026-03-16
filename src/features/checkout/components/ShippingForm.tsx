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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ShippingAddressValues } from "../schemas/checkout.schema";

interface ShippingAddressFormProps {
  register: UseFormRegister<ShippingAddressValues>,
  errors: FieldErrors<ShippingAddressValues>
}

export default function ShippingForm({register, errors}:ShippingAddressFormProps) {
  return <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
  <div className="flex items-center gap-3 bg-primary-700 px-4 py-3 text-white">
    <FontAwesomeIcon icon={faHouse} className="text-lg" />
    <div>
      <h2 className="font-semibold">Shipping Address</h2>
      <p className="text-sm text-primary-100">
        Where should we deliver your order?
      </p>
    </div>
  </div>
  <div className="space-y-4 p-4">
    <div className="flex gap-3 rounded-lg bg-blue-100 border border-blue-200 px-4 py-3">
      <FontAwesomeIcon icon={faLocationDot} className="mt-0.5 text-blue-600 shrink-0" />
      <div>
        <p className="text-sm font-semibold text-blue-900">
          Delivery Information
        </p>
        <p className="text-xs text-blue-700">
          Please ensure your address is accurate for speedy delivery.
        </p>
      </div>
    </div>
    
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">City *</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FontAwesomeIcon icon={faBuilding} className="text-sm" />
        </div>
        <input
          type="text"
          id="city"
          placeholder="e.g. Cairo, Alexandria, Giza"
          className="form-control w-full pl-10"
          {...register("city")}
        />
      </div>

      {errors.city && (
        <p className="text-sm text-red-600 ">
          {errors.city.message}
        </p>
      )}
    </div>
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">Street Address *</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FontAwesomeIcon icon={faLocationDot} className="text-sm" />
        </div>
        <input
          type="text"
          id="details"
          placeholder="Street name, building number, floor, apartment..."
          className="form-control w-full pl-10"
          {...register("details")}
        />
      </div>

      {errors.details && (
        <p className="text-sm text-red-600 ">
          {errors.details.message}
        </p>
      )}
    </div>
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">Phone Number *</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FontAwesomeIcon icon={faPhone} className="text-sm" />
        </div>
        <input
          type="text"
          id="phone"
          placeholder="01xxxxxxxxx"
          className="form-control w-full pl-10"
          {...register("phone")}
        />
      </div>
      {errors.phone && (
        <p className="text-sm text-red-600 ">
          {errors.phone.message}
        </p>
      )}
    </div>
  </div>
</div>
}
