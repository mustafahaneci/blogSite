const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({
    title: {type: String, require: true},
    content: {type: String, require: true},
    createdAt: {type: Date, default: Date.now}
})