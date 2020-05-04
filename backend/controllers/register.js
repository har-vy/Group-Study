const registerRouter = require('express').Router()
const User = require('../models/user.js')
const bcrypt = require('bcrypt')
const isEmpty = require('is-empty')
const validator = require('validator')

registerRouter.post('/', async (request,response) => {
    const body = request.body
    console.log(JSON.stringify(body))
    let errors = {}

    if(validator.isEmpty(body.email)){
        errors.email = "email id is required"
    }
    if(validator.isEmpty(body.password)){
        errors.password = "password is required"
    }
    if(validator.isEmpty(body.name)){
        errors.name = "name is required"
    }
    if(validator.isEmpty(body.username)){
        errors.username = "username is required"
    }
    if(errors.length > 0){
        response.status(400).json(errors).end()
    }
    
    const user = await User.findOne({email: body.email})
    if(user){
        response.status(401).json({email: "email already exists"})
    }
    else{
    console.log(body.password)
    console.log(typeof body.password)
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const newUser = new User({
      username: body.username,
      email: body.email,
      name: body.name,
      passwordHash,
    })

    const savedUser = await newUser.save()
    response.json(savedUser)
}
})

module.exports = registerRouter