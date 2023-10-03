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
        type:String,
        default:false,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})

taskSchema.pre('save',function(next){
if(this.title && this.body && this.user){
    next()
}else{
    res.json({error:"validation error in middleware"})
}
})

const Task = mongoose.model('task',taskSchema)

module.exports  = Task
