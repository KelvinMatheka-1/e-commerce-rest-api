import express, {Request, Response} from "express";

//importing items stored in the product files
import { products } from "./products";
import { clearItemFromCart, cart } from "./cart";

const app = express();

//port
const PORT = 3000

// middleware to parse JSON data in the request body
app.use(express.json());

//route for available categories
app.get('/api/categories', (req:Request, res:Response) => {
  const categories = [
    { id: 1, name: 'Women' },
    { id: 2, name: 'Men' },
    { id: 3, name: 'Kid' },
  ];
  res.json(categories);
})

//route for all products
app.get('/api/items', (req:Request, res:Response)=>{
  res.json(products);
})

//route for products by category
app.get('/items-by-category/:category/', (req: Request, res: Response) => {
  const category = req.params.category;

  //used filter method to select the items in the products array based on the category passed in the URL parameter
  const productCategory = products.filter(item => item.category === category);
  res.json(productCategory);
});

app
  .route('/api/cart', )

  //route for adding items to cart
  .post((req: Request, res:Response) => {
    const item = req.body;
    cart.userCart.push(item);
    cart.cartTotal += parseInt(item.price);
    res.json(cart.userCart)
  })
  //route for retrieving the items in cart and the total sum
  .get((req:Request, res:Response)=>{
    res.json(cart);
  })

//route for clearing specific items from cart
app.delete('/api/cart/:id', (req: Request, res: Response) => {
  const itemId = parseInt(req.params.id);
  clearItemFromCart(itemId);
  
  res.json(cart.userCart);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})