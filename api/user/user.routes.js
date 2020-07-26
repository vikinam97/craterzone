const express = require("express"),
    controller = require("./user.controller"),
    auth = require("../../util/auth"),
    router = express.Router();

router.get("/user", 
    auth, 
    controller.get)

router.post("/user", 
    controller.create)

module.exports = router;