import { faBolt, faCartShopping, faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../types/products.types";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { useState } from "react";

export default function ProductInfo({product}:{product: Product}) {
    const [count , setCount] = useState(1);
    const {_id,title,description,images,ratingsAverage,ratingsQuantity,price,priceAfterDiscount,quantity,subcategory,brand} = product;
     const discountPercentage = priceAfterDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;
    const isInStock = quantity > 0; 
  return <>
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-12 container">
    {/* product images */}
    <div className="rounded-lg border px-5 pb-8 pt-5 border-gray-400/40 lg:sticky lg:top-24">
      <ImageGallery items={images.map((image)=>{
        return{
          original: image,
          thumbnail: image
        }
      })}
      showPlayButton={false}
      showNav={false}/>
    </div>
    {/* product info */}
    <div className="lg:col-span-3 rounded-lg border p-8 border-gray-400/40 space-y-5">
      <div className="border-b border-b-gray-100 pb-5 space-y-1">
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
            {priceAfterDiscount? <h3 className="text-3xl font-bold text-black">{priceAfterDiscount} EGP</h3> : <h3 className="text-3xl font-bold text-black">{price} EGP</h3>}
            {priceAfterDiscount? <span className="line-through text-lg font-semibold text-gray-400">{price} EGP</span> : ""}
             {priceAfterDiscount? <span className="bg-yellow-400 font-medium text-white px-2 py-1 text-sm rounded-xl">Save {discountPercentage}%</span> : ""}
        </div>
        {isInStock? <span className="bg-gray-400/20 font-medium px-3 py-1 text-sm rounded-xl text-primary-600">
        <span className="w-2 h-2 rounded-full bg-green-500"></span> In Stock</span> : <span className="bg-gray-400/20 font-medium px-3 py-1 text-sm rounded-xl text-red-600">
        <span className="w-2 h-2 rounded-full bg-red-600"></span> Out Of Stock</span>}
      </div>
      <div className="space-y-5">
        <p>
         {description}
        </p>
        <div className="flex items-center gap-4">
          <div className="border rounded-lg py-2 px-4 flex items-center justify-between min-w-44">
           <button onClick={()=>{
            if(count != 0){
              setCount(count -1)
            }
           }} className="hover:text-primary-500" type="button">
             <FontAwesomeIcon icon={faMinus} />
           </button>
            <span>{count}</span>
            <button  onClick={()=>{
            if(count != quantity){
              setCount(count +1)
            }
           }} className="hover:text-primary-500" type="button">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <span>{quantity} available</span>
        </div>
        <div className="flex items-center justify-between bg-gray-400/10 rounded-lg p-4">
          <span>Total Price:</span>
          <h4 className="text-2xl font-bold text-primary-600">
            {priceAfterDiscount? priceAfterDiscount * count : price * count}.00 EGP
          </h4>
        </div>
        <div className="flex-col sm:flex-row flex items-center justify-center gap-4">
          <button type="button" className="btn flex text-white  items-center justify-center  gap-2 sm:w-1/2 py-3 w-full bg-primary-500 hover:bg-primary-600 transition-colors duration-200">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Add to Cart</span>
          </button>
          <button type="button" className="btn flex items-center justify-center gap-2 sm:w-1/2 py-3 w-full bg-black/90 text-white hover:bg-black transition-colors duration-200">
            <FontAwesomeIcon icon={faBolt} />
            <span>Buy Now</span>
          </button>
        </div>
        <button type="button" className="btn mt-5 flex items-center justify-center bg-transparent border-2 border-gray-400/40 hover:text-primary-500 hover:border-primary-400 gap-2 py-3 w-full transition-all duration-200 text-gray-400">
          <FontAwesomeIcon icon={faHeart} />
          <span>Add to Wishlist</span>
        </button>
      </div>
    </div>
  </div>
  </>
}
