const express = require("express"),
    controller = require("./city.controller"),
    auth = require("../../util/auth"),
    router = express.Router();

router.get("/city", 
    auth, 
    controller.get)

router.post("/city", 
    auth, 
    controller.create)

module.exports = router;