//  ##################  THIS FILE CONNECTS THE ANGULAR FRONTEND TO THE BACKEND SERVER  ############

// Imports
const http = require('http');
const app = require('./backend/app');

// // Set up the port #
const port = process.env.PORT || 3000;
// To set a configuration for the express env.
app.set("port", port);

// Create a server - this is what connects to the backend/app.js file.
const server = http.createServer(app);
// Start the server
server.listen(port);