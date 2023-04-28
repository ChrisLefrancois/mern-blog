// require
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

// Schema
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
}, {timestamps: true});

// static signup method
userSchema.statics.signup = async function(username, email, password) {

  // validation
  if (!email || !password || !username) {
    throw Error('All fields must exist')
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

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
