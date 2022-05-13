const express = require("express")
const router = express.Router()
const Article = require("../models/article")

router.get("/new", (req, res) =>{
    res.render("articles/new", {article: new Article()})
})

router.get("/:id", async (req, res) => {
    const article = await Article.findById(req.params.id).lean()
    res.render("articles/show", { article: article })
})

router.post("/", async (req, res) => {
    let article = new Article({
        title: req.body.title,
        content: req.body.content,
    })

    try {
        article = await article.save()
        res.redirect(`/articles/${article.id}`)
    
    } catch (e) {
        res.render("articles/new", { article: article })
    }
    
})

module.exports = router