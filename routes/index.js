"use strict";

const router = require("express").Router(),
    homeRoutes = require("./homeRoutes"),
    errorRoutes = require("./errorRoutes");

router.use("/", homeRoutes);
// どの経路にもマッチしないときに error を表示
router.use("/", errorRoutes);

module.exports = router;