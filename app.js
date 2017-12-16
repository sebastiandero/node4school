const express = require('express');
const app = express();
const mainRouter = require('./src/router');
const heroesRouter = require('./src/heroes');

app.use('/', mainRouter);
app.use('/heroes', heroesRouter);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});