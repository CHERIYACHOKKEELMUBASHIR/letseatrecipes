import mongoose from "mongoose";

const model = mongoose.model;
const schema = mongoose.Schema;

const productSchema = new schema({
    
    name:String,
    description:String,
    rating: Number,
    imgurl:String
   
});



export default model('Product', productSchema);