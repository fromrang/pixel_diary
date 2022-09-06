const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use('/',
        createProxyMiddleware(
            {
                target: 'http://localhost:7777',
                changeOrigin: true,
            }
        )
    )
}