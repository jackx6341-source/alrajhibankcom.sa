"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[612], {
    86612: (e, n, o) => {
        o.r(n),
        o.d(n, {
            initializeNationalDayLogoHandler: () => i,
            reinitializeNationalDayLogoHandler: () => r,
            removeNationalDayLogoHandler: () => l
        });
        var t = o(20001);
        function a(e) {
            (0,
            t.V)() && (e.preventDefault(),
            window.location.href = "/")
        }
        function i() {
            let e = () => {
                document.querySelectorAll(".arb-logo").forEach(e => {
                    e.removeEventListener("click", a),
                    e.addEventListener("click", a)
                }
                )
            }
            ;
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
        }
        function l() {
            document.querySelectorAll(".arb-logo").forEach(e => {
                e.removeEventListener("click", a)
            }
            )
        }
        function r() {
            l(),
            setTimeout( () => {
                i()
            }
            , 100)
        }
    }
}]);
