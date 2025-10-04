import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const port = process.env.PORT || 5000;

const app= express();
const router= express.Router();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("hello");
})

app

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
