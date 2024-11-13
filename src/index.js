// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
import dotenv from 'dotenv'
dotenv.config({
    path: '.env'
})

import connectDB from "./db/index.js";

connectDB()

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