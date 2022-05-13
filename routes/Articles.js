const express = require("express")
const router = express.Router()
const Article = require("../models/article")

router.get("/new", (req, res) =>{
    res.render("articles/new", {article: new Article()})
})

router.get("/edit/:id", async (req, res) =>{
    const article = await Article.findById(req.params.id).lean()
    res.render("articles/edit", {article: article})
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

router.put("/:id", async (req, res) => {
    let article = await Article.findById(req.params.id)({
        title: req.body.title,
        content: req.body.content
    })
    try {
        article = await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch (e) {
        res.render("articles/edit", { article: article })
    }
})


router.delete("/:id", async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect("/")
})

module.exports = router