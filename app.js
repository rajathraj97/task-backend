const express = require('express')
const cors = require('cors')
require('dotenv').config()
const userController = require("./Controllers/UserController")
const configureDB = require("./Database/database")

const app = express()

app.use(cors())
app.use(express.json())

configureDB()


//Users Api
app.post("/api/registeruser",userController.register)

app.listen(process.env.port,()=>{
    console.log(`listening on port:${process.env.port}`)
})

