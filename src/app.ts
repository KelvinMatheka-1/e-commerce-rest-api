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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})