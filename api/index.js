import express from 'express';
import mongoose from "mongoose"
import env from "dotenv";
import userRouter  from "./routes/userRoute.js"
env.config()

const app = express();
const PORT = 4000;



mongoose.connect(process.env.CONNECTION_URL).then(()=>{
    console.log('database connected');
    
})




app.listen(PORT,()=>{
    console.log(`Server is running on port 4000`);
    
});



app.use('/api/user/', userRouter);