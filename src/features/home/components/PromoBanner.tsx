import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PromoBanner() {
  return <>
  <section className="bg-gray-100 py-8">
   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 container">
        {/* banner */}
    <div className="bg-white flex items-center gap-4 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* icon */}
        <div className="size-12 text-lg rounded-full text-blue-700 flex items-center justify-center bg-gray-200">
            <FontAwesomeIcon icon={faTruck} />
        </div>
        {/* content */}
        <div>
            <h3 className="font-semibold text-sm">
                Free Shipping
            </h3>
            <p className="text-xs text-gray-500">
                On orders over 500 EGP
            </p>
        </div>
    </div>
     {/* banner */}
    <div className="bg-white flex items-center gap-4 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* icon */}
        <div className="size-12 text-lg rounded-full text-blue-700 flex items-center justify-center bg-gray-200">
            <FontAwesomeIcon icon={faTruck} />
        </div>
        {/* content */}
        <div>
            <h3 className="font-semibold text-sm">
                Free Shipping
            </h3>
            <p className="text-xs text-gray-500">
                On orders over 500 EGP
            </p>
        </div>
    </div>
     {/* banner */}
    <div className="bg-white flex items-center gap-4 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* icon */}
        <div className="size-12 text-lg rounded-full text-blue-700 flex items-center justify-center bg-gray-200">
            <FontAwesomeIcon icon={faTruck} />
        </div>
        {/* content */}
        <div>
            <h3 className="font-semibold text-sm">
                Free Shipping
            </h3>
            <p className="text-xs text-gray-500">
                On orders over 500 EGP
            </p>
        </div>
    </div>
     {/* banner */}
    <div className="bg-white flex items-center gap-4 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* icon */}
        <div className="size-12 text-lg rounded-full text-blue-700 flex items-center justify-center bg-gray-200">
            <FontAwesomeIcon icon={faTruck} />
        </div>
        {/* content */}
        <div>
            <h3 className="font-semibold text-sm">
                Free Shipping
            </h3>
            <p className="text-xs text-gray-500">
                On orders over 500 EGP
            </p>
        </div>
    </div>
   </div>
  </section>
  </>
}
