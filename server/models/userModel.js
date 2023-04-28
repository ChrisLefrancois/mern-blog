// require
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Schema
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
}, {timestamps: true});

// static signup method
userSchema.statics.signup = async function(username, email, password) {

  const emailExist = await this.findOne({ email })
  const usernameExist = await this.findOne({ username })

  if (emailExist) {
    throw Error('Email already in use')
  }

  if (usernameExist) {
    throw Error('Username already in use')
  }



  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({username, email, password: hash})

  return user
}

// model
module.exports = mongoose.model('User', userSchema)
