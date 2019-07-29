let proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy("/v2", {
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));

    app.use(proxy("/pages", {
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));

    app.use(proxy("/message", {
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));
    app.use(proxy("/recommend", {
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));
    app.use(proxy("/itemdetail", {
        target: "https://m.wowdsgn.com",
        changeOrigin: true
    }));
};
// https://m.wowdsgn.com/recommend/cart?currentPage=1&_=1563966689551