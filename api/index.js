import express from 'express';
import mongoose from "mongoose"
import env from "dotenv";
import authRouter from "./routes/authRoute.js"
import userRouter from "./routes/userRoute.js"

env.config()

const app = express();
const PORT = 3000;
app.use(express.json());


mongoose.connect(process.env.CONNECTION_URL).then(()=>{
    console.log('database connected');
    
})





app.listen(PORT,()=>{
    console.log(`Server is running on port 3000`);
    
});


app.use('/api/user',userRouter)
app.use('/api/auth',authRouter );

