const BlogPost = require('../models/blogPost')
const blogPostRouter = require('express').Router()

blogPostRouter.get('/', async (request,response) => {
    const blogs = await BlogPost.find({}).populate('user')
    
    response.status(200).json(blogs)
})

blogPostRouter.delete('/:id', async (request, response) => {
    await BlogPost.findByIdAndDelete(request.params.id)
})

module.exports = blogPostRouter