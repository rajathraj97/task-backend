const Task = require('../MODELS/TaskModel')
const pick = require('../node_modules/lodash/pick')

const taskcontroller = {}

taskcontroller.get = async(req,res) =>{
    try{
        const body = pick(req.body,['_id'])
        console.log(body)
    }
    catch(e){
        res.json(e)
    }
}

taskcontroller.create = async(req,res) =>{
    try{
        const body = pick(req.body,["title","body","completed"])
        const task = new Task(body)
        await task.save()
        res.json(task)
    }
    catch(e){
        res.json(e)
    }
}

taskcontroller.patch = async(req,res) =>{
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
        const deleteTask = await Task.findOneAndDelete({_id:id})
        res.json(deleteTask)
    }
    catch(e){
        res.json(e)
    }
}




module.exports = taskcontroller