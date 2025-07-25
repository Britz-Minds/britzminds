import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv. config({

});


// call database connection here
connectDB();
const app=express();
const PORT=process.env.PORT||3000;

// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true
    }));
//apis
app.use("api/v1/user", userRoute);

"http://localhost:3000/api/v1/user/register"
app.length( "/home", (_, res)=> {
    res.status(200).json({
        succes: true,
        message: "Welcome to Britz Minds API Backend"
    })
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

