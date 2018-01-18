const express = require('express')
const router = express.Router()
const PostsController = require('../controllers/postsController')

// Create Post
router.post('/', PostsController.createPost)

// Get all posts
router.get('/', PostsController.getAllPosts)

// Search Posts by tag
router.get('/?tag', PostsController.searchPostsByTag)

// Delete Post
router.delete('/', PostsController.deletePost)

module.exports = router;
