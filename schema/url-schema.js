const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    shortUrl: { type: String, unique: true, require: true },
    url: { type: String, unique: true, require: true },
    createdAt: { type: Date, default: new Date() }
})

const UrlModel =
    mongoose.models["url"] ||
    mongoose.model(
        "url",
        schema,
        "url"
    );

module.exports = {
    UrlModel
}
