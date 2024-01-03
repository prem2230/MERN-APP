const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoute')
const cors = require('cors')


app.use((req,res,next)=>{
    console.log('path'+req.path+'method'+req.method)
    next()
})

app.use(express.json())
app.use(cors())

const connectDatabase = async ()=>{
try{
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(process.env.PORT,()=>{
        console.log("DB connected succesfully and listening to "+ process.env.PORT)
    })
}catch(error){
    console.error("error connecting to database",error)
}
}
connectDatabase()

app.use('/api',taskRoutes)
