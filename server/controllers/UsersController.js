'use strict'

const User = require('../models/User')
const bcrypt      = require('bcryptjs');
const salt        = bcrypt.genSaltSync(10);
const jwt         = require('jsonwebtoken');

class UsersController {

  static createUser (req, res) {

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