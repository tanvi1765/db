const mongoose = require("mongoose");

const shippersSchema = new mongoose.Schema(
    {
        shippers_name: {
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

const shippers = mongoose.model("shippers",shippersSchema);

module.exports = shippers;