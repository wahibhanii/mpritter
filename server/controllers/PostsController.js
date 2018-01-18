'use strict'

const Post = require('../models/post')
const bcrypt      = require('bcryptjs');
const salt        = bcrypt.genSaltSync(10);
const jwt         = require('jsonwebtoken');

class PostsController {

  static createPost (req, res) {
    
  }

  static getAllPosts(req, res) {
    
  }
  
  static searchPostsByTag(req, res) {
    
  }


  static deletePost (req, res) {

  }
 
}

module.exports = PostsController