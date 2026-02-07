import { faFacebookF, faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SignupForm() {
  return <>
  {/* signup Form */}
     <div className="px-4 lg:px-12 rounded-xl shadow-lg py-8 space-y-10 bg-white">
      {/* heading */}
      <div className="text-center">
        <div className="icon mx-auto size-15 *:text-xl *:text-primary-600 rounded-full flex justify-center items-center border border-gray-400/40">
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
        <h2 className="text-2xl font-semibold">
          Create Your Account
        </h2>
        <p className="space-x-1 text-sm">
          <span>
            Already have an account?
            </span> 
          <Link href={'/login'} className="text-primary-600 hover:underline">
           Sign In
          </Link>
        </p>
      </div>
      {/* form */}
      <form className="space-y-5">
        {/* name */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="name">
            Full Name
          </label>
          <input className="form-control" placeholder="Emma" id="name" type="text" />
        </div>
        {/* email */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input className="form-control" placeholder="emma@example.com" id="email" type="email" />
        </div>
        {/* Phone */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="phone">
            Phone Number
          </label>
          <input className="form-control" placeholder="+1 234 567 8900" id="phone" type="tel" />
        </div>
        {/* password */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <input className="form-control" placeholder="create a strong password" id="password" type="password" />
        </div>
        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="rePassword">
            Confirm Password
          </label>
          <input className="form-control" placeholder="confirm your password" id="rePassword" type="password" />
        </div>
        {/* terms */}
        <div className="flex items-center gap-1 text-nowrap sm:gap-2">
          <input type="checkbox" id="term" className="accent-primary-500" />
          <label htmlFor="term" className="space-x-1">
            <span>I agree to the</span>
            <Link className="text-primary-600 hover:underline" href={'/terms'}>Terms of Service</Link>
            <span>and</span>
            <Link className="text-primary-600 hover:underline" href={'/privacy-policy'}>Privacy Policy</Link>
          </label>
        </div>
        {/* register btn */}
        <div className="flex justify-center">
          <button type="submit" className=" text-white bg-primary-500 hover:bg-primary-600/90 btn w-1/2">
          Register
        </button>
        </div>
      </form>
      {/* social media icons */}
      <div className="space-y-5">
        {/* divided line */}
        <div className="relative bg-gray-400/30 rounded-2xl h-0.5 w-full">
          <span className="absolute top-1/2 left-1/2 -translate-1/2 bg-white px-3 text-sm text-gray-600/95">OR</span>
        </div>
        <div className="flex justify-center items-center gap-8">
          <button type="button" className="size-15 *:text-red-600 hover:*:text-red-700 *:text-2xl hover:bg-gray-100/80 rounded-full flex justify-center items-center border border-gray-400/40">
                <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button type="button" className="size-15 *:text-blue-600 hover:*:text-blue-700 *:text-2xl hover:bg-gray-100/80 rounded-full flex justify-center items-center border border-gray-400/40">
                <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button type="button" className="size-15 *:text-black hover:*:text-black/90 *:text-2xl hover:bg-gray-100/80 rounded-full flex justify-center items-center border border-gray-400/40">
                <FontAwesomeIcon icon={faXTwitter} />
          </button>
        </div>
      </div>
     </div>
  </>
}
