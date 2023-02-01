"use strict";

const router = require("express").Router(),
    homeRoutes = require("./homeRoutes"),
    mapRoutes = require("./mapRoutes"),
    errorRoutes = require("./errorRoutes");

router.use("/", homeRoutes);
router.use("/map", mapRoutes);
// どの経路にもマッチしないときに error を表示
router.use("/", errorRoutes);

module.exports = router;