'use server';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { loginFormValues, loginSchema } from './../schemas/login.schema';

export default async function loginAction(values:loginFormValues){
  const validationResult = loginSchema.safeParse(values);

    //   ! validation error
    if(!validationResult.success){
        const errors :Record<string , string> = {};
        if(validationResult.error){
            validationResult.error.issues.forEach((issue)=>{
                const key = issue.path[0] as string;
                const message = issue.message;
                if(!errors[key]){
                    errors[key] = message;
                }
            })
        }
         return {
            success:false,
            message:"validation error",
            errors,
        }
    }

    // * validation success
    const {rememberMe , ...requestBody} = values;
    try {
        const options :AxiosRequestConfig = {
            url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
            method:"POST",
            data:requestBody,
        }
        const {data} = await axios.request(options);
         if(data.message == 'success'){
            return{
                success: true,
                message: "user logged in successfully",
                data
            }
         }
          return{
            success: false,
            message: "login failed",
         }


    } catch (error) {
        if(error instanceof AxiosError){
                    const errorMessage = error.response?.data.message;
                    if(errorMessage == 'Incorrect email or password'){
                        return {
                            success: false,
                            message: 'wrong credentials',
                            errors: {
                                password: 'Incorrect email or password',
                            }
    }} }
        return{
            success: false,
            message: "something went wrong, please try again later",
           }
}
}