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