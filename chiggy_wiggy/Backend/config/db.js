import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Admin:Hardi1404@cluster0.e15vwz4.mongodb.net/?appName=Cluster0').then(()=>console.log("dbconnnected"));
}