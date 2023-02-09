import mongoose from "mongoose";

const model = mongoose.model;
const schema = mongoose.Schema;

const authenticationSchema = new schema({
   name:{
      type:String
   },
   phonenumber:Number,
   password:String
});



export default model('Auth', authenticationSchema);