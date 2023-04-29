// require
require('dotenv').config({ path: './.env'});

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const userRoutes = require('./routes/user')

// Get Mongo Driver connection
const dbo = require('./db/conn');

const Db = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;

//  express app
const app = express();


const router = express.Router()
// middleware
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(Db)
  .then(() => {
    // listen for request
    app.listen(port, () => {
      console.log('connected to db && Listening on port', port)
    })

  })
  .catch((error) => {
    console.log(error)
  })
