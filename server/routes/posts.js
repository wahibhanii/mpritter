const express = require('express')
const router = express.Router()
const PostsController = require('../controllers/postsController')
const authentication = require('../middleware/authentication')
// Create Post
router.post('/', authentication, PostsController.createPost)

// Get all posts
router.get('/', PostsController.getAllPosts)

// Search Posts by tag
router.get('/search', PostsController.searchPostsByTag)

// Delete Post
router.delete('/:id', PostsController.deletePost)

module.exports = router;
