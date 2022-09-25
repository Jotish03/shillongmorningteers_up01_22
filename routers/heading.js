const express = require('express'),
      headingControllers = require('../controller/heading'),
      router = express.Router(),
      { authorize,isLoggedIn } = require("../middleware/auth");



router.post('/', headingControllers.createHeading)
router.patch('/:headingID/update', headingControllers.updateHeading)


module.exports = router