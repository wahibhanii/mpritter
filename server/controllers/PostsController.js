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
      poster: req.headers.decoded._id
    }
    
    let arrTag = newPost.content.split(' ')
    // console.log(arrTag)
    arrTag = arrTag.filter(word => {
      // console.log(word[0] === '#')
      return (word[0] === '#')
    })
    arrTag = arrTag.join('').split('#').join(' ')
    // console.log(arrTag)
    newPost.hashtags = arrTag
    // console.log('>>>', newPost)
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
    Post.find({}).populate('poster')
    .then(result => {
      res.status(200).json({
        message: 'Posts Found...',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }
  
  static searchPostsByTag(req, res) {
    console.log(req.query.tag)
    Post.find({$text: {$search: req.query.tag}})
    .populate('poster')
    .sort({createdAt: 'desc'})
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Posts Found...',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
    
  }


  static deletePost (req, res) {
    Post.deleteOne({_id: req.params.id})
    .then(result => {
      res.status(200).json({
        message: 'Post Deleted',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }
 
}

module.exports = PostsController