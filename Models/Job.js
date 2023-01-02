import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    name:{type:String},
    qualification:{type:String},
    experience:{type:String},
    about:{type:String},
    works:{type:String},
})

export default mongoose.model("Job",jobSchema);