const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String
        }
       

    },
    {timestamps:true}
)

module.exports= mongoose.model("task",taskSchema)