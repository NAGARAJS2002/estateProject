import express from 'express';
import mongoose from "mongoose"
import env from "dotenv";
import authRouter from "./routes/authRoute.js"
import userRouter from "./routes/userRoute.js"
import cookieParser from 'cookie-parser';
env.config()

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser())

mongoose.connect(process.env.CONNECTION_URL).then(()=>{
    console.log('database connected');
    
})





app.listen(PORT,()=>{
    console.log(`Server is running on port 3000`);
    
});


app.use('/api/user',userRouter)
app.use('/api/auth',authRouter );

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({

        success: false,
        statusCode,
        message,
    }
      
    )
})