import express from 'express';
import UserModel from '../../models/auth'

const router = express.Router();
//creating controler

router.post('/login', (req: any, res: any, next: any) => {
    try {
        const data = req.body;
        UserModel.find({name:data.name,password:data.password})
        .then((document) => {
            if(document.length!=0){
                const login={
                    message:"Login Success",
                    data:document,
                    
                }
            res.json(login)
            }else{
                const login={message:"Login failed"}
                res.json(login)
            }
        });
    } catch (err) {
        next(err);
    }
});
router.post('/register', (req: any, res: any, next: any) => {
    try {
        const data = req.body;
        UserModel.findOne({name:data.name}).then((document:any) => {
            if(document){
                const register={
                    message:"User Already exist",
                    data:document
                }
                res.json(register)
            }
            else{ 
                UserModel.insertMany([data]).then((document:any) => {
                    const reg={
                        message:"Registerd successfull",
                        data:document
                    }
                    res.json(reg)
                });
            }
        });
        
    } catch (err) {
        next(err);
    }
})

export default router;