"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[95], {
    79095: (e, t, n) => {
        n.r(t),
        n.d(t, {
            applyPercentageFixToElement: () => a,
            initializePercentageCSSFix: () => r
        });
        let r = () => {
            let e = () => {
                ("ar" === document.documentElement.lang || "rtl" === document.documentElement.dir) && (document.body.classList.add("arb-percentage-fix"),
                document.documentElement.style.setProperty("--arb-percentage-decimal", ","),
                document.documentElement.style.setProperty("--arb-percentage-direction", "rtl"))
            }
            ;
            e(),
            new MutationObserver(t => {
                t.forEach(t => {
                    "attributes" === t.type && ("lang" === t.attributeName || "dir" === t.attributeName) && setTimeout(e, 100)
                }
                )
            }
            ).observe(document.documentElement, {
                attributes: !0,
                attributeFilter: ["lang", "dir"]
            })
        }
          , a = e => {
            ("ar" === document.documentElement.lang || "rtl" === document.documentElement.dir) && e.classList.add("arb-percentage-fix")
        }
    }
}]);
