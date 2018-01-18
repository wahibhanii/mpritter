'use strict'

const User = require('../models/user')
const bcrypt      = require('bcryptjs');
const salt        = bcrypt.genSaltSync(10);
const jwt         = require('jsonwebtoken');

class UsersController {

  static createUser (req, res) {
    if ((req.body.email !== undefined) && (req.body.userName !== undefined) && (req.body.password !== undefined)) {
      let newUser = {
        email  : req.body.email,
        userName  : req.body.userName,
        password  : req.body.password,
      }
      User.create(newUser)
      .then(result => {
        res.status(200).json({
          message: 'user created',
          data: result
        })
      })
        
        
      }
    } else {
      res.status(400).json({
        message: 'bad request'
      })
    }
  }

  static getUserById (req, res) {
    
  }

  static login (req, res) {

  }

  static updateUser(req, res) {

  }

  static deleteUser (req, res) {

  }
 
}

module.exports = UsersController