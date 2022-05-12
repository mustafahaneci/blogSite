const { request } = require("express");
const exhbs = require("express-handlebars")
const mongoose = require("mongoose")


const app = express()
const PORT = 3000

const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});


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