// ##########  BACKEND MAIN APP FILE  #############

// Get dependencies
const express = require('express');
const mongodb = require('./db/connection');
const routes = require('./routes/index');
const dotenv = require('dotenv');


// Initiate dotenv to make environment variables available throughout the application
dotenv.config();
// Instantiate an express object
const app = express();
// Save a port number
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongodb.initDb((err) => {
  if (err) {
      console.log(err);
  } else {
      console.log(`Connected to DB and listening at port ${port}`);
  }
});


// app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Add support for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// Calls the routes to view the data
app.use('/', routes);

module.exports = app;