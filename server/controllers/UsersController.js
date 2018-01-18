'use strict'

const User = require('../models/user');
const bcrypt      = require('bcryptjs');
const salt        = bcrypt.genSaltSync(10);
const jwt         = require('jsonwebtoken');

class UsersController {

  static createUser (req, res) {
    console.log('createUser')
    if ((req.body.email !== undefined) && (req.body.userName !== undefined) && (req.body.password !== undefined)) {
      let newUser = {
        email: req.body.email,
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, salt),
        profPicUrl: 'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png?w=300'
      }
      User.create(newUser)
      .then(result => {
        res.status(200).json({
          message: 'user created',
          data: result
        })
      })
      .catch(err => {
        res.status(500).send(err)
      })
    } else {
      res.status(400).json({
        message: 'bad request'
      })
    
    }
  }

  static getUserById (req, res) {
    User.findOne({_id: req.params.id})
    .then(result => { 
      res.status(200).json({
        message: 'User Found',
        data: result
      })
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static login (req, res) {
    console.log(req.body)
    User.findOne ({email: req.body.email})
    .then(userResult => {
      if (userResult === null) {
        res.status(200).json({
          message: 'User not Found!',
          data: userResult,
        })
      } else {
        if (bcrypt.compareSync(req.body.password, userResult.password)) {
          let payload = {
            _id: userResult._id,
            email: userResult.email,
            userName: userResult.userName,
            profPicUrl: userResult.profPicUrl
          }
          let token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN)
          res.status(200).json({
            message: 'Login Success',
            token: token,
            isLoggedIn : true
          })
        } else {
          res.status(400).json({
            message: 'User not Found',
            data: userResult
          })
        }
      }
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static updateUser(req, res) {
    if (req.headers.decoded._id != req.params.id){
      res.status(403).json({
        message: 'Forbidden'
      })
    } else {
      let newData = {
        userName : req.body.userName,
        email   : req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
        profPicUrl: req.body.imagelink
      }
      User.findOneAndUpdate({_id: req.params.id}, newData, {new: true})
      .then(result => {
        res.status(200).json({
          message: 'User Updated',
          data: result
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    }
  }

  static deleteUser (req, res) {
    if (req.headers.decoded._id != req.params.id){
      res.status(403).json({
        message: 'Forbidden'
      })
    } else {
      User.deleteOne({_id: req.params.id})
      .then(result => {
        res.status(200).json({
          message: 'User Deleted',
          data: result
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    }
  }
 
}

module.exports = UsersController