const express = require("express"),
    controller = require("./region.controller"),
    auth = require("../../util/auth"),
    router = express.Router();

router.get("/region", 
    auth, 
    controller.get)

router.post("/region", 
    auth, 
    controller.create)

router.get("/regionCity", 
    auth, 
    controller.regionCity)

module.exports = router;