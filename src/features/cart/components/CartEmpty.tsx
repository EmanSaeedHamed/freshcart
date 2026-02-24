
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

export default function CartEmpty() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-primary-500 shadow-sm">
            <FontAwesomeIcon icon={faCartShopping} className="text-3xl" />
          </div>

          <h1 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
            Your cart is empty
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Looks like you haven&apos;t added anything to your cart yet.
            <br className="hidden sm:block" />
            Start exploring our products!
          </p>

          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-primary-700 hover:shadow-lg transition-colors"
            >
              <span>Start Shopping</span>
              <FontAwesomeIcon icon={faArrowRightLong} className="text-sm" />
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
            Popular Categories
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {["Electronics", "Fashion", "Home", "Beauty"].map((category) => (
              <button
                key={category}
                type="button"
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs sm:text-sm text-gray-700 shadow-sm hover:border-primary-500 hover:text-primary-600 hover:shadow-md transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
