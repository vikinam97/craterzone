const responseHandler = require("../../util/responseHandler"),
    service = require("./city.service");

module.exports.get = function (req, res) {
    service.get({
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.info = function (req, res) {
    service.info({
        productId: req.params.id,
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.create = function (req, res) {
    service.create({
        name: req.query.name,
        lat: req.query.lat,
        lng: req.query.lng,
        region: req.query.region,
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.delete = function (req, res) {
    service.delete({
        productId: req.params.id,
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}