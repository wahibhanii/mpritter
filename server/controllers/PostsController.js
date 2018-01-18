'use strict'

const Post = require('../models/Post')
const bcrypt      = require('bcryptjs');
const salt        = bcrypt.genSaltSync(10);
const jwt         = require('jsonwebtoken');

class PostsController {

  static createPost (req, res) {

  }

  static getAllPost(req, res) {
    
  }
  
  static getPostByTag(req, res) {
    
  }


  static deletePost (req, res) {

  }
 
}

module.exports = PostsController