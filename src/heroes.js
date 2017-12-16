var express = require('express');
var router = express.Router();
var heroes = require('./heroes');
var Hero = require('./model').Hero;

router.get('/', (req, res) => {
    Hero.find({}, (err, users) => {
        res.send(users);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    var hero = new Hero({
        name: req.body.name
    });
    hero.save();

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