"use strict";

const router = require("express").Router(),
    homeController = require("../controllers/homeController");

router.get("/", homeController.index);
router.get("/about", homeController.about);
router.get("/geolonia_map", homeController.geolonia_map);
router.get("/geojson", homeController.geojson);

module.exports = router;