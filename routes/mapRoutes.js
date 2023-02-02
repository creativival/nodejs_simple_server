"use strict";

const router = require("express").Router(),
    mapsController = require("../controllers/mapsController");


router.get("/geolonia_map", mapsController.geolonia_map);
router.get("/geolonia_map_export", mapsController.geolonia_map_export);
router.get("/mbgl_export_control", mapsController.mbgl_export_control);
router.get("/js_geolonia_map", mapsController.js_geolonia_map);
router.get("/geojson", mapsController.geojson);
router.get("/maplibre_gl", mapsController.maplibre_gl);
router.get("/maplibre_gl_export", mapsController.maplibre_gl_export);
router.get("/maplibre_gl_style_switcher", mapsController.maplibre_gl_style_switcher);
router.get("/maplibre_gl_legend", mapsController.maplibre_gl_legend);
router.get("/maplibre_gl_legend-a", mapsController.maplibre_gl_legend_a);

module.exports = router;