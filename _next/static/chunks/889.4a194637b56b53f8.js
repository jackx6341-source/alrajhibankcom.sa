"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[889], {
    10340: (e, a, t) => {
        t.d(a, {
            e: () => r
        });
        let r = e => {
            if (!e)
                return "";
            if (/^https?:\/\//.test(e))
                try {
                    let a = new URL(e);
                    return a.pathname + a.search + a.hash
                } catch (e) {}
            return e.startsWith("-/media") ? "/" + e : e.startsWith("/") ? e : "/" + e
        }
    }
    ,
    18791: (e, a, t) => {
        t.d(a, {
            A: () => c
        });
        var r = t(37876)
          , n = t(14232)
          , o = t(1138);
        let l = (0,
        n.forwardRef)( (e, a) => {
            let {size: t="md", variant: n="default", className: l="", asChild: c=!1, shape: s="default", outline: i=!1, width: b="default", loading: d=!1, ...u} = e
              , m = "";
            d && ("sm" === t ? m = "before:arb-w-4 before:arb-h-4" : "xs" === t && (m = "before:arb-w-3 before:arb-h-3"));
            let f = c ? o.DX : "button";
            return (0,
            r.jsx)(f, {
                ref: a,
                className: "arb-btn ".concat("default" === s && "link" !== n ? "arb-min-w-xxl" : "", " ").concat({
                    lg: "arb-btn-lg",
                    md: "arb-btn-md",
                    sm: "arb-btn-sm",
                    xs: "arb-btn-xs"
                }[t], " ").concat({
                    default: "",
                    neutral: "arb-btn-neutral",
                    primary: "arb-btn-primary",
                    "primary-reverse": "arb-btn-primary-reverse",
                    secondary: "arb-btn-secondary",
                    accent: "arb-btn-accent",
                    info: "arb-btn-info",
                    success: "arb-btn-success",
                    warning: "arb-btn-warning",
                    error: "arb-btn-error",
                    ghost: "arb-btn-ghost",
                    link: "arb-btn-link",
                    glass: "arb-btn-glass"
                }[n], " ").concat({
                    default: "circle" === s || "square" === s ? "" : "arb-w-fit",
                    wide: "arb-btn-wide",
                    block: "arb-btn-block"
                }[null != b ? b : "default"], " ").concat({
                    default: "",
                    circle: "arb-btn-circle",
                    square: "arb-btn-square",
                    rounded: "arb-rounded-full"
                }[null != s ? s : "default"], " ").concat(i ? "arb-btn-outline" : "", " ").concat(d ? "before:arb-loading before:arb-loading-spinner" : "", " ").concat(m, " ").concat(l),
                ...u
            })
        }
        );
        l.displayName = "ArbButton";
        let c = l
    }
    ,
    55261: (e, a, t) => {
        t.d(a, {
            A: () => d
        });
        var r = t(37876)
          , n = t(14232)
          , o = t(54587)
          , l = t.n(o)
          , c = t(5624)
          , s = t(78289)
          , i = t(10340);
        let b = (0,
        n.memo)(e => {
            let {image: a, className: t, altValue: o, ImageHeight: b, ImageWidth: d, style: u, priorityValue: m, fillValue: f, onLoad: h} = e
              , {sitecoreContext: p} = (0,
            c.n)()
              , g = e => a => {
                console.error("Image failed to load:", (0,
                i.e)(e), a),
                h && h()
            }
              , w = (0,
            n.useMemo)( () => "string" == typeof a ? (0,
            r.jsx)(l(), {
                src: (0,
                i.e)(a),
                width: null != d ? d : 100,
                height: null != b ? b : 100,
                className: t,
                unoptimized: !0,
                alt: null != o ? o : "",
                priority: m,
                onLoad: h,
                onError: g(a)
            }) : null, [a, d, b, t, o, m, h])
              , x = (0,
            n.useMemo)( () => {
                var e, n, c;
                return a && "string" != typeof a && (null == (e = a.value) ? void 0 : e.src) ? (null == p ? void 0 : p.pageState) === "edit" ? (0,
                r.jsx)(s._, {
                    field: a,
                    className: t
                }) : (0,
                r.jsx)(l(), {
                    src: (0,
                    i.e)(a.value.src),
                    width: Number(d) || Number(null == (n = a.value) ? void 0 : n.width) || 100,
                    height: Number(b) || Number(null == (c = a.value) ? void 0 : c.height) || 100,
                    className: t,
                    style: u,
                    unoptimized: !0,
                    alt: null != o ? o : "",
                    fill: f,
                    priority: m,
                    onLoad: h,
                    onError: g(a.value.src)
                }) : (h && h(),
                null)
            }
            , [a, null == p ? void 0 : p.pageState, t, d, b, u, o, f, m, h]);
            return w || x
        }
        );
        b.displayName = "ArbImage";
        let d = b
    }
    ,
    94889: (e, a, t) => {
        t.r(a),
        t.d(a, {
            default: () => u
        });
        var r = t(37876)
          , n = t(14232)
          , o = t(18791)
          , l = t(81345)
          , c = t(55261)
          , s = t(2650)
          , i = t(38748);
        let b = async e => {
            let {endpoint: a, knownIdentifier: t} = e
              , r = "api/sitecore/Consent/".concat(a, "?source=").concat(i.sitecoreSiteName, "&knownIdentifier=").concat(t);
            try {
                let e = await fetch(r, {
                    method: "GET"
                });
                e.ok ? console.log("Consent ".concat(a, " API success"), e.status) : console.error("Consent ".concat(a, " API failed"), e.status)
            } catch (e) {
                console.error("Consent ".concat(a, " API error"), e)
            }
        }
          , d = () => {
            let {t: e} = (0,
            s.s9)()
              , [a,t] = (0,
            n.useState)(!1)
              , [i,d] = (0,
            n.useState)(null)
              , u = e => {
                if ("undefined" == typeof document)
                    return null;
                let a = document.cookie.split("; ").find(a => a.startsWith("".concat(e, "=")));
                return a ? decodeURIComponent(a.split("=")[1]) : null
            }
              , m = () => {
                let e = u("cookieConsent");
                t(!e || "accepted" !== e && "rejected" !== e)
            }
            ;
            (0,
            n.useEffect)( () => {
                let e = async () => {
                    try {
                        let e = await fetch("/api/get-analytics-cookie")
                          , a = await e.json();
                        a.knownIdentifier ? d(a.knownIdentifier) : console.warn("SC_ANALYTICS_GLOBAL_COOKIE not found on server.")
                    } catch (e) {
                        console.warn("Error fetching analytics cookie:", e)
                    }
                }
                ;
                m(),
                e();
                let a = setInterval(m, 1e3);
                return () => clearInterval(a)
            }
            , []);
            let f = async () => {
                try {
                    i && await b({
                        endpoint: "Give",
                        knownIdentifier: i
                    }),
                    (0,
                    l.Qt)("cookieConsent", "accepted"),
                    document.cookie = "cookieConsent=accepted; path=/; max-age=31536000; SameSite=Lax",
                    setTimeout( () => {
                        m()
                    }
                    , 100),
                    t(!1)
                } catch (e) {
                    console.error("Error accepting cookie:", e)
                }
            }
              , h = async () => {
                try {
                    i && await b({
                        endpoint: "Revoke",
                        knownIdentifier: i
                    }),
                    (0,
                    l.Qt)("cookieConsent", "rejected"),
                    document.cookie = "cookieConsent=rejected; path=/; max-age=31536000; SameSite=Lax",
                    await fetch("/api/remove-analytics-cookie"),
                    setTimeout( () => {
                        m()
                    }
                    , 100),
                    t(!1)
                } catch (e) {
                    console.error("Error rejecting cookie:", e)
                }
            }
            ;
            return (0,
            r.jsx)("section", {
                className: "arb-bg-white arb-px-0 arb-fixed arb-bottom-0 arb-left-0 arb-z-50 arb-w-full arb-shadow-base-200 arb-shadow-3xl arb-transition-transform arb-duration-500 ".concat(a ? "arb-translate-y-0" : "arb-translate-y-full"),
                children: (0,
                r.jsx)("div", {
                    className: "arb-w-full arb-full-bleed-container",
                    children: (0,
                    r.jsxs)("div", {
                        className: "lg:arb-px-content-padding arb-p-4 arb-flex arb-flex-col arb-text-start max-sm:arb-text-center md:arb-flex-row arb-justify-between arb-items-center arb-gap-2 md:arb-gap-16",
                        children: [(0,
                        r.jsx)(c.A, {
                            image: "/img/Alrajhi/AlrajhiLogo.png",
                            className: "md:arb-max-h-20 md:arb-max-w-20 arb-max-w-12"
                        }), (0,
                        r.jsx)("p", {
                            className: "arb-text-base-content/65 arb-font-normal arb-leading-6 md:arb-leading-9",
                            children: e("Cookies_Message")
                        }), (0,
                        r.jsxs)("div", {
                            className: "arb-flex arb-flex-col arb-gap-2",
                            children: [(0,
                            r.jsx)(o.A, {
                                variant: "primary",
                                width: "wide",
                                size: "md",
                                onClick: h,
                                outline: !0,
                                children: e("Cookies_Reject")
                            }), (0,
                            r.jsx)(o.A, {
                                variant: "primary",
                                width: "wide",
                                size: "md",
                                onClick: f,
                                children: e("Cookies_Approve")
                            })]
                        })]
                    })
                })
            })
        }
          , u = () => (0,
        r.jsx)(d, {})
    }
}]);
