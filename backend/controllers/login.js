const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.js')
const loginRouter = require('express').Router()


loginRouter.post('/', async (request,response) => {
    const body = request.body
    console.log(JSON.stringify(body))
    const user = await User.findOne({username: body.username})
    console.log(JSON.stringify(user))
    
    const passwordCorrect = user == null ? false : await bcrypt.compare(body.password, user.passwordHash)

    if(!user || !passwordCorrect){
        response.status(401).json({error : "invalid username or password"})
        console.log('invalid username or password')
    }
    else{
    const userForToken = {
        username: user.username,
        id: user._id
    }

    const token = jwt.sign(userForToken,process.env.SECRET)
    response.status(200).send({
        token, username: user.username, name: user.name
      })
    }
})

module.exports = loginRouter