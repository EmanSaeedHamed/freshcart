'use client';
import ProductCard from "@/features/products/components/ProductCard";
import { getProducts } from "@/features/products/server/products.actions"
import { useQuery } from "@tanstack/react-query";

export default function FeaturedProducts() {
    // const response = await getProducts();
     const {data} = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
        staleTime: 99999,
        gcTime:100000000
      });
  return <>
     <section className="container py-12">
        {/* title */}
        <div className="flex items-center gap-3">
                <div className="h-8 w-1.5 rounded-full bg-linear-to-b from-emerald-500 to-emerald-700"></div>
            <h2
             className="text-2xl md:text-3xl font-bold text-gray-800">Featured <span className="text-emerald-600">Products</span>
             </h2>
            </div>
            {/* products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">

                {/* product card */}
                
                {data?.data.map((product)=> <ProductCard info={product} key={product._id}/>)}
                

            </div>
     </section>
  </>
}
