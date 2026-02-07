import { faShieldHalved, faStar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import user from "../../../../assets/images/review-author.png";

export default function SignupHero() {
  return <>
   <div className="signupHero space-y-8 lg:mt-10">
    {/* heading */}
    <div className="space-y-1">
      <h2 className="text-4xl font-bold space-x-2">
        <span>
          Welcome to
        </span>
        <span className="text-primary-600">
        FreshCart
        </span>
      </h2>
      <p className="font- text-[18px]">
        Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
      </p>
    </div>
    {/* icons */}
    <ul className="space-y-4">
      <li className="flex items-center gap-3">
        <div className="icon size-11 *:text-primary-600 rounded-full flex justify-center items-center border border-gray-400/40">
          <FontAwesomeIcon icon={faStar} />
        </div>
        {/* content */}
        <div>
          <h3 className="font-semibold text-lg">
            Premium Quality
          </h3>
          <p>
            Premium quality products sourced from trusted suppliers.
          </p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="icon size-11 *:text-primary-600 rounded-full flex justify-center items-center border border-gray-400/40">
          <FontAwesomeIcon icon={faTruckFast} />
        </div>
        {/* content */}
        <div>
          <h3 className="font-semibold text-lg">
            Fast Delivery
          </h3>
          <p>
            Same-day delivery available in most areas.
          </p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="icon size-11 *:text-primary-600 rounded-full flex justify-center items-center border border-gray-400/40">
          <FontAwesomeIcon icon={faShieldHalved} />
        </div>
        {/* content */}
        <div>
          <h3 className="font-semibold text-lg">
            Secure Shopping
          </h3>
          <p>
            Your data and payments are completely secure.
          </p>
        </div>
      </li>
    </ul>
    {/* review */}
    <div className="space-y-3 shadow-lg rounded-lg p-4">
      <div className="title flex items-center gap-3">
        <div className="reviewImage">
          <Image src={user} 
          className="size-11 rounded-full"
          alt=""/>
        </div>
        <div>
          <h3 className="font-medium">
            Sarah Johnson
          </h3>
          <div className="starIcons text-yellow-300">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
      <blockquote className="italic text-gray-600">
        <p>
          "FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"
        </p>
      </blockquote>
    </div>
   </div>
  </>
}
