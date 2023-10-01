const User = require("../MODELS/UserModel")
const pick = require("../node_modules/lodash/pick")
const bcrypt = require('bcrypt');

const userController = {}


userController.register = async(req,res) =>{
    try{
        const body = pick(req.body,["username","email","password"])
        const user = new User(body)
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(user.password,salt)
        user.password = hashedPassword
        console.log(hashedPassword)
        const save = await user.save()
        res.json(save)
       
        
    }
    catch(e){
        res.json(e)
    }
}

module.exports = userController