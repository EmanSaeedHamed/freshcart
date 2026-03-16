'use server';
import { cookies } from 'next/headers';
import { CartResponse } from "../types/cart.types";
import axios, { AxiosRequestConfig } from 'axios';

export async function addProductToCart({productId} : {productId: string}) :Promise<CartResponse>{
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;

    if(!token){
        throw new Error("Authentication required");
    }

    try {
        const options:AxiosRequestConfig = {
            url: "https://ecommerce.routemisr.com/api/v2/cart",
            method: "POST",
            headers: {
                token
            },
            data: {
                productId
            }
        }
        const {data} = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}


export async function getUserCart() :Promise<CartResponse>{
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;

    if(!token){
        throw new Error("Authentication required");
    }

    try {
        const options:AxiosRequestConfig = {
            url: "https://ecommerce.routemisr.com/api/v2/cart",
            method: "GET",
            headers: {
                token
            },
        }
        const {data} = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}


export async function removeProductFromCart({productId} : {productId: string}) :Promise<CartResponse>{
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;

    if(!token){
        throw new Error("Authentication required");
    }

    try {
        const options:AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
            method: "DELETE",
            headers: {
                token
            },
        }
        const {data} = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}


export async function updateQuantityFromCart(productId:string,count:number) :Promise<CartResponse>{
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;

    if(!token){
        throw new Error("Authentication required");
    }

    try {
        const options:AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
            method: "PUT",
            headers: {
                token
            },
            data:{
                count
            }
        }
        const {data} = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}