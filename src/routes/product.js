const {Router} = require('express');
const productRouter = Router();

// const {hash} = require('../middleware/index');

const {retrieveProducts, searchProducts} = require('../controllers/product');
//middleware and controllers need to be called here


//routes called here
productRouter.get("/products/:result", /*middleware, if applicaple*/ retrieveProducts);
productRouter.get("/search/:result", searchProducts)

module.exports = {productRouter};