import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
       type: String,
       required:true,
       trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true,
    }
},{
        timestamps:true
    })

//Interactuar con los métodos.
export default mongoose.model('User',userSchema)

