const express = require("express")
const router = express.Router()
const Article = require("../models/article")

router.get("/new", (req, res) =>{
    res.render("articles/new", {article: new Article()})
})

router.post("/", async (req, res) => {
    let article = new Article({
        title: req.body.title,
        content: req.body.content,
    })
})

module.exports = router