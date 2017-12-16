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
    Hero.findById(req.params.id, (err, hero) => {
        if (err) {
            res.status(500).send(err);
        }
        hero.name = req.body.name;

        hero.save((err, hero) => {
            if (err) {
                res.status(500).send(err)
            }
            res.send(hero);
        });

    });
});

router.delete('/:id', (req, res) => {
    Hero.findByIdAndRemove(req.params.id, (err, hero) => {
        res.send('delete hero: ' + req.params.id);
    });
});

router.get('/:name', (req, res) => {
    Hero.find({
        name: new RegExp(req.params.name, "i")
    }, (err, heroes) => {
        res.send(heroes);
    });
});

module.exports = router