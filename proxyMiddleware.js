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
            let string=""
            if(req.url!=null)
            console.log(string+req.url.slice(1))
            return string;
        }
      }),
    );
  };