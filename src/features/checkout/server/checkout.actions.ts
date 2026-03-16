'use server';

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { ShippingAddressValues } from "../schemas/checkout.schema";

export async function createCashOrder(id:string, shippingAddress:ShippingAddressValues){
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;
    if(!token){
        throw new Error("Authentication Required");
    }

    try {
        const options:AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/orders/${id}`,
            method: "POST",
            headers: {
                token
            },
            data: {
                shippingAddress
            }
        }
        const {data} = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}


export async function createOnlineOrder(id:string, shippingAddress:ShippingAddressValues, url:string){
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;
    if(!token){
        throw new Error("Authentication Required");
    }

    try {
        const options:AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${url}`,
            method: "POST",
            headers: {
                token
            },
            data: {
                shippingAddress
            }
        }
        const {data} = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}