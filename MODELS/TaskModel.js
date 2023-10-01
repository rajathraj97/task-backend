const mongoose = require('mongoose')

const{Schema} = mongoose

const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false,
        required:True
    }
},{timestamps:true})

taskSchema.pre('save',function(next){
if(this.title && this.nody){
    next()
}else{
    res.json({error:"validation error in middleware"})
}
})

const Tasks = mongoose.model('task',taskSchema)

module.exports  = Tasks
