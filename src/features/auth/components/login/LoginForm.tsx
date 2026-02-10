import { faFacebookF, faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLock, faSpinner, faStar, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function LoginForm() {
  return (
    <>
     <div className="text-center">
         {/* heading */}
      <h1 className="text-3xl font-bold mb-4">
        <span className="text-primary-600">
            Fresh
        </span>
        Cart
      </h1>
      <h2 className="text-2xl font-semibold mb-2">
        Welcome Back!
      </h2>
      <p>
        Sign in to continue your fresh shopping experience
      </p>
      {/* social media icons */}
      <div className="space-y-8 mt-5">
        <div className="flex justify-center items-center gap-8">
          <button type="button" className="size-15 shrink-0 *:text-red-600 hover:*:text-red-700 *:text-2xl hover:bg-gray-100/80 rounded-full flex justify-center items-center border border-gray-400/40">
                <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button type="button" className="size-15 shrink-0 *:text-blue-600 hover:*:text-blue-700 *:text-2xl hover:bg-gray-100/80 rounded-full flex justify-center items-center border border-gray-400/40">
                <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button type="button" className="size-15 shrink-0 *:text-black hover:*:text-black/90 *:text-2xl hover:bg-gray-100/80 rounded-full flex justify-center items-center border border-gray-400/40">
                <FontAwesomeIcon icon={faXTwitter} />
          </button>
        </div>
        {/* divided line */}
        <div className="relative bg-gray-400/30 rounded-2xl h-0.5 w-full">
          <span className="absolute top-1/2 left-1/2 -translate-1/2 bg-white px-3 text-sm text-gray-600/95">OR CONTINUE WITH EMAIL</span>
        </div>
      </div>
     </div>
     {/* form */}
      <form className="space-y-5 mt-5">
        {/* email */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input className="form-control" placeholder="emma@example.com" id="email" type="email" />
          {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
        </div>
        {/* password */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <Link href={"/reset-password"} className="text-primary-500 hover:text-primary-600 transition-colors duration-200 text-sm">
             Forgot Password?
          </Link>
          </div>
          <input className="form-control" placeholder="create a strong password" id="password" type="password" />
          {/* {errors.password && <p className="text-red-500">{errors.password.message}</p>} */}
        </div>
        {/* Keep me signed in */}
        <div>
          <div className="flex items-start gap-1">
          <input type="checkbox" id="term" className="accent-primary-500 size-4 shrink-0 mt-1" />
          <label htmlFor="term" className="space-x-1">
            Keep me signed in
          </label>
        </div>
        {/* {errors.terms && <p className="text-red-500">{errors.terms.message}</p>} */}
        </div>
        {/* Login btn */}
        <div className="flex justify-center">
          <button disabled={false} type="submit" className="flex items-center justify-center gap-2 py-2.5 text-white bg-primary-500 hover:bg-primary-600/90 btn disabled:cursor-not-allowed disabled:bg-primary-600/90 w-full mb-3 shadow-lg">
             {false? (<>
                <FontAwesomeIcon icon={faSpinner} spin />
             <span>Sign In</span>
             </>) : (<>
                 <FontAwesomeIcon icon={faUser} />
             <span>Sign In</span>
             </>)}
        </button>
        </div>
      </form>
      {/* go to signup page */}
      <div className="border-t border-t-gray-400/40 space-y-5 mt-5 pt-5">
        <p className="flex justify-center items-center gap-2">
            <span>
                New to FreshCart?
            </span>
            <Link href={"/signup"} className="font-semibold text-primary-500 hover:text-primary-600">
              Create an account
            </Link>
        </p>
        <ul className="flex justify-center items-center flex-wrap gap-8 text-sm">
                <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faLock} />
                    <span className="text-gray-600">
                        Free Delivery
                    </span>
                </li>
                <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faUsers} />
                    <span className="text-gray-600">
                        Secure Payment
                    </span>
                </li>
                <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} />
                    <span className="text-gray-600">
                        24/7 Support
                    </span>
                </li>
              </ul>
      </div>
    </>
  )
}
