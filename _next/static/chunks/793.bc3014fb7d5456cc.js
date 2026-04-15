"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[793], {
    25793: (e, t, r) => {
        r.r(t),
        r.d(t, {
            reprocessDOM: () => d,
            setupDOMObserver: () => n,
            setupLanguageDOMObserver: () => c
        });
        let s = e => e ? e.replace(/\bريال سعودي\b/g, '<span class="arb-font-icon arb-text-base arb-icon-sar"></span>').replace(/\bريال\b/g, '<span class="arb-font-icon arb-text-base arb-icon-sar"></span>').replace(/\bSAR\b/g, '<span class="arb-font-icon arb-text-base arb-icon-sar"></span>').replace(/§/g, '<span class="arb-font-icon arb-text-base arb-icon-sar"></span>') : e
          , o = e => {
            let t = e => {
                if (e.nodeType === Node.TEXT_NODE && e.textContent) {
                    let t = e.textContent;
                    if (t.match(/\bريال سعودي\b|\bريال\b|\bSAR\b|§/)) {
                        let r = document.createElement("span");
                        r.innerHTML = s(t),
                        e.parentNode && e.parentNode.replaceChild(r, e)
                    }
                } else if (e.nodeType === Node.ELEMENT_NODE) {
                    if ("true" === e.getAttribute("data-currency-processed"))
                        return;
                    e.setAttribute("data-currency-processed", "true");
                    for (let r = 0; r < e.childNodes.length; r++)
                        t(e.childNodes[r])
                } else if (e.childNodes && e.childNodes.length > 0)
                    for (let r = 0; r < e.childNodes.length; r++)
                        t(e.childNodes[r])
            }
            ;
            t(e)
        }
          , a = null
          , n = () => {
            a && a.disconnect();
            let e = new MutationObserver(e => {
                e.forEach(e => {
                    "childList" === e.type && e.addedNodes.forEach(e => {
                        e.nodeType === Node.ELEMENT_NODE && o(e)
                    }
                    )
                }
                )
            }
            );
            a = e,
            e.observe(document.body, {
                childList: !0,
                subtree: !0
            }),
            o(document.body)
        }
          , d = () => {
            document.body && (a && a.disconnect(),
            o(document.body),
            a && a.observe(document.body, {
                childList: !0,
                subtree: !0
            }),
            setTimeout( () => {
                document.querySelectorAll("*").forEach(e => {
                    e.nodeType === Node.ELEMENT_NODE && o(e)
                }
                )
            }
            , 50))
        }
          , c = () => {
            document.body && new MutationObserver(e => {
                let t = !1;
                e.forEach(e => {
                    if ("attributes" === e.type) {
                        let r = e.target;
                        (r.getAttribute("lang") || r.getAttribute("dir")) && (t = !0)
                    } else
                        "childList" === e.type && e.addedNodes.forEach(e => {
                            e.nodeType === Node.ELEMENT_NODE && (e.getAttribute("lang") || e.getAttribute("dir")) && (t = !0)
                        }
                        )
                }
                ),
                t && setTimeout(d, 0)
            }
            ).observe(document.body, {
                attributes: !0,
                attributeFilter: ["lang", "dir"],
                childList: !0,
                subtree: !0
            })
        }
    }
}]);
