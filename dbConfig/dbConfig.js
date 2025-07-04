import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    // to detect if DB crashes, connection to DB fails
    const connection = mongoose.connection
    connection.on('connected', ()=>{
        console.log('MongoDB connected');
    })
    connection.on('error',(err)=>{
        console.error('MongoDB connection error, please make sure DB is up and running' + err);
        process.exit();
    })
  } catch (error) {
    console.error("Something went wrong in connecting to DB");
  }
}
