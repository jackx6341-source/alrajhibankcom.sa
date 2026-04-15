(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[841], {
    618: (e, t, r) => {
        "use strict";
        r.d(t, {
            G: () => i,
            n: () => s
        });
        var n = r(14232);
        let i = () => n.createElement("span", null, "[No text in field]")
          , s = () => n.createElement("img", {
            alt: "",
            src: 'data:image/svg+xml,%3Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 240" style="enable-background:new 0 0 240 240;" xml:space="preserve"%3E%3Cstyle type="text/css"%3E .st0%7Bfill:none;%7D .st1%7Bfill:%23969696;%7D .st2%7Bfill:%23FFFFFF;%7D .st3%7Bfill:%23FFFFFF;stroke:%23FFFFFF;stroke-width:0.75;stroke-miterlimit:10;%7D%0A%3C/style%3E%3Cg%3E%3Crect class="st0" width="240" height="240"/%3E%3Cg%3E%3Cg%3E%3Crect x="20" y="20" class="st1" width="200" height="200"/%3E%3C/g%3E%3Cg%3E%3Ccircle class="st2" cx="174" cy="67" r="14"/%3E%3Cpath class="st2" d="M174,54c7.17,0,13,5.83,13,13s-5.83,13-13,13s-13-5.83-13-13S166.83,54,174,54 M174,52 c-8.28,0-15,6.72-15,15s6.72,15,15,15s15-6.72,15-15S182.28,52,174,52L174,52z"/%3E%3C/g%3E%3Cpolyline class="st3" points="29.5,179.25 81.32,122.25 95.41,137.75 137.23,91.75 209.5,179.75 "/%3E%3C/g%3E%3C/g%3E%3C/svg%3E',
            className: "scEmptyImage",
            style: {
                minWidth: "48px",
                minHeight: "48px",
                maxWidth: "400px",
                maxHeight: "400px",
                cursor: "pointer"
            }
        })
    }
    ,
    1138: (e, t, r) => {
        "use strict";
        r.d(t, {
            DX: () => o
        });
        var n = r(14232);
        function i(e, t) {
            if ("function" == typeof e)
                return e(t);
            null != e && (e.current = t)
        }
        var s = r(37876)
          , o = n.forwardRef( (e, t) => {
            let {children: r, ...i} = e
              , o = n.Children.toArray(r)
              , l = o.find(u);
            if (l) {
                let e = l.props.children
                  , r = o.map(t => t !== l ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                return (0,
                s.jsx)(a, {
                    ...i,
                    ref: t,
                    children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                })
            }
            return (0,
            s.jsx)(a, {
                ...i,
                ref: t,
                children: r
            })
        }
        );
        o.displayName = "Slot";
        var a = n.forwardRef( (e, t) => {
            let {children: r, ...s} = e;
            if (n.isValidElement(r)) {
                let e = function(e) {
                    let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
                      , r = t && "isReactWarning"in t && t.isReactWarning;
                    return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning"in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                }(r);
                return n.cloneElement(r, {
                    ...function(e, t) {
                        let r = {
                            ...t
                        };
                        for (let n in t) {
                            let i = e[n]
                              , s = t[n];
                            /^on[A-Z]/.test(n) ? i && s ? r[n] = (...e) => {
                                s(...e),
                                i(...e)
                            }
                            : i && (r[n] = i) : "style" === n ? r[n] = {
                                ...i,
                                ...s
                            } : "className" === n && (r[n] = [i, s].filter(Boolean).join(" "))
                        }
                        return {
                            ...e,
                            ...r
                        }
                    }(s, r.props),
                    ref: t ? function(...e) {
                        return t => {
                            let r = !1
                              , n = e.map(e => {
                                let n = i(e, t);
                                return r || "function" != typeof n || (r = !0),
                                n
                            }
                            );
                            if (r)
                                return () => {
                                    for (let t = 0; t < n.length; t++) {
                                        let r = n[t];
                                        "function" == typeof r ? r() : i(e[t], null)
                                    }
                                }
                        }
                    }(t, e) : e
                })
            }
            return n.Children.count(r) > 1 ? n.Children.only(null) : null
        }
        );
        a.displayName = "SlotClone";
        var l = ({children: e}) => (0,
        s.jsx)(s.Fragment, {
            children: e
        });
        function u(e) {
            return n.isValidElement(e) && e.type === l
        }
    }
    ,
    2544: (e, t, r) => {
        "use strict";
        var n = r(87711)
          , i = r(49794)
          , s = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/
          , o = /[\n\r\t]/g
          , a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
          , l = /:\d+$/
          , u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i
          , c = /^[a-zA-Z]:/;
        function d(e) {
            return (e || "").toString().replace(s, "")
        }
        var f = [["#", "hash"], ["?", "query"], function(e, t) {
            return g(t.protocol) ? e.replace(/\\/g, "/") : e
        }
        , ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]]
          , h = {
            hash: 1,
            query: 1
        };
        function p(e) {
            var t, n, i = ("undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {}).location || {}, s = {}, o = typeof (e = e || i);
            if ("blob:" === e.protocol)
                s = new y(unescape(e.pathname),{});
            else if ("string" === o)
                for (n in s = new y(e,{}),
                h)
                    delete s[n];
            else if ("object" === o) {
                for (n in e)
                    n in h || (s[n] = e[n]);
                void 0 === s.slashes && (s.slashes = a.test(e.href))
            }
            return s
        }
        function g(e) {
            return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e
        }
        function m(e, t) {
            e = (e = d(e)).replace(o, ""),
            t = t || {};
            var r, n = u.exec(e), i = n[1] ? n[1].toLowerCase() : "", s = !!n[2], a = !!n[3], l = 0;
            return s ? a ? (r = n[2] + n[3] + n[4],
            l = n[2].length + n[3].length) : (r = n[2] + n[4],
            l = n[2].length) : a ? (r = n[3] + n[4],
            l = n[3].length) : r = n[4],
            "file:" === i ? l >= 2 && (r = r.slice(2)) : g(i) ? r = n[4] : i ? s && (r = r.slice(2)) : l >= 2 && g(t.protocol) && (r = n[4]),
            {
                protocol: i,
                slashes: s || g(i),
                slashesCount: l,
                rest: r
            }
        }
        function y(e, t, r) {
            if (e = (e = d(e)).replace(o, ""),
            !(this instanceof y))
                return new y(e,t,r);
            var s, a, l, u, h, v, b = f.slice(), C = typeof t, E = 0;
            for ("object" !== C && "string" !== C && (r = t,
            t = null),
            r && "function" != typeof r && (r = i.parse),
            s = !(a = m(e || "", t = p(t))).protocol && !a.slashes,
            this.slashes = a.slashes || s && t.slashes,
            this.protocol = a.protocol || t.protocol || "",
            e = a.rest,
            ("file:" === a.protocol && (2 !== a.slashesCount || c.test(e)) || !a.slashes && (a.protocol || a.slashesCount < 2 || !g(this.protocol))) && (b[3] = [/(.*)/, "pathname"]); E < b.length; E++) {
                if ("function" == typeof (u = b[E])) {
                    e = u(e, this);
                    continue
                }
                l = u[0],
                v = u[1],
                l != l ? this[v] = e : "string" == typeof l ? ~(h = "@" === l ? e.lastIndexOf(l) : e.indexOf(l)) && ("number" == typeof u[2] ? (this[v] = e.slice(0, h),
                e = e.slice(h + u[2])) : (this[v] = e.slice(h),
                e = e.slice(0, h))) : (h = l.exec(e)) && (this[v] = h[1],
                e = e.slice(0, h.index)),
                this[v] = this[v] || s && u[3] && t[v] || "",
                u[4] && (this[v] = this[v].toLowerCase())
            }
            r && (this.query = r(this.query)),
            s && t.slashes && "/" !== this.pathname.charAt(0) && ("" !== this.pathname || "" !== t.pathname) && (this.pathname = function(e, t) {
                if ("" === e)
                    return t;
                for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, i = r[n - 1], s = !1, o = 0; n--; )
                    "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1),
                    o++) : o && (0 === n && (s = !0),
                    r.splice(n, 1),
                    o--);
                return s && r.unshift(""),
                ("." === i || ".." === i) && r.push(""),
                r.join("/")
            }(this.pathname, t.pathname)),
            "/" !== this.pathname.charAt(0) && g(this.protocol) && (this.pathname = "/" + this.pathname),
            n(this.port, this.protocol) || (this.host = this.hostname,
            this.port = ""),
            this.username = this.password = "",
            this.auth && (~(h = this.auth.indexOf(":")) ? (this.username = this.auth.slice(0, h),
            this.username = encodeURIComponent(decodeURIComponent(this.username)),
            this.password = this.auth.slice(h + 1),
            this.password = encodeURIComponent(decodeURIComponent(this.password))) : this.username = encodeURIComponent(decodeURIComponent(this.auth)),
            this.auth = this.password ? this.username + ":" + this.password : this.username),
            this.origin = "file:" !== this.protocol && g(this.protocol) && this.host ? this.protocol + "//" + this.host : "null",
            this.href = this.toString()
        }
        y.prototype = {
            set: function(e, t, r) {
                switch (e) {
                case "query":
                    "string" == typeof t && t.length && (t = (r || i.parse)(t)),
                    this[e] = t;
                    break;
                case "port":
                    this[e] = t,
                    n(t, this.protocol) ? t && (this.host = this.hostname + ":" + t) : (this.host = this.hostname,
                    this[e] = "");
                    break;
                case "hostname":
                    this[e] = t,
                    this.port && (t += ":" + this.port),
                    this.host = t;
                    break;
                case "host":
                    this[e] = t,
                    l.test(t) ? (t = t.split(":"),
                    this.port = t.pop(),
                    this.hostname = t.join(":")) : (this.hostname = t,
                    this.port = "");
                    break;
                case "protocol":
                    this.protocol = t.toLowerCase(),
                    this.slashes = !r;
                    break;
                case "pathname":
                case "hash":
                    if (t) {
                        var s = "pathname" === e ? "/" : "#";
                        this[e] = t.charAt(0) !== s ? s + t : t
                    } else
                        this[e] = t;
                    break;
                case "username":
                case "password":
                    this[e] = encodeURIComponent(t);
                    break;
                case "auth":
                    var o = t.indexOf(":");
                    ~o ? (this.username = t.slice(0, o),
                    this.username = encodeURIComponent(decodeURIComponent(this.username)),
                    this.password = t.slice(o + 1),
                    this.password = encodeURIComponent(decodeURIComponent(this.password))) : this.username = encodeURIComponent(decodeURIComponent(t))
                }
                for (var a = 0; a < f.length; a++) {
                    var u = f[a];
                    u[4] && (this[u[1]] = this[u[1]].toLowerCase())
                }
                return this.auth = this.password ? this.username + ":" + this.password : this.username,
                this.origin = "file:" !== this.protocol && g(this.protocol) && this.host ? this.protocol + "//" + this.host : "null",
                this.href = this.toString(),
                this
            },
            toString: function(e) {
                e && "function" == typeof e || (e = i.stringify);
                var t, r = this.host, n = this.protocol;
                n && ":" !== n.charAt(n.length - 1) && (n += ":");
                var s = n + (this.protocol && this.slashes || g(this.protocol) ? "//" : "");
                return this.username ? (s += this.username,
                this.password && (s += ":" + this.password),
                s += "@") : this.password ? (s += ":" + this.password,
                s += "@") : "file:" !== this.protocol && g(this.protocol) && !r && "/" !== this.pathname && (s += "@"),
                (":" === r[r.length - 1] || l.test(this.hostname) && !this.port) && (r += ":"),
                s += r + this.pathname,
                (t = "object" == typeof this.query ? e(this.query) : this.query) && (s += "?" !== t.charAt(0) ? "?" + t : t),
                this.hash && (s += this.hash),
                s
            }
        },
        y.extractProtocol = m,
        y.location = p,
        y.trimLeft = d,
        y.qs = i,
        e.exports = y
    }
    ,
    2654: function(e, t, r) {
        "use strict";
        var n = r(65364)
          , i = this && this.__importDefault || function(e) {
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
            s.default)()) {
                let r = new URL(e);
                for (let e in t)
                    ({}).hasOwnProperty.call(t, e) && r.searchParams.append(e, String(t[e]));
                return r.toString()
            }
            let r = Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(String(t[e]))}`).join("&");
            return -1 !== e.indexOf("?") ? `${e}&${r}` : `${e}?${r}`
        }
        ;
        let s = i(r(39019));
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
        let o = e => "^" + e.replace(/\//g, "\\/").replace(/\./g, "\\.").replace(/\*/g, ".*") + "$";
        t.getAllowedOriginsFromEnv = () => n.env.JSS_ALLOWED_ORIGINS ? n.env.JSS_ALLOWED_ORIGINS.replace(" ", "").split(",") : [],
        t.enforceCors = (e, r, n) => {
            if (!e.headers.origin)
                return !0;
            n = (0,
            t.getAllowedOriginsFromEnv)().concat(n || []);
            let i = r.getHeader("Access-Control-Allow-Origin");
            i && n.push(i);
            let s = e.headers.origin;
            return !!(s && n.some(e => s === e || new RegExp(o(e)).test(s))) && (r.setHeader("Access-Control-Allow-Origin", s),
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
            let t, r = /(?<!\\)\?/g, n = /\(\?!$/, i = /[.*+)\[\]|\(]$/, s = "", o = 0;
            for (; null !== (t = r.exec(e)); ) {
                let r = t.index
                  , a = e.slice(o, r)
                  , l = n.test(a.slice(-3))
                  , u = i.test(a.slice(-1));
                l || u ? s += e.slice(o, r + 1) : s += e.slice(o, r) + "\\?",
                o = r + 1
            }
            return s + e.slice(o)
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
    3139: e => {
        function t(e, t, r, n) {
            return Math.round(e / r) + " " + n + (t >= 1.5 * r ? "s" : "")
        }
        e.exports = function(e, r) {
            r = r || {};
            var n, i, s, o, a = typeof e;
            if ("string" === a && e.length > 0) {
                var l = e;
                if (!((l = String(l)).length > 100)) {
                    var u = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);
                    if (u) {
                        var c = parseFloat(u[1]);
                        switch ((u[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return 315576e5 * c;
                        case "weeks":
                        case "week":
                        case "w":
                            return 6048e5 * c;
                        case "days":
                        case "day":
                        case "d":
                            return 864e5 * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return 36e5 * c;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return 6e4 * c;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return 1e3 * c;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return c;
                        default:
                            break
                        }
                    }
                }
                return
            }
            if ("number" === a && isFinite(e)) {
                return r.long ? (i = Math.abs(n = e)) >= 864e5 ? t(n, i, 864e5, "day") : i >= 36e5 ? t(n, i, 36e5, "hour") : i >= 6e4 ? t(n, i, 6e4, "minute") : i >= 1e3 ? t(n, i, 1e3, "second") : n + " ms" : (o = Math.abs(s = e)) >= 864e5 ? Math.round(s / 864e5) + "d" : o >= 36e5 ? Math.round(s / 36e5) + "h" : o >= 6e4 ? Math.round(s / 6e4) + "m" : o >= 1e3 ? Math.round(s / 1e3) + "s" : s + "ms"
            }
            throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }
    ,
    3717: e => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
    ,
    3799: function(e, t, r) {
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
        t.getSrcSet = t.updateImageUrl = t.replaceMediaUrlPrefix = t.getRequiredParams = t.findEditorImageTag = void 0;
        let i = n(r(39518))
          , s = n(r(2544))
          , o = /<img([^>]+)\/>/i
          , a = /([^=\s]+)(="([^"]*)")?/gi
          , l = /\/([-~]{1})\/media\//i;
        t.findEditorImageTag = e => {
            let t = e.match(o);
            if (!t || t.length < 2)
                return null;
            let r = {}
              , n = a.exec(t[1]);
            for (; null !== n; )
                r[n[1]] = (0,
                i.default)(n[3]),
                n = a.exec(t[1]);
            return {
                imgTag: t[0],
                attrs: r
            }
        }
        ,
        t.getRequiredParams = e => {
            let {rev: t, db: r, la: n, vs: i, ts: s} = e;
            return {
                rev: t,
                db: r,
                la: n,
                vs: i,
                ts: s
            }
        }
        ,
        t.replaceMediaUrlPrefix = (e, t=l) => {
            let r = (0,
            s.default)(e, {}, !0)
              , n = t.exec(r.pathname);
            return n && n.length > 1 && r.set("pathname", r.pathname.replace(t, `/${n[1]}/jssmedia/`)),
            r.toString()
        }
        ,
        t.updateImageUrl = (e, r, n=l) => {
            if (!r || 0 === Object.keys(r).length)
                return e;
            "undefined" == typeof window || window.global || (window.global = {});
            let i = (0,
            s.default)((0,
            t.replaceMediaUrlPrefix)(e, n), {}, !0)
              , o = (0,
            t.getRequiredParams)(i.query)
              , a = Object.assign({}, r);
            return Object.entries(o).forEach( ([e,t]) => {
                t && (a[e] = t)
            }
            ),
            i.set("query", a),
            i.toString()
        }
        ,
        t.getSrcSet = (e, r, n, i) => r.map(r => {
            let s = Object.assign(Object.assign({}, n), r)
              , o = s.w || s.mw;
            return o ? `${(0,
            t.updateImageUrl)(e, s, i)} ${o}w` : null
        }
        ).filter(e => e).join(", ")
    },
    4044: (e, t) => {
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
    ,
    5624: (e, t, r) => {
        "use strict";
        r.d(t, {
            S: () => s,
            n: () => o
        });
        var n = r(14232)
          , i = r(93327);
        function s(e) {
            return function(t) {
                return function(r) {
                    return n.createElement(i.q3.Consumer, null, i => n.createElement(t, Object.assign({}, r, {
                        sitecoreContext: i.context,
                        updateSitecoreContext: e && e.updatable && i.setContext
                    })))
                }
            }
        }
        function o(e) {
            let t = n.useContext(i.q3)
              , r = null == e ? void 0 : e.updatable;
            return {
                sitecoreContext: t.context,
                updateSitecoreContext: r ? t.setContext : void 0
            }
        }
    }
    ,
    10510: (e, t) => {
        "use strict";
        function r(e) {
            let {widthInt: t, heightInt: r, blurWidth: n, blurHeight: i, blurDataURL: s, objectFit: o} = e
              , a = n ? 40 * n : t
              , l = i ? 40 * i : r
              , u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    }
    ,
    12479: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(14232)
          , i = n.useLayoutEffect
          , s = n.useEffect;
        function o(e) {
            let {headManager: t, reduceComponentsToState: r} = e;
            function o() {
                if (t && t.mountedInstances) {
                    let i = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(r(i, e))
                }
            }
            return i( () => {
                var r;
                return null == t || null == (r = t.mountedInstances) || r.add(e.children),
                () => {
                    var r;
                    null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                }
            }
            ),
            i( () => (t && (t._pendingUpdate = o),
            () => {
                t && (t._pendingUpdate = o)
            }
            )),
            s( () => (t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            () => {
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    }
    ,
    17580: (e, t) => {
        "use strict";
        var r, n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EditMode = t.LayoutServicePageState = void 0,
        function(e) {
            e.Preview = "preview",
            e.Edit = "edit",
            e.Normal = "normal"
        }(r || (t.LayoutServicePageState = r = {})),
        function(e) {
            e.Chromes = "chromes",
            e.Metadata = "metadata"
        }(n || (t.EditMode = n = {}))
    }
    ,
    18076: function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, s) {
                function o(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(o, a)
                }
                l((n = n.apply(e, t || [])).next())
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
        let s = i(r(51298))
          , o = r(33358)
          , a = r(4044);
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
        class l {
            constructor(e) {
                this.serviceConfig = e,
                this.graphQLClient = this.getGraphQLClient()
            }
            fetchEditingData(e) {
                return n(this, arguments, void 0, function*({siteName: e, itemId: r, language: n, version: i, layoutKind: l=a.LayoutKind.Final}) {
                    var u, c, d, f, h;
                    if (s.default.editing("fetching editing data for %s %s %s %s", e, r, n, i, l),
                    !e)
                        throw RangeError("The site name must be a non-empty string");
                    if (!n)
                        throw RangeError("The language must be a non-empty string");
                    let p = {}
                      , g = []
                      , m = !0
                      , y = ""
                      , v = yield this.graphQLClient.request(t.query, {
                        siteName: e,
                        itemId: r,
                        version: i,
                        language: n
                    }, {
                        headers: {
                            sc_layoutKind: l
                        }
                    });
                    for ((null == (c = null == (u = null == v ? void 0 : v.site) ? void 0 : u.siteInfo) ? void 0 : c.dictionary) ? (g = v.site.siteInfo.dictionary.results,
                    m = v.site.siteInfo.dictionary.pageInfo.hasNext,
                    y = v.site.siteInfo.dictionary.pageInfo.endCursor) : m = !1; m; ) {
                        let r = yield this.graphQLClient.request(t.dictionaryQuery, {
                            siteName: e,
                            language: n,
                            after: y
                        });
                        (null == (f = null == (d = null == r ? void 0 : r.site) ? void 0 : d.siteInfo) ? void 0 : f.dictionary) ? (g = g.concat(r.site.siteInfo.dictionary.results),
                        m = r.site.siteInfo.dictionary.pageInfo.hasNext,
                        y = r.site.siteInfo.dictionary.pageInfo.endCursor) : m = !1
                    }
                    return g.forEach(e => p[e.key] = e.value),
                    {
                        layoutData: (null == (h = null == v ? void 0 : v.item) ? void 0 : h.rendered) || {
                            sitecore: {
                                context: {
                                    pageEditing: !0,
                                    language: n,
                                    editMode: o.EditMode.Metadata
                                },
                                route: null
                            }
                        },
                        dictionary: p
                    }
                })
            }
            getGraphQLClient() {
                if (!this.serviceConfig.clientFactory)
                    throw Error("clientFactory needs to be provided when initializing GraphQL client.");
                return this.serviceConfig.clientFactory({
                    debugger: s.default.editing,
                    headers: {
                        sc_editMode: "true"
                    }
                })
            }
        }
        t.GraphQLEditingService = l
    },
    18438: (e, t) => {
        "use strict";
        function r(e) {
            let {ampFirst: t=!1, hybrid: r=!1, hasQuery: n=!1} = void 0 === e ? {} : e;
            return t || r && n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    }
    ,
    21873: (e, t, r) => {
        "use strict";
        r.d(t, {
            N: () => s
        });
        var n = r(14232)
          , i = r(33358);
        function s(e, t) {
            let r = e => {
                var r;
                let {editable: n=!0} = e;
                return (null == (r = e.field) ? void 0 : r.metadata) && n && (0,
                i.isFieldValueEmpty)(e.field) ? e.emptyFieldEditingComponent || t.defaultEmptyFieldEditingComponent : null
            }
            ;
            return t.isForwardRef ? (0,
            n.forwardRef)( (t, i) => {
                let s = r(t);
                return n.createElement(n.Fragment, null, s && n.createElement(s, null) || n.createElement(e, Object.assign({}, t, {
                    ref: i
                })))
            }
            ) : t => {
                let i = r(t);
                return n.createElement(n.Fragment, null, i && n.createElement(i, null) || n.createElement(e, Object.assign({}, t)))
            }
        }
    }
    ,
    26093: (e, t, r) => {
        "use strict";
        r.d(t, {
            O: () => l
        });
        var n = r(14232)
          , i = r(95062)
          , s = r.n(i)
          , o = r(91726);
        let a = e => {
            let t = JSON.stringify(e.metadata)
              , r = {
                type: "text/sitecore",
                chrometype: "field",
                className: "scpm"
            }
              , i = Object.assign(Object.assign({}, r), {
                kind: o.mV.Open
            })
              , s = Object.assign(Object.assign({}, r), {
                kind: o.mV.Close
            });
            return n.createElement(n.Fragment, null, n.createElement("code", Object.assign({}, i), t), e.children, n.createElement("code", Object.assign({}, s)))
        }
        ;
        function l(e, t=!1) {
            return t ? (0,
            n.forwardRef)( (t, r) => {
                var i;
                let {editable: s=!0} = t
                  , o = null == (i = t.field) ? void 0 : i.metadata;
                return o && s ? n.createElement(a, {
                    metadata: o
                }, n.createElement(e, Object.assign({}, t, {
                    ref: r
                }))) : n.createElement(e, Object.assign({}, t, {
                    ref: r
                }))
            }
            ) : t => {
                var r;
                let {editable: i=!0} = t
                  , s = null == (r = t.field) ? void 0 : r.metadata;
                return s && i ? n.createElement(a, {
                    metadata: s
                }, n.createElement(e, Object.assign({}, t))) : n.createElement(e, Object.assign({}, t))
            }
        }
        a.displayName = "FieldMetadata",
        a.propTypes = {
            metadata: s().object.isRequired,
            children: s().node.isRequired
        }
    }
    ,
    33018: (e, t) => {
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
                  , i = {}
                  , s = e.click.indexOf("(");
                if (s >= 0) {
                    let t = e.click.indexOf(")");
                    if (t < 0)
                        throw Error('Message with arguments must end with ")".');
                    i = e.click.substring(s + 1, t).split(",").map(e => e.trim()).reduce( (e, t) => {
                        let r = t.split("=");
                        return r.length < 2 ? e[r[0]] = "" : e[r[0]] = r[1],
                        e
                    }
                    , {}),
                    n = e.click.substring(0, s)
                }
                i.id = t,
                e.parameters && Object.keys(e.parameters).forEach(t => {
                    var r;
                    i[t] = (null == (r = e.parameters[t]) ? void 0 : r.toString()) || ""
                }
                ),
                r && Object.keys(r).forEach(e => {
                    var t;
                    i[e] = (null == (t = r[e]) ? void 0 : t.toString()) || ""
                }
                );
                let o = Object.keys(i).map(e => `${e}=${i[e]}`).join(", ")
                  , a = `${n}(${o})`;
                return {
                    isDivider: !1,
                    click: `javascript:Sitecore.PageModes.PageEditor.postRequest('${a}',null,false)`,
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
        t.mapButtonToCommand = function(e, n, i) {
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
                    return r(e, n, i);
                let s = e.fields.join("|");
                return r(Object.assign({
                    click: `webedit:fieldeditor(command=${t.DefaultEditFrameButtonIds.edit},fields=${s})`
                }, e), n, i)
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
    ,
    33358: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getComponentLibraryStylesheetLinks = t.GRAPHQL_LAYOUT_QUERY_NAME = t.GraphQLLayoutService = t.RestLayoutService = t.getContentStylesheetLink = t.EMPTY_DATE_FIELD_VALUE = t.getDynamicPlaceholderPattern = t.isDynamicPlaceholder = t.isFieldValueEmpty = t.getChildPlaceholder = t.getFieldValue = t.EditMode = t.LayoutServicePageState = void 0;
        var n = r(17580);
        Object.defineProperty(t, "LayoutServicePageState", {
            enumerable: !0,
            get: function() {
                return n.LayoutServicePageState
            }
        }),
        Object.defineProperty(t, "EditMode", {
            enumerable: !0,
            get: function() {
                return n.EditMode
            }
        });
        var i = r(37351);
        Object.defineProperty(t, "getFieldValue", {
            enumerable: !0,
            get: function() {
                return i.getFieldValue
            }
        }),
        Object.defineProperty(t, "getChildPlaceholder", {
            enumerable: !0,
            get: function() {
                return i.getChildPlaceholder
            }
        }),
        Object.defineProperty(t, "isFieldValueEmpty", {
            enumerable: !0,
            get: function() {
                return i.isFieldValueEmpty
            }
        }),
        Object.defineProperty(t, "isDynamicPlaceholder", {
            enumerable: !0,
            get: function() {
                return i.isDynamicPlaceholder
            }
        }),
        Object.defineProperty(t, "getDynamicPlaceholderPattern", {
            enumerable: !0,
            get: function() {
                return i.getDynamicPlaceholderPattern
            }
        }),
        Object.defineProperty(t, "EMPTY_DATE_FIELD_VALUE", {
            enumerable: !0,
            get: function() {
                return i.EMPTY_DATE_FIELD_VALUE
            }
        });
        var s = r(62260);
        Object.defineProperty(t, "getContentStylesheetLink", {
            enumerable: !0,
            get: function() {
                return s.getContentStylesheetLink
            }
        });
        var o = r(40107);
        Object.defineProperty(t, "RestLayoutService", {
            enumerable: !0,
            get: function() {
                return o.RestLayoutService
            }
        });
        var a = r(72454);
        Object.defineProperty(t, "GraphQLLayoutService", {
            enumerable: !0,
            get: function() {
                return a.GraphQLLayoutService
            }
        }),
        Object.defineProperty(t, "GRAPHQL_LAYOUT_QUERY_NAME", {
            enumerable: !0,
            get: function() {
                return a.GRAPHQL_LAYOUT_QUERY_NAME
            }
        });
        var l = r(62188);
        Object.defineProperty(t, "getComponentLibraryStylesheetLinks", {
            enumerable: !0,
            get: function() {
                return l.getComponentLibraryStylesheetLinks
            }
        })
    }
    ,
    37351: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EMPTY_DATE_FIELD_VALUE = t.isDynamicPlaceholder = t.getDynamicPlaceholderPattern = void 0,
        t.getFieldValue = function(e, t, r) {
            if (!e || !t)
                return r;
            let n = e[t];
            return n && void 0 !== n.value ? n.value : e.fields && e.fields[t] && void 0 !== e.fields[t].value ? e.fields[t].value : r
        }
        ,
        t.getChildPlaceholder = function(e, t) {
            return e && t && e.placeholders && e.placeholders[t] ? e.placeholders[t] : []
        }
        ,
        t.isFieldValueEmpty = function(e) {
            let r = e => !e.src
              , n = e => !e.src
              , i = e => !e.href
              , s = e => "string" == typeof e ? e === t.EMPTY_DATE_FIELD_VALUE : !("function" == typeof (null == e ? void 0 : e.getMonth) && !isNaN(null == e ? void 0 : e.getMonth()))
              , o = e => null == e || ("object" == typeof e ? r(e) && n(e) && i(e) && s(e) : "number" != typeof e && "boolean" != typeof e && (!e || s(e)));
            return !e || o(void 0 !== e.value ? e.value : e)
        }
        ,
        t.getDynamicPlaceholderPattern = e => RegExp(`^${e.replace(/\{\*\}+/i, "\\d+")}$`),
        t.isDynamicPlaceholder = e => -1 !== e.indexOf("{*}"),
        t.EMPTY_DATE_FIELD_VALUE = "0001-01-01T00:00:00Z"
    }
    ,
    39019: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            return !("undefined" != typeof window && window.document)
        }
    }
    ,
    39247: (e, t, r) => {
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
                return l
            },
            getImageProps: function() {
                return a
            }
        });
        let n = r(64252)
          , i = r(95197)
          , s = r(94989)
          , o = n._(r(49411));
        function a(e) {
            let {props: t} = (0,
            i.getImgProps)(e, {
                defaultLoader: o.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,r] of Object.entries(t))
                void 0 === r && delete t[e];
            return {
                props: t
            }
        }
        let l = s.Image
    }
    ,
    39518: (e, t, r) => {
        var n = 1 / 0
          , i = /&(?:amp|lt|gt|quot|#39|#96);/g
          , s = RegExp(i.source)
          , o = "object" == typeof r.g && r.g && r.g.Object === Object && r.g
          , a = "object" == typeof self && self && self.Object === Object && self
          , l = o || a || Function("return this")()
          , u = function(e) {
            return function(t) {
                return null == e ? void 0 : e[t]
            }
        }({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        })
          , c = Object.prototype.toString
          , d = l.Symbol
          , f = d ? d.prototype : void 0
          , h = f ? f.toString : void 0;
        e.exports = function(e) {
            var t;
            return (e = null == (t = e) ? "" : function(e) {
                if ("string" == typeof e)
                    return e;
                if (function(e) {
                    return "symbol" == typeof e || !!e && "object" == typeof e && "[object Symbol]" == c.call(e)
                }(e))
                    return h ? h.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -n ? "-0" : t
            }(t)) && s.test(e) ? e.replace(i, u) : e
        }
    }
    ,
    40107: function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, s) {
                function o(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(o, a)
                }
                l((n = n.apply(e, t || [])).next())
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
        t.RestLayoutService = void 0;
        let s = r(52946)
          , o = r(63034)
          , a = r(86121)
          , l = i(r(51298));
        class u extends s.LayoutServiceBase {
            constructor(e) {
                super(),
                this.serviceConfig = e,
                this.getFetchParams = e => {
                    var t;
                    return {
                        sc_apikey: this.serviceConfig.apiKey,
                        sc_site: this.serviceConfig.siteName,
                        sc_lang: e || "",
                        tracking: null == (t = this.serviceConfig.tracking) || t
                    }
                }
                ,
                this.getDefaultFetcher = (e, t) => {
                    let r, i = {
                        debugger: l.default.layout
                    };
                    e && (r = this.setupReqHeaders(e));
                    let s = new o.NativeDataFetcher(i);
                    return (e, i) => n(this, void 0, void 0, function*() {
                        let n = yield s.fetch(e, Object.assign(Object.assign({}, i), {
                            headers: r
                        }));
                        return t && this.setupResHeaders(t, n),
                        n
                    })
                }
            }
            fetchLayoutData(e, t, r, i) {
                return n(this, void 0, void 0, function*() {
                    var n;
                    let s = this.getFetchParams(t);
                    l.default.layout("fetching layout data for %s %s %s", e, t, this.serviceConfig.siteName);
                    let o = this.serviceConfig.dataFetcherResolver ? this.serviceConfig.dataFetcherResolver(r, i) : this.getDefaultFetcher(r, i)
                      , u = this.resolveLayoutServiceUrl("render");
                    try {
                        return yield(0,
                        a.fetchData)(u, o, Object.assign({
                            item: e
                        }, s))
                    } catch (e) {
                        if ((null == (n = e.response) ? void 0 : n.status) === 404)
                            return e.response.data;
                        throw e
                    }
                })
            }
            fetchPlaceholderData(e, t, r, n, i) {
                let s = this.getFetchParams(r);
                l.default.layout("fetching placeholder data for %s %s %s %s", e, t, r, this.serviceConfig.siteName);
                let o = this.serviceConfig.dataFetcherResolver ? this.serviceConfig.dataFetcherResolver(n, i) : this.getDefaultFetcher(n, i)
                  , u = this.resolveLayoutServiceUrl("placeholder");
                return (0,
                a.fetchData)(u, o, Object.assign({
                    placeholderName: e,
                    item: t
                }, s))
            }
            resolveLayoutServiceUrl(e) {
                let {apiHost: t="", configurationName: r="jss"} = this.serviceConfig;
                return `${t}/sitecore/api/layout/${e}/${r}`
            }
            setupReqHeaders(e) {
                let t = new Headers;
                return (null == e ? void 0 : e.headers) && (Object.entries(e.headers).forEach( ([e,r]) => {
                    r && t.set(e, Array.isArray(r) ? r.join(", ") : r)
                }
                ),
                e.headers.cookie && t.set("cookie", e.headers.cookie),
                e.headers.referer && t.set("referer", e.headers.referer),
                e.headers["user-agent"] && t.set("user-agent", e.headers["user-agent"]),
                e.socket.remoteAddress && t.set("X-Forwarded-For", e.socket.remoteAddress)),
                t
            }
            setupResHeaders(e, t) {
                l.default.layout("performing response header passing");
                let r = t.headers;
                if (r instanceof Headers) {
                    let t = r.get("set-cookie");
                    t && e.setHeader("set-cookie", t)
                }
                return t
            }
        }
        t.RestLayoutService = u
    },
    42059: e => {
        "use strict";
        e.exports = function e(t, r) {
            if (t === r)
                return !0;
            if (t && r && "object" == typeof t && "object" == typeof r) {
                if (t.constructor !== r.constructor)
                    return !1;
                if (Array.isArray(t)) {
                    if ((n = t.length) != r.length)
                        return !1;
                    for (i = n; 0 != i--; )
                        if (!e(t[i], r[i]))
                            return !1;
                    return !0
                }
                if (t instanceof Map && r instanceof Map) {
                    if (t.size !== r.size)
                        return !1;
                    for (i of t.entries())
                        if (!r.has(i[0]))
                            return !1;
                    for (i of t.entries())
                        if (!e(i[1], r.get(i[0])))
                            return !1;
                    return !0
                }
                if (t instanceof Set && r instanceof Set) {
                    if (t.size !== r.size)
                        return !1;
                    for (i of t.entries())
                        if (!r.has(i[0]))
                            return !1;
                    return !0
                }
                if (ArrayBuffer.isView(t) && ArrayBuffer.isView(r)) {
                    if ((n = t.length) != r.length)
                        return !1;
                    for (i = n; 0 != i--; )
                        if (t[i] !== r[i])
                            return !1;
                    return !0
                }
                if (t.constructor === RegExp)
                    return t.source === r.source && t.flags === r.flags;
                if (t.valueOf !== Object.prototype.valueOf)
                    return t.valueOf() === r.valueOf();
                if (t.toString !== Object.prototype.toString)
                    return t.toString() === r.toString();
                if ((n = (s = Object.keys(t)).length) !== Object.keys(r).length)
                    return !1;
                for (i = n; 0 != i--; )
                    if (!Object.prototype.hasOwnProperty.call(r, s[i]))
                        return !1;
                for (i = n; 0 != i--; ) {
                    var n, i, s, o = s[i];
                    if (("_owner" !== o || !t.$$typeof) && !e(t[o], r[o]))
                        return !1
                }
                return !0
            }
            return t != t && r != r
        }
    }
    ,
    44304: e => {
        e.exports.qg = function(e, t) {
            var r = (t = t || {}).preserveNumbers
              , n = {};
            return (function(e) {
                for (var t, r = [], n = 0, i = /url\([^\)]+$/, s = ""; n < e.length; ) {
                    if (-1 === (t = e.indexOf(";", n)) && (t = e.length),
                    s += e.substring(n, t),
                    i.test(s)) {
                        s += ";",
                        n = t + 1;
                        continue
                    }
                    r.push(s),
                    s = "",
                    n = t + 1
                }
                return r
            }
            )(e).map(function(e) {
                return e.trim()
            }).filter(Boolean).forEach(function(e) {
                var t, i = e.indexOf(":"), s = e.substr(0, i).trim(), o = e.substr(i + 1).trim();
                r && !isNaN(parseFloat(t = o)) && isFinite(t) && (o = Number(o)),
                n[s] = o
            }),
            n
        }
    }
    ,
    45280: (e, t, r) => {
        "use strict";
        r.d(t, {
            B$: () => u,
            f_: () => l,
            ns: () => c,
            q1: () => d
        });
        var n = r(33358)
          , i = r(44304)
          , s = function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
            return r
        };
        let o = e => e.replace(/^.|-./g, (e, t) => 0 === t ? e.toLowerCase() : e.substr(1).toUpperCase())
          , a = (e="") => {
            let t = (0,
            i.qg)(e, {
                preserveNumbers: !0
            });
            return Object.keys(t).reduce( (e, r) => (e[o(r)] = t[r],
            e), {})
        }
          , l = e => e ? Object.keys(e).reduce( (t, r) => {
            switch (r) {
            case "class":
                t.className = e.class;
                break;
            case "style":
                t.style = a(e.style);
                break;
            default:
                t[r] = e[r]
            }
            return t
        }
        , {}) : []
          , u = e => {
            if (e.class) {
                if (e.className) {
                    let t = e.className;
                    t += ` ${e.class}`,
                    e.className = t
                } else
                    e.className = e.class;
                delete e.class
            }
        }
          , c = e => {
            let {className: t} = e
              , r = Object.entries(s(e, ["className"])).map( ([e,t]) => {
                if ("object" == typeof t) {
                    let r = JSON.stringify(t).replace(/"|{|}/g, "").replace(/,/g, ";");
                    return `${e}="${r}"`
                }
                return `${e}="${t}"`
            }
            );
            return t && r.push(`class="${t}"`),
            r.join(" ")
        }
          , d = e => {
            let t = {};
            return Object.entries(e).reduce( (t, [r]) => (t[r] = (0,
            n.getFieldValue)(e, r),
            t), t)
        }
    }
    ,
    49411: (e, t) => {
        "use strict";
        function r(e) {
            var t;
            let {config: r, src: n, width: i, quality: s} = e
              , o = s || (null == (t = r.qualities) ? void 0 : t.reduce( (e, t) => Math.abs(t - 75) < Math.abs(e - 75) ? t : e)) || 75;
            return r.path + "?url=" + encodeURIComponent(n) + "&w=" + i + "&q=" + o + (n.startsWith("/_next/static/media/"),
            "")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r.__next_img_default = !0;
        let n = r
    }
    ,
    49794: (e, t) => {
        "use strict";
        var r, n = Object.prototype.hasOwnProperty;
        function i(e) {
            try {
                return decodeURIComponent(e.replace(/\+/g, " "))
            } catch (e) {
                return null
            }
        }
        function s(e) {
            try {
                return encodeURIComponent(e)
            } catch (e) {
                return null
            }
        }
        t.stringify = function(e, t) {
            var i, o, a = [];
            for (o in "string" != typeof (t = t || "") && (t = "?"),
            e)
                if (n.call(e, o)) {
                    if (!(i = e[o]) && (null === i || i === r || isNaN(i)) && (i = ""),
                    o = s(o),
                    i = s(i),
                    null === o || null === i)
                        continue;
                    a.push(o + "=" + i)
                }
            return a.length ? t + a.join("&") : ""
        }
        ,
        t.parse = function(e) {
            for (var t, r = /([^=?#&]+)=?([^&]*)/g, n = {}; t = r.exec(e); ) {
                var s = i(t[1])
                  , o = i(t[2]);
                null === s || null === o || s in n || (n[s] = o)
            }
            return n
        }
    }
    ,
    51112: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useMergedRef", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(14232);
        function i(e, t) {
            let r = (0,
            n.useRef)(null)
              , i = (0,
            n.useRef)(null);
            return (0,
            n.useCallback)(n => {
                if (null === n) {
                    let e = r.current;
                    e && (r.current = null,
                    e());
                    let t = i.current;
                    t && (i.current = null,
                    t())
                } else
                    e && (r.current = s(e, n)),
                    t && (i.current = s(t, n))
            }
            , [e, t])
        }
        function s(e, t) {
            if ("function" != typeof e)
                return e.current = t,
                () => {
                    e.current = null
                }
                ;
            {
                let r = e(t);
                return "function" == typeof r ? r : () => e(null)
            }
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    51298: function(e, t, r) {
        "use strict";
        var n, i = r(65364), s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.enableDebug = void 0;
        let o = s(r(71673))
          , a = s(r(39019))
          , l = "sitecore-jss";
        (0,
        a.default)() && (null == (n = null == i ? void 0 : i.env) ? void 0 : n.DEBUG_MULTILINE) === "true" && o.default.formatters.o && o.default.formatters.O && (o.default.formatters.o = o.default.formatters.O),
        t.enableDebug = e => o.default.enable(e),
        t.default = {
            common: (0,
            o.default)(`${l}:common`),
            http: (0,
            o.default)(`${l}:http`),
            layout: (0,
            o.default)(`${l}:layout`),
            dictionary: (0,
            o.default)(`${l}:dictionary`),
            editing: (0,
            o.default)(`${l}:editing`),
            sitemap: (0,
            o.default)(`${l}:sitemap`),
            multisite: (0,
            o.default)(`${l}:multisite`),
            robots: (0,
            o.default)(`${l}:robots`),
            redirects: (0,
            o.default)(`${l}:redirects`),
            personalize: (0,
            o.default)(`${l}:personalize`),
            errorpages: (0,
            o.default)(`${l}:errorpages`),
            proxy: (0,
            o.default)(`${l}:proxy`)
        }
    },
    52946: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.LayoutServiceBase = void 0;
        class r {
        }
        t.LayoutServiceBase = r
    }
    ,
    54587: (e, t, r) => {
        e.exports = r(39247)
    }
    ,
    55066: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(64252)._(r(14232)).default.createContext({})
    }
    ,
    59912: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        class r {
            constructor(e) {
                this.timeout = e,
                this.timeoutId = void 0
            }
            get start() {
                return new Promise( (e, t) => {
                    this.timeoutId = setTimeout( () => {
                        let e = Error(`Request timed out, timeout of ${this.timeout}ms is exceeded`);
                        e.name = "AbortError",
                        t(e)
                    }
                    , this.timeout)
                }
                )
            }
            clear() {
                this.timeoutId && clearTimeout(this.timeoutId)
            }
        }
        t.default = r
    }
    ,
    62188: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getStylesheetUrl = void 0,
        t.getComponentLibraryStylesheetLinks = function(e, r, n=i.SITECORE_EDGE_URL_DEFAULT) {
            let s = new Set;
            return e.sitecore.route ? (a(e.sitecore.route, s),
            [...s].map(e => ({
                href: (0,
                t.getStylesheetUrl)(e, r, n),
                rel: "stylesheet"
            }))) : []
        }
        ;
        let n = r(33358)
          , i = r(70684)
          , s = /-library--([^\s]+)/;
        t.getStylesheetUrl = (e, t, r=i.SITECORE_EDGE_URL_DEFAULT) => `${r}/v1/files/components/styles/${e}.css?sitecoreContextId=${t}`;
        let o = (e, t) => {
            e.map(e => a(e, t))
        }
          , a = (e, t) => {
            var r, i, a, l, u, c, d;
            let f;
            "params"in e && e.params && (f = (null == (i = null == (r = e.params.CSSStyles) ? void 0 : r.match(s)) ? void 0 : i[1]) || (null == (l = null == (a = e.params.Styles) ? void 0 : a.match(s)) ? void 0 : l[1]) || e.params.LibraryId || void 0),
            !f && "fields"in e && e.fields && (f = (null == (u = (0,
            n.getFieldValue)(e.fields, "CSSStyles", "").match(s)) ? void 0 : u[1]) || (null == (c = (0,
            n.getFieldValue)(e.fields, "Styles", "").match(s)) ? void 0 : c[1]) || (0,
            n.getFieldValue)(e.fields, "LibraryId", "") || void 0),
            !f && "attributes"in e && "string" == typeof e.attributes.class && (f = null == (d = e.attributes.class.match(s)) ? void 0 : d[1]),
            f && t.add(f);
            let h = e.placeholders || {};
            Object.keys(h).forEach(e => {
                o(h[e], t)
            }
            )
        }
    }
    ,
    62260: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.traverseComponent = t.traverseField = t.traversePlaceholder = t.getContentStylesheetUrl = t.getContentStylesheetLink = void 0;
        let n = r(70684)
          , i = /class=".*(\bck-content\b).*"/g;
        t.getContentStylesheetLink = (e, r, i=n.SITECORE_EDGE_URL_DEFAULT) => {
            if (!e.sitecore.route)
                return null;
            let s = {
                loadStyles: !1
            };
            return ((0,
            t.traverseComponent)(e.sitecore.route, s),
            s.loadStyles) ? {
                href: (0,
                t.getContentStylesheetUrl)(r, i),
                rel: "stylesheet"
            } : null
        }
        ,
        t.getContentStylesheetUrl = (e, t=n.SITECORE_EDGE_URL_DEFAULT) => `${t}/v1/files/pages/styles/content-styles.css?sitecoreContextId=${e}`,
        t.traversePlaceholder = (e, r) => {
            r.loadStyles || e.forEach(e => {
                (0,
                t.traverseComponent)(e, r)
            }
            )
        }
        ,
        t.traverseField = (e, r) => {
            e && !r.loadStyles && ("editable"in e && e.editable ? r.loadStyles = i.test(e.editable) : "value"in e && "string" == typeof e.value ? r.loadStyles = i.test(e.value) : "fields"in e ? Object.values(e.fields).forEach(e => {
                (0,
                t.traverseField)(e, r)
            }
            ) : Array.isArray(e) && e.forEach(e => {
                (0,
                t.traverseField)(e, r)
            }
            ))
        }
        ,
        t.traverseComponent = (e, r) => {
            if (r.loadStyles)
                return;
            "fields"in e && e.fields && Object.values(e.fields).forEach(e => {
                (0,
                t.traverseField)(e, r)
            }
            );
            let n = e.placeholders || {};
            Object.keys(n).forEach(e => {
                (0,
                t.traversePlaceholder)(n[e], r)
            }
            )
        }
    }
    ,
    63034: function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, s) {
                function o(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(o, a)
                }
                l((n = n.apply(e, t || [])).next())
            }
            )
        }
          , i = this && this.__rest || function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
            return r
        }
          , s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.NativeDataFetcher = void 0;
        let o = s(r(51298))
          , a = s(r(59912));
        class l {
            constructor(e={}) {
                this.config = e
            }
            fetch(e) {
                return n(this, arguments, void 0, function*(e, t={}) {
                    var r;
                    let n = this.config
                      , {debugger: s, fetch: l} = n
                      , u = i(n, ["debugger", "fetch"])
                      , c = Date.now()
                      , d = l || fetch
                      , f = s || o.default.http
                      , h = this.getRequestInit(Object.assign(Object.assign({}, u), t))
                      , p = [d(e, h)];
                    u.timeout && (this.abortTimeout = new a.default(u.timeout),
                    p.push(this.abortTimeout.start)),
                    f("Request initiated: %o", Object.assign({
                        url: e,
                        headers: this.extractDebugHeaders(h.headers)
                    }, h));
                    try {
                        let e = yield Promise.race(p).then(e => {
                            var t;
                            return null == (t = this.abortTimeout) || t.clear(),
                            e
                        }
                        )
                          , t = yield this.parseResponse(e, f);
                        if (!e.ok) {
                            let r = this.createError(e, t);
                            throw f("Response error: %o", r.response),
                            r
                        }
                        return f("Response in %dms: %o", Date.now() - c, {
                            status: e.status,
                            statusText: e.statusText,
                            headers: this.extractDebugHeaders(e.headers),
                            url: e.url,
                            data: t
                        }),
                        Object.assign(Object.assign({}, e), {
                            data: t
                        })
                    } catch (e) {
                        throw null == (r = this.abortTimeout) || r.clear(),
                        f("Request failed: %o", e),
                        e
                    }
                })
            }
            get(e) {
                return n(this, arguments, void 0, function*(e, t={}) {
                    return this.fetch(e, Object.assign({
                        method: "GET"
                    }, t))
                })
            }
            post(e, t) {
                return n(this, arguments, void 0, function*(e, t, r={}) {
                    return this.fetch(e, Object.assign({
                        method: "POST",
                        body: JSON.stringify(t)
                    }, r))
                })
            }
            delete(e) {
                return n(this, arguments, void 0, function*(e, t={}) {
                    return this.fetch(e, Object.assign({
                        method: "DELETE"
                    }, t))
                })
            }
            put(e, t) {
                return n(this, arguments, void 0, function*(e, t, r={}) {
                    return this.fetch(e, Object.assign({
                        method: "PUT",
                        body: JSON.stringify(t)
                    }, r))
                })
            }
            head(e, t={}) {
                return this.fetch(e, Object.assign({
                    method: "HEAD"
                }, t))
            }
            getRequestInit(e={}) {
                let t = new Headers(e.headers);
                return e.method || (e.method = e.body ? "POST" : "GET"),
                e.headers = t,
                e
            }
            extractDebugHeaders(e={}) {
                let t = {};
                return "string" != typeof (null == e ? void 0 : e.forEach) && e.forEach && (null == e || e.forEach( (e, r) => {
                    t[r] = e
                }
                )),
                t
            }
            parseResponse(e, t) {
                return n(this, void 0, void 0, function*() {
                    let r = e.headers.get("Content-Type") || "";
                    try {
                        if (r.includes("application/json"))
                            return yield e.json();
                        return yield e.text()
                    } catch (e) {
                        t("Response parsing error: %o", e);
                        return
                    }
                })
            }
            createError(e, t) {
                return Object.assign(Object.assign({}, Error(`HTTP ${e.status} ${e.statusText}`)), {
                    response: {
                        status: e.status,
                        statusText: e.statusText,
                        headers: this.extractDebugHeaders(e.headers),
                        data: t
                    }
                })
            }
        }
        t.NativeDataFetcher = l
    },
    66066: function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var i = Object.getOwnPropertyDescriptor(t, r);
            (!i || ("get"in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, n, i)
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , s = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return i(t, e),
            t
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.mediaApi = void 0,
        t.mediaApi = s(r(3799))
    },
    69630: (e, t, r) => {
        e.exports = function(e) {
            function t(e) {
                let r, i, s, o = null;
                function a(...e) {
                    if (!a.enabled)
                        return;
                    let n = Number(new Date);
                    a.diff = n - (r || n),
                    a.prev = r,
                    a.curr = n,
                    r = n,
                    e[0] = t.coerce(e[0]),
                    "string" != typeof e[0] && e.unshift("%O");
                    let i = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, n) => {
                        if ("%%" === r)
                            return "%";
                        i++;
                        let s = t.formatters[n];
                        if ("function" == typeof s) {
                            let t = e[i];
                            r = s.call(a, t),
                            e.splice(i, 1),
                            i--
                        }
                        return r
                    }
                    ),
                    t.formatArgs.call(a, e),
                    (a.log || t.log).apply(a, e)
                }
                return a.namespace = e,
                a.useColors = t.useColors(),
                a.color = t.selectColor(e),
                a.extend = n,
                a.destroy = t.destroy,
                Object.defineProperty(a, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: () => null !== o ? o : (i !== t.namespaces && (i = t.namespaces,
                    s = t.enabled(e)),
                    s),
                    set: e => {
                        o = e
                    }
                }),
                "function" == typeof t.init && t.init(a),
                a
            }
            function n(e, r) {
                let n = t(this.namespace + (void 0 === r ? ":" : r) + e);
                return n.log = this.log,
                n
            }
            function i(e, t) {
                let r = 0
                  , n = 0
                  , i = -1
                  , s = 0;
                for (; r < e.length; )
                    if (n < t.length && (t[n] === e[r] || "*" === t[n]))
                        "*" === t[n] ? (i = n,
                        s = r) : r++,
                        n++;
                    else {
                        if (-1 === i)
                            return !1;
                        n = i + 1,
                        r = ++s
                    }
                for (; n < t.length && "*" === t[n]; )
                    n++;
                return n === t.length
            }
            return t.debug = t,
            t.default = t,
            t.coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }
            ,
            t.disable = function() {
                let e = [...t.names, ...t.skips.map(e => "-" + e)].join(",");
                return t.enable(""),
                e
            }
            ,
            t.enable = function(e) {
                for (let r of (t.save(e),
                t.namespaces = e,
                t.names = [],
                t.skips = [],
                ("string" == typeof e ? e : "").trim().replace(" ", ",").split(",").filter(Boolean)))
                    "-" === r[0] ? t.skips.push(r.slice(1)) : t.names.push(r)
            }
            ,
            t.enabled = function(e) {
                for (let r of t.skips)
                    if (i(e, r))
                        return !1;
                for (let r of t.names)
                    if (i(e, r))
                        return !0;
                return !1
            }
            ,
            t.humanize = r(3139),
            t.destroy = function() {
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
            }
            ,
            Object.keys(e).forEach(r => {
                t[r] = e[r]
            }
            ),
            t.names = [],
            t.skips = [],
            t.formatters = {},
            t.selectColor = function(e) {
                let r = 0;
                for (let t = 0; t < e.length; t++)
                    r = (r << 5) - r + e.charCodeAt(t) | 0;
                return t.colors[Math.abs(r) % t.colors.length]
            }
            ,
            t.enable(t.load()),
            t
        }
    }
    ,
    70684: (e, t) => {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.HIDDEN_RENDERING_NAME = t.SITECORE_EDGE_URL_DEFAULT = t.siteNameError = t.JSS_MODE = t.FETCH_WITH = t.SitecoreTemplateId = void 0,
        function(e) {
            e.JssApp = "061cba1554744b918a0617903b102b82",
            e.DictionaryEntry = "6d1cd89719364a3aa511289a94c2a7b1"
        }(r || (t.SitecoreTemplateId = r = {})),
        t.FETCH_WITH = {
            GRAPHQL: "GraphQL",
            REST: "REST"
        },
        t.JSS_MODE = {
            CONNECTED: "connected",
            DISCONNECTED: "disconnected"
        },
        t.siteNameError = "The siteName cannot be empty",
        t.SITECORE_EDGE_URL_DEFAULT = "https://edge-platform.sitecorecloud.io",
        t.HIDDEN_RENDERING_NAME = "Hidden Rendering"
    }
    ,
    71673: (e, t, r) => {
        var n = r(65364);
        t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
            !this.useColors)
                return;
            let r = "color: " + this.color;
            t.splice(1, 0, r, "color: inherit");
            let n = 0
              , i = 0;
            t[0].replace(/%[a-zA-Z%]/g, e => {
                "%%" !== e && (n++,
                "%c" === e && (i = n))
            }
            ),
            t.splice(i, 0, r)
        }
        ,
        t.save = function(e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
            } catch (e) {}
        }
        ,
        t.load = function() {
            let e;
            try {
                e = t.storage.getItem("debug")
            } catch (e) {}
            return !e && void 0 !== n && "env"in n && (e = n.env.DEBUG),
            e
        }
        ,
        t.useColors = function() {
            let e;
            return "undefined" != typeof window && !!window.process && ("renderer" === window.process.type || !!window.process.__nwjs) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        }
        ,
        t.storage = function() {
            try {
                return localStorage
            } catch (e) {}
        }(),
        t.destroy = ( () => {
            let e = !1;
            return () => {
                e || (e = !0,
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }
        }
        )(),
        t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
        t.log = console.debug || console.log || ( () => {}
        ),
        e.exports = r(69630)(t);
        let {formatters: i} = e.exports;
        i.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    }
    ,
    72454: function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, s) {
                function o(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(o, a)
                }
                l((n = n.apply(e, t || [])).next())
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
        t.GraphQLLayoutService = t.GRAPHQL_LAYOUT_QUERY_NAME = void 0;
        let s = r(52946)
          , o = i(r(51298));
        t.GRAPHQL_LAYOUT_QUERY_NAME = "JssLayoutQuery";
        class a extends s.LayoutServiceBase {
            constructor(e) {
                super(),
                this.serviceConfig = e,
                this.graphQLClient = this.getGraphQLClient()
            }
            fetchLayoutData(e, t) {
                return n(this, void 0, void 0, function*() {
                    var r, n;
                    let i = this.getLayoutQuery(e, t);
                    o.default.layout("fetching layout data for %s %s %s", e, t, this.serviceConfig.siteName);
                    let s = yield this.graphQLClient.request(i);
                    return (null == (n = null == (r = null == s ? void 0 : s.layout) ? void 0 : r.item) ? void 0 : n.rendered) || {
                        sitecore: {
                            context: {
                                pageEditing: !1,
                                language: t
                            },
                            route: null
                        }
                    }
                })
            }
            getGraphQLClient() {
                if (!this.serviceConfig.clientFactory)
                    throw Error("clientFactory needs to be provided when initializing GraphQL client.");
                return this.serviceConfig.clientFactory({
                    debugger: o.default.layout,
                    retries: this.serviceConfig.retries,
                    retryStrategy: this.serviceConfig.retryStrategy
                })
            }
            getLayoutQuery(e, r) {
                let n = r ? `, language:"${r}"` : ""
                  , i = this.serviceConfig.formatLayoutQuery ? this.serviceConfig.formatLayoutQuery(this.serviceConfig.siteName, e, r) : `layout(site:"${this.serviceConfig.siteName}", routePath:"${e}"${n})`;
                return `query ${t.GRAPHQL_LAYOUT_QUERY_NAME} {
      ${i}{
        item {
          rendered
        }
      }
    }`
            }
        }
        t.GraphQLLayoutService = a
    },
    76456: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "warnOnce", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = e => {}
    }
    ,
    78289: (e, t, r) => {
        "use strict";
        r.d(t, {
            _: () => m
        });
        var n = r(66066)
          , i = r(95062)
          , s = r.n(i)
          , o = r(14232)
          , a = r(45280)
          , l = r(26093)
          , u = r(21873)
          , c = r(618)
          , d = r(33358)
          , f = function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
            return r
        };
        let h = (e, ...t) => o.createElement("span", Object.assign({
            className: "sc-image-wrapper"
        }, t, {
            dangerouslySetInnerHTML: {
                __html: e
            }
        }))
          , p = (e, t, r) => {
            var {src: i, srcSet: s} = e
              , o = f(e, ["src", "srcSet"]);
            if (!i)
                return null;
            (0,
            a.B$)(o);
            let l = Object.assign({}, o)
              , u = n.mediaApi.updateImageUrl(i, t, r);
            return s && (l.srcSet = n.mediaApi.getSrcSet(u, s, t, r)),
            l.src = u,
            l
        }
          , g = (e, t, r, i) => {
            let s = n.mediaApi.findEditorImageTag(e.editable);
            if (!s)
                return h(e.editable);
            let o = p(Object.assign(Object.assign({}, (0,
            a.f_)(s.attrs)), i), t, r);
            if (!o)
                return h(e.editable);
            let l = `<img ${(0,
            a.ns)(o)} />`;
            return h(e.editable.replace(s.imgTag, l))
        }
          , m = (0,
        l.O)((0,
        u.N)(e => {
            var {editable: t=!0, imageParams: r, field: n, mediaUrlPrefix: i} = e
              , s = f(e, ["editable", "imageParams", "field", "mediaUrlPrefix"]);
            if (!n || !n.editable && (0,
            d.isFieldValueEmpty)(n))
                return null;
            if (t && n.editable)
                return g(n, r, i, s);
            let a = n.src ? n : n.value;
            if (!a)
                return null;
            a.metadata && delete a.metadata;
            let l = p(Object.assign(Object.assign({}, a), s), r, i);
            return l ? o.createElement("img", Object.assign({}, l)) : null
        }
        , {
            defaultEmptyFieldEditingComponent: c.n
        }));
        m.propTypes = {
            field: s().oneOfType([s().shape({
                src: s().string
            }), s().shape({
                value: s().object,
                editable: s().string
            })]),
            editable: s().bool,
            mediaUrlPrefix: s().instanceOf(RegExp),
            imageParams: s().objectOf(s().oneOfType([s().number.isRequired, s().string.isRequired]).isRequired),
            emptyFieldEditingComponent: s().oneOfType([s().object, s().func])
        },
        m.displayName = "Image"
    }
    ,
    79706: (e, t, r) => {
        "use strict";
        var n = r(3717);
        function i() {}
        function s() {}
        s.resetWarningCache = i,
        e.exports = function() {
            function e(e, t, r, i, s, o) {
                if (o !== n) {
                    var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw a.name = "Invariant Violation",
                    a
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var r = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: s,
                resetWarningCache: i
            };
            return r.PropTypes = r,
            r
        }
    }
    ,
    86121: function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, s) {
                function o(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(o, a)
                }
                l((n = n.apply(e, t || [])).next())
            }
            )
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ResponseError = void 0,
        t.fetchData = function(e, t) {
            return n(this, arguments, void 0, function*(e, t, r={}) {
                return (yield t((0,
                i.resolveUrl)(e, r))).data
            })
        }
        ;
        let i = r(2654);
        class s extends Error {
            constructor(e, t) {
                super(e),
                Object.setPrototypeOf(this, s.prototype),
                this.response = t
            }
        }
        t.ResponseError = s
    },
    87711: e => {
        "use strict";
        e.exports = function(e, t) {
            if (t = t.split(":")[0],
            !(e *= 1))
                return !1;
            switch (t) {
            case "http":
            case "ws":
                return 80 !== e;
            case "https":
            case "wss":
                return 443 !== e;
            case "ftp":
                return 21 !== e;
            case "gopher":
                return 70 !== e;
            case "file":
                return !1
            }
            return 0 !== e
        }
    }
    ,
    91726: (e, t, r) => {
        "use strict";
        t.mV = t.lA = t.NY = t.fF = void 0,
        r(18076);
        var n = r(95719);
        Object.defineProperty(t, "fF", {
            enumerable: !0,
            get: function() {
                return n.DEFAULT_PLACEHOLDER_UID
            }
        }),
        Object.defineProperty(t, "NY", {
            enumerable: !0,
            get: function() {
                return n.HorizonEditor
            }
        });
        var i = r(33018);
        Object.defineProperty(t, "lA", {
            enumerable: !0,
            get: function() {
                return i.mapButtonToCommand
            }
        });
        var s = r(4044);
        Object.defineProperty(t, "mV", {
            enumerable: !0,
            get: function() {
                return s.MetadataKind
            }
        })
    }
    ,
    93327: (e, t, r) => {
        "use strict";
        r.d(t, {
            Ge: () => c,
            Gu: () => u,
            q3: () => l
        });
        var n = r(14232)
          , i = r(95062)
          , s = r.n(i)
          , o = r(42059)
          , a = r.n(o);
        let l = n.createContext({})
          , u = n.createContext({});
        class c extends n.Component {
            constructor(e) {
                super(e),
                this.setContext = e => {
                    this.setState({
                        context: e.sitecore ? this.constructContext(e) : Object.assign({}, e)
                    })
                }
                ;
                let t = this.constructContext(e.layoutData);
                this.state = {
                    context: t,
                    setContext: this.setContext
                }
            }
            constructContext(e) {
                var t;
                return e ? Object.assign({
                    route: e.sitecore.route,
                    itemId: null == (t = e.sitecore.route) ? void 0 : t.itemId
                }, e.sitecore.context) : {
                    pageEditing: !1
                }
            }
            componentDidUpdate(e) {
                if (!a()(e.layoutData, this.props.layoutData))
                    return void this.setContext(this.props.layoutData)
            }
            render() {
                return n.createElement(u.Provider, {
                    value: this.props.componentFactory
                }, n.createElement(l.Provider, {
                    value: this.state
                }, this.props.children))
            }
        }
        c.propTypes = {
            children: s().any.isRequired,
            componentFactory: s().func,
            layoutData: s().shape({
                sitecore: s().shape({
                    context: s().any,
                    route: s().any
                })
            })
        },
        c.displayName = "SitecoreContext"
    }
    ,
    94989: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return C
            }
        });
        let n = r(64252)
          , i = r(88365)
          , s = r(37876)
          , o = i._(r(14232))
          , a = n._(r(98477))
          , l = n._(r(97918))
          , u = r(95197)
          , c = r(63258)
          , d = r(81854);
        r(76456);
        let f = r(54387)
          , h = n._(r(49411))
          , p = r(51112)
          , g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(e, t, r, n, i, s, o) {
            let a = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a,
            ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && i(!0),
                    null == r ? void 0 : r.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let n = !1
                          , i = !1;
                        r.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => n,
                            isPropagationStopped: () => i,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                n = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                i = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == n ? void 0 : n.current) && n.current(e)
                }
            }
            ))
        }
        function y(e) {
            return o.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        let v = (0,
        o.forwardRef)( (e, t) => {
            let {src: r, srcSet: n, sizes: i, height: a, width: l, decoding: u, className: c, style: d, fetchPriority: f, placeholder: h, loading: g, unoptimized: v, fill: b, onLoadRef: C, onLoadingCompleteRef: E, setBlurComplete: _, setShowAltText: O, sizesInput: w, onLoad: j, onError: S, ...P} = e
              , F = (0,
            o.useCallback)(e => {
                e && (S && (e.src = e.src),
                e.complete && m(e, h, C, E, _, v, w))
            }
            , [r, h, C, E, _, S, v, w])
              , x = (0,
            p.useMergedRef)(t, F);
            return (0,
            s.jsx)("img", {
                ...P,
                ...y(f),
                loading: g,
                width: l,
                height: a,
                decoding: u,
                "data-nimg": b ? "fill" : "1",
                className: c,
                style: d,
                sizes: i,
                srcSet: n,
                src: r,
                ref: x,
                onLoad: e => {
                    m(e.currentTarget, h, C, E, _, v, w)
                }
                ,
                onError: e => {
                    O(!0),
                    "empty" !== h && _(!0),
                    S && S(e)
                }
            })
        }
        );
        function b(e) {
            let {isAppRouter: t, imgAttributes: r} = e
              , n = {
                as: "image",
                imageSrcSet: r.srcSet,
                imageSizes: r.sizes,
                crossOrigin: r.crossOrigin,
                referrerPolicy: r.referrerPolicy,
                ...y(r.fetchPriority)
            };
            return t && a.default.preload ? (a.default.preload(r.src, n),
            null) : (0,
            s.jsx)(l.default, {
                children: (0,
                s.jsx)("link", {
                    rel: "preload",
                    href: r.srcSet ? void 0 : r.src,
                    ...n
                }, "__nimg-" + r.src + r.srcSet + r.sizes)
            })
        }
        let C = (0,
        o.forwardRef)( (e, t) => {
            let r = (0,
            o.useContext)(f.RouterContext)
              , n = (0,
            o.useContext)(d.ImageConfigContext)
              , i = (0,
            o.useMemo)( () => {
                var e;
                let t = g || n || c.imageConfigDefault
                  , r = [...t.deviceSizes, ...t.imageSizes].sort( (e, t) => e - t)
                  , i = t.deviceSizes.sort( (e, t) => e - t)
                  , s = null == (e = t.qualities) ? void 0 : e.sort( (e, t) => e - t);
                return {
                    ...t,
                    allSizes: r,
                    deviceSizes: i,
                    qualities: s
                }
            }
            , [n])
              , {onLoad: a, onLoadingComplete: l} = e
              , p = (0,
            o.useRef)(a);
            (0,
            o.useEffect)( () => {
                p.current = a
            }
            , [a]);
            let m = (0,
            o.useRef)(l);
            (0,
            o.useEffect)( () => {
                m.current = l
            }
            , [l]);
            let[y,C] = (0,
            o.useState)(!1)
              , [E,_] = (0,
            o.useState)(!1)
              , {props: O, meta: w} = (0,
            u.getImgProps)(e, {
                defaultLoader: h.default,
                imgConf: i,
                blurComplete: y,
                showAltText: E
            });
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(v, {
                    ...O,
                    unoptimized: w.unoptimized,
                    placeholder: w.placeholder,
                    fill: w.fill,
                    onLoadRef: p,
                    onLoadingCompleteRef: m,
                    setBlurComplete: C,
                    setShowAltText: _,
                    sizesInput: e.sizes,
                    ref: t
                }), w.priority ? (0,
                s.jsx)(b, {
                    isAppRouter: !r,
                    imgAttributes: O
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    95062: (e, t, r) => {
        e.exports = r(79706)()
    }
    ,
    95197: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return l
            }
        }),
        r(76456);
        let n = r(10510)
          , i = r(63258)
          , s = ["-moz-initial", "fill", "none", "scale-down", void 0];
        function o(e) {
            return void 0 !== e.default
        }
        function a(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function l(e, t) {
            var r, l;
            let u, c, d, {src: f, sizes: h, unoptimized: p=!1, priority: g=!1, loading: m, className: y, quality: v, width: b, height: C, fill: E=!1, style: _, overrideSrc: O, onLoad: w, onLoadingComplete: j, placeholder: S="empty", blurDataURL: P, fetchPriority: F, decoding: x="async", layout: R, objectFit: D, objectPosition: I, lazyBoundary: A, lazyRoot: L, ...M} = e, {imgConf: T, showAltText: N, blurComplete: k, defaultLoader: U} = t, $ = T || i.imageConfigDefault;
            if ("allSizes"in $)
                u = $;
            else {
                let e = [...$.deviceSizes, ...$.imageSizes].sort( (e, t) => e - t)
                  , t = $.deviceSizes.sort( (e, t) => e - t)
                  , n = null == (r = $.qualities) ? void 0 : r.sort( (e, t) => e - t);
                u = {
                    ...$,
                    allSizes: e,
                    deviceSizes: t,
                    qualities: n
                }
            }
            if (void 0 === U)
                throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
            let z = M.loader || U;
            delete M.loader,
            delete M.srcSet;
            let G = "__next_img_default"in z;
            if (G) {
                if ("custom" === u.loader)
                    throw Object.defineProperty(Error('Image with src "' + f + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
            } else {
                let e = z;
                z = t => {
                    let {config: r, ...n} = t;
                    return e(n)
                }
            }
            if (R) {
                "fill" === R && (E = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[R];
                e && (_ = {
                    ..._,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[R];
                t && !h && (h = t)
            }
            let q = ""
              , H = a(b)
              , Q = a(C);
            if ((l = f) && "object" == typeof l && (o(l) || void 0 !== l.src)) {
                let e = o(f) ? f.default : f;
                if (!e.src)
                    throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                if (!e.height || !e.width)
                    throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                if (c = e.blurWidth,
                d = e.blurHeight,
                P = P || e.blurDataURL,
                q = e.src,
                !E)
                    if (H || Q) {
                        if (H && !Q) {
                            let t = H / e.width;
                            Q = Math.round(e.height * t)
                        } else if (!H && Q) {
                            let t = Q / e.height;
                            H = Math.round(e.width * t)
                        }
                    } else
                        H = e.width,
                        Q = e.height
            }
            let B = !g && ("lazy" === m || void 0 === m);
            (!(f = "string" == typeof f ? f : q) || f.startsWith("data:") || f.startsWith("blob:")) && (p = !0,
            B = !1),
            u.unoptimized && (p = !0),
            G && !u.dangerouslyAllowSVG && f.split("?", 1)[0].endsWith(".svg") && (p = !0);
            let V = a(v)
              , W = Object.assign(E ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: D,
                objectPosition: I
            } : {}, N ? {} : {
                color: "transparent"
            }, _)
              , Y = k || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            n.getImageBlurSvg)({
                widthInt: H,
                heightInt: Q,
                blurWidth: c,
                blurHeight: d,
                blurDataURL: P || "",
                objectFit: W.objectFit
            }) + '")' : 'url("' + S + '")'
              , J = s.includes(W.objectFit) ? "fill" === W.objectFit ? "100% 100%" : "cover" : W.objectFit
              , Z = Y ? {
                backgroundSize: J,
                backgroundPosition: W.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y
            } : {}
              , K = function(e) {
                let {config: t, src: r, unoptimized: n, width: i, quality: s, sizes: o, loader: a} = e;
                if (n)
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(e, t, r) {
                    let {deviceSizes: n, allSizes: i} = e;
                    if (r) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let n; n = e.exec(r); )
                            t.push(parseInt(n[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: i.filter(t => t >= n[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: i,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: n,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                        kind: "x"
                    }
                }(t, i, o)
                  , c = l.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: l.map( (e, n) => a({
                        config: t,
                        src: r,
                        quality: s,
                        width: e
                    }) + " " + ("w" === u ? e : n + 1) + u).join(", "),
                    src: a({
                        config: t,
                        src: r,
                        quality: s,
                        width: l[c]
                    })
                }
            }({
                config: u,
                src: f,
                unoptimized: p,
                width: H,
                quality: V,
                sizes: h,
                loader: z
            });
            return {
                props: {
                    ...M,
                    loading: B ? "lazy" : m,
                    fetchPriority: F,
                    width: H,
                    height: Q,
                    decoding: x,
                    className: y,
                    style: {
                        ...W,
                        ...Z
                    },
                    sizes: K.sizes,
                    srcSet: K.srcSet,
                    src: O || K.src
                },
                meta: {
                    unoptimized: p,
                    priority: g,
                    placeholder: S,
                    fill: E
                }
            }
        }
    }
    ,
    95719: function(e, t, r) {
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
        let i = n(r(39019));
        t.DEFAULT_PLACEHOLDER_UID = "00000000-0000-0000-0000-000000000000",
        t.QUERY_PARAM_EDITING_SECRET = "secret",
        t.PAGES_EDITING_MARKER = "jss-hrz-editing",
        t.EDITING_ALLOWED_ORIGINS = ["https://pages.sitecorecloud.io"];
        class s {
            static isActive() {
                if ((0,
                i.default)())
                    return !1;
                let e = window.Sitecore;
                return !!(e && e.PageModes && e.PageModes.ChromeManager)
            }
            static resetChromes() {
                (0,
                i.default)() || window.Sitecore.PageModes.ChromeManager.resetChromes()
            }
        }
        t.ExperienceEditor = s,
        t.ChromeRediscoveryGlobalFunctionName = {
            name: "Sitecore.Horizon.ResetChromes"
        };
        class o {
            static isActive() {
                return !(0,
                i.default)() && (window.location.search.indexOf("sc_headless_mode=edit") > -1 || !!window.document.getElementById(t.PAGES_EDITING_MARKER))
            }
            static resetChromes() {
                !(0,
                i.default)() && window[t.ChromeRediscoveryGlobalFunctionName.name] && window[t.ChromeRediscoveryGlobalFunctionName.name]()
            }
        }
        t.HorizonEditor = o,
        t.isEditorActive = () => s.isActive() || o.isActive(),
        t.resetEditorChromes = () => {
            s.isActive() ? s.resetChromes() : o.isActive() && o.resetChromes()
        }
        ,
        t.handleEditorAnchors = () => {
            if (!window || !s.isActive())
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
    97918: (e, t, r) => {
        "use strict";
        var n = r(65364);
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
                return m
            },
            defaultHead: function() {
                return f
            }
        });
        let i = r(64252)
          , s = r(88365)
          , o = r(37876)
          , a = s._(r(14232))
          , l = i._(r(12479))
          , u = r(55066)
          , c = r(74324)
          , d = r(18438);
        function f(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            o.jsx)("meta", {
                charSet: "utf-8"
            }, "charset")];
            return e || t.push((0,
            o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            }, "viewport")),
            t
        }
        function h(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        r(76456);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function g(e, t) {
            let {inAmpMode: r} = t;
            return e.reduce(h, []).reverse().concat(f(r).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , r = new Set
                  , n = {};
                return i => {
                    let s = !0
                      , o = !1;
                    if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                        o = !0;
                        let t = i.key.slice(i.key.indexOf("$") + 1);
                        e.has(t) ? s = !1 : e.add(t)
                    }
                    switch (i.type) {
                    case "title":
                    case "base":
                        t.has(i.type) ? s = !1 : t.add(i.type);
                        break;
                    case "meta":
                        for (let e = 0, t = p.length; e < t; e++) {
                            let t = p[e];
                            if (i.props.hasOwnProperty(t))
                                if ("charSet" === t)
                                    r.has(t) ? s = !1 : r.add(t);
                                else {
                                    let e = i.props[t]
                                      , r = n[t] || new Set;
                                    ("name" !== t || !o) && r.has(e) ? s = !1 : (r.add(e),
                                    n[t] = r)
                                }
                        }
                    }
                    return s
                }
            }()).reverse().map( (e, t) => {
                let i = e.key || t;
                if (n.env.__NEXT_OPTIMIZE_FONTS && !r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                    let t = {
                        ...e.props || {}
                    };
                    return t["data-href"] = t.href,
                    t.href = void 0,
                    t["data-optimized-fonts"] = !0,
                    a.default.cloneElement(e, t)
                }
                return a.default.cloneElement(e, {
                    key: i
                })
            }
            )
        }
        let m = function(e) {
            let {children: t} = e
              , r = (0,
            a.useContext)(u.AmpStateContext)
              , n = (0,
            a.useContext)(c.HeadManagerContext);
            return (0,
            o.jsx)(l.default, {
                reduceComponentsToState: g,
                headManager: n,
                inAmpMode: (0,
                d.isInAmpMode)(r),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
}]);
