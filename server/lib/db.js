import mongoose from "mongoose";

// Function to connect to the mongodb database
export const connectDB = async () =>{
    try {
        
        mongoose.connection.on('connected', ()=> console.log('Database Connected',process.env.MONGODB_URI ));
       await mongoose.connect(`${process.env.MONGODB_URI}`) 
    } catch (error) {
        console.log(error);
    }
}