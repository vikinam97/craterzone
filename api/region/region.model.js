'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegionSchema = new Schema({
    name: {
        type: String,
        required: [true, "region name is required"],
        index: true
    },
    deleted: {
        type: Boolean,
        defaule: false
    },
    deletedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user required"]
    }
});

module.exports = mongoose.model('Region', RegionSchema);
