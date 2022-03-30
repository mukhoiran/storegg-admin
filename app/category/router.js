var express = require('express');
var router = express.Router();
const { index, createView , createAction, editView, editAction } = require('./controller')

/* GET home page. */
router.get('/', index);
router.get('/create', createView);
router.post('/create', createAction);
router.get('/edit/:id', editView);
router.put('/edit/:id', editAction);

module.exports = router;
