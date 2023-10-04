import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
       type: String,
       required:true,
       trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        
    },
    password:{
        type:String,
        required:true,
        unique:true
    }

})

//Interactuar con los métodos.
export default mongoose.model('User',username)

