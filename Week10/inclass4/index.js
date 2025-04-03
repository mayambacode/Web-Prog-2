'use strict';

const express = require('express');
const app = express();
const Circle = require('./models/circle');

app.set('view engine', 'ejs');

app.get('/circle', (req, res) => {
    const radius = parseFloat(req.query.radius) || 1;
    const circle = new Circle(radius);
    res.render('index', { circle });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/circle`);
});
