const Region = require("./region.model"),
    mongoose = require("mongoose");


/**
 * @description To get the region by id
 * @author Vignesh R
 */
module.exports.get = ({
    user
}) => {
    return (async () => {
        return Region.find({
            createdBy: user._id
        });
    })()
}

/**
 * @description To create the region
 * @param {String} name of the business
 * @param {String} user for the user account
 * @author Vignesh R
 */

module.exports.create = ({
    name,
    user
}) => {
    return Region.create({
        name,
        createdBy: user._id,
    })
}


/**
 * @description To create the user
 * @param {String} name of the business
 * @param {String} user for the user account
 * @author Vignesh R
 */

module.exports.regionCity = ({
    name,
    user
}) => {
    return Region.aggregate([{
        $match: {
            createdBy: mongoose.Types.ObjectId(user._id)
        }
    }, {
        $lookup: {
            from: "cities",
            localField: "_id",
            foreignField: "region",
            as: "cities"
        }
    }, {
        $project: {
            _id: 1,
            name: 1,
            cities: {
                _id: 1,
                name: 1,
                lat: 1,
                lng: 1,
                volume: 1
            }
        }
    }])
}
