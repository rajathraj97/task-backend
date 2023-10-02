const express = require('express')
const cors = require('cors')
require('dotenv').config()
const userController = require("./Controllers/UserController")
const taskcontroller = require("./Controllers/TaskController")
const configureDB = require("./Database/database")
const Authentication = require("./Middleware/Authentication")

const app = express()

app.use(cors())
app.use(express.json())

configureDB()


//Users Api
app.post("/api/registeruser",userController.register)
app.post("/api/login",userController.login)

//Tasks Api
app.post("/api/createtask",Authentication,taskcontroller.create)
app.patch("/api/updatetask/:id",Authentication,taskcontroller.patch)
app.delete("/api/deletetask/:id",Authentication,taskcontroller.delete)

app.listen(process.env.port,()=>{
    console.log(`listening on port:${process.env.port}`)
})

