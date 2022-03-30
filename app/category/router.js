var express = require('express');
var router = express.Router();
const { index, createView , createAction } = require('./controller')

/* GET home page. */
router.get('/', index);
router.get('/create', createView);
router.post('/create', createAction);

module.exports = router;
