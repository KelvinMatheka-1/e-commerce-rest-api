import express, {Request, Response} from "express";
import { products } from "./products";
import { clearItemFromCart, cart } from "./cart";
import { Stripe } from 'stripe';

const app = express();

//port
const PORT = 3000

const stripe = new Stripe('sk_test_51N5ooYJFDKLRKydOj3xGnbzGMgitEbPGuJ59rM4W66XTMCQ0iyf1FCOP20Xr81neQIP48evcTzHykX41NSMfOiGV0069ZA2ijU', {
  apiVersion: '2022-11-15',
});

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

//route for payment gatway
app.post('/api/payment', async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cart.userCart.map(itemInCart => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: itemInCart.name,
          },
          unit_amount: itemInCart.price * 100,
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: 'http://localhost:3000/payment/success',
      cancel_url: 'http://localhost:3000/payment/cancel',
    });

    res.status(200).json(session);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'failed to create payment session' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})