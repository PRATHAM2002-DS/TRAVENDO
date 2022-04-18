import express from  'express';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { addItemInCart } from '../controller/cart-controller.js';

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);


router.post('/cart/add', addItemInCart);





export default router;
