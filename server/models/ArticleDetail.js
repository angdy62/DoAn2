const mongoose = require("mongoose");

const ArticleDetailSchema = new mongoose.Schema(
    {
        articleId: {
            type: String,
            required: true,
        },
        img:{
            type: String,
        },
        define: {
            type: String,
        },
        hint:{
            type: String,
        },
        method: {
            type: String,
        },
        prevent: {
            type: String,
        },
        warning: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("ArticleDetail", ArticleDetailSchema);