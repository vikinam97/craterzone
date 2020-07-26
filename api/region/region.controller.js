const responseHandler = require("../../util/responseHandler"),
    service = require("./region.service");

module.exports.get = function (req, res) {
    service.get({
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.create = function (req, res) {
    service.create({
        name: req.query.name,
        email: req.query.email,
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.regionCity = function (req, res) {
    service.regionCity({
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}