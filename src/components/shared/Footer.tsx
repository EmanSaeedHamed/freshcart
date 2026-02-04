import Link from "next/link";
import Image from "next/image";
import footerLogo from "../../assets/images/mini-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="border-t border-t-gray-400/40 py-8">
      <div className="container">
        {/* top footer */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 border-b border-b-gray-400/40 pb-5 md:gap-5 gap-7">
          <div className="xl:col-span-2 space-y-3">
            <h2 className="text-primary-600 font-bold text-xl">
              <Link href={"/"} className="flex items-center">
                <Image className="size-5" src={footerLogo} alt="logo cart" />
                <span>Fresh</span>
                <span className="text-black">Cart</span>
              </Link>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae laudantium odio eaque a voluptas neque necessitatibus nam ipsa quidem atque?
            </p>
            <ul className="socialMediaLinks flex gap-3 *:hover:text-primary-600 *:transition-colors *:duration-200 text-gray-600">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon icon={faPinterestP} />
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Categories</h3>
            <ul className="*:hover:text-primary-600 *:transition-colors *:duration-200 space-y-2 text-gray-600">
              <li>
                <Link href={'/'}>
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Baby & Toys
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Beauty & Health
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Electronics
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="*:hover:text-primary-600 *:transition-colors *:duration-200 space-y-2 text-gray-600">
              <li>
                <Link href={'/'}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
           <div className="space-y-3">
            <h3 className="font-bold text-lg">Customer Service</h3>
            <ul className="*:hover:text-primary-600 *:transition-colors *:duration-200 space-y-2 text-gray-600">
              <li>
                <Link href={'/'}>
                  My Account
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  My Orders
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom footer */}
        <div className="flex justify-between items-center py-2">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} FreshCart. All rights reserved.
          </p>
          <Image className="w-6" src={footerLogo} alt="logo cart" />
        </div>
      </div>
    </footer>
  );
}
