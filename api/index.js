import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./router/auth.js"
import usersRoute from "./router/users.js"
import hotelRoute from "./router/hotel.js"
import roomsRoute from "./router/rooms.js"
const app = express()
dotenv.config()

const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to MongoDB")
  } catch (error) {
    throw error
  }
}

mongoose.connection.on("disconnecsted", ()=>{
    console.log("MongoDB Disconnected!")
})

//Middlewares
app.use(express.json())

app.use((err, req, res, next)=>{
  console.log('i am a middle ware')
  next()
})


app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotel", hotelRoute)
app.use("/api/rooms", roomsRoute)



app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend")
})