'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
    email : {
      type: String,
      validate: {
        validator: function(v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
        },
        message: '{VALUE} is not a valid email!'
      },
      required : [true, 'User Email is Required!'],
      // unique : true,
    }, 
    password: String,
    userName : String,
    profPicUrl: String
});
// userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User