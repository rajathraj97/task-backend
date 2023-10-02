const express = require('express')
const cors = require('cors')
require('dotenv').config()
const userController = require("./Controllers/UserController")
const taskcontroller = require("./Controllers/TaskController")
const configureDB = require("./Database/database")
const AuthenticateUser = require("./Middleware/Authentication")

const app = express()

app.use(cors())
app.use(express.json())

configureDB()


//Users Api
app.post("/api/registeruser",userController.register)
app.post("/api/login",userController.login)

//Tasks Api
app.get("/api/gettasks/:id",AuthenticateUser,taskcontroller.get)
app.post("/api/createtask",AuthenticateUser,taskcontroller.create)
app.patch("/api/updatetask/:id",AuthenticateUser,taskcontroller.update)
app.delete("/api/deletetask/:id",AuthenticateUser,taskcontroller.delete)

app.listen(process.env.port,()=>{
    console.log(`listening on port:${process.env.port}`)
})

