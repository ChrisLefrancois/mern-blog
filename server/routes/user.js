const express = require('express')

// controller function
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// log in
router.post('/login', loginUser)

// sign up
router.post('/register', signupUser)

module.exports = router
