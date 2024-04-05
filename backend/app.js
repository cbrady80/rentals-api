// ##########  BACKEND MAIN APP FILE  #############

// Get dependencies
var express = require('express');
// var path = require('path');
// var http = require('http');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const mongodb = require('./db/connection');

// Instantiate an express object
const app = express();
// Save a port number
const port = process.env.PORT || 3000;

// app.use is Middleware
// This way is how you do it now with the bodyParser included in Express
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// app.use(cookieParser());
// app.use(logger('dev')); // Tell express to use the Morgan logger
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
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        // // Event Listener
        // app.listen(port);
        // Log message
        console.log(`Connected to DB and listening at port ${port}`);
    }
});

module.exports = app;

// Tell express to use the specified director as the
// root directory for your web site
// app.use(express.static(path.join(__dirname, './dist/cms/browser/')));

// // Tell express to map the default route ('/') to the index route
// app.use('/', index);
// // Map to the other routes
// app.use('/messages', messageRoutes);
// app.use('/contacts', contactRoutes);
// app.use('/documents', documentRoutes);

// Tell express to map all other non-defined routes back to the index page
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './dist/cms/browser/index.html'));
// });

// // establish a connection to the mongo database
// mongoose.connect(process.env.MONGODB_URI)
// .then(() => {
//     console.log('Connected to database!');
// })
// .catch(() => {
//     console.log('Connection failed.');
// });

// // Define the port address and tell express to use this port
// const port = process.env.PORT || '3000';
// app.set('port', port);

// // Create HTTP server.
// const server = http.createServer(app);

// // Tell the server to start listening on the provided port
// server.listen(port, function() {
//   console.log('API running on localhost: ' + port)
// });