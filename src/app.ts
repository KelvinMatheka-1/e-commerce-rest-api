import express, {Request, Response} from "express";

const app = express();

//port
const PORT = 3000

//json middleware
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
  const products = [
    {id: 1, item_name: 'Apollo Running Short', img_url: './images/image.png', price: 50, category: "Women"},
    {id: 2, item_name: 'Apollo Running Short', img_url: './images/image3.png', price: 50,category: "Men"},
    {id: 3, item_name: 'Apollo Running Short', img_url: './images/image1.png', price: 50, category: "Women"},
    {id: 4, item_name: 'Apollo Running Short', img_url: './images/image3.png', price: 50, category: "Kids"},
    {id: 5, item_name: 'Apollo Running Short', img_url: './images/image1.png', price: 50, category: "Men"},
    {id: 6, item_name: 'Apollo Running Short', img_url: './images/image2.png', price: 50, category: "Kids"},
    
  ];
  res.json(products);
})

//route for products by category

app.get('/items-by-category/:category/', (req: Request, res: Response) => {
  const category = req.params.category;
  const products = [
    {id: 3, item_name: 'Apollo Running Short', img_url: './images/image1.png', price: 50, category: "Women"},
    {id: 1, item_name: 'Apollo Running Short', img_url: './images/image.png', price: 50, category: "Women"},
    {id: 5, item_name: 'Apollo Running Short', img_url: './images/image1.png', price: 50, category: "Men"},
    {id: 4, item_name: 'Apollo Running Short', img_url: './images/image3.png', price: 50, category: "Kids"},
    
//used filter method to select the items in the products array based on the category passed in the URL parameter
  ].filter(item => item.category === category);
  res.json(products);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})