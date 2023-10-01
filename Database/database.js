const mongoose = require('mongoose')
require('dotenv').config()

const configureDb = async(req,res) =>{
    try{
        await mongoose.connect(process.env.url)
        console.log("connected to db")
    }
    catch(e){
        res.json(e)
    }
}

module.exports = configureDb