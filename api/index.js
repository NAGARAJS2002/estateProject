import express from 'express';
import mongoose from "mongoose"
import env from "dotenv";
import authRouter from "./routes/authRoute.js"
import userRouter from "./routes/userRoute.js"
import listingRouter from "./routes/listingRouter.js"
import cookieParser from 'cookie-parser';
import path from "path"
env.config()

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser())

mongoose.connect(process.env.CONNECTION_URL).then(()=>{
    console.log('database connected');
    
});


const __dirname = path.resolve();





app.listen(PORT,()=>{
    console.log(`Server is running on port 3000`);
    
});


app.use('/api/user',userRouter)
app.use('/api/auth',authRouter );
app.use('/api/listing',listingRouter );

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})
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