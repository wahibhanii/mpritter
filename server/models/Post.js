
'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    content: {
      type: String,
      validate: {
        validator: function(v) {
          return v.length <= 140
        },
        message : 'Pritt cannot be more than 140 Character'
      },
      required: [true, 'Pritt is required']
    },
    hashtags: String,
    createdAt: Date,
    poster: {type: Schema.Types.ObjectId, ref: 'User'}
});
postSchema.index({'hashtags': 'text' })

const Post = mongoose.model('Post', postSchema)

module.exports = Post