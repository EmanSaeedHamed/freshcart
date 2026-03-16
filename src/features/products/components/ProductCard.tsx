import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Product } from "../types/products.types";
import Link from "next/link";
import { toast } from "react-toastify";
import { addProductToCart } from "@/features/cart/server/cart.actions";
import { setCartInfo } from "@/features/cart/store/cart.slice";
import { useDispatch } from "react-redux";
export default function ProductCard({ info }: { info: Product }){
  const dispatch = useDispatch()
  const {
    id,
    title,
    imageCover,
    ratingsAverage,
    ratingsQuantity,
    price,
    priceAfterDiscount,
  } = info;
  const discountPercentage = priceAfterDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;
    const handleAddToCart = async ()=>{
      try {
        const response = await addProductToCart({productId: id});
        if(response.status == "success"){
          toast.success(response.message);
          // ^todo: set cart info => slice
          dispatch(setCartInfo(response));
        }
      } catch (error) {
        // todo errors
        toast.error("failed to add product to cart");
      }
    }

  return (
    <>
      <div className="bg-primary-500 rounded-b-xl rounded-t-4xl pt-8 overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
        <div className="relative bg-white rounded-t-4xl pt-9 space-y-1 flex flex-col h-full">
          {priceAfterDiscount ? (
            <div className="absolute top-2 left-1/2 -translate-x-1/2">
              <span className="bg-yellow-400 font-semibold text-white text-xs px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            </div>
          ) : (
            ""
          )}
          <h3 className="text-center font-semibold text-2xl text-primary-600 line-clamp-1 px-2">
            {title}
          </h3>
          <Image
            src={imageCover}
            width={100}
            height={20}
            alt={title}
            className="mx-auto"
          />
          {priceAfterDiscount ? (
            <div className="px-5 flex justify-between items-center">
              <h4 className="font-black text-2xl text-yellow-400">
                ${priceAfterDiscount}
              </h4>
              <span className="line-through text-md font-semibold">
                ${price}
              </span>
            </div>
          ) : (
            <h4 className="px-5 font-black text-2xl text-yellow-400">
              ${price}
            </h4>
          )}
          <div className="px-5 flex justify-between items-center">
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
              <span>({ratingsQuantity})</span>
            </div>
          </div>

          <div className="px-5 flex items-center justify-between">
            <button
              type="button"
              className="bg-gray-100 size-10 hover:bg-gray-200/80 hover:text-red-600 transition-colors duration-300 rounded-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button
              type="button"
              className="bg-gray-100 hover:bg-gray-200/80 transition-colors hover:text-primary-600 duration-300 size-10 rounded-full flex items-center justify-center"
            >
              <Link href={`/products/${id}`}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </button>
          </div>
          <button
          onClick={handleAddToCart}
            type="button"
            className="mt-auto bg-yellow-400 text-white font-semibold text-md text-center py-2 w-full hover:bg-yellow-500"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
}
