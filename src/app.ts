import express, {Request, Response} from "express";

const app = express();

//port
const PORT = 3000

//json middleware
app.use(express.json());

//route for categories
app.get('/api/categories', (req:Request, res:Response) => {
  const categories = [
    { id: 1, name: 'Women' },
    { id: 2, name: 'Men' },
    { id: 3, name: 'Kid' },
  ];
  res.json(categories);
})

//route for all items
app.get('/api/items', (req:Request, res:Response)=>{
  const items = [
    {id: 1, item_name: 'Apollo Running Short', img_url: './images/image.png', price: 50, category: "Women"},
    {id: 2, item_name: 'Apollo Running Short', img_url: './images/image3.png', price: 50,category: "Men"},
    {id: 3, item_name: 'Apollo Running Short', img_url: './images/image1.png', price: 50, category: "Women"},
    {id: 4, item_name: 'Apollo Running Short', img_url: './images/image3.png', price: 50, category: "Kids"},
    {id: 5, item_name: 'Apollo Running Short', img_url: './images/image1.png', price: 50, category: "Men"},
    {id: 6, item_name: 'Apollo Running Short', img_url: './images/image2.png', price: 50, category: "Kids"},
    
  ];
  res.json(items);
})

//route for items by category

app.get('/items-by-category/:category/', (req: Request, res: Response) => {
  const category = req.params.category;
  const items = [
    {id: 3, item_name: 'Apollo Running Short', img_url: './images/image1.png', price: 50, category: "Women"},
    {id: 1, item_name: 'Apollo Running Short', img_url: './images/image.png', price: 50, category: "Women"},
    {id: 5, item_name: 'Apollo Running Short', img_url: './images/image1.png', price: 50, category: "Men"},
    {id: 4, item_name: 'Apollo Running Short', img_url: './images/image3.png', price: 50, category: "Kids"},
  ].filter(item => item.category === category);
  res.json(items);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})