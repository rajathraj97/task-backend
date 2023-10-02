const User = require("../MODELS/UserModel")
const pick = require("../node_modules/lodash/pick")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

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

userController.login = async(req,res) =>{
    try{
        const body = pick(req.body,["email","password"])
        const userData = await User.findOne({email:body.email})
        if(userData){
           const result =  await bcrypt.compare(body.password,userData.password)
           if(result){
            const tokenData = {
                username:userData.username,
                email:userData.email
            }
           const token = jwt.sign(tokenData,process.env.secretcode)
           res.status(200).json(`Bearer ${token}`)
            }else{
                res.json({error:"User Not Found"})
            }
        }
    }
    catch(e){

    }
}

module.exports = userController