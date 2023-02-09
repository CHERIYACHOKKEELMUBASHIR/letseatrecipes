import express from 'express'
import productControler from './products'
import authenticationControler from './authentication'



const router=express.Router();

router.use("/product",productControler);
router.use("/auth",authenticationControler);


export default router;