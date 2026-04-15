(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[636], {
    92: (e, t, r) => {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return r(69348)
        }
        ])
    }
    ,
    2650: (e, t, r) => {
        "use strict";
        r.d(t, {
            CY: () => c,
            s9: () => d
        });
        var n = r(14232)
          , o = r(67138);
        let i = /{{(.*?)}}/g;
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = (0,
        n.createContext)()
          , l = function(e) {
            var t, r, n = (t = "",
            r = e || {},
            {
                set(e, t) {
                    r[e] = Object.assign(r[e] || {}, t)
                },
                locale: e => t = e || t,
                table: e => r[e],
                t(e, n, a) {
                    var s = o(r[a || t], e, "");
                    return "function" == typeof s ? s(n) : "string" == typeof s ? s.replace(i, (e, t, r) => {
                        for (e = 0,
                        r = n,
                        t = t.trim().split("."); r && e < t.length; )
                            r = r[t[e++]];
                        return null != r ? r : ""
                    }
                    ) : s
                }
            });
            return {
                _onUpdate: function() {},
                t: n.t,
                table: n.table,
                set: n.set,
                locale: function(e) {
                    if (void 0 === e)
                        return n.locale();
                    var t = n.locale(e);
                    return this._onUpdate(),
                    t
                },
                withPlural: function(e) {
                    var t = this;
                    void 0 === e && (e = {
                        type: "ordinal"
                    });
                    var r = new Intl.PluralRules(n.locale(),e);
                    return function(e, n) {
                        return Object.keys(n).map(function(e) {
                            if ("number" == typeof n[e]) {
                                var o = r.select(n[e]);
                                n[e] = t.t(e + "." + o)
                            }
                        }),
                        t.t.apply(t, [e, n].concat([].slice.call(arguments, 2)))
                    }
                }
            }
        };
        function c(e) {
            var t = e.children
              , r = e.locale
              , o = void 0 === r ? "en" : r
              , i = e.lngDict
              , c = e.i18nInstance
              , d = (0,
            n.useState)(0)[1]
              , u = (0,
            n.useMemo)(function() {
                var e = null != c ? c : l();
                return e._onUpdate = function() {
                    return d(function(e) {
                        return e + 1
                    })
                }
                ,
                e.set(o, i),
                e.locale(o),
                e
            }, [c]);
            return (0,
            n.useEffect)(function() {
                u.set(o, i),
                u.locale(o)
            }, [o, i]),
            n.createElement(s.Provider, {
                value: a({}, u)
            }, t)
        }
        function d() {
            return (0,
            n.useContext)(s)
        }
    }
    ,
    4365: e => {
        e.exports = {
            style: {
                fontFamily: "'rubik', 'rubik Fallback'"
            },
            className: "__className_1252ba",
            variable: "__variable_1252ba"
        }
    }
    ,
    7646: (e, t, r) => {
        "use strict";
        r.d(t, {
            A: () => c
        });
        var n = r(37876)
          , o = r(18847)
          , i = r.n(o)
          , a = r(14232);
        let s = JSON.parse('{"v":"5.0.1","fr":5,"ip":0,"op":14,"w":340,"h":330,"ddd":0,"assets":[],"layers":[{"ind":3,"nm":"Trazado 1-3","ks":{"p":{"a":0,"k":[167.794,164.367]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[65,65,65]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"ao":0,"ip":0,"op":14,"st":0,"bm":0,"sr":1,"ty":4,"shapes":[{"ty":"gr","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,14.439],[0,0],[-10.309,6.004],[0,0],[-11.151,-6.52],[0,0],[0,-11.909],[0,0],[12.509,-7.23],[0,0],[8.858,5.069],[0,0],[-0.062,11.201],[0,0],[-9.95,5.758],[0,0],[-13.435,-7.772],[0,0],[-0.044,-11.517],[0,0],[9.731,-5.547],[0,0],[8.824,5.094],[0,0]],"o":[[0,0],[-12.497,-7.233],[0,0],[0,-11.93],[0,0],[11.161,-6.501],[0,0],[10.282,6.011],[0,0],[0,14.448],[0,0],[-8.839,5.103],[0,0],[-9.722,-5.564],[0,0],[0.063,-11.496],[0,0],[13.434,-7.774],[0,0],[9.969,5.767],[0,0],[0.043,11.202],[0,0],[-8.851,5.045],[0,0],[0,0]],"v":[[-0.016,106.595],[-53.909,75.402],[-74.101,40.385],[-74.101,-87.519],[-57.451,-116.484],[-17.936,-139.5],[18.174,-139.469],[57.466,-116.493],[74.068,-87.557],[74.068,40.587],[53.854,75.616],[-59.064,140.878],[-87.645,140.932],[-132.16,115.457],[-147.794,88.325],[-147.524,39.381],[-131.358,11.526],[-21.587,-51.999],[21.846,-52.002],[131.456,11.41],[147.626,39.322],[147.814,88.479],[132.135,115.584],[87.763,140.877],[59.225,140.798],[-0.016,106.595]],"c":true},"hd":false}},{"ty":"st","c":{"a":0,"k":[0.0706,0.0549,0.8118,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":25},"lc":1,"lj":1,"ml":10,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":50}},{"n":"g","nm":"gap","v":{"a":0,"k":1441.9}},{"n":"o","nm":"offset","v":{"a":1,"k":[{"t":0,"s":[1291.9],"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"e":[-200]},{"t":14,"s":[-200]}]}}]},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[65,65]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}],"nm":"Object","hd":false}],"ln":"Trazado-1-3"},{"ind":2,"nm":"Trazado 1-2","ks":{"p":{"a":0,"k":[167.794,164.367]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[65,65,65]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"ao":0,"ip":0,"op":14,"st":0,"bm":0,"sr":1,"ty":4,"shapes":[{"ty":"gr","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,14.439],[0,0],[-10.309,6.004],[0,0],[-11.151,-6.52],[0,0],[0,-11.909],[0,0],[12.509,-7.23],[0,0],[8.858,5.069],[0,0],[-0.062,11.201],[0,0],[-9.95,5.758],[0,0],[-13.435,-7.772],[0,0],[-0.044,-11.517],[0,0],[9.731,-5.547],[0,0],[8.824,5.094],[0,0]],"o":[[0,0],[-12.497,-7.233],[0,0],[0,-11.93],[0,0],[11.161,-6.501],[0,0],[10.282,6.011],[0,0],[0,14.448],[0,0],[-8.839,5.103],[0,0],[-9.722,-5.564],[0,0],[0.063,-11.496],[0,0],[13.434,-7.774],[0,0],[9.969,5.767],[0,0],[0.043,11.202],[0,0],[-8.851,5.045],[0,0],[0,0]],"v":[[-0.016,106.595],[-53.909,75.402],[-74.101,40.385],[-74.101,-87.519],[-57.451,-116.484],[-17.936,-139.5],[18.174,-139.469],[57.466,-116.493],[74.068,-87.557],[74.068,40.587],[53.854,75.616],[-59.064,140.878],[-87.645,140.932],[-132.16,115.457],[-147.794,88.325],[-147.524,39.381],[-131.358,11.526],[-21.587,-51.999],[21.846,-52.002],[131.456,11.41],[147.626,39.322],[147.814,88.479],[132.135,115.584],[87.763,140.877],[59.225,140.798],[-0.016,106.595]],"c":true},"hd":false}},{"ty":"st","c":{"a":0,"k":[0.0706,0.0549,0.8118,1]},"o":{"a":0,"k":50},"w":{"a":0,"k":25},"lc":1,"lj":1,"ml":10,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":200}},{"n":"g","nm":"gap","v":{"a":0,"k":1291.9}},{"n":"o","nm":"offset","v":{"a":1,"k":[{"t":0,"s":[1491.9],"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"e":[0]},{"t":14,"s":[0]}]}}]},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[65,65]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}],"nm":"Object","hd":false}],"ln":"Trazado-1-2"},{"ind":1,"nm":"Trazado 1","ks":{"p":{"a":0,"k":[167.794,164.367]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[65,65,65]},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"ao":0,"ip":0,"op":14,"st":0,"bm":0,"sr":1,"ty":4,"shapes":[{"ty":"gr","it":[{"ty":"sh","d":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,14.439],[0,0],[-10.309,6.004],[0,0],[-11.151,-6.52],[0,0],[0,-11.909],[0,0],[12.509,-7.23],[0,0],[8.858,5.069],[0,0],[-0.062,11.201],[0,0],[-9.95,5.758],[0,0],[-13.435,-7.772],[0,0],[-0.044,-11.517],[0,0],[9.731,-5.547],[0,0],[8.824,5.094],[0,0]],"o":[[0,0],[-12.497,-7.233],[0,0],[0,-11.93],[0,0],[11.161,-6.501],[0,0],[10.282,6.011],[0,0],[0,14.448],[0,0],[-8.839,5.103],[0,0],[-9.722,-5.564],[0,0],[0.063,-11.496],[0,0],[13.434,-7.774],[0,0],[9.969,5.767],[0,0],[0.043,11.202],[0,0],[-8.851,5.045],[0,0],[0,0]],"v":[[-0.016,106.595],[-53.909,75.402],[-74.101,40.385],[-74.101,-87.519],[-57.451,-116.484],[-17.936,-139.5],[18.174,-139.469],[57.466,-116.493],[74.068,-87.557],[74.068,40.587],[53.854,75.616],[-59.064,140.878],[-87.645,140.932],[-132.16,115.457],[-147.794,88.325],[-147.524,39.381],[-131.358,11.526],[-21.587,-51.999],[21.846,-52.002],[131.456,11.41],[147.626,39.322],[147.814,88.479],[132.135,115.584],[87.763,140.877],[59.225,140.798],[-0.016,106.595]],"c":true},"hd":false}},{"ty":"st","c":{"a":0,"k":[0.0706,0.0549,0.8118,1]},"o":{"a":0,"k":50},"w":{"a":0,"k":25},"lc":1,"lj":1,"ml":10,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":1491.893}},{"n":"g","nm":"gap","v":{"a":0,"k":1491.893}},{"n":"o","nm":"offset","v":{"a":0,"k":0}}]},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[65,65]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}}],"nm":"Object","hd":false}],"ln":"Trazado-1"}],"markers":[]}')
          , l = i()( () => Promise.all([r.e(923), r.e(845)]).then(r.t.bind(r, 33845, 23)), {
            loadableGenerated: {
                webpack: () => [33845]
            },
            ssr: !1
        })
          , c = () => {
            let[e,t] = (0,
            a.useState)(!1);
            return ((0,
            a.useEffect)( () => {
                t(!0)
            }
            , []),
            e) ? (0,
            n.jsx)("div", {
                className: "arb-fixed arb-inset-0 arb-flex arb-items-center arb-justify-center arb-bg-white arb-bg-opacity-80 arb-z-[9999] arb-",
                children: (0,
                n.jsx)("div", {
                    className: "arb-flex arb-items-center arb-justify-center lg:arb-w-1/4 lg:arb-h-1/4 arb-w-2/3 arb-h-2/3",
                    children: (0,
                    n.jsx)(l, {
                        animationData: s,
                        loop: !0,
                        speed: .5,
                        className: "arb-w-[12rem] arb-h-full"
                    })
                })
            }) : null
        }
    }
    ,
    9502: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return p
            }
        });
        let n = r(64252)._(r(14232))
          , o = r(30496)
          , i = []
          , a = []
          , s = !1;
        function l(e) {
            let t = e()
              , r = {
                loading: !0,
                loaded: null,
                error: null
            };
            return r.promise = t.then(e => (r.loading = !1,
            r.loaded = e,
            e)).catch(e => {
                throw r.loading = !1,
                r.error = e,
                e
            }
            ),
            r
        }
        class c {
            promise() {
                return this._res.promise
            }
            retry() {
                this._clearTimeouts(),
                this._res = this._loadFn(this._opts.loader),
                this._state = {
                    pastDelay: !1,
                    timedOut: !1
                };
                let {_res: e, _opts: t} = this;
                e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout( () => {
                    this._update({
                        pastDelay: !0
                    })
                }
                , t.delay)),
                "number" == typeof t.timeout && (this._timeout = setTimeout( () => {
                    this._update({
                        timedOut: !0
                    })
                }
                , t.timeout))),
                this._res.promise.then( () => {
                    this._update({}),
                    this._clearTimeouts()
                }
                ).catch(e => {
                    this._update({}),
                    this._clearTimeouts()
                }
                ),
                this._update({})
            }
            _update(e) {
                this._state = {
                    ...this._state,
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                    ...e
                },
                this._callbacks.forEach(e => e())
            }
            _clearTimeouts() {
                clearTimeout(this._delay),
                clearTimeout(this._timeout)
            }
            getCurrentValue() {
                return this._state
            }
            subscribe(e) {
                return this._callbacks.add(e),
                () => {
                    this._callbacks.delete(e)
                }
            }
            constructor(e, t) {
                this._loadFn = e,
                this._opts = t,
                this._callbacks = new Set,
                this._delay = null,
                this._timeout = null,
                this.retry()
            }
        }
        function d(e) {
            return function(e, t) {
                let r = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    webpack: null,
                    modules: null
                }, t)
                  , i = null;
                function l() {
                    if (!i) {
                        let t = new c(e,r);
                        i = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return i.promise()
                }
                if (!s) {
                    let e = r.webpack && 1 ? r.webpack() : r.modules;
                    e && a.push(t => {
                        for (let r of e)
                            if (t.includes(r))
                                return l()
                    }
                    )
                }
                function d(e, t) {
                    l();
                    let a = n.default.useContext(o.LoadableContext);
                    a && Array.isArray(r.modules) && r.modules.forEach(e => {
                        a(e)
                    }
                    );
                    let s = n.default.useSyncExternalStore(i.subscribe, i.getCurrentValue, i.getCurrentValue);
                    return n.default.useImperativeHandle(t, () => ({
                        retry: i.retry
                    }), []),
                    n.default.useMemo( () => {
                        var t;
                        return s.loading || s.error ? n.default.createElement(r.loading, {
                            isLoading: s.loading,
                            pastDelay: s.pastDelay,
                            timedOut: s.timedOut,
                            error: s.error,
                            retry: i.retry
                        }) : s.loaded ? n.default.createElement((t = s.loaded) && t.default ? t.default : t, e) : null
                    }
                    , [e, s])
                }
                return d.preload = () => l(),
                d.displayName = "LoadableComponent",
                n.default.forwardRef(d)
            }(l, e)
        }
        function u(e, t) {
            let r = [];
            for (; e.length; ) {
                let n = e.pop();
                r.push(n(t))
            }
            return Promise.all(r).then( () => {
                if (e.length)
                    return u(e, t)
            }
            )
        }
        d.preloadAll = () => new Promise( (e, t) => {
            u(i).then(e, t)
        }
        ),
        d.preloadReady = e => (void 0 === e && (e = []),
        new Promise(t => {
            let r = () => (s = !0,
            t());
            u(a, e).then(r, r)
        }
        )),
        window.__NEXT_PRELOADREADY = d.preloadReady;
        let p = d
    }
    ,
    15861: e => {
        !function() {
            var t = {
                229: function(e) {
                    var t, r, n, o = e.exports = {};
                    function i() {
                        throw Error("setTimeout has not been defined")
                    }
                    function a() {
                        throw Error("clearTimeout has not been defined")
                    }
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : i
                    } catch (e) {
                        t = i
                    }
                    try {
                        r = "function" == typeof clearTimeout ? clearTimeout : a
                    } catch (e) {
                        r = a
                    }
                    function s(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === i || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (r) {
                            try {
                                return t.call(null, e, 0)
                            } catch (r) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    var l = []
                      , c = !1
                      , d = -1;
                    function u() {
                        c && n && (c = !1,
                        n.length ? l = n.concat(l) : d = -1,
                        l.length && p())
                    }
                    function p() {
                        if (!c) {
                            var e = s(u);
                            c = !0;
                            for (var t = l.length; t; ) {
                                for (n = l,
                                l = []; ++d < t; )
                                    n && n[d].run();
                                d = -1,
                                t = l.length
                            }
                            n = null,
                            c = !1,
                            function(e) {
                                if (r === clearTimeout)
                                    return clearTimeout(e);
                                if ((r === a || !r) && clearTimeout)
                                    return r = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function f(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function m() {}
                    o.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++)
                                t[r - 1] = arguments[r];
                        l.push(new f(e,t)),
                        1 !== l.length || c || s(p)
                    }
                    ,
                    f.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    o.title = "browser",
                    o.browser = !0,
                    o.env = {},
                    o.argv = [],
                    o.version = "",
                    o.versions = {},
                    o.on = m,
                    o.addListener = m,
                    o.once = m,
                    o.off = m,
                    o.removeListener = m,
                    o.removeAllListeners = m,
                    o.emit = m,
                    o.prependListener = m,
                    o.prependOnceListener = m,
                    o.listeners = function(e) {
                        return []
                    }
                    ,
                    o.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    o.cwd = function() {
                        return "/"
                    }
                    ,
                    o.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    o.umask = function() {
                        return 0
                    }
                }
            }
              , r = {};
            function n(e) {
                var o = r[e];
                if (void 0 !== o)
                    return o.exports;
                var i = r[e] = {
                    exports: {}
                }
                  , a = !0;
                try {
                    t[e](i, i.exports, n),
                    a = !1
                } finally {
                    a && delete r[e]
                }
                return i.exports
            }
            n.ab = "//",
            e.exports = n(229)
        }()
    }
    ,
    18847: (e, t, r) => {
        e.exports = r(24137)
    }
    ,
    20001: (e, t, r) => {
        "use strict";
        function n() {
            let e = document.createElement("div");
            e.className = "arb-national-day-theme-test",
            e.style.display = "none",
            document.body.appendChild(e);
            let t = "true" === window.getComputedStyle(e).getPropertyValue("--arb-national-day-theme");
            return document.body.removeChild(e),
            t
        }
        function o() {
            n() ? (document.documentElement.setAttribute("data-theme", "national-day"),
            document.documentElement.classList.add("arb-national-day-theme")) : (document.documentElement.setAttribute("data-theme", "arb"),
            document.documentElement.classList.remove("arb-national-day-theme")),
            document.documentElement.classList.remove("arb-dark")
        }
        r.d(t, {
            A: () => o,
            V: () => n
        })
    }
    ,
    24137: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            default: function() {
                return s
            },
            noSSR: function() {
                return a
            }
        });
        let n = r(64252);
        r(37876),
        r(14232);
        let o = n._(r(9502));
        function i(e) {
            return {
                default: (null == e ? void 0 : e.default) || e
            }
        }
        function a(e, t) {
            return delete t.webpack,
            delete t.modules,
            e(t)
        }
        function s(e, t) {
            let r = o.default
              , n = {
                loading: e => {
                    let {error: t, isLoading: r, pastDelay: n} = e;
                    return null
                }
            };
            e instanceof Promise ? n.loader = () => e : "function" == typeof e ? n.loader = e : "object" == typeof e && (n = {
                ...n,
                ...e
            });
            let s = (n = {
                ...n,
                ...t
            }).loader;
            return (n.loadableGenerated && (n = {
                ...n,
                ...n.loadableGenerated
            },
            delete n.loadableGenerated),
            "boolean" != typeof n.ssr || n.ssr) ? r({
                ...n,
                loader: () => null != s ? s().then(i) : Promise.resolve(i( () => null))
            }) : (delete n.webpack,
            delete n.modules,
            a(r, n))
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    24432: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.mapButtonToCommand = t.DefaultEditFrameButtonIds = t.DefaultEditFrameButtons = t.DefaultEditFrameButton = t.handleEditorAnchors = t.resetEditorChromes = t.isEditorActive = t.HorizonEditor = t.ExperienceEditor = t.tryParseEnvValue = t.mergeURLSearchParams = t.escapeNonSpecialQuestionMarks = t.areURLSearchParamsEqual = t.isRegexOrUrl = t.getAllowedOriginsFromEnv = t.enforceCors = t.isTimeoutError = t.isAbsoluteUrl = t.resolveUrl = t.isServer = void 0;
        var o = r(78376);
        Object.defineProperty(t, "isServer", {
            enumerable: !0,
            get: function() {
                return n(o).default
            }
        });
        var i = r(56617);
        Object.defineProperty(t, "resolveUrl", {
            enumerable: !0,
            get: function() {
                return i.resolveUrl
            }
        }),
        Object.defineProperty(t, "isAbsoluteUrl", {
            enumerable: !0,
            get: function() {
                return i.isAbsoluteUrl
            }
        }),
        Object.defineProperty(t, "isTimeoutError", {
            enumerable: !0,
            get: function() {
                return i.isTimeoutError
            }
        }),
        Object.defineProperty(t, "enforceCors", {
            enumerable: !0,
            get: function() {
                return i.enforceCors
            }
        }),
        Object.defineProperty(t, "getAllowedOriginsFromEnv", {
            enumerable: !0,
            get: function() {
                return i.getAllowedOriginsFromEnv
            }
        }),
        Object.defineProperty(t, "isRegexOrUrl", {
            enumerable: !0,
            get: function() {
                return i.isRegexOrUrl
            }
        }),
        Object.defineProperty(t, "areURLSearchParamsEqual", {
            enumerable: !0,
            get: function() {
                return i.areURLSearchParamsEqual
            }
        }),
        Object.defineProperty(t, "escapeNonSpecialQuestionMarks", {
            enumerable: !0,
            get: function() {
                return i.escapeNonSpecialQuestionMarks
            }
        }),
        Object.defineProperty(t, "mergeURLSearchParams", {
            enumerable: !0,
            get: function() {
                return i.mergeURLSearchParams
            }
        });
        var a = r(81967);
        Object.defineProperty(t, "tryParseEnvValue", {
            enumerable: !0,
            get: function() {
                return a.tryParseEnvValue
            }
        });
        var s = r(66176);
        Object.defineProperty(t, "ExperienceEditor", {
            enumerable: !0,
            get: function() {
                return s.ExperienceEditor
            }
        }),
        Object.defineProperty(t, "HorizonEditor", {
            enumerable: !0,
            get: function() {
                return s.HorizonEditor
            }
        }),
        Object.defineProperty(t, "isEditorActive", {
            enumerable: !0,
            get: function() {
                return s.isEditorActive
            }
        }),
        Object.defineProperty(t, "resetEditorChromes", {
            enumerable: !0,
            get: function() {
                return s.resetEditorChromes
            }
        }),
        Object.defineProperty(t, "handleEditorAnchors", {
            enumerable: !0,
            get: function() {
                return s.handleEditorAnchors
            }
        });
        var l = r(98107);
        Object.defineProperty(t, "DefaultEditFrameButton", {
            enumerable: !0,
            get: function() {
                return l.DefaultEditFrameButton
            }
        }),
        Object.defineProperty(t, "DefaultEditFrameButtons", {
            enumerable: !0,
            get: function() {
                return l.DefaultEditFrameButtons
            }
        }),
        Object.defineProperty(t, "DefaultEditFrameButtonIds", {
            enumerable: !0,
            get: function() {
                return l.DefaultEditFrameButtonIds
            }
        }),
        Object.defineProperty(t, "mapButtonToCommand", {
            enumerable: !0,
            get: function() {
                return l.mapButtonToCommand
            }
        })
    },
    28368: (e, t, r) => {
        "use strict";
        r.d(t, {
            Dv: () => s,
            H0: () => c,
            X4: () => l
        });
        var n = r(14232)
          , o = r(65057);
        class i {
            static getInstance() {
                return i.instance || (i.instance = new i),
                i.instance
            }
            init() {
                this.isHydrating || this.hydrationPromise || (this.isHydrating = !0,
                this.hydrationTimeout && clearTimeout(this.hydrationTimeout),
                this.hydrationPromise = new Promise(async e => {
                    try {
                        await (0,
                        o.bb)(),
                        this.hydrationTimeout = setTimeout( () => {
                            "complete" === document.readyState ? this.completeHydration(e) : window.addEventListener("load", () => {
                                this.hydrationTimeout = setTimeout( () => {
                                    this.completeHydration(e)
                                }
                                , 25)
                            }
                            )
                        }
                        , 50)
                    } catch (t) {
                        console.warn("Error waiting for Suspense boundaries:", t),
                        this.completeHydration(e)
                    }
                }
                ))
            }
            completeHydration(e) {
                try {
                    (0,
                    n.startTransition)( () => {
                        this.isHydrated = !0,
                        this.isHydrating = !1,
                        this.hydrationRetryCount = 0,
                        (0,
                        o.vp)(),
                        this.notifyListeners(),
                        this.processPendingUpdates(),
                        e()
                    }
                    )
                } catch (t) {
                    console.warn("Hydration error, retrying...", t),
                    this.handleHydrationError(e)
                }
            }
            handleHydrationError(e) {
                this.hydrationRetryCount < this.maxRetries ? (this.hydrationRetryCount++,
                this.isHydrating = !1,
                this.isHydrated = !1,
                setTimeout( () => {
                    this.init()
                }
                , 200 * this.hydrationRetryCount)) : (console.warn("Hydration failed after max retries, forcing completion"),
                (0,
                n.startTransition)( () => {
                    this.isHydrated = !0,
                    this.isHydrating = !1,
                    (0,
                    o.rt)(),
                    this.notifyListeners(),
                    this.processPendingUpdates(),
                    e()
                }
                ))
            }
            async waitForHydration() {
                return this.isHydrated ? Promise.resolve() : (this.hydrationPromise || this.init(),
                this.hydrationPromise || Promise.resolve())
            }
            getHydrated() {
                return this.isHydrated
            }
            subscribe(e) {
                return this.listeners.add(e),
                () => this.listeners.delete(e)
            }
            notifyListeners() {
                this.listeners.forEach(e => {
                    try {
                        (0,
                        n.startTransition)( () => {
                            e()
                        }
                        )
                    } catch (e) {
                        console.warn("Error in hydration listener:", e)
                    }
                }
                )
            }
            storePendingUpdate(e, t) {
                this.pendingUpdates.has(e) || this.pendingUpdates.set(e, []),
                this.pendingUpdates.get(e).push(t)
            }
            processPendingUpdates() {
                this.pendingUpdates.forEach( (e, t) => {
                    if (e.length > 0) {
                        let r = e[e.length - 1];
                        (0,
                        n.startTransition)( () => {
                            try {
                                "function" == typeof r && r()
                            } catch (e) {
                                console.warn('Error executing pending update for key "'.concat(t, '":'), e)
                            }
                        }
                        )
                    }
                }
                ),
                this.pendingUpdates.clear()
            }
            safeStateUpdate(e, t, r) {
                if (!this.isHydrated)
                    return void this.storePendingUpdate(r || "default", () => e(t));
                (0,
                n.startTransition)( () => {
                    try {
                        e(t)
                    } catch (e) {
                        console.warn("Error in safe state update:", e)
                    }
                }
                )
            }
            cleanup() {
                this.hydrationTimeout && (clearTimeout(this.hydrationTimeout),
                this.hydrationTimeout = null),
                this.listeners.clear(),
                this.pendingUpdates.clear(),
                this.hydrationRetryCount = 0,
                (0,
                o.rt)()
            }
            constructor() {
                this.isHydrated = !1,
                this.isHydrating = !1,
                this.listeners = new Set,
                this.pendingUpdates = new Map,
                this.hydrationPromise = null,
                this.hydrationTimeout = null,
                this.hydrationRetryCount = 0,
                this.maxRetries = 2
            }
        }
        let a = i.getInstance()
          , s = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , [t,r] = (0,
            n.useState)(e)
              , o = (0,
            n.useRef)(!1);
            return (0,
            n.useEffect)( () => {
                if (!o.current) {
                    if (o.current = !0,
                    !a.getHydrated())
                        return a.init(),
                        a.subscribe( () => {
                            r(!0)
                        }
                        );
                    r(!0)
                }
            }
            , []),
            t
        }
          , l = () => {
            a.init()
        }
          , c = () => {
            a.cleanup()
        }
    }
    ,
    29026: () => {}
    ,
    30496: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "LoadableContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(64252)._(r(14232)).default.createContext(null)
    }
    ,
    38248: function(e, t, r) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , o = this && this.__rest || function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
            return r
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.hasCookie = t.deleteCookie = t.setCookie = t.getCookie = t.getCookies = void 0;
        var i = r(72882)
          , a = function() {
            return "undefined" != typeof window
        }
          , s = function(e) {
            return !!e && "getAll"in e && "set"in e && "function" == typeof e.getAll && "function" == typeof e.set
        }
          , l = function(e) {
            return !!(null == e ? void 0 : e.req) && "cookies"in e.req && s(null == e ? void 0 : e.req.cookies) || !!(null == e ? void 0 : e.res) && "cookies"in e.res && s(null == e ? void 0 : e.res.cookies) || !!(null == e ? void 0 : e.cookies) && s(e.cookies())
        }
          , c = function(e) {
            var t = {};
            return e.getAll().forEach(function(e) {
                var r = e.name
                  , n = e.value;
                t[r] = n
            }),
            t
        }
          , d = function(e) {
            try {
                if ("string" == typeof e)
                    return e;
                return JSON.stringify(e)
            } catch (t) {
                return e
            }
        };
        t.getCookies = function(e) {
            if (l(e)) {
                if (null == e ? void 0 : e.req)
                    return c(e.req.cookies);
                if (null == e ? void 0 : e.cookies)
                    return c(e.cookies())
            }
            if (e && (t = e.req),
            !a())
                return t && t.cookies ? t.cookies : t && t.headers.cookie ? (0,
                i.parse)(t.headers.cookie) : {};
            for (var t, r = {}, n = document.cookie ? document.cookie.split("; ") : [], o = 0, s = n.length; o < s; o++) {
                var d = n[o].split("=")
                  , u = d.slice(1).join("=");
                r[d[0]] = u
            }
            return r
        }
        ,
        t.getCookie = function(e, r) {
            var n = (0,
            t.getCookies)(r)[e];
            if (void 0 !== n)
                return n ? n.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : n
        }
        ,
        t.setCookie = function(e, t, r) {
            if (l(r)) {
                var s, c, u, p = r.req, f = r.res, m = r.cookies, h = o(r, ["req", "res", "cookies"]), y = n({
                    name: e,
                    value: d(t)
                }, h);
                p && p.cookies.set(y),
                f && f.cookies.set(y),
                m && m().set(y);
                return
            }
            if (r) {
                var p = r.req
                  , f = r.res
                  , b = o(r, ["req", "res"]);
                c = p,
                u = f,
                s = b
            }
            var v = (0,
            i.serialize)(e, d(t), n({
                path: "/"
            }, s));
            if (a())
                document.cookie = v;
            else if (u && c) {
                var g = u.getHeader("Set-Cookie");
                if (Array.isArray(g) || (g = g ? [String(g)] : []),
                u.setHeader("Set-Cookie", g.concat(v)),
                c && c.cookies) {
                    var E = c.cookies;
                    "" === t ? delete E[e] : E[e] = d(t)
                }
                if (c && c.headers && c.headers.cookie) {
                    var E = (0,
                    i.parse)(c.headers.cookie);
                    "" === t ? delete E[e] : E[e] = d(t),
                    c.headers.cookie = Object.entries(E).reduce(function(e, t) {
                        return e.concat("".concat(t[0], "=").concat(t[1], ";"))
                    }, "")
                }
            }
        }
        ,
        t.deleteCookie = function(e, r) {
            return (0,
            t.setCookie)(e, "", n(n({}, r), {
                maxAge: -1
            }))
        }
        ,
        t.hasCookie = function(e, r) {
            return !!e && (0,
            t.getCookies)(r).hasOwnProperty(e)
        }
    },
    38748: (e, t, r) => {
        "use strict";
        var n = r(65364);
        let o = {};
        o.sitecoreApiKey = n.env.SITECORE_API_KEY || "B4E643CA-9AA4-4D3E-BFF3-8E7CA14649D7",
        o.sitecoreApiHost = n.env.SITECORE_API_HOST || "https://drdigbuatap4v",
        o.sitecoreSiteName = n.env.SITECORE_SITE_NAME || "arbksa",
        o.graphQLEndpointPath = n.env.GRAPH_QL_ENDPOINT_PATH || "/sitecore/api/graph/edge",
        o.defaultLanguage = n.env.DEFAULT_LANGUAGE || "ar",
        o.graphQLEndpoint = n.env.GRAPH_QL_ENDPOINT || "https://drdigbuatap4v/sitecore/api/graph/edge",
        o.layoutServiceConfigurationName = n.env.LAYOUT_SERVICE_CONFIGURATION_NAME || "sxa-jss",
        o.publicUrl = "",
        e.exports = o
    }
    ,
    38784: e => {
        e.exports = {
            style: {
                fontFamily: "'poppins'"
            },
            className: "__className_5ca7d5",
            variable: "__variable_5ca7d5"
        }
    }
    ,
    42372: e => {
        e.exports = {
            style: {
                fontFamily: "'arbIcon', 'arbIcon Fallback'",
                fontStyle: "normal"
            },
            className: "__className_7ae841",
            variable: "__variable_7ae841"
        }
    }
    ,
    53364: function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var o = Object.getOwnPropertyDescriptor(t, r);
            (!o || ("get"in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, n, o)
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , i = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return o(t, e),
            t
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.trackingApi = void 0,
        t.trackingApi = i(r(75235))
    },
    56617: function(e, t, r) {
        "use strict";
        var n = r(65364)
          , o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.mergeURLSearchParams = t.escapeNonSpecialQuestionMarks = t.areURLSearchParamsEqual = t.isRegexOrUrl = t.enforceCors = t.getAllowedOriginsFromEnv = t.isTimeoutError = t.isAbsoluteUrl = void 0,
        t.resolveUrl = function(e, t={}) {
            if (!e)
                throw RangeError("url must be a non-empty string");
            if ((0,
            i.default)()) {
                let r = new URL(e);
                for (let e in t)
                    ({}).hasOwnProperty.call(t, e) && r.searchParams.append(e, String(t[e]));
                return r.toString()
            }
            let r = Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(String(t[e]))}`).join("&");
            return -1 !== e.indexOf("?") ? `${e}&${r}` : `${e}?${r}`
        }
        ;
        let i = o(r(78376));
        t.isAbsoluteUrl = e => {
            if (!e)
                return !1;
            if ("string" != typeof e)
                throw TypeError("Expected a string");
            return /^[a-z][a-z0-9+.-]*:/.test(e)
        }
        ,
        t.isTimeoutError = e => {
            var t;
            return (null == (t = e.response) ? void 0 : t.status) === 408 || "AbortError" === e.name
        }
        ;
        let a = e => "^" + e.replace(/\//g, "\\/").replace(/\./g, "\\.").replace(/\*/g, ".*") + "$";
        t.getAllowedOriginsFromEnv = () => n.env.JSS_ALLOWED_ORIGINS ? n.env.JSS_ALLOWED_ORIGINS.replace(" ", "").split(",") : [],
        t.enforceCors = (e, r, n) => {
            if (!e.headers.origin)
                return !0;
            n = (0,
            t.getAllowedOriginsFromEnv)().concat(n || []);
            let o = r.getHeader("Access-Control-Allow-Origin");
            o && n.push(o);
            let i = e.headers.origin;
            return !!(i && n.some(e => i === e || new RegExp(a(e)).test(i))) && (r.setHeader("Access-Control-Allow-Origin", i),
            r.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT, PATCH"),
            "OPTIONS" === e.method && r.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"),
            !0)
        }
        ,
        t.isRegexOrUrl = e => (e = e.slice(0, -1),
        /^\/[a-zA-Z0-9\-\/]+(\?([a-zA-Z0-9\-_]+=[a-zA-Z0-9\-_]+)(&[a-zA-Z0-9\-_]+=[a-zA-Z0-9\-_]+)*)?$/.test(e)) ? "url" : "regex",
        t.areURLSearchParamsEqual = (e, t) => {
            let r = e => [...e.entries()].sort( ([e], [t]) => e.localeCompare(t)).map( ([e,t]) => `${e}=${t}`).join("&");
            return r(e) === r(t)
        }
        ,
        t.escapeNonSpecialQuestionMarks = e => {
            let t, r = /(?<!\\)\?/g, n = /\(\?!$/, o = /[.*+)\[\]|\(]$/, i = "", a = 0;
            for (; null !== (t = r.exec(e)); ) {
                let r = t.index
                  , s = e.slice(a, r)
                  , l = n.test(s.slice(-3))
                  , c = o.test(s.slice(-1));
                l || c ? i += e.slice(a, r + 1) : i += e.slice(a, r) + "\\?",
                a = r + 1
            }
            return i + e.slice(a)
        }
        ,
        t.mergeURLSearchParams = (e, t) => {
            let r = new URLSearchParams;
            for (let[t,n] of e.entries())
                r.set(t, n);
            for (let[e,n] of t.entries())
                r.set(e, n);
            return r.toString()
        }
    },
    65057: (e, t, r) => {
        "use strict";
        r.d(t, {
            bb: () => l,
            rt: () => c,
            vp: () => s
        }),
        r(14232);
        let n = new Set
          , o = !1
          , i = null
          , a = () => 0 === n.size
          , s = () => {
            o = !0,
            n.clear()
        }
          , l = () => o ? Promise.resolve() : i || (i = new Promise(e => {
            let t = () => {
                a() || o ? e() : setTimeout(t, 10)
            }
            ;
            t()
        }
        ))
          , c = () => {
            s(),
            n.clear()
        }
        ;
        window.addEventListener("load", () => {
            setTimeout( () => {
                c()
            }
            , 100)
        }
        ),
        setTimeout( () => {
            c()
        }
        , 2e3)
    }
    ,
    65364: (e, t, r) => {
        "use strict";
        var n, o;
        e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (o = r.g.process) ? void 0 : o.env) ? r.g.process : r(15861)
    }
    ,
    66176: function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getJssPagesClientData = t.handleEditorAnchors = t.resetEditorChromes = t.isEditorActive = t.HorizonEditor = t.ChromeRediscoveryGlobalFunctionName = t.ExperienceEditor = t.EDITING_ALLOWED_ORIGINS = t.PAGES_EDITING_MARKER = t.QUERY_PARAM_EDITING_SECRET = t.DEFAULT_PLACEHOLDER_UID = void 0;
        let o = n(r(78376));
        t.DEFAULT_PLACEHOLDER_UID = "00000000-0000-0000-0000-000000000000",
        t.QUERY_PARAM_EDITING_SECRET = "secret",
        t.PAGES_EDITING_MARKER = "jss-hrz-editing",
        t.EDITING_ALLOWED_ORIGINS = ["https://pages.sitecorecloud.io"];
        class i {
            static isActive() {
                if ((0,
                o.default)())
                    return !1;
                let e = window.Sitecore;
                return !!(e && e.PageModes && e.PageModes.ChromeManager)
            }
            static resetChromes() {
                (0,
                o.default)() || window.Sitecore.PageModes.ChromeManager.resetChromes()
            }
        }
        t.ExperienceEditor = i,
        t.ChromeRediscoveryGlobalFunctionName = {
            name: "Sitecore.Horizon.ResetChromes"
        };
        class a {
            static isActive() {
                return !(0,
                o.default)() && (window.location.search.indexOf("sc_headless_mode=edit") > -1 || !!window.document.getElementById(t.PAGES_EDITING_MARKER))
            }
            static resetChromes() {
                !(0,
                o.default)() && window[t.ChromeRediscoveryGlobalFunctionName.name] && window[t.ChromeRediscoveryGlobalFunctionName.name]()
            }
        }
        t.HorizonEditor = a,
        t.isEditorActive = () => i.isActive() || a.isActive(),
        t.resetEditorChromes = () => {
            i.isActive() ? i.resetChromes() : a.isActive() && a.resetChromes()
        }
        ,
        t.handleEditorAnchors = () => {
            if (!window || !i.isActive())
                return;
            let e = document.querySelector("body")
              , t = new MutationObserver(e => {
                e.forEach(e => {
                    let t = document.querySelectorAll('.scChromeDropDown > a[href="#"], .scChromeDropDown > a[href="#!"], a[onclick]');
                    "childList" === e.type && t.forEach(e => {
                        e.href = "javascript:void(0);"
                    }
                    )
                }
                )
            }
            );
            e && t.observe(e, {
                childList: !0,
                subtree: !0
            })
        }
        ,
        t.getJssPagesClientData = () => {
            let e = {};
            return e[t.PAGES_EDITING_MARKER] = {},
            e
        }
    },
    67138: function(e) {
        e.exports = function(e, t, r, n, o) {
            for (t = t.split ? t.split(".") : t,
            n = 0; n < t.length; n++)
                e = e ? e[t[n]] : o;
            return e === o ? r : e
        }
    },
    69348: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => x
        });
        var n = r(37876)
          , o = r(2650)
          , i = r(38784)
          , a = r.n(i)
          , s = r(4365)
          , l = r.n(s)
          , c = r(42372)
          , d = r.n(c);
        r(29026);
        var u = r(81345)
          , p = r(14232)
          , f = r(91466)
          , m = r(89099)
          , h = r(18847)
          , y = r.n(h)
          , b = r(7646)
          , v = r(53364)
          , g = r(38748)
          , E = r.n(g);
        let w = async (e, t) => {
            "string" == typeof e && e.startsWith("/");
            let r = await fetch(e, t);
            if (!r.ok)
                throw Error("Fetch error: ".concat(r.statusText));
            return r.json()
        }
        ;
        var k = r(82700);
        function T() {
            let e, t;
            if (!("rtl" === document.documentElement.dir || "ar" === document.documentElement.lang || document.body.classList.contains("rtl")))
                return;
            let r = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null)
              , n = [];
            for (; e = r.nextNode(); )
                n.push(e);
            n.forEach(e => {
                let t = e.textContent;
                if (t && (t.includes("%") || t.includes("+"))) {
                    let o = t.replace(/(\d+(?:\.\d+)?)%/g, "% $1");
                    if ((o = (o = (o = (o = o.replace(/(\d+(?:\.\d+)?)\+/g, "+ $1")).replace(/\+(\d+(?:\.\d+)?)/g, "+ $1")).replace(/(\d+(?:\.\d+)?)&nbsp;%/g, "% $1 ")).replace(/(\d+(?:\.\d+)?)&nbsp;\+/g, "+ $1 ")) !== t) {
                        var r, n;
                        e.textContent = o;
                        let t = e.parentElement;
                        if (t && ["H1", "H2", "H3", "H4", "H5", "P", "DIV", "LI"].includes(t.tagName)) {
                            let t = o.match(/([%+]\s*\d+(?:\.\d+)?)/g);
                            if (t) {
                                t.forEach(e => {
                                    let t = document.createElement("span");
                                    t.textContent = e,
                                    t.className = "arb-ltr",
                                    o = o.replace(e, t.outerHTML)
                                }
                                );
                                let n = document.createElement("div");
                                n.innerHTML = o;
                                let i = document.createDocumentFragment();
                                for (; n.firstChild; )
                                    i.appendChild(n.firstChild);
                                null == (r = e.parentNode) || r.replaceChild(i, e)
                            }
                        }
                        let i = e.parentElement;
                        if (i && "TD" === i.tagName) {
                            let e = null == (n = i.textContent) ? void 0 : n.trim();
                            e && /^[\d.%+\s]+$/.test(e) && i.classList.add("arb-ltr", "arb-table-cell")
                        }
                    }
                }
            }
            );
            let o = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null)
              , i = [];
            for (; t = o.nextNode(); )
                i.push(t);
            i.forEach(e => {
                let t = e.textContent;
                if (t && (t.includes("%") || t.includes("+"))) {
                    let n = e.parentElement;
                    if (n && ["H1", "H2", "H3", "H4", "H5", "P", "DIV", "LI", "TD"].includes(n.tagName)) {
                        let n = t.match(/([%]\s*\d+(?:\.\d+)?)/g)
                          , o = t.match(/([+]\s*\d+(?:\.\d+)?)/g)
                          , i = t
                          , a = !1;
                        if (n && n.forEach(e => {
                            let t = document.createElement("span");
                            t.textContent = e,
                            t.className = "arb-ltr",
                            i = i.replace(e, t.outerHTML),
                            a = !0
                        }
                        ),
                        o && o.forEach(e => {
                            let t = document.createElement("span");
                            t.textContent = e,
                            t.className = "arb-ltr",
                            i = i.replace(e, t.outerHTML),
                            a = !0
                        }
                        ),
                        a) {
                            var r;
                            let t = document.createElement("div");
                            t.innerHTML = i;
                            let n = document.createDocumentFragment();
                            for (; t.firstChild; )
                                n.appendChild(t.firstChild);
                            null == (r = e.parentNode) || r.replaceChild(n, e)
                        }
                    }
                }
            }
            ),
            document.querySelectorAll("span").forEach(e => {
                let t = e.parentElement;
                for (; t; ) {
                    if ("TD" === t.tagName) {
                        e.classList.contains("arb-inline-flex") || e.classList.add("arb-inline-flex", "arb-flex-wrap", "arb-justify-start", "arb-px-1");
                        break
                    }
                    t = t.parentElement
                }
            }
            )
        }
        var _ = r(28368)
          , P = r(20001);
        ( () => {
            let e = console.error;
            console.error = function() {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                let o = r.join(" ");
                if (o.includes("disconnected port object") || o.includes("Attempting to use a disconnected port object") || o.includes("message channel closed") || o.includes("asynchronous response") || o.includes("Minified React error #421"))
                    return void console.warn("Browser extension or React error suppressed:", o.substring(0, 100));
                e.apply(console, r)
            }
            ;
            let t = console.warn;
            console.warn = function() {
                for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                let o = r.join(" ");
                o.includes("React DevTools") || o.includes("DevTools") || o.includes("message channel closed") || o.includes("asynchronous response") || t.apply(console, r)
            }
            ,
            window.addEventListener("unhandledrejection", e => {
                var t;
                let r = (null == (t = e.reason) ? void 0 : t.message) || e.reason;
                "string" == typeof r && (r.includes("disconnected port object") || r.includes("React DevTools") || r.includes("message channel closed") || r.includes("asynchronous response") || r.includes("Minified React error #421")) && (e.preventDefault(),
                console.warn("Unhandled promise rejection suppressed:", r.substring(0, 100)))
            }
            ),
            window.addEventListener("error", e => {
                let t = e.message || "";
                (t.includes("disconnected port object") || t.includes("React DevTools") || t.includes("DevTools") || t.includes("message channel closed") || t.includes("asynchronous response") || t.includes("Minified React error #421")) && (e.preventDefault(),
                console.warn("Error suppressed:", t.substring(0, 100)))
            }
            );
            let r = console.error;
            console.error = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                let o = t.join(" ");
                if (o.includes("Minified React error #421") || o.includes("React error #421") || o.includes("Suspense boundary") || o.includes("hydration"))
                    return void console.warn("React error suppressed:", o.substring(0, 100));
                r.apply(console, t)
            }
        }
        )(),
        ( () => {
            let e = console.error;
            console.error = function() {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                let o = r.join(" ");
                return o.includes("Minified React error #421") || o.includes("React error #421") || o.includes("Suspense boundary") || o.includes("hydration") ? void console.warn("React hydration error suppressed:", o.substring(0, 150)) : o.includes("React DevTools") || o.includes("message channel closed") || o.includes("asynchronous response") ? void console.warn("React DevTools error suppressed:", o.substring(0, 100)) : void e.apply(console, r)
            }
            ,
            window.addEventListener("unhandledrejection", e => {
                var t;
                let r = (null == (t = e.reason) ? void 0 : t.message) || e.reason;
                "string" == typeof r && (r.includes("Minified React error #421") || r.includes("Suspense boundary") || r.includes("hydration") || r.includes("message channel closed")) && (e.preventDefault(),
                console.warn("React-related promise rejection suppressed:", r.substring(0, 100)))
            }
            ),
            window.addEventListener("error", e => {
                let t = e.message || "";
                (t.includes("Minified React error #421") || t.includes("Suspense boundary") || t.includes("hydration") || t.includes("message channel closed")) && (e.preventDefault(),
                console.warn("React-related error suppressed:", t.substring(0, 100)))
            }
            )
        }
        )(),
        r(65057);
        let C = () => {}
        ;
        setTimeout( () => {
            C()
        }
        , 100),
        window.addEventListener("load", () => {
            setTimeout( () => {
                C()
            }
            , 50)
        }
        ),
        window.addEventListener("error", e => {
            e.message.includes("disconnected port object") && (e.preventDefault(),
            console.warn("Browser extension port error suppressed"))
        }
        );
        let A = y()( () => Promise.all([r.e(841), r.e(889)]).then(r.bind(r, 94889)), {
            loadableGenerated: {
                webpack: () => [94889]
            },
            ssr: !1
        })
          , O = e => {
            let {children: t, locale: o} = e
              , i = (0,
            p.useRef)(o);
            (0,
            p.useEffect)( () => {
                i.current !== o && ((0,
                p.startTransition)( () => {
                    setTimeout( () => {
                        r.e(793).then(r.bind(r, 25793)).then(e => {
                            let {reprocessDOM: t} = e;
                            t()
                        }
                        )
                    }
                    , 100)
                }
                ),
                i.current = o)
            }
            , [o]);
            let a = e => {
                if ("string" == typeof e)
                    return (0,
                    n.jsx)("span", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            f.replaceCurrencyWithIcon)(e)
                        }
                    });
                if (p.isValidElement(e)) {
                    if ("input" === e.type || "textarea" === e.type || "function" == typeof e.type && ("ArbCurrency" === e.type.name || "ArbText" === e.type.name))
                        return e;
                    let t = p.Children.toArray(e.props.children).map(a);
                    return p.cloneElement(e, e.props, ...t)
                }
                return Array.isArray(e) ? p.Children.map(e, a) : e
            }
            ;
            return (0,
            n.jsx)(n.Fragment, {
                children: a(t)
            })
        }
          , S = {
            host: "",
            querystringParams: {
                sc_apikey: E().sitecoreApiKey,
                sc_site: E().sitecoreSiteName
            },
            fetcher: w
        }
          , x = function(e) {
            var t, i, s;
            let {Component: c, pageProps: f} = e
              , {dictionary: h, ...y} = f
              , g = (0,
            m.useRouter)()
              , w = (0,
            p.useRef)(f.locale)
              , [C,x] = (0,
            p.useState)(!1)
              , D = (0,
            _.Dv)();
            return (0,
            p.useEffect)( () => ((0,
            p.startTransition)( () => {
                (0,
                _.X4)()
            }
            ),
            () => {
                (0,
                _.H0)()
            }
            ), []),
            (0,
            p.useEffect)( () => {
                let e = () => {
                    (0,
                    p.startTransition)( () => {
                        x(!0)
                    }
                    )
                }
                  , t = () => {
                    (0,
                    p.startTransition)( () => {
                        x(!1)
                    }
                    )
                }
                ;
                return g.events.on("routeChangeStart", e),
                g.events.on("routeChangeComplete", t),
                g.events.on("routeChangeError", t),
                () => {
                    g.events.off("routeChangeStart", e),
                    g.events.off("routeChangeComplete", t),
                    g.events.off("routeChangeError", t)
                }
            }
            , [g]),
            (0,
            p.useEffect)( () => {
                D && (0,
                p.startTransition)( () => {
                    (0,
                    u.Qt)("".concat(E().sitecoreSiteName, "#Lang"), f.locale),
                    "undefined" != typeof document && (document.cookie = "".concat(E().sitecoreSiteName, "#Lang=").concat(f.locale, "; path=/; max-age=31536000; SameSite=Lax")),
                    w.current !== f.locale && (setTimeout( () => {
                        Promise.resolve().then(r.bind(r, 91466)).then(e => {
                            let {forceReprocessCurrency: t} = e;
                            t()
                        }
                        )
                    }
                    , 200),
                    w.current = f.locale)
                }
                )
            }
            , [f.locale, D]),
            (0,
            p.useEffect)( () => {
                if (D)
                    return (0,
                    p.startTransition)( () => {
                        let e = e => {
                            "requestIdleCallback"in window ? requestIdleCallback(e, {
                                timeout: 500
                            }) : setTimeout(e, 50)
                        }
                        ;
                        e( () => {
                            Promise.all([r.e(793).then(r.bind(r, 25793)).then(e => {
                                let {setupDOMObserver: t, setupLanguageDOMObserver: r} = e;
                                t(),
                                r()
                            }
                            ), r.e(853).then(r.bind(r, 65853)).then(e => {
                                let {setupLanguageObserver: t} = e;
                                return t()
                            }
                            ), Promise.resolve().then(r.bind(r, 91466)).then(e => {
                                let {initializeGlobalCurrencyProcessing: t} = e;
                                t()
                            }
                            ), r.e(95).then(r.bind(r, 79095)).then(e => {
                                let {initializePercentageCSSFix: t} = e;
                                t()
                            }
                            ), r.e(822).then(r.bind(r, 32822)).then(e => {
                                let {addLanguageToAllElements: t, setupLanguageObserver: r} = e;
                                setTimeout( () => {
                                    t()
                                }
                                , 100),
                                r()
                            }
                            ), r.e(612).then(r.bind(r, 86612)).then(e => {
                                let {initializeNationalDayLogoHandler: t} = e;
                                t()
                            }
                            )])
                        }
                        );
                        let t = () => {
                            e( () => {
                                Promise.resolve().then(r.bind(r, 91466)).then(e => {
                                    let {processAllCurrencySymbols: t} = e;
                                    setTimeout(t, 150)
                                }
                                ),
                                r.e(822).then(r.bind(r, 32822)).then(e => {
                                    let {addLanguageToAllElements: t} = e;
                                    setTimeout(t, 150)
                                }
                                )
                            }
                            )
                        }
                        ;
                        t(),
                        window.addEventListener("popstate", t)
                    }
                    ),
                    () => {
                        r.e(822).then(r.bind(r, 32822)).then(e => {
                            let {cleanupLanguageObserver: t} = e;
                            t()
                        }
                        )
                    }
            }
            , [D]),
            (0,
            p.useEffect)( () => {
                if (D)
                    return (0,
                    p.startTransition)( () => {
                        g.events.on("routeChangeComplete", () => {
                            Promise.resolve().then(r.bind(r, 91466)).then(e => {
                                let {processAllCurrencySymbols: t} = e;
                                setTimeout(t, 150)
                            }
                            ),
                            r.e(822).then(r.bind(r, 32822)).then(e => {
                                let {addLanguageToAllElements: t} = e;
                                setTimeout(t, 150)
                            }
                            )
                        }
                        )
                    }
                    ),
                    () => {}
            }
            , [g, D]),
            (0,
            p.useEffect)( () => {
                D && (0,
                p.startTransition)( () => {
                    var e, t, r;
                    let n = null == (r = f.layoutData) || null == (t = r.sitecore) || null == (e = t.route) ? void 0 : e.itemId
                      , o = window.location.pathname;
                    n && o && v.trackingApi.trackEvent([{
                        pageId: n,
                        url: o
                    }], S).then( () => {}
                    ).catch(e => {
                        console.warn("Sitecore Analytics: Failed to track page view", e)
                    }
                    ),
                    setTimeout( () => {
                        T(),
                        setTimeout( () => {
                            T()
                        }
                        , 100),
                        setTimeout( () => {
                            T()
                        }
                        , 500),
                        new MutationObserver(e => {
                            let t = !1;
                            e.forEach(e => {
                                "childList" === e.type && e.addedNodes.forEach(e => {
                                    if (e.nodeType === Node.TEXT_NODE) {
                                        let r = e.textContent;
                                        r && (r.includes("%") || r.includes("+")) && (t = !0)
                                    } else if (e.nodeType === Node.ELEMENT_NODE) {
                                        var r, n;
                                        ((null == (r = e.textContent) ? void 0 : r.includes("%")) || (null == (n = e.textContent) ? void 0 : n.includes("+"))) && (t = !0)
                                    }
                                }
                                )
                            }
                            ),
                            t && setTimeout( () => {
                                T()
                            }
                            , 50)
                        }
                        ).observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                    , 200)
                }
                )
            }
            , [g.asPath, D, null == (s = f.layoutData) || null == (i = s.sitecore) || null == (t = i.route) ? void 0 : t.itemId]),
            (0,
            p.useEffect)( () => {
                D && (0,
                p.startTransition)( () => {
                    let e = e => !(e.classList.contains("arb-font-icon") || (e.textContent || "").trim().length > 0 || Array.from(e.children).some(e => {
                        let t = window.getComputedStyle(e);
                        return e.clientHeight > 0 && e.clientWidth > 0 && "none" !== t.display && "hidden" !== t.visibility && "0" !== t.opacity
                    }
                    )) && Array.from(e.children).every(e => {
                        var t;
                        return "BR" === e.tagName || !(null == (t = e.textContent) ? void 0 : t.trim())
                    }
                    );
                    document.querySelectorAll('p[class^="arb-"], h2[class^="arb-"], section[class^="arb-"]').forEach(t => {
                        e(t) && (t.style.display = "none")
                    }
                    )
                }
                )
            }
            , [D]),
            (0,
            p.useEffect)( () => {
                if (!D)
                    return
            }
            , [D]),
            (0,
            p.useEffect)( () => {
                D && ((0,
                P.A)(),
                r.e(612).then(r.bind(r, 86612)).then(e => {
                    let {reinitializeNationalDayLogoHandler: t} = e;
                    t()
                }
                ))
            }
            , [D]),
            (0,
            n.jsxs)("div", {
                className: "".concat(a().variable, " ").concat(l().variable, " ").concat(d().variable, " arb-font-body rtl:arb-font-arabic arb-bg-[rgba(246,251,255,1)]"),
                dir: "ar" === f.locale ? "rtl" : "ltr",
                children: [C && (0,
                n.jsx)(b.A, {}), (0,
                n.jsx)(k.default, {
                    children: (0,
                    n.jsx)(o.CY, {
                        lngDict: h,
                        locale: f.locale,
                        children: (0,
                        n.jsxs)(O, {
                            locale: f.locale,
                            children: [(0,
                            n.jsx)(c, {
                                ...y
                            }), (0,
                            n.jsx)(A, {})]
                        })
                    })
                })]
            })
        }
    }
    ,
    72882: (e, t) => {
        "use strict";
        t.parse = function(e, t) {
            if ("string" != typeof e)
                throw TypeError("argument str must be a string");
            var r = {}
              , o = e.length;
            if (o < 2)
                return r;
            var i = t && t.decode || d
              , a = 0
              , s = 0
              , u = 0;
            do {
                if (-1 === (s = e.indexOf("=", a)))
                    break;
                if (-1 === (u = e.indexOf(";", a)))
                    u = o;
                else if (s > u) {
                    a = e.lastIndexOf(";", s - 1) + 1;
                    continue
                }
                var p = l(e, a, s)
                  , f = c(e, s, p)
                  , m = e.slice(p, f);
                if (!n.call(r, m)) {
                    var h = l(e, s + 1, u)
                      , y = c(e, u, h);
                    34 === e.charCodeAt(h) && 34 === e.charCodeAt(y - 1) && (h++,
                    y--);
                    var b = e.slice(h, y);
                    r[m] = function(e, t) {
                        try {
                            return t(e)
                        } catch (t) {
                            return e
                        }
                    }(b, i)
                }
                a = u + 1
            } while (a < o);
            return r
        }
        ,
        t.serialize = function(e, t, n) {
            var l = n && n.encode || encodeURIComponent;
            if ("function" != typeof l)
                throw TypeError("option encode is invalid");
            if (!o.test(e))
                throw TypeError("argument name is invalid");
            var c = l(t);
            if (!i.test(c))
                throw TypeError("argument val is invalid");
            var d = e + "=" + c;
            if (!n)
                return d;
            if (null != n.maxAge) {
                var u = Math.floor(n.maxAge);
                if (!isFinite(u))
                    throw TypeError("option maxAge is invalid");
                d += "; Max-Age=" + u
            }
            if (n.domain) {
                if (!a.test(n.domain))
                    throw TypeError("option domain is invalid");
                d += "; Domain=" + n.domain
            }
            if (n.path) {
                if (!s.test(n.path))
                    throw TypeError("option path is invalid");
                d += "; Path=" + n.path
            }
            if (n.expires) {
                var p, f = n.expires;
                if (p = f,
                "[object Date]" !== r.call(p) || isNaN(f.valueOf()))
                    throw TypeError("option expires is invalid");
                d += "; Expires=" + f.toUTCString()
            }
            if (n.httpOnly && (d += "; HttpOnly"),
            n.secure && (d += "; Secure"),
            n.partitioned && (d += "; Partitioned"),
            n.priority)
                switch ("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority) {
                case "low":
                    d += "; Priority=Low";
                    break;
                case "medium":
                    d += "; Priority=Medium";
                    break;
                case "high":
                    d += "; Priority=High";
                    break;
                default:
                    throw TypeError("option priority is invalid")
                }
            if (n.sameSite)
                switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                case !0:
                case "strict":
                    d += "; SameSite=Strict";
                    break;
                case "lax":
                    d += "; SameSite=Lax";
                    break;
                case "none":
                    d += "; SameSite=None";
                    break;
                default:
                    throw TypeError("option sameSite is invalid")
                }
            return d
        }
        ;
        var r = Object.prototype.toString
          , n = Object.prototype.hasOwnProperty
          , o = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/
          , i = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/
          , a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i
          , s = /^[\u0020-\u003A\u003D-\u007E]*$/;
        function l(e, t, r) {
            do {
                var n = e.charCodeAt(t);
                if (32 !== n && 9 !== n)
                    return t
            } while (++t < r);
            return r
        }
        function c(e, t, r) {
            for (; t > r; ) {
                var n = e.charCodeAt(--t);
                if (32 !== n && 9 !== n)
                    return t + 1
            }
            return r
        }
        function d(e) {
            return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e
        }
    }
    ,
    75235: function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(o, i) {
                function a(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? o(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(a, s)
                }
                l((n = n.apply(e, t || [])).next())
            }
            )
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.trackEvent = function(e, t) {
            let {querystringParams: r} = t;
            return !t.test && (0,
            o.isServer)() ? Promise.resolve() : (Array.isArray(e) || (e = [e]),
            function(e, t, r) {
                return n(this, arguments, void 0, function*(e, t, r, n={}) {
                    let i = Object.assign(Object.assign({}, "object" == typeof t && null !== t ? t : {}), {
                        method: "POST",
                        headers: Object.assign({
                            "Content-Type": "application/json"
                        }, "object" == typeof t && null !== t && "headers"in t ? t.headers : {}),
                        body: JSON.stringify(t)
                    });
                    return r((0,
                    o.resolveUrl)(e, n), i).then(e => e.data)
                })
            }(function(e) {
                let {host: t="", serviceUrl: r="/sitecore/api/jss/track", action: n="event"} = e;
                return `${t}${r}/${n}`
            }(t), e, t.fetcher, r))
        }
        ;
        let o = r(24432)
    },
    78376: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            return !("undefined" != typeof window && window.document)
        }
    }
    ,
    81345: (e, t, r) => {
        "use strict";
        r.d(t, {
            Qt: () => o,
            hp: () => i,
            zs: () => a
        });
        var n = r(38248);
        let o = (e, t, r, o) => {
            let i = "object" == typeof t ? JSON.stringify(t) : String(t);
            (0,
            n.setCookie)(e, i, {
                req: r,
                res: o
            })
        }
          , i = (e, t, r) => {
            let o = (0,
            n.getCookie)(e, {
                req: t,
                res: r
            });
            if (o && "string" == typeof o)
                try {
                    if (o.trim().startsWith("{") || o.trim().startsWith("["))
                        return JSON.parse(o);
                    return o
                } catch (t) {
                    return console.warn('Failed to parse cookie "'.concat(e, '" as JSON:'), t),
                    o
                }
            return o || null
        }
          , a = (e, t, r) => {
            if ((0,
            n.deleteCookie)(e, {
                req: t,
                res: r
            }),
            "undefined" != typeof document) {
                let t = window.location.hostname
                  , r = ["", "Secure", "SameSite=Lax", "SameSite=None; Secure"];
                [t, ".".concat(t)].forEach(t => {
                    r.forEach(r => {
                        let n = "".concat(e, "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=").concat(t, "; ").concat(r);
                        document.cookie = n.trim()
                    }
                    )
                }
                ),
                document.cookie = "".concat(e, "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;")
            }
        }
    }
    ,
    81967: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.tryParseEnvValue = void 0,
        t.tryParseEnvValue = (e, t) => {
            if (!e)
                return t;
            if (e.startsWith("{") && e.endsWith("}"))
                try {
                    return JSON.parse(e)
                } catch (t) {
                    console.warn("Parsing of env variable failed"),
                    console.warn(`Attempted to parse ${e}`)
                }
            return t
        }
    }
    ,
    82700: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => c
        });
        var n = r(37876)
          , o = r(14232);
        let i = () => !1
          , a = {
            enableSaveProtection: !0,
            enableCopyProtection: !1,
            enableDevToolsProtection: !0,
            enablePrintProtection: !0,
            enableRightClickProtection: !0,
            enableDragDropProtection: !0,
            enableClickProtection: !0,
            enableDoubleClickProtection: !0,
            enableMiddleClickProtection: !0,
            enableScreenshotProtection: !0,
            enableAdvancedProtection: !0,
            enableBrowserMenuProtection: !0,
            allowPasteShortcut: !0,
            allowNewWindowShortcut: !0,
            enableCarouselExceptions: !0,
            enableLinkExceptions: !0,
            enableFormExceptions: !0
        }
          , s = {
            enableSaveProtection: !1,
            enableCopyProtection: !1,
            enableDevToolsProtection: !1,
            enablePrintProtection: !1,
            enableRightClickProtection: !1,
            enableDragDropProtection: !1,
            enableClickProtection: !1,
            enableDoubleClickProtection: !1,
            enableMiddleClickProtection: !1,
            enableScreenshotProtection: !1,
            enableAdvancedProtection: !1,
            enableBrowserMenuProtection: !1,
            allowPasteShortcut: !0,
            allowNewWindowShortcut: !0,
            enableCarouselExceptions: !0,
            enableLinkExceptions: !0,
            enableFormExceptions: !0
        }
          , l = () => i() ? a : s
          , c = e => {
            let {children: t} = e;
            return (0,
            o.useEffect)( () => {
                if (!l().enableDevToolsProtection)
                    return;
                let e = !1
                  , t = () => {
                    e || (document.body.style.display = "none",
                    document.documentElement.style.display = "none",
                    e = !0)
                }
                  , r = () => {
                    e && (document.body.style.display = "",
                    document.documentElement.style.display = "",
                    e = !1)
                }
                  , n = setInterval( () => {
                    let e = window.outerWidth - window.innerWidth > 160
                      , n = window.outerHeight - window.innerHeight > 160;
                    e || n ? t() : r()
                }
                , 500)
                  , o = e => {
                    if ("F12" === e.key)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t(),
                        !1
                }
                  , i = e => {
                    if ((e.ctrlKey || e.metaKey) && e.shiftKey && "I" === e.key)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t(),
                        !1
                }
                  , a = e => {
                    if ((e.ctrlKey || e.metaKey) && e.shiftKey && "J" === e.key)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t(),
                        !1
                }
                  , s = e => {
                    if ((e.ctrlKey || e.metaKey) && "u" === e.key)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        !1
                }
                  , c = e => {
                    if ((e.ctrlKey || e.metaKey) && "s" === e.key)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        !1
                }
                  , d = e => {
                    if ((e.ctrlKey || e.metaKey) && "p" === e.key)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        !1
                }
                  , u = e => (e.preventDefault(),
                e.stopPropagation(),
                !1)
                  , p = e => (e.preventDefault(),
                e.stopPropagation(),
                !1);
                return document.addEventListener("keydown", o, !0),
                document.addEventListener("keydown", i, !0),
                document.addEventListener("keydown", a, !0),
                document.addEventListener("keydown", s, !0),
                document.addEventListener("keydown", c, !0),
                document.addEventListener("keydown", d, !0),
                document.addEventListener("contextmenu", u, !0),
                document.addEventListener("dragstart", p, !0),
                document.addEventListener("drop", p, !0),
                () => {
                    clearInterval(n),
                    r(),
                    document.removeEventListener("keydown", o, !0),
                    document.removeEventListener("keydown", i, !0),
                    document.removeEventListener("keydown", a, !0),
                    document.removeEventListener("keydown", s, !0),
                    document.removeEventListener("keydown", c, !0),
                    document.removeEventListener("keydown", d, !0),
                    document.removeEventListener("contextmenu", u, !0),
                    document.removeEventListener("dragstart", p, !0),
                    document.removeEventListener("drop", p, !0)
                }
            }
            , []),
            (0,
            n.jsx)(n.Fragment, {
                children: t
            })
        }
    }
    ,
    89099: (e, t, r) => {
        e.exports = r(6763)
    }
    ,
    91466: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            autoAddSarIconClassToPlaceholders: () => b,
            forceReprocessAll: () => k,
            forceReprocessCurrency: () => C,
            formatPhoneNumberForArabic: () => m,
            initializeGlobalCurrencyProcessing: () => P,
            initializeGlobalProcessing: () => w,
            isProcessingEnabled: () => _,
            processAllCurrencySymbols: () => A,
            processAllSymbols: () => g,
            processDOMElement: () => y,
            processTextComprehensive: () => h,
            replaceCurrencyWithIcon: () => f,
            setupGlobalObserver: () => E,
            testComprehensiveProcessing: () => T
        });
        let n = /(ريال سعودي|ريال|SAR|§)/g
          , o = /\+(\d{1,4})(\d{3,15})/g
          , i = /([٪%])\s*(\d+)|(\d+)\s*([٪%])/g
          , a = ["[data-admin]", "[data-cms]", "[data-editor]", ".admin-panel", ".cms-editor", ".sitecore-editor", ".experience-editor", ".page-editor", "input", "textarea", "select", '[contenteditable="true"]', "[data-no-currency]", "[data-no-phone]", ".arb-currency", ".arb-text", ".arb-phone", ".currency-input", ".price-input", ".phone-input", ".tel-input", "[data-phone]", "code", "pre", "script", "style", "[data-code]", "[data-technical]"]
          , s = !1
          , l = null
          , c = null
          , d = 0
          , u = e => {
            for (let t of a)
                if (e.matches(t))
                    return !0;
            let t = e.parentElement
              , r = 0;
            for (; t && r < 5; ) {
                for (let e of a)
                    if (t.matches(e))
                        return !0;
                t = t.parentElement,
                r++
            }
            return !!(e.hasAttribute("data-no-currency") || e.hasAttribute("data-no-phone") || e.hasAttribute("data-admin") || e.hasAttribute("data-cms") || e.hasAttribute("data-editor"))
        }
          , p = e => {
            if (e)
                return e;
            if ("undefined" != typeof document) {
                let e = document.documentElement.lang
                  , t = document.documentElement.dir
                  , r = document.documentElement.getAttribute("data-locale");
                if ("ar" === e || "rtl" === t || "ar" === r)
                    return "ar";
                if ("en" === e || "en" === r)
                    return "en"
            }
            return "ar"
        }
          , f = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return e ? t ? e.replace(n, "\xa7") : e.replace(n, () => '<span class="arb-font-icon arb-text-base arb-icon-sar arb-px-1"></span>') : e
        }
          , m = (e, t) => e && "ar" === p(t) ? e.replace(o, (e, t, r) => '<span dir="ltr" style="unicode-bidi: isolate; direction: ltr;">+'.concat(t).concat(r, "</span>")) : e
          , h = function(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e)
                return e;
            let n = p(t)
              , o = f(e, r);
            return m(o, n)
        }
          , y = (e, t) => {
            if ("true" === e.getAttribute("data-unified-processed") || u(e))
                return;
            let r = p(t);
            if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName) {
                let t = e.getAttribute("placeholder");
                if (t && (n.test(t) || o.test(t) || i.test(t))) {
                    let n = h(t, r, !0);
                    n !== t && e.setAttribute("placeholder", n)
                }
            }
            let a = e => {
                if (e.nodeType === Node.TEXT_NODE && e.textContent) {
                    let t = e.textContent;
                    if (n.test(t) || o.test(t) || i.test(t)) {
                        let n = h(t, r);
                        if (n !== t) {
                            let t = document.createElement("span");
                            t.innerHTML = n,
                            e.parentNode && e.parentNode.replaceChild(t, e)
                        }
                    }
                } else if (e.nodeType === Node.ELEMENT_NODE) {
                    if (u(e))
                        return;
                    Array.from(e.childNodes).forEach(a)
                } else
                    e.childNodes && e.childNodes.length > 0 && Array.from(e.childNodes).forEach(a)
            }
            ;
            a(e)
        }
          , b = () => {
            let e = /(ريال سعودي|ريال|SAR|§)/;
            document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(t => {
                let r = t.getAttribute("placeholder");
                if (r && e.test(r) && (t.classList.add("with-sar-icon"),
                t.parentElement && !t.parentElement.classList.contains("input-wrapper"))) {
                    let e = document.createElement("div");
                    e.className = "input-wrapper",
                    t.parentNode && (t.parentNode.insertBefore(e, t),
                    e.appendChild(t))
                }
            }
            )
        }
          , v = (e, t, r) => {
            let n = Math.min(t + r, e.length);
            for (let r = t; r < n; r++) {
                let t = e[r];
                t instanceof HTMLElement && !u(t) && y(t)
            }
            n < e.length && setTimeout( () => {
                v(e, n, r)
            }
            , 50)
        }
          , g = () => {
            if (s)
                return;
            let e = Date.now();
            if (!(e - d < 2e3)) {
                s = !0,
                d = e;
                try {
                    document.querySelectorAll(".arb-font-icon.arb-icon-sar").forEach(e => {
                        let t = e.parentNode;
                        t && t.textContent && e.replaceWith(document.createTextNode("ريال"))
                    }
                    ),
                    document.querySelectorAll('span[dir="ltr"][style*="unicode-bidi: isolate"]').forEach(e => {
                        if (e.parentNode) {
                            let t = e.textContent || "";
                            e.replaceWith(document.createTextNode(t))
                        }
                    }
                    ),
                    document.querySelectorAll('span[style*="unicode-bidi:isolate"][style*="direction:rtl"]').forEach(e => {
                        if (e.parentNode) {
                            let t = e.textContent || "";
                            e.replaceWith(document.createTextNode(t))
                        }
                    }
                    ),
                    document.querySelectorAll("[data-unified-processed]").forEach(e => {}
                    );
                    let e = document.querySelectorAll("*");
                    e.length > 0 && v(e, 0, 20),
                    document.querySelectorAll("input, textarea").forEach(e => {
                        if (e instanceof HTMLElement) {
                            let t = e.getAttribute("placeholder");
                            if (t && (n.test(t) || o.test(t) || i.test(t))) {
                                let r = h(t, "ar", !0);
                                r !== t && e.setAttribute("placeholder", r)
                            }
                        }
                    }
                    ),
                    b()
                } finally {
                    s = !1
                }
            }
        }
          , E = () => {
            new MutationObserver(e => {
                c && clearTimeout(c),
                c = setTimeout( () => {
                    let t = e.slice(0, 3)
                      , r = !1;
                    t.forEach(e => {
                        if ("childList" === e.type)
                            e.addedNodes.forEach(e => {
                                e.nodeType === Node.ELEMENT_NODE && (u(e) || (r = !0,
                                y(e)))
                            }
                            );
                        else if ("characterData" === e.type) {
                            let t = e.target.parentNode;
                            t && t.nodeType === Node.ELEMENT_NODE && (u(t) || (r = !0,
                            y(t)))
                        }
                    }
                    ),
                    r && setTimeout( () => {
                        g()
                    }
                    , 1e3)
                }
                , 500)
            }
            ).observe(document.body, {
                childList: !0,
                subtree: !0,
                characterData: !0
            }),
            setTimeout( () => {
                g()
            }
            , 1e3)
        }
          , w = () => {
            l && clearTimeout(l),
            E(),
            l = setTimeout( () => {
                g(),
                b()
            }
            , 3e3),
            window.addEventListener("load", () => {
                setTimeout( () => {
                    g(),
                    b()
                }
                , 3e3)
            }
            ),
            window.addEventListener("popstate", () => {
                setTimeout( () => {
                    g(),
                    b()
                }
                , 1e3)
            }
            )
        }
          , k = () => {
            l && clearTimeout(l),
            document.querySelectorAll("[data-unified-processed]").forEach(e => {}
            ),
            l = setTimeout( () => {
                g()
            }
            , 500)
        }
          , T = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ar";
            return h(e, t)
        }
          , _ = e => !u(e)
          , P = w
          , C = k
          , A = g
    }
    ,
    98107: (e, t) => {
        "use strict";
        function r(e, t, r) {
            if (!e.click)
                return Object.assign({
                    isDivider: !1,
                    type: e.type || null,
                    header: e.header || "",
                    icon: e.icon || "",
                    tooltip: e.tooltip || ""
                }, e);
            {
                if (e.click.startsWith("javascript:") || e.click.startsWith("chrome:") || !t)
                    return Object.assign({
                        isDivider: !1,
                        type: e.type || null,
                        header: e.header || "",
                        icon: e.icon || "",
                        tooltip: e.tooltip || ""
                    }, e);
                let n = e.click
                  , o = {}
                  , i = e.click.indexOf("(");
                if (i >= 0) {
                    let t = e.click.indexOf(")");
                    if (t < 0)
                        throw Error('Message with arguments must end with ")".');
                    o = e.click.substring(i + 1, t).split(",").map(e => e.trim()).reduce( (e, t) => {
                        let r = t.split("=");
                        return r.length < 2 ? e[r[0]] = "" : e[r[0]] = r[1],
                        e
                    }
                    , {}),
                    n = e.click.substring(0, i)
                }
                o.id = t,
                e.parameters && Object.keys(e.parameters).forEach(t => {
                    var r;
                    o[t] = (null == (r = e.parameters[t]) ? void 0 : r.toString()) || ""
                }
                ),
                r && Object.keys(r).forEach(e => {
                    var t;
                    o[e] = (null == (t = r[e]) ? void 0 : t.toString()) || ""
                }
                );
                let a = Object.keys(o).map(e => `${e}=${o[e]}`).join(", ")
                  , s = `${n}(${a})`;
                return {
                    isDivider: !1,
                    click: `javascript:Sitecore.PageModes.PageEditor.postRequest('${s}',null,false)`,
                    header: e.header || "",
                    icon: e.icon || "",
                    tooltip: e.tooltip || "",
                    type: e.type || null
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DefaultEditFrameButtons = t.DefaultEditFrameButton = t.DefaultEditFrameButtonIds = void 0,
        t.mapButtonToCommand = function(e, n, o) {
            if ("|" === e || e.isDivider)
                return {
                    click: "chrome:dummy",
                    header: "Separator",
                    icon: "",
                    isDivider: !0,
                    tooltip: null,
                    type: "separator"
                };
            {
                if (void 0 !== e.click)
                    return r(e, n, o);
                let i = e.fields.join("|");
                return r(Object.assign({
                    click: `webedit:fieldeditor(command=${t.DefaultEditFrameButtonIds.edit},fields=${i})`
                }, e), n, o)
            }
        }
        ,
        t.commandBuilder = r,
        t.DefaultEditFrameButtonIds = {
            edit: "{70C4EED5-D4CD-4D7D-9763-80C42504F5E7}"
        },
        t.DefaultEditFrameButton = {
            insert: {
                header: "Insert New",
                icon: "/~/icon/Office/16x16/insert_from_template.png",
                click: "webedit:new",
                tooltip: "Insert a new item"
            },
            editRelatedItem: {
                header: "Edit the related item",
                icon: "/~/icon/Office/16x16/cubes.png",
                click: "webedit:open",
                tooltip: "Edit the related item in the Content Editor."
            },
            edit: {
                header: "Edit Item",
                icon: "/~/icon/people/16x16/cubes_blue.png",
                fields: ["Title", "Text"],
                tooltip: "Edit the item fields."
            }
        },
        t.DefaultEditFrameButtons = [t.DefaultEditFrameButton.editRelatedItem, t.DefaultEditFrameButton.insert, t.DefaultEditFrameButton.edit]
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [593, 792], () => (t(92),
    t(6763))),
    _N_E = e.O()
}
]);
