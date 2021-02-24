const {Router} = require('express');
const userRouter = Router();

const {hash} = require('../middleware/index');

const {createUser} = require('../controllers/user');
//middleware and controllers need to be called here


//routes called here
userRouter.post("/signup", hash, createUser);

module.exports = { userRouter};