const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function addProxyMiddleware(app) {
    app.use(
      '/',
      createProxyMiddleware({
        target: 'https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1',
        changeOrigin: true,
        router: function(req) {
          debugger
            // console.log(req)
            console.log(req.headers)
            console.log(req.query)
            console.log(typeof req.url)
            console.log(req.url)
            let string="https://api-v2.soundcloud.com/me/library/all?limit=10&offset=0&linked_partitioning=1&app_version=1692695220&app_locale=en"
            // if(req.url!=null)
            // console.log(string+req.url.slice(1))
            return req.headers.name
        }
      }),
    );
  };