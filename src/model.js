const config = require('../config/config');

var mongoose = require('mongoose');

mongoose.connect(config.db.url, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var heroSchema = Schema({
    name: String
});

heroSchema.methods.byName = (name) => {
    this.model('Hero').find({name: new RegExp(name, i)});
};

var Hero = mongoose.model('Hero', heroSchema);

module.exports.Hero = Hero;