'use strict'

const Post = require('../models/post')
const bcrypt      = require('bcryptjs');
const salt        = bcrypt.genSaltSync(10);
const jwt         = require('jsonwebtoken');

class PostsController {

  static createPost (req, res) {
    console.log(req.body)
    let newPost = {
      content : req.body.content,
      createdAt: new Date(),
      hashtags : [],
      poster: null,// request.headers.decoded._id
    }
    
    let arrTag = newPost.content.split(' ')
    console.log(arrTag)
    arrTag = arrTag.filter(word => {
      console.log(word[0] === '#')
      return (word[0] === '#')
    })
    console.log('>>>', arrTag)
    newPost.hashtags = arrTag

    Post.create(newPost)
    .then(result => {
      res.status(200).json({
        message: 'Post Created',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static getAllPosts(req, res) {
    
  }
  
  static searchPostsByTag(req, res) {
    
  }


  static deletePost (req, res) {

  }
 
}

module.exports = PostsController