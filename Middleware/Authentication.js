const jwt = require("jsonwebtoken")
const User = require('../MODELS/UserModel')
require('dotenv').config()

const AuthenticateUser = (req,res,next) =>{
    let token = req.headers['authorization']
    console.log(token)
    if(token){
        token = token.split(' ')[1]
        try{
        const tokenData = jwt.verify(token,process.env.secretcode)
        if(tokenData){
            const user = User.findById(tokenData._id)
            if(user){
            req.user = {
                _id:tokenData._id
            }
            console.log(req.user)
            next()
        }else{
            res.json({error:'user not found'})
        }
        }else{
            res.json({error:'error'})
        }
    }catch(e){
        res.json(e)
    }

    }

}

module.exports = AuthenticateUser