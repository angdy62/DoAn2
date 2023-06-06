const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
    {
        articleId: {
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        comp: {
            type: String,
        },
        time:{
            type: Date,
            default: Date.now(),
        },
        tag: {
            type: String,
        },
        summary:{
            type: String,
            max: 1000,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);