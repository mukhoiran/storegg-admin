var express = require('express');
var router = express.Router();
const { signinView, signinAction } = require('./controller')

/* GET home page. */
router.get('/', signinView);
router.post('/', signinAction);

module.exports = router;
