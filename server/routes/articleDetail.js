const router = require("express").Router();
const Article = require("../models/Article");
const ArticleDetail = require("../models/ArticleDetail");

// create a articleDetail
router.post("/", async (req, res) => {
    const newArticleDetail = ArticleDetail(req.body);
    try {
        const savedArticleDetail = await newArticleDetail.save();
        res.status(200).json(savedArticleDetail);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a articleDetail
router.put("/:id", async (req, res) => {
    try {
        const articleDetail = await ArticleDetail.findById(req.params.id);
        if (articleDetail.articleId === req.body.articleId) {
            await articleDetail.updateOne({ $set: req.body });
            res.status(200).json("the articleDetail has been updated");
        } else {
            res.status(403).json("you can update only your ArticleDetail");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a articleDetail
router.delete("/:id", async (req, res) => {
    try {
        const articleDetail = await ArticleDetail.findById(req.params.id);
        if (articleDetail.articleId === req.body.articleId) {
            await articleDetail.deleteOne();
            res.status(200).json("the articleDetail has been deleted");
        } else {
            res.status(403).json("you can delete only your articleDetail");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// read all articleDetail
router.get("/all/all", async (req, res) => {
    try {
        const articleDetail = await ArticleDetail.find({});
        res.status(200).json(articleDetail);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;