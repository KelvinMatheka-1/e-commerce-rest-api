# e-commerce-rest-api

This is a REST API for an e-commerce website that provides the following features:

    -Retrieving available categories
    -Retrieving all available products
    -Retrieving products by category
    -Adding products to a shopping cart
    -Removing products from a shopping cart
    -Retrieving the items in the shopping cart and the total sum
    -Creating payment session for the current cart using stipe API

Technologies Used:

    -Typescript
    -Node.js
    -express.js
    -Stripe payment system


Getting Started (To run the project locally, you need to have Node.js and npm installed. Then, follow the steps below )

    -clone thhe repository
    -install the dependencies: 'npm install'
    -start the server: 'npm run dev'

    The server will be listening on port 3000 by default(http://localhost:3000/). You can change the port by setting the PORT environment variable.

Endpoints

You can use POSTMAN or Thunder Client to test the endpoints

    -GET /api/categories
     Returns a list of available categories.

    -GET /api/items
     Returns a list of all products.

    -GET /items-by-category/:category/
     Returns a list of products in the specified category.

    -POST /api/cart
     Adds an item to the user's cart.

    -GET /api/cart
     Returns the user's cart and total price.

    -DELETE /api/cart/:id
     Removes an item from the user's cart.

    -POST /api/purchase
     The endpoint creates a payment session for the current cart using the Stripe API.