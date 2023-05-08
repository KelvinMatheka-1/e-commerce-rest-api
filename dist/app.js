"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//importing items stored in the product files
const products_1 = require("./products");
const app = (0, express_1.default)();
//port
const PORT = 3000;
//json middleware
app.use(express_1.default.json());
//route for available categories
app.get('/api/categories', (req, res) => {
    const categories = [
        { id: 1, name: 'Women' },
        { id: 2, name: 'Men' },
        { id: 3, name: 'Kid' },
    ];
    res.json(categories);
});
//route for all products
app.get('/api/items', (req, res) => {
    res.json(products_1.products);
});
//route for products by category
app.get('/items-by-category/:category/', (req, res) => {
    const category = req.params.category;
    //used filter method to select the items in the products array based on the category passed in the URL parameter
    const productCategory = products_1.products.filter(item => item.category === category);
    res.json(productCategory);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
