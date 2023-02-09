import express from 'express';
import ProductModel from '../../models/product'

const router = express.Router();

router.get('/list',(req: any, res: any, next:any)=>{
    try {
        ProductModel.find().then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.get('/search/:productName',(req: any, res: any, next:any)=>{
    try {
        const { productName } = req.params;
        ProductModel.find({name:productName})
         .then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});


router.post('/',(req: any, res: any, next:any)=>{
    try {
        const foodItem = req.body;
        console.log("fooditems",foodItem);
        
        ProductModel.insertMany([foodItem]).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

export default router;