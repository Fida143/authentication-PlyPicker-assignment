import mongoose from "mongoose";

export const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("Successfully MongoDB Connected ");
        })
        connection.on('error',()=>{
            console.log("Error in mongoDB Connection ")
        })
        
    } catch (error) {
        console.log(error)
        
    }
}