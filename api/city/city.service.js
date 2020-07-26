const Business = require("./city.model");


/**
 * @description To get the proct by id
 * @author Vignesh R
 */
module.exports.get = ({
    user
}) => {
    return (async () => {
        return Business.find({
            createdBy: user._id
        });
    })()
}

/**
 * @description To get the proct by id
 * @author Vignesh R
 */
module.exports.info = ({
    productId,
    user
}) => {
    return Business.findOne({
        _id: productId
    });
}

/**
 * @description To create the proct
 * @param {String} name of the business
 * @param {String} email of the business
 * @param {Object} user for the user account
 * @author Vignesh R
 */

module.exports.create = ({
    name,
    lat,
    lng,
    region,
    user
}) => {
    return Business.create({
        name,
        lat,
        lng,
        region,
        createdBy: user._id,
    })
}

/**
 * @description To delete the proct
 * @param {ObjectId} productId of the pproduct
 * @param {Object} user of the pproduct
 * @author Vignesh R
 */

module.exports.delete = ({
    productId,
    user
}) => {
    return Business.updateOne({
        _id: productId
    }, {
        deleted: true,
        deletedBy: user._id
    }, {
        new: true
    })
}