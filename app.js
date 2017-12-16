const express = require('express');
const app = express();
const mainRouter = require('./src/router');
const heroesRouter = require('./src/heroes');

const config = require('./config/config')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(config.app.path + '/', mainRouter);
app.use(config.app.path + '/heroes', heroesRouter);

app.listen(config.app.port, () => {
    console.log('Example app listening on port ' + config.app.port + ' and path "' + config.app.path + '"!');
});