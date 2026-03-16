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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface PaymentMethodProps {
    selectedMethod: 'cash' | 'card';
    changeMethod: (method:'cash' | 'card')=> void;
}
export default function PaymentMethod({selectedMethod, changeMethod}:PaymentMethodProps) {
  return <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
  <div className="flex items-center gap-3 bg-primary-700 px-4 py-3 text-white">
    <FontAwesomeIcon icon={faCreditCard} className="text-lg" />
    <div>
      <h2 className="font-semibold">Payment Method</h2>
      <p className="text-sm text-primary-100">
        Choose how you&apos;d like to pay.
      </p>
    </div>
  </div>
  <div className="space-y-4 p-4">
    <button onClick={()=>changeMethod('cash')} type="button" className={`flex items-start justify-between w-full gap-4 rounded-xl p-4 ${selectedMethod == 'cash'? 'border-2 border-primary-600 bg-primary-50' : 'border border-gray-300 bg-white' }`}>
      <div className="flex flex-1 gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
          <FontAwesomeIcon icon={faWallet} className="text-lg" />
        </div>
        <div>
          <h3 className="font-semibold text-primary-900">Cash on Delivery</h3>
          <p className="text-sm text-primary-700">
            Pay when your order arrives at your doorstep.
          </p>
        </div>
      </div>
      {selectedMethod == 'cash' ? <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
        <FontAwesomeIcon icon={faCheck} className="text-xs" />
      </div> : <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-400" />}
    </button>
    <button onClick={()=>changeMethod('card')} type="button" className={`flex items-start justify-between w-full gap-4 rounded-xl p-4 ${selectedMethod == 'card'? 'border-2 border-primary-600 bg-primary-50' : 'border border-gray-300 bg-white' }`}>
      <div className="flex flex-1 gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-600">
          <FontAwesomeIcon icon={faCreditCard} className="text-lg" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Pay Online</h3>
          <p className="text-sm text-gray-600">
            Secure payment with Credit/Debit Card via Stripe.
          </p>
          <div className="mt-2 flex gap-2">
            <FontAwesomeIcon icon={faCcVisa} className="text-2xl text-blue-900" />
            <FontAwesomeIcon icon={faCcMastercard} className="text-2xl text-red-600" />
            <FontAwesomeIcon icon={faCcAmex} className="text-2xl text-blue-600" />
          </div>
        </div>
      </div>
      {selectedMethod == 'card' ? <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
        <FontAwesomeIcon icon={faCheck} className="text-xs" />
      </div> : <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-400" />}
    </button>
    <div className="flex gap-3 rounded-lg border-t border-primary-200 bg-primary-50 px-4 py-3">
      <FontAwesomeIcon icon={faLock} className="mt-0.5 text-primary-600 shrink-0" />
      <div>
        <p className="text-sm font-semibold text-primary-900">
          Secure & Encrypted
        </p>
        <p className="text-xs text-primary-700">
          Your payment info is protected with 256-bit SSL encryption.
        </p>
      </div>
    </div>
  </div>
</div>
}
