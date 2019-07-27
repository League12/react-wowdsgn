let proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy("/v2", {
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));

    app.use(proxy("/product", {
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));

    app.use(proxy("/itemdetail", {
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));

    app.use(proxy("/recommend", {
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));
};
