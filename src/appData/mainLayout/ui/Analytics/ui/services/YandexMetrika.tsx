"use client"

import Script from "next/script"

import { YANDEX_METRIKA_ID } from "../../constants/analyticsIDs"

const YandexMetrika = () => (
  <Script id="yandex-metrika">
    {`
      (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter93051932 = new Ya.Metrika({
                    id:${YANDEX_METRIKA_ID},
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            x = "https://mc.yandex.ru/metrika/watch.js",
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        for (var i = 0; i < document.scripts.length; i++) {
            if (document.scripts[i].src === x) { return; }
        }
        s.type = "text/javascript";
        s.async = true;
        s.src = x;

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
      })(document, window, "yandex_metrika_callbacks");
    `}
  </Script>
)

export { YandexMetrika }
