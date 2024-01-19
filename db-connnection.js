// const CONNECTION_STRING = process.env.CONNECTION_STRING;
CONNECTION_STRING='mongodb+srv://emma_123:6SfZBqzRITsUTgWX@cluster0.jwtt5.gcp.mongodb.net/url-shortener?retryWrites=true&w=majority';
const mongoose = require("mongoose");
const dbConnection = async () => {
    mongoose.connect(CONNECTION_STRING).then(() => {
        console.log("db connected.");
    })
    .catch(err => console.error(err));
}

module.exports = {
    dbConnection
}
