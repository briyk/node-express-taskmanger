
const Task = require('../models/tasks') ;

//get all tasks function controller
const getAllTasks = async (req,res) =>{
     try {
          const tasks = await Task.find({})
          res.status(201).json({tasks});
     } catch (error) {
          res.status(500).json({msg: error})
     }
}

// create tasks controller
const createTasks = async (req,res) =>{
     try{
          const task = await Task.create(req.body) ;
          res.status(201).json(task);
     } catch (error) {
          res.status(500).json({msg: error})
     }
}


// get single task controller
const getSingleTask = async (req,res) =>{
     try {
          const {id:taskId} = req.params ;
          const task = await Task.findOne({_id:taskId}) ;

          if(!task){
               return res.status(404).json({msg: `No task with this id : ${taskId}`})
          }

          res.status(201).json({task})
     } catch (error) {
          res.status(500).json({msg: error})
     }
}


//update tasks
const updateTasks = async (req,res) =>{
     try {
          const {id:taskId} = req.params ;
          const task = await Task.findOneAndUpdate({_id:taskId}, req.body,{
               new: true,
               runValidators: true
          }) ;

          if(!task){
               return res.status(404).json({msg: `No task with this id : ${taskId}`})
          }

          return res.status(200).json({task }) 
     } catch (error) {
          res.status(500).json({msg: error})
     }
}

//delete Tasks
const deleteTask = async (req,res) =>{
    try {
     const {id:taskId} = req.params ;
     const task = await Task.findByIdAndDelete({_id:taskId}) ;
     if(!task){
          return res.status(404).json({msg: `No task with this id : ${taskId}`})
     }

     res.status(201).json({task:null, status: 'Successfully Deleted'})

    } catch (error) {
     res.status(500).json({msg: error}) 
    }
}






module.exports = {
     getAllTasks,
     getSingleTask,
     createTasks,
     updateTasks,
     deleteTask
}