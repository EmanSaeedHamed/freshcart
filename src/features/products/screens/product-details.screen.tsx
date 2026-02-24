'use client';
import { useQuery } from "@tanstack/react-query";
import ProductInfo from "../components/productDetails/ProductInfo";
import { getProductById } from "../server/products.actions"

export default function ProductDetailsScreen({productId}:{productId: string}) {

    const {data} = useQuery({
        queryKey: ["productById", productId],
        queryFn: () => getProductById({id: productId}),
        staleTime: 99999,
        gcTime:100000000
      });
    
  if(!data) return null;

  return (
    <ProductInfo product={data.data} key={data.data._id}/>
  )
}
