import ProductInfo from "../components/productDetails/ProductInfo";
import { getProductById } from "../server/products.actions"

export default async function ProductDetailsScreen({productId}:{productId: string}) {
    const response = await getProductById({id: productId});
    console.log(response);
    
  return <>
    <ProductInfo product={response.data} key={response.data._id}/>
  </>
}
