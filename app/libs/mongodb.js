import mongoose from "mongoose"

export default async function connectMongodb(){
try {
 await mongoose.connect(process.env.MONGO_URI)  
 console.log("connected to mongodb")
} catch (error) {
    console.log(error)
}
}