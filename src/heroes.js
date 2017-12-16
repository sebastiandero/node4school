var express = require('express');
var router = express.Router();
var heroes = require('./heroes');
var Hero = require('./model');

router.get('/', (req, res) => {
    var query = Hero.findAll();
    query.exec((err, heroes) => {
        if(err){
            console.log("error: " + err);
            return;
        }
        res.send(heroes);
    });
    res.send('get heroes');
});

router.post('/', (req, res) => {
    res.send('post hero');
});

router.put('/:id', (req, res) => {
    res.send('change hero: ' + req.params.id);
});

router.delete('/:id', (req, res) => {
    res.send('delete hero: ' + req.params.id);
});

router.get('/:name', (req, res) => {
    res.send('Search for heroes: ' + req.params.name);
});

module.exports = router