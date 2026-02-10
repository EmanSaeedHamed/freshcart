'use server';
import axios, {AxiosError, AxiosRequestConfig} from "axios";
import { SignupFormValue, signupSchema } from "../schemas/signup.schema";

export default async function signupAction(values:SignupFormValue) {
    const validationResult = signupSchema.safeParse(values);
          // ! validation error
    if(!validationResult.success){
        const signupServerErrors : Record<string , string> = {};
        if(validationResult.error){
            validationResult.error.issues.forEach((issue)=>{
                const field = issue.path[0] as string;
                const message = issue.message;
                if(!signupServerErrors[field]){
                    signupServerErrors[field] = message;}
            });
        }
        return {
            success:false,
            message:"validation error",
            signupServerErrors
        }
    }
                    // * validation success
       const {terms , ...requestBody} = values;
       try {
         const options: AxiosRequestConfig ={
            url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
            method: "POST",
            data: requestBody
         }

         const {data} = await axios.request(options);
         if(data.message == 'success'){
            return{
                success: true,
                message: "account created successfully",
                data
            }
         }
         return{
            success: false,
            message: data.message || "somethings went wrong"
         }
       } catch (error) {
           if(error instanceof AxiosError){
            const errorMessage = error.response?.data.message;
            if(errorMessage == 'Account Already Exists'){
                return {
                    success: false,
                    message: 'Account Already Exists',
                    signupServerErrors: {
                        email: 'an account with this email already exists',
                    }
                }
            }
           }
           return{
            success: false,
            message: "something went wrong, please try again later",
           }
       }
}



// validation result return => {success: false, error: ZodError}