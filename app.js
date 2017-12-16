const express = require('express');
const app = express();
const mainRouter = require('./src/router');
const heroesRouter = require('./src/heroes');

const config = require('./config/config')

app.use(config.app.path + '/', mainRouter);
app.use(config.app.path + '/heroes', heroesRouter);

app.listen(config.app.port, () => {
    console.log('Example app listening on port 3000!');
});