// ###########  INDEX MAIN ROUTES FILE ############

// Import Express package Router
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, './dist/cms/browser/index.html'));
  });

  // // USE request for HOME page
// router.use('/', index);

// USE request for PROPERTIES
router.use('/properties', require('./properties'));

//USE request for TENANTS
router.use('/tenants', require('./tenants'));



// Export
module.exports = router;