"use strict";

module.exports = {
    index: (req, res) => {
        res.render("index", {
            path: 'home',
        });
    },
    about: (req, res) => {
        res.render("about");
    },
    geolonia_map: (req, res) => {
        res.render("geolonia_map", {
            layout: 'map_layout',
        });
    },
};