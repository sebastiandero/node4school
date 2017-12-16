var express = require('express');
var router = express.Router();
var heroes = require('./heroes');

router.get('/', function (req, res) {
    res.send('Birds home page');
});

router.put('/', function (req, res) {
    res.send('Birds home page');
});

router.post('/', function (req, res) {
    res.send('Birds home page');
});

router.delete('/', function (req, res) {
    res.send('Birds home page');
});

router.get('/:name', function (req, res) {
    res.send('Birds home page');
});

module.exports = router