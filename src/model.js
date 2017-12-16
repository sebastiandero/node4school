var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = Schema({
    name: String
});

heroSchema.query.byName = (name) => {
    return this.find({
        name: new RegExp(name, 'i')
    });
};

heroSchema.query.findAll = (name) => {
    return this.find();
};

var Hero = mongoose.model('Hero', heroSchema);

module.exports.Hero = Hero;