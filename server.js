import { app } from "./app.js";
import mongoose from "mongoose";
import { connectDB } from './data/database.js';

// database connection
connectDB();


app.listen(process.env.PORT, ()=>{
    console.log(`listening on http://localhost:${process.env.PORT}`);
});