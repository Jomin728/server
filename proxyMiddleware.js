const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function addProxyMiddleware(app) {
    app.use(
      '/',
      createProxyMiddleware({
        target: 'https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1',
        changeOrigin: true,
        router: function(req) {
            console.log(req.url)
            let string="https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page"
            console.log(string+req.url)
            return string;
        }
      }),
    );
  };