import { products } from "./products";

let userCart: any[] = [];
let cartTotal = 0;

//looking for a product with matching id, add it to the users cart and update the cart total
const addToCart = (productId: number) => {
  const product = products.find(p => p.id === productId);
   if (product) {
    userCart.push(product);
    cartTotal += product.price;
   }
}

// removing product with matching id, if found, decrement and update cart total

export const clearItemFromCart = (productId: number) => {
  const index = userCart.findIndex(item => item.id === productId);
    if (index > -1) {
      const item = userCart[index];
      userCart.splice(index, 1);
      cartTotal -= item.price;
    }
}

export const cart = {
  userCart,
  cartTotal,
  addToCart
};