/**
 * Created by ryan on 2018/1/17.
 */



export const gtag = () => {
    window.dataLayer.push(arguments);
};

/**
 * 呼叫Google Ad 轉換碼
 * @param {*} pixel_id
 */
export const googleAdConversion = (id , label) => {
    window.google_trackConversion({
        google_conversion_id: id,
        google_conversion_language: 'en',
        google_conversion_format: '3',
        google_conversion_color: 'ffffff',
        google_conversion_label: label,
        google_remarketing_only: false
    });
}

/**
 * 呼叫FB像素追蹤碼
 * @param pixel_id FB像素追蹤碼ID
 */
export const fbPixelCode = (pixel_id) => {
    console.log('pixel id :', pixel_id);
    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', pixel_id);
    fbq('track', 'PageView');
}
