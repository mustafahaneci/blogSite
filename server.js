const express = require("express");
const exhbs = require("express-handlebars")
const mongoose = require("mongoose")
const path = require("path");
const Article = require("./models/article")
const articleRouter = require("./routes/articles")


const app = express()
const PORT = 3000

const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
});

app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")

app.get("/", async (req, res) => {
    res.render("articles/index", { articles: articles })
})

app.use("/articles", articleRouter)

const DB_URL ="mongodb+srv://mustafa123:123@cluster0.vukeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        app.listen(PORT, () => console.log("server running.."))
    } catch (e) {
        console.log(error)
    }
}

startApp()