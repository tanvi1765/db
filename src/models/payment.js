const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
       payment: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
        allowed: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
);

const payment = mongoose.model("payment",paymentSchema);

module.exports = payment;