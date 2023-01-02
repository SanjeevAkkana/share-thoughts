import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    createdAt:{type:String,default:Date.now()}
})

export default mongoose.model("User",userSchema);