const mongoose = require("mongoose");

const orderdetailsSchema = new mongoose.Schema(
    {
        order_name: {
            type: String,
            trim: true,
        },
        order_desc: {
            type: String,
            trim: true,
        },
        price: {
            type: String,
            trim: true,
        },
        color: {
            type: String,
            trim: true,
        },
        order_desc: {
            type: String,
            trim: true,
        },
        details: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
);

const orderdetails = mongoose.model("order-details",orderdetailsSchema);

module.exports = orderdetails;