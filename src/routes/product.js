const {Router} = require('express');
const productRouter = Router();

// const {hash} = require('../middleware/index');

const {retrieveProducts} = require('../controllers/product');
//middleware and controllers need to be called here


//routes called here
productRouter.get("/products", /*middleware, if applicaple*/ retrieveProducts);

module.exports = {productRouter};