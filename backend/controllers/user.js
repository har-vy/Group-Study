const BlogPost = require('../models/blogPost')
const User = require('../models/user')
const userRouter = require('express').Router()

// Specific User can create a blog post
userRouter.post('/:username', async (request,response) => {
    const body = request.body
    const username = body.username
    const user = await User.findOne({username: username})

    const blogPost = new BlogPost({
        title: body.title,
        content: body.content,
        user: user.username,
    })

    const savedblogPost = await blogPost.save()
    user.blogs = user.blogs.concat(savedblogPost._id)
    await user.save()
    
    response.status(200).json(savedblogPost.toJSON())
})

// Retrieve all blogs of a specific user
userRouter.get('/:username', async (request,response) => {
    const id = request.params.username
    const blogs = await User.findOne({username: id}).populate('blogs')
    
    response.status(200).json(blogs.blogs.map(b => b.toJSON()))
})


module.exports = userRouter