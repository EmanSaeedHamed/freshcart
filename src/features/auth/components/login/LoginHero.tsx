import Image from "next/image"
import shopping from "@/assets/images/shopping.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons"
export default function LoginHero() {
  return (
    <>
      <Image loading="eager" className="rounded-2xl shadow-lg object-cover max-h-96" src={shopping} alt="shopping and sale image"/>
      <h2 className="text-center text-3xl font-bold">
        FreshCart - Your One-Stop Shop for Fresh Products
      </h2>
      <p className="text-center text-lg">
        Join thousands of happy customers who trust FreshCart for their daily grocery needs.
      </p>
      <ul className="flex justify-center items-center flex-wrap gap-8 text-sm">
        <li className="flex items-center gap-1">
            <FontAwesomeIcon className="text-primary-600" icon={faTruck} />
            <span className="text-gray-600">
                Free Delivery
            </span>
        </li>
        <li className="flex items-center gap-1">
            <FontAwesomeIcon className="text-primary-600" icon={faShieldHalved} />
            <span className="text-gray-600">
                Secure Payment
            </span>
        </li>
        <li className="flex items-center gap-1">
            <FontAwesomeIcon className="text-primary-600" icon={faClock} />
            <span className="text-gray-600">
                24/7 Support
            </span>
        </li>
      </ul>
    </>
  )
}
