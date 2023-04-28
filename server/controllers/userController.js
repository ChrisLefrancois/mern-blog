const User = require('../models/userModel')

// log in
const loginUser = async (req, res) => {
  res.json({mssg: 'login user'})
}

// sign up user
const signupUser = async (req, res) => {

  const { username, email, password } = req.body

  try {
    const user = await User.signup(username, email, password)

    res.status(200).json({email, user})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { loginUser, signupUser }
