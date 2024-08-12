export function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) !== 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
      'send_to': 'AW-16665446279/n5wkCIbL7sgZEIeP2oo-',
      'event_callback': callback
    });
    return false;
  }
  