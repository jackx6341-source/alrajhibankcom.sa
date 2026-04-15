(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[183], {
    27038: (e, t, r) => {
        "use strict";
        r.d(t, {
            A: () => o
        });
        var n = r(37876)
          , i = r(45086)
          , a = r(2650);
        let o = () => {
            let {t: e} = (0,
            a.s9)();
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)(i.A, {
                    title: {
                        value: e("ERROR_TITLE") ? e("ERROR_TITLE") : "Error Occurred"
                    },
                    subTitle: {
                        value: e("ERROR_SUB") ? e("ERROR_SUB") : "We are working to fix the problem. Please try again in a moment."
                    }
                })
            })
        }
    }
    ,
    61705: (e, t, r) => {
        "use strict";
        t.Te = void 0;
        var n = r(70796);
        Object.defineProperty(t, "Te", {
            enumerable: !0,
            get: function() {
                return n.handleEditorFastRefresh
            }
        }),
        r(78885),
        r(78136)
    }
    ,
    63387: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            __N_SSG: () => c,
            default: () => f
        });
        var n = r(37876)
          , i = r(14232)
          , a = r(27038)
          , o = r(31686)
          , u = r(91043)
          , d = r(93327)
          , s = r(61705)
          , l = r(61496)
          , c = !0;
        let f = e => {
            var t, r, c, f;
            let {notFound: E, componentProps: g, layoutData: h, headLinks: p} = e;
            if ((0,
            i.useEffect)( () => {
                (0,
                s.Te)()
            }
            , []),
            E || !(null == h || null == (t = h.sitecore) ? void 0 : t.route))
                return (0,
                n.jsx)(a.A, {});
            let y = null != (f = null == h || null == (c = h.sitecore) || null == (r = c.context) ? void 0 : r.pageEditing) && f;
            return (0,
            n.jsx)(u.Ph, {
                value: g,
                children: (0,
                n.jsx)(d.Ge, {
                    componentFactory: l.DC.getComponentFactory({
                        isEditing: y
                    }),
                    layoutData: h,
                    children: (0,
                    n.jsx)(o.A, {
                        layoutData: h,
                        headLinks: p
                    })
                })
            })
        }
    }
    ,
    69511: function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, a) {
                function o(e) {
                    try {
                        d(n.next(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function u(e) {
                    try {
                        d(n.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(o, u)
                }
                d((n = n.apply(e, t || [])).next())
            }
            )
        }
          , i = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.GraphQLEditingService = t.dictionaryQuery = t.query = void 0;
        let a = i(r(20829))
          , o = r(60823)
          , u = r(93637);
        t.query = `
 query EditingQuery(
    $siteName: String!
    $itemId: String!
    $language: String!
    $version: String
    $after: String
    $pageSize: Int = 1000
) {
    item(path: $itemId, language: $language, version: $version) {
      rendered
    }
    site {
      siteInfo(site: $siteName) {
        dictionary(language: $language, first: $pageSize, after: $after) {
          results {
            key
            value
          }
          pageInfo {
            endCursor
            hasNext
          }
        }
      }
    }
  }
`,
        t.dictionaryQuery = `
  query EditingDictionaryQuery(
    $siteName: String!
    $language: String!
    $after: String
    $pageSize: Int = 1000
  ) {
    site {
      siteInfo(site: $siteName) {
        dictionary(language: $language, first: $pageSize, after: $after) {
          results {
            key
            value
          }
          pageInfo {
            endCursor
            hasNext
          }
        }
      }
    }
  }
`;
        class d {
            constructor(e) {
                this.serviceConfig = e,
                this.graphQLClient = this.getGraphQLClient()
            }
            fetchEditingData(e) {
                return n(this, arguments, void 0, function*({siteName: e, itemId: r, language: n, version: i, layoutKind: d=u.LayoutKind.Final}) {
                    var s, l, c, f, E;
                    if (a.default.editing("fetching editing data for %s %s %s %s", e, r, n, i, d),
                    !e)
                        throw RangeError("The site name must be a non-empty string");
                    if (!n)
                        throw RangeError("The language must be a non-empty string");
                    let g = {}
                      , h = []
                      , p = !0
                      , y = ""
                      , _ = yield this.graphQLClient.request(t.query, {
                        siteName: e,
                        itemId: r,
                        version: i,
                        language: n
                    }, {
                        headers: {
                            sc_layoutKind: d
                        }
                    });
                    for ((null == (l = null == (s = null == _ ? void 0 : _.site) ? void 0 : s.siteInfo) ? void 0 : l.dictionary) ? (h = _.site.siteInfo.dictionary.results,
                    p = _.site.siteInfo.dictionary.pageInfo.hasNext,
                    y = _.site.siteInfo.dictionary.pageInfo.endCursor) : p = !1; p; ) {
                        let r = yield this.graphQLClient.request(t.dictionaryQuery, {
                            siteName: e,
                            language: n,
                            after: y
                        });
                        (null == (f = null == (c = null == r ? void 0 : r.site) ? void 0 : c.siteInfo) ? void 0 : f.dictionary) ? (h = h.concat(r.site.siteInfo.dictionary.results),
                        p = r.site.siteInfo.dictionary.pageInfo.hasNext,
                        y = r.site.siteInfo.dictionary.pageInfo.endCursor) : p = !1
                    }
                    return h.forEach(e => g[e.key] = e.value),
                    {
                        layoutData: (null == (E = null == _ ? void 0 : _.item) ? void 0 : E.rendered) || {
                            sitecore: {
                                context: {
                                    pageEditing: !0,
                                    language: n,
                                    editMode: o.EditMode.Metadata
                                },
                                route: null
                            }
                        },
                        dictionary: g
                    }
                })
            }
            getGraphQLClient() {
                if (!this.serviceConfig.clientFactory)
                    throw Error("clientFactory needs to be provided when initializing GraphQL client.");
                return this.serviceConfig.clientFactory({
                    debugger: a.default.editing,
                    headers: {
                        sc_editMode: "true"
                    }
                })
            }
        }
        t.GraphQLEditingService = d
    },
    70796: (e, t, r) => {
        "use strict";
        var n = r(65364);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getJssEditingSecret = t.handleEditorFastRefresh = t.getPublicUrl = void 0,
        r(78136),
        t.getPublicUrl = () => {
            let e = "";
            if (void 0 === e) {
                if (n.env.NETLIFY && n.env.DEPLOY_URL)
                    return n.env.DEPLOY_URL;
                if (n.env.VERCEL_URL)
                    return `https://${n.env.VERCEL_URL}`;
                e = "http://localhost:3000"
            }
            return e.replace(/\/$/, "")
        }
        ,
        t.handleEditorFastRefresh = (e=!1) => {}
        ,
        t.getJssEditingSecret = () => {
            let e = n.env.JSS_EDITING_SECRET;
            if (!e || 0 === e.length)
                throw Error("The JSS_EDITING_SECRET environment variable is missing or invalid.");
            return e
        }
    }
    ,
    78136: (e, t, r) => {
        e.exports = r(90285)
    }
    ,
    78885: (e, t, r) => {
        e.exports = r(24432)
    }
    ,
    90285: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MetadataKind = t.LayoutKind = t.mapButtonToCommand = t.DefaultEditFrameButtonIds = t.DefaultEditFrameButtons = t.DefaultEditFrameButton = t.PAGES_EDITING_MARKER = t.QUERY_PARAM_EDITING_SECRET = t.EDITING_ALLOWED_ORIGINS = t.getJssPagesClientData = t.handleEditorAnchors = t.resetEditorChromes = t.isEditorActive = t.HorizonEditor = t.ExperienceEditor = t.DEFAULT_PLACEHOLDER_UID = t.GraphQLEditingService = void 0;
        var n = r(69511);
        Object.defineProperty(t, "GraphQLEditingService", {
            enumerable: !0,
            get: function() {
                return n.GraphQLEditingService
            }
        });
        var i = r(66176);
        Object.defineProperty(t, "DEFAULT_PLACEHOLDER_UID", {
            enumerable: !0,
            get: function() {
                return i.DEFAULT_PLACEHOLDER_UID
            }
        }),
        Object.defineProperty(t, "ExperienceEditor", {
            enumerable: !0,
            get: function() {
                return i.ExperienceEditor
            }
        }),
        Object.defineProperty(t, "HorizonEditor", {
            enumerable: !0,
            get: function() {
                return i.HorizonEditor
            }
        }),
        Object.defineProperty(t, "isEditorActive", {
            enumerable: !0,
            get: function() {
                return i.isEditorActive
            }
        }),
        Object.defineProperty(t, "resetEditorChromes", {
            enumerable: !0,
            get: function() {
                return i.resetEditorChromes
            }
        }),
        Object.defineProperty(t, "handleEditorAnchors", {
            enumerable: !0,
            get: function() {
                return i.handleEditorAnchors
            }
        }),
        Object.defineProperty(t, "getJssPagesClientData", {
            enumerable: !0,
            get: function() {
                return i.getJssPagesClientData
            }
        }),
        Object.defineProperty(t, "EDITING_ALLOWED_ORIGINS", {
            enumerable: !0,
            get: function() {
                return i.EDITING_ALLOWED_ORIGINS
            }
        }),
        Object.defineProperty(t, "QUERY_PARAM_EDITING_SECRET", {
            enumerable: !0,
            get: function() {
                return i.QUERY_PARAM_EDITING_SECRET
            }
        }),
        Object.defineProperty(t, "PAGES_EDITING_MARKER", {
            enumerable: !0,
            get: function() {
                return i.PAGES_EDITING_MARKER
            }
        });
        var a = r(98107);
        Object.defineProperty(t, "DefaultEditFrameButton", {
            enumerable: !0,
            get: function() {
                return a.DefaultEditFrameButton
            }
        }),
        Object.defineProperty(t, "DefaultEditFrameButtons", {
            enumerable: !0,
            get: function() {
                return a.DefaultEditFrameButtons
            }
        }),
        Object.defineProperty(t, "DefaultEditFrameButtonIds", {
            enumerable: !0,
            get: function() {
                return a.DefaultEditFrameButtonIds
            }
        }),
        Object.defineProperty(t, "mapButtonToCommand", {
            enumerable: !0,
            get: function() {
                return a.mapButtonToCommand
            }
        });
        var o = r(93637);
        Object.defineProperty(t, "LayoutKind", {
            enumerable: !0,
            get: function() {
                return o.LayoutKind
            }
        }),
        Object.defineProperty(t, "MetadataKind", {
            enumerable: !0,
            get: function() {
                return o.MetadataKind
            }
        })
    }
    ,
    90668: (e, t, r) => {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/[[...path]]", function() {
            return r(63387)
        }
        ])
    }
    ,
    93637: (e, t) => {
        "use strict";
        var r, n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MetadataKind = t.LayoutKind = void 0,
        function(e) {
            e.Final = "final",
            e.Shared = "shared"
        }(r || (t.LayoutKind = r = {})),
        function(e) {
            e.Open = "open",
            e.Close = "close"
        }(n || (t.MetadataKind = n = {}))
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [759, 841, 627, 496, 636, 593, 792], () => t(90668)),
    _N_E = e.O()
}
]);
