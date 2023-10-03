const Task = require('../MODELS/TaskModel')
const pick = require('../node_modules/lodash/pick')

const taskcontroller = {}

taskcontroller.get = async(req,res) =>{
    try{
        const id = req.params.id
        const findTasks = await Task.find({user:id})
        res.json(findTasks)
    }
    catch(e){
        res.json(e)
    }
}

taskcontroller.create = async(req,res) =>{
    try{
        const body = pick(req.body,["title","body","completed","user"])
        const task = new Task(body)
        await task.save()
        res.json(task)
    }
    catch(e){
        res.json(e)
    }
}

taskcontroller.update = async(req,res) =>{
    try{
        const id = req.params.id
        const updatedStatus = await Task.findOneAndUpdate({_id:id},{completed:true},{new:true})
        res.json(updatedStatus)
    }
    catch(e){
        res.json(e)
    }
}

taskcontroller.delete = async(req,res) =>{
    try{
        const id = req.params.id
        console.log(id,"id to delete")
        const deleteTask = await Task.findByIdAndDelete({_id:id})
        res.json(deleteTask)
    }
    catch(e){
        res.json(e)
    }
}




module.exports = taskcontroller