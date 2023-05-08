import { products } from "./products";

let userCart: any[] = [];
let cartTotal = 0;

//looking for a product with matching id
const addToCart = (productId: number) => {
  const product = products.find(p => p.id === productId);
   if (product) {
    userCart.push(product);
    cartTotal += product.price;
   }
}

export const cart = {
  userCart,
  cartTotal,
  addToCart
};