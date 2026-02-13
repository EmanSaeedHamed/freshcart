import { getProductById } from "../server/products.actions"

export default async function ProductDetailsScreen({productId}:{productId: string}) {
    const response = await getProductById({id: productId});
    console.log(response);
    
  return <>
  product-details.screen
  </>
}
