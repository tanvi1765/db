const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_des: {
            type: String,
            trim: true,
        },
        color: {
            type: String,
            trim: true,
        },
        discount: {
            type: String,
            trim: true,
        },
        note: {
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

const product = mongoose.model("product",productSchema);

module.exports = product;