const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())


app.listen(process.env.port,()=>{
    console.log(`listening on port:${process.env.port}`)
})

