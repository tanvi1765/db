const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_name: {
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

const order = mongoose.model("order",orderSchema);

module.exports = order;