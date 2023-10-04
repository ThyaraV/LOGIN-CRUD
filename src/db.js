import mongoose from 'mongoose';

const MONGODB_URI = "mongodb://127.0.0.1:27017/mern"

const connectDb = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mern');
        console.log("DB is connected")
    }catch(error){
        console.log(error);
    }
};

export { connectDb };




