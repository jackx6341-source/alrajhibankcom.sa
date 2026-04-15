self.__BUILD_MANIFEST = function(e, a, t, n, s, r, o, c, i) {
    return {
        __rewrites: {
            afterFiles: [{
                has: e,
                source: "/:nextInternalLocale(ar|en)/.well-known/:path*",
                destination: "/:nextInternalLocale/404"
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/api/sitecore",
                destination: o
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/ir/:path*",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/ir22/:path*",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/ir23/:path*",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/ir24/:path*",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/layouts/system/VisitorIdentification.js",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/sitecore/api/:path*",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/-/((?!media).*)",
                destination: o
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/sitemap.xml",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/en/sitemap.xml",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/ar/sitemap.xml",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/-/:path*",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/healthz",
                destination: "/:nextInternalLocale/api/healthz"
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/sitecore/service/:path*",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/api/jss/:path*",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/api/sitecore/:path*",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/sitecore/api/jss/:path*",
                destination: e
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/llms.txt",
                destination: "/:nextInternalLocale/api/llms"
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/robots.txt",
                destination: "/:nextInternalLocale/api/robots"
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/sitemap:id([\\w-]{0,}).xml",
                destination: "/:nextInternalLocale/api/sitemap"
            }, {
                has: e,
                source: "/:nextInternalLocale(ar|en)/layouts/system/:path*",
                destination: e
            }],
            beforeFiles: [],
            fallback: []
        },
        __routerFilterStatic: {
            numItems: 0,
            errorRate: 1e-4,
            numBits: 0,
            numHashes: i,
            bitArray: []
        },
        __routerFilterDynamic: {
            numItems: r,
            errorRate: 1e-4,
            numBits: r,
            numHashes: i,
            bitArray: []
        },
        "/404": [a, t, n, s, "static/chunks/pages/404-c5da4bf96803882a.js"],
        "/500": [a, t, n, s, "static/chunks/pages/500-849ccb8384396635.js"],
        "/_error": ["static/chunks/pages/_error-c172b48774fc5b34.js"],
        "/common/[[...slug]]": [a, t, n, s, "static/chunks/pages/common/[[...slug]]-beccc0585402359d.js"],
        "/flagship/[[...slug]]": [a, t, n, s, "static/chunks/pages/flagship/[[...slug]]-ab43b9f211e5616a.js"],
        "/forms/[[...slug]]": [a, t, n, s, "static/chunks/pages/forms/[[...slug]]-4103e8f8f12897bc.js"],
        "/path.SSR": [a, t, n, s, "static/chunks/pages/path.SSR-91c91d926d837fbc.js"],
        "/[[...path]]": [a, t, n, s, "static/chunks/pages/[[...path]]-ac6b61799f6fe68e.js"],
        sortedPages: ["/404", "/500", "/_app", "/_error", "/common/[[...slug]]", "/flagship/[[...slug]]", "/forms/[[...slug]]", "/path.SSR", "/[[...path]]"]
    }
}(void 0, "static/chunks/e098907b-8334b1fbc9d75970.js", "static/chunks/841-a76eaa1defc88c1c.js", "static/chunks/627-a02c7d88eb97453c.js", "static/chunks/496-119c9ad16ad55de1.js", 0, "/:nextInternalLocale/not-found", 1e-4, NaN),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
