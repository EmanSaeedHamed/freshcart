export interface CartResponse {
  status: string
  message: string
  numOfCartItems: number
  cartId: string
  data: CartData
}

export interface CartData {
  _id: string
  cartOwner: string
  products: CartItem[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}

export interface CartItem {
  count: number
  _id: string
  product: CartProductDetails
  price: number
}

export interface CartProductDetails {
  subcategory: CartSubcategory[]
  _id: string
  title: string
  slug: string
  quantity: number
  imageCover: string
  category: CartCategory
  brand: CartBrand
  ratingsAverage: number
  id: string
}

export interface CartSubcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface CartCategory {
  _id: string
  name: string
  slug: string
  image: string
}

export interface CartBrand {
  _id: string
  name: string
  slug: string
  image: string
}
