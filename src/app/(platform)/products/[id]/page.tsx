import ProductDetailsScreen from "@/features/products/screens/product-details.screen";
export type ProductDetailsProps = {
  params: Promise<{id: string}>
} 
export default async function page({params}: ProductDetailsProps) {
  const {id} = await params
  return <>
       <ProductDetailsScreen productId={id}/>
    </>
}