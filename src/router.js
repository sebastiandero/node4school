var express = require('express');
var router = express.Router();
var heroes = require('./heroes');

router.get('/', function (req, res) {
    res.send('Hello World!');
});

router.use('/heroes', heroes);

module.exports = router