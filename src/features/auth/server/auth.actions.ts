'use server';
import {cookies} from "next/headers";
import { AuthState } from "../store/auth.slice";
import axios, { AxiosRequestConfig } from "axios";
// ^ set token
export async function setToken (token: string , rememberMe: boolean):Promise<void>{
    const cookieStore = await cookies();
    if(rememberMe){
        cookieStore.set("token",token,{httpOnly: true , maxAge: 30*24*60*60 ,})
    } else{
        cookieStore.set("token" ,token,{httpOnly: true , maxAge: 1*24*60*60});
    }
}

// ^ get token
export async function getToken ():Promise<string|null>{
    const cookieStore = await cookies();
    const token =cookieStore.get("token")?.value || null;
    return token;
} 

// ^ clear token
export async function clearToken ():Promise<void>{
    const cookieStore = await cookies();
    cookieStore.delete("token");
}

// * verify token
export async function verifyToken ():Promise<AuthState>{
    const cookieStore = await cookies();
    const token =cookieStore.get("token")?.value || null;
    
    if(!token){
        return{
            isAuthanticated: false,
            userInfo: null
        }
    }
    try {
        const options: AxiosRequestConfig = {
            url:"https://ecommerce.routemisr.com/api/v1/auth/verifyToken",
            method:"GET",
            headers:{
                token
            }
        };
        const {data} = await axios.request(options);
        if(data.message == "verified"){
            const {name, id, role} = data.decoded;
            return {
                isAuthanticated: true,
                userInfo: {
                    name,
                    id,
                    role,
                },
            };
        }

        return{
            isAuthanticated: false,
            userInfo: null,
        };
    } catch (error) {
         return{
            isAuthanticated: false,
            userInfo: null,
        };
    }
} 