"use strict";
// /controllers/animalController.js
const chineseYear = require("chinese-year");

exports.a = "Hello World";

exports.getAnimal = (req, res, next) => {
    // make sure the year input has an actual year in it
    if (!req.body.year) {
        req.body.year = new Date().getFullYear();
    }
    // get the animal for the year
    const animal = chineseYear.getAnimal(req.body.year);
    // add the animal to the query string
    req.body.animal = animal;
    req.body.b = "its wednesday"
    // next middleware
    next();
}