const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function addProxyMiddleware(app) {
    app.use(
      '/',
      createProxyMiddleware({
        target: 'https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1',
        changeOrigin: true,
        router: function(req) {
            console.log(req.url)
            let target="https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page"
            console.log(target+req.url)
            let val=target+req.url
            console.log(typeof val)
            return val;
        }
      }),
    );
  };