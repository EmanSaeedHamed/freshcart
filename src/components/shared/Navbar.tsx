'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBabyCarriage, faBars, faBolt, faBriefcaseMedical, faCartShopping, faCircle, faEllipsis, faMagnifyingGlass, faPerson, faPersonDress, faPhone, faRightFromBracket, faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard, faHeart, faUser, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLogo from '../../assets/images/mini-logo.png';
import Image from 'next/image';
import { useState } from "react";
export default function Navbar() {
  const path = usePathname();
  const [openNavMenu , setOpenNavMenu] = useState(false);
  function toggleNavbarMenu (){
    setOpenNavMenu(!openNavMenu);
  }
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-md">
        <div className="container text-sm">
           {/* top navbar */}
        <div className="hidden lg:flex justify-between items-center py-1 border-b border-b-gray-300/70">
          <ul className="flex items-center gap-5">
            <li>
              <a className="flex items-center gap-1 hover:text-primary-600 transition-colors duration-200" href="tel:+1(800)123-4587">
                <FontAwesomeIcon icon={faPhone}  className="w-4 h-4"/>
                <span className="whitespace-nowrap">
                  +1(800)123-4587
                </span>
                </a>
            </li>
            <li>
              <a className="flex items-center gap-1 hover:text-primary-600 transition-colors duration-200" href="mailto:support@freshcart.com">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4"/>
                <span>support@freshcart.com</span>
                </a>
            </li>
          </ul>

          <ul className="flex gap-5 items-center">
            <li>
              <Link className={`${path == "/orders" ? "text-primary-600" : ""} hover:text-primary-600 transition-colors duration-200`} href={'orders'}>
                Track Order
              </Link>
            </li>
            <li>
              <Link className={`${path == "/about" ? "text-primary-600" : ""} hover:text-primary-600 transition-colors duration-200`} href={'about'}>
                About
              </Link>
            </li>
            <li>
              <Link className={`${path == "/contact" ? "text-primary-600" : ""} hover:text-primary-600 transition-colors duration-200`} href={'contact'}>
                Contact
              </Link>
            </li>
            <li className="flex items-center group">
              <select className="cursor-pointer focus:outline-0">
                <option value="egp">EGP</option>
                <option value="sad">SAD</option>
                <option value="aed">AED</option>
              </select>
            </li>
            <li className="flex items-center">
              <select className="cursor-pointer focus:outline-0">
                <option value="ar">العربية</option>
                <option value="eg">English</option>
              </select>
            </li>
          </ul>
        </div>

        {/* main navbar  */}
        <nav className="flex justify-between items-center py-3">
          <h1 className="text-primary-600 font-bold text-2xl">
            <Link href={'/'} className="flex items-center">
             <Image className="w-7 object-center" src={navLogo} alt="logo cart"/>
              <span>Fresh</span>
            <span className="text-black">Cart</span>
            </Link>
          </h1>
          <search className="hidden lg:block relative">
            <input className="form-control min-w-96" type="search" placeholder="Search for products..."/>
            <FontAwesomeIcon className="absolute top-1/2 -translate-y-1/2 right-2 size-4" icon={faMagnifyingGlass} />
          </search>

          <ul className="hidden lg:flex items-center gap-5">
            <li>
              <Link className={`${path == "/wishlist" ? "text-primary-600" : ""} flex flex-col items-center hover:text-primary-600 transition-colors duration-200`} href={'/wishlist'}>
              <FontAwesomeIcon className="text-xl" icon={faHeart} />
                 <span>Wishlist</span>
              </Link>
            </li>
            <li className="relative">
              <Link className={`${path == "/cart" ? "text-primary-600" : ""} flex flex-col items-center hover:text-primary-600 transition-colors duration-200`} href={'/cart'}>
              <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
                 <span>Cart</span>
              </Link>
              <div className="flex justify-center items-center bg-primary-500 size-4 rounded-full absolute right-0 top-0 -translate-y-2">
                <span className="text-white">3</span>
              </div>
            </li>
            <li>
              <Link className={`${path == "/profile" ? "text-primary-600" : ""} flex flex-col items-center hover:text-primary-600 transition-colors duration-200`} href={'/profile'}>
              <FontAwesomeIcon className="text-xl" icon={faUser} />
                 <span>Account</span>
              </Link>
            </li>
            <li>
              <Link className={`${path == "/signup" ? "text-primary-600" : ""} flex flex-col items-center hover:text-primary-600 transition-colors duration-200`} href={'/signup'}>
              <FontAwesomeIcon className="text-xl" icon={faUserPlus} />
                 <span>Sign up</span>
              </Link>
            </li>
            <li>
              <Link className={`${path == "/login" ? "text-primary-600" : ""} flex flex-col items-center hover:text-primary-600 transition-colors duration-200`} href={'/login'}>
              <FontAwesomeIcon className="text-xl" icon={faAddressCard} />
                 <span>Log in</span>
              </Link>
            </li>
            <li className="flex flex-col items-center hover:text-primary-600 transition-colors duration-200 cursor-pointer">
              <FontAwesomeIcon className="text-xl" icon={faRightFromBracket} />
              <span>Logout</span>
            </li>
          </ul>

          {/* menu button */}
          <div onClick={toggleNavbarMenu} className="lg:hidden btn bg-primary-600 text-white cursor-pointer">
            {openNavMenu ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars} />}
            
          </div>
        </nav>
        </div>
       
       {/* categories navbar */}
        <nav className="hidden lg:block bg-gray-100 py-2">
          <div className="container flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center text-white bg-primary-500 hover:bg-primary-600/90 btn gap-2">
              <FontAwesomeIcon className="w-4 h-4" icon={faBars} />
              <span>All categories</span>
              <FontAwesomeIcon className="w-4 h-4" icon={faAngleDown} />
            </button>
            <div className="absolute rounded-md shadow-xl top-10 left-0 bg-white min-w-48 hidden group-hover:block">
              <ul className="*:py-1 *:hover:bg-gray-100 *:transition-colors *:duration-200">
                <li className="px-2 border-b border-gray-300">
                  <Link className="flex items-center gap-2" href={'/'}>
                    <FontAwesomeIcon className="w-4 h-4 text-primary-600" icon={faPerson} />
                    <span>Men's Fashion</span>
                  </Link>
                </li>
                <li className="px-2 border-b border-gray-300">
                  <Link className="flex items-center gap-2" href={'/'}>
                    <FontAwesomeIcon className="w-4 h-4 text-primary-600" icon={faPersonDress} />
                    <span>Women's Fashion</span>
                  </Link>
                </li>
                <li className="px-2 border-b border-gray-300">
                  <Link className="flex items-center gap-2" href={'/'}>
                    <FontAwesomeIcon className="w-4 h-4 text-primary-600" icon={faBabyCarriage} />
                    <span>Baby & Toys</span>
                  </Link>
                </li>
                <li className="px-2 border-b border-gray-300">
                  <Link className="flex items-center gap-2" href={'/'}>
                    <FontAwesomeIcon className="w-4 h-4 text-primary-600" icon={faBriefcaseMedical} />
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li className="px-2 border-b border-gray-300">
                  <Link className="flex items-center gap-2" href={'/'}>
                    <FontAwesomeIcon className="w-4 h-4 text-primary-600" icon={faBolt} />
                    <span>Electronics</span>
                  </Link>
                </li>
                <li className="px-2">
                  <Link className="flex items-center gap-2" href={'/'}>
                    <FontAwesomeIcon className="w-4 h-4 text-primary-600" icon={faEllipsis} />
                    <span>View All Categories</span>
                  </Link>
                </li>
              </ul>
            </div>
            </div>
            <ul className="flex items-center gap-5">
              <li>
                <Link className={`${path == "/" ? "text-primary-600" : ""} hover:text-primary-600 transition-colors duration-200`} href={'/'}>Home</Link>
              </li>
              <li>
                <Link className={`${path == "/cart" ? "text-primary-600" : ""} hover:text-primary-600 transition-colors duration-200`} href={'/cart'}>Recently Added</Link>
              </li>
              <li>
                <Link className={`${path == "/products" ? "text-primary-600" : ""} hover:text-primary-600 transition-colors duration-200`} href={'/products'}>Featured Products</Link>
              </li>
              <li>
                <Link className={`${path == "/offers" ? "text-primary-600" : ""} hover:text-primary-600 transition-colors duration-200`} href={'/offers'}>Offers</Link>
              </li>
              <li>
                <Link className={`${path == "/brands" ? "text-primary-600" : ""} hover:text-primary-600 transition-colors duration-200`} href={'/brands'}>Brands</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* offCanvas */}
      {openNavMenu && <>
        <div onClick={toggleNavbarMenu} className="fixed lg:hidden inset-0 bg-black/50 z-30 cursor-pointer">
      </div>
      <div className="offCanvas lg:hidden animate-slide-in fixed space-y-6 z-40 top-0 bottom-0 bg-white px-2 py-3">
           <div className="flex items-center justify-between border-b border-b-gray-400/40 pb-3">
            <h2 className="text-primary-600 font-bold text-xl">
            <Link href={'/'} className="flex items-center">
             <Image className="size-5" src={navLogo} alt="logo cart"/>
              <span>Fresh</span>
            <span className="text-black">Cart</span>
            </Link>
          </h2>
          <div onClick={toggleNavbarMenu} className="btn cursor-pointer rounded-full size-7 bg-primary-600 text-white flex justify-center items-center">
            <FontAwesomeIcon icon={faXmark} />
          </div>
           </div>
           <search className="relative">
            <input className="form-control min-w-52" type="search" placeholder="Search for products..."/>
            <FontAwesomeIcon className="absolute top-1/2 -translate-y-1/2 right-2 w-4 h-4" icon={faMagnifyingGlass} />
          </search>
          <div className="border-b border-b-gray-400/40 pb-6 space-y-2">
            <h3 className="font-bold text-md">
            Main Menu
          </h3>
          <ul className="space-y-1">
            <li className="hover:bg-primary-100 p-1 transition-colors duration-200">
              <Link className={`${path == "/wishlist" ? "text-primary-600" : ""} flex items-center gap-2 hover:text-primary-600 transition-colors duration-200`} href={'/wishlist'}>
              <FontAwesomeIcon className="size-4" icon={faHeart} />
                 <span>Wishlist</span>
              </Link>
            </li>
            <li className="hover:bg-primary-100 p-1 transition-colors duration-200">
              <Link className={`${path == "/cart" ? "text-primary-600" : ""} flex items-center gap-2 hover:text-primary-600 transition-colors duration-200`} href={'/cart'}>
              <FontAwesomeIcon className="size-4" icon={faCartShopping} />
                 <span>Cart</span>
              </Link>
            </li>
            <li className="hover:bg-primary-100 p-1 transition-colors duration-200">
              <Link className={`${path == "/profile" ? "text-primary-600" : ""} flex items-center gap-2 hover:text-primary-600 transition-colors duration-200`} href={'/profile'}>
              <FontAwesomeIcon className="size-4" icon={faUser} />
                 <span>Account</span>
              </Link>
            </li>
          </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-md">
              Account
            </h3>
            <ul className="space-y-1">
              <li className="hover:bg-primary-100 p-1 transition-colors duration-200">
              <Link className={`${path == "/signup" ? "text-primary-600" : ""} flex gap-2 items-center hover:text-primary-600 transition-colors duration-200`} href={'/signup'}>
              <FontAwesomeIcon className="size-4" icon={faUserPlus} />
                 <span>Sign up</span>
              </Link>
            </li>
            <li className="hover:bg-primary-100 p-1 transition-colors duration-200">
              <Link className={`${path == "/login" ? "text-primary-600" : ""} flex items-center gap-2 hover:text-primary-600 transition-colors duration-200`} href={'/login'}>
              <FontAwesomeIcon className="size-4" icon={faAddressCard} />
                 <span>Log in</span>
              </Link>
            </li>
            <li className="hover:bg-primary-100 p-1  flex gap-2 items-center hover:text-primary-600 transition-colors duration-200 cursor-pointer">
              <FontAwesomeIcon className="size-4" icon={faRightFromBracket} />
              <span>Logout</span>
            </li>
            </ul>
          </div>
         </div>
      </>}
    </>
  );
}
