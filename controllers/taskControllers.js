const mongoose = require('mongoose')
const taskModel = require('../models/TaskModel')

const createTask = async (req,res)=>{
    const {title,description}= req.body

    try{
        const task = await taskModel.create({title:title,description:description})
        res.status(200).json(task)

    }catch(error){
        res.status(400).json({error: error.message})

    }
}

const getTasks = async (req,res)=>{
    try{
        const tasks = await taskModel.find({})
        res.status(200).json(tasks)
    }catch(error){
        res.status(400).json({error:error.message})

    }
}

const getOneTask = async (req,res)=>{
   
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({error:'task not found'})
        }
    try{
        const oneTask = await taskModel.findById(id)
        res.status(200).json(oneTask) 
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const updateTask = async(req,res)=>{
    const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'task not found'})
        }
    try{
        const task = await taskModel.findByIdAndUpdate(
            {
                _id:id
            },
            {
                ...req.body
            }
            )
        res.status(200).json(task)
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

const deleteTask = async (req,res)=>{
    const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({error:'task not found'})
        }
    try{
        const task = await taskModel.findByIdAndDelete(id)
        res.status(200).json(task)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {createTask, getTasks, getOneTask, updateTask, deleteTask}