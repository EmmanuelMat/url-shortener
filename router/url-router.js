const router = require("express").Router;
const urlRouter = router();
const { UrlModel } = require("../schema/url-schema");
const { nanoid } = require("nanoid");

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

urlRouter.get('/', async (req, res) => {
    const { short } = req.query;

    if (!short) {
        throw new Error("not a valid url.")
    }

    const result = await UrlModel.findOne({ shortUrl: short });

    res.redirect(result.url);
});


urlRouter.post('/', async (req, res) => {
    const { url } = req.body;

    if (!url && !urlRegex.test(url)) {
        throw new Error("not a valid url.")
    }

    const shortUrl = nanoid(3);

    const shortenedUrl = new UrlModel({
        url: url,
        shortUrl: shortUrl
    });

    const result = await shortenedUrl.save();

    res.json(result);

})


module.exports = {
    urlRouter
}