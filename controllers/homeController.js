"use strict";

const Constants = require('../constants');


module.exports = {
    index: (req, res) => {
        res.render("index", {
            path: "home",
        });
    },
    about: (req, res) => {
        res.render("about");
    },
};