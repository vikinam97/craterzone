'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "bussiness name is required"]
    },
    lat: {
        type: Number,
        required: [true, "lat rate is required"]
    },
    lng: {
        type: Number,
        required: [true, "lng is required"]
    },
    region: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Region",
        index: true
    },
    deleted: {
        type: Boolean,
        default: false
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

module.exports = mongoose.model('City', CitySchema);
