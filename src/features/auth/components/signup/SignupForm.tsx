'use client';
import { faFacebookF, faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { SignupFormValue, signupSchema } from "../../schemas/signup.schema";

export default function SignupForm() {
  const {register,
         handleSubmit,
         formState: {errors}
        } = useForm<SignupFormValue>({
    defaultValues:{
      name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
    terms: false
    },
    resolver: zodResolver(signupSchema),
    mode:"onChange" ,
    reValidateMode: "onChange",
  });
  const onSubmit:SubmitHandler<SignupFormValue> = (values)=>{
    console.log(values);
    
  }
  return <>
  {/* signup Form */}
     <div className="px-4 lg:px-12 rounded-xl shadow-lg py-8 space-y-10 bg-white">
      {/* heading */}
      <div className="text-center">
        <div className="icon mx-auto size-15 shrink-0 *:text-xl *:text-primary-600 rounded-full flex justify-center items-center border border-gray-400/40">
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
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="name">
            Full Name
          </label>
          <input {...register('name')} className="form-control" placeholder="Emma" id="name" type="text" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        {/* email */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input {...register('email')} className="form-control" placeholder="emma@example.com" id="email" type="email" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        {/* Phone */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="phone">
            Phone Number
          </label>
          <input {...register('phone')} className="form-control" placeholder="+1 234 567 8900" id="phone" type="tel" />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>
        {/* password */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <input {...register('password')} className="form-control" placeholder="create a strong password" id="password" type="password" />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="rePassword">
            Confirm Password
          </label>
          <input {...register('rePassword')} className="form-control" placeholder="confirm your password" id="rePassword" type="password" />
          {errors.rePassword && <p className="text-red-500">{errors.rePassword.message}</p>}
        </div>
        {/* terms */}
        <div>
          <div className="flex items-start gap-1">
          <input {...register('terms')} type="checkbox" id="term" className="accent-primary-500 size-4 shrink-0 mt-1" />
          <label htmlFor="term" className="space-x-1">
            <span>I agree to the</span>
            <Link className="text-primary-600 hover:underline" href={'/terms'}>Terms of Service</Link>
            <span>and</span>
            <Link className="text-primary-600 hover:underline" href={'/privacy-policy'}>Privacy Policy.</Link>
          </label>
        </div>
        {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
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
      </div>
     </div>
  </>
}
