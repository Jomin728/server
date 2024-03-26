const express = require('express');
const cors = require('cors')
const port = parseInt('3000', 10);
const addProxyMiddleware = require('./proxyMiddleware.js');
const app = express();
app.use(cors())
addProxyMiddleware(app);
const customHost = process.env.HOST;
app.listen(3000, async err => {
    if (err) {
    }
})  