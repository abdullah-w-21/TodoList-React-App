const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
    try{
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'http://localhost:4000/',
            changeOrigin: true,
        })
    );
    }
    catch(err){
        console.log(err.message);
    }
};


