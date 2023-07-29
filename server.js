const express = require('express');
const port = parseInt( process.env.PORT || '3000', 10);
const addProxyMiddleware = require('./proxyMiddleware.js');
const app = express();
addProxyMiddleware(app);
const customHost = process.env.HOST;
const host = customHost || null; 

app.listen(port, host, async err => {
    if (err) {
    }
})  