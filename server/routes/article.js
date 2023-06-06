const router = require("express").Router();
const Article = require("../models/Article");

// create a article
router.post("/", async (req, res) => {
    const newArticle = Article(req.body);
    try {
        const savedArticle = await newArticle.save();
        res.status(200).json(savedArticle);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a article
router.put("/:id", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        await article.updateOne({ $set: req.body });

        res.status(200).json("the article has been updated");
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a article
router.delete("/:id", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);        
        await article.deleteOne();

        res.status(200).json("the article has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

// read all article
router.get("/all/all", async (req, res) => {
    try {
        const article = await Article.find({});
        res.status(200).json(article);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;