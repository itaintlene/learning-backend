// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
import dotenv from 'dotenv'
dotenv.config({
    path: '.env'
})

import connectDB from "./db/index.js";
import { app } from './app.js';

connectDB()
.then(()=>{
    app.on("error", (error)=> {
        console.log("ERR:", error)
        throw error
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at PORT ${process.env.PORT}`)
    })
})
.catch((err)=> {
    console.log("MongoDB connection Failed!!", err)
})

/* 
import express from "express"
const app = express()

// this is an iffy function
// and we are using async await bc database is in another continent therefore it might lag
( async() => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("ERR:", error)
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR: ", error)
        throw err
    }
})

    */