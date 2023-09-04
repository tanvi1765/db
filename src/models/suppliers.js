const mongoose = require("mongoose");

const suppliersSchema = new mongoose.Schema(
    {
        f_name: {
            type: String,
            trim: true,
        },
        l_name: {
            type: String,
            trim: true,
        },
        title_name: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
        },
        counrty: {
            type: String,
            trim: true,
        },
        notes: {
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

const suppliers = mongoose.model("suppliers",suppliersSchema);

module.exports = suppliers;