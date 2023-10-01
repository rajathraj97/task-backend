const Tasks = require('../MODELS/TaskModel')
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
    }
    catch(e){
        res.json(e)
    }
}




module.exports = taskcontroller