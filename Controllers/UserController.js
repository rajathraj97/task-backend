const User = require("../MODELS/UserModel")
const pick = require("../node_modules/lodash/pick")
const bcrypt = require('bcrypt');

const userController = {}


userController.register = async(req,res) =>{
    try{
        const body = pick(req.body,["username","email","password"])
        const data = new User(body)
        console.log(data)

    }
    catch(e){
        res.json(e)
    }
}

module.exports = userController