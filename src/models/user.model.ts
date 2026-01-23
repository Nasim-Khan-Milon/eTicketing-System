import mongoose from "mongoose";

interface Iuser{
    _id?:mongoose.Types.ObjectId,
    name:string,
    image:string
    email:string
    password?:string
    role?:'passenger' | 'admin'
    createdAt?:Date,
    updatedAt?:Date
}


const userSchema=new mongoose.Schema<Iuser>({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:false
},
image:{
    type:String
},
role:{
    type:String,
    enum:['passenger', 'admin'],
    default:'passenger'
}
},{timestamps:true})

const User=mongoose.models.User ||  mongoose.model('User',userSchema) 
export default User

