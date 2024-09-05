// const express = require ("express")
// to use import instead of require we use "type"="module" int package.json
import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./utils/dataBase.js"
import cookieParser from "cookie-parser"
import userRoute from "./routes/userRouter.js"
import cors from "cors"

databaseConnection()

dotenv.config({
    path:".env"
})

const app = express()

//middlewares 

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOptions)); 

 


//create Api 

app.use("/api/v1/user" , userRoute)
// http://localhost:8080/api/v1/user




// process.env.PORT
app.listen(8080 , ()=>{
    console.log(`Server listen at port ${process.env.PORT}`)
})