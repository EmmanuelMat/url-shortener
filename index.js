const { dbConnection } = require('./db-connnection');
const express = require('express');
const { urlRouter } = require('./router/url-router');
const app = express()
const port = 6000

dbConnection();
app.use(express.json())

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
app.use("/short-url", urlRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})