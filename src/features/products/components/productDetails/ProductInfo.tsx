import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../types/products.types";

export default function ProductInfo({product}:{product: Product}) {
    const {_id,title,description,images,ratingsAverage,ratingsQuantity,price,priceAfterDiscount,quantity,subcategory,brand} = product
  return <>
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-12 container">
    {/* product images */}
    <div className="bg-amber-700 min-h-64"></div>
    {/* product info */}
    <div className="lg:col-span-3 bg-amber-200">
      <div className="border-b border-b-gray-100">
          <span className="bg-primary-600 font-medium text-white px-3 py-1 text-sm rounded-xl">
            {brand.name}
        </span>
        <h2 className="text-3xl font-semibold text-black">
            {title}
        </h2>
        <div className="flex items-center gap-3">
            <div className="flex text-yellow-400">
    {[...Array(5)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={
          index < Math.round(ratingsAverage)
            ? "text-yellow-400"
            : "text-gray-300"
        }
      />
    ))}
  </div>
           <div className="flex items-center gap-1">
             <span>{ratingsAverage}</span>
            <span>({ratingsQuantity} reviews)</span>
           </div>
        </div>
        <div className="flex items-center gap-8">
            <h3 className="text-3xl font-bold text-black">449 EGP</h3>
            <span className="line-through text-lg font-semibold text-gray-400">499 EGP</span>
             <span className="bg-yellow-400 font-medium text-white px-2 py-1 text-sm rounded-xl">Save 10%</span>
        </div>
        <span className="bg-primary-600/30 font-medium text-white px-3 py-1 text-sm rounded-xl">
            In Stock
        </span>
      </div>
    </div>
  </div>
  </>
}
