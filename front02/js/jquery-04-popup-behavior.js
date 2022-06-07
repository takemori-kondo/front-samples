// ES2018
// jQuery 3.x
// jquery.blockUI.js

"use strict";

/* exported attachDialogBehavior */
const attachDialogBehavior = (buttonSelector, contentSelector, timeout = null, callback = null, innerButtonSelectors = ['.js-ok', '.js-cancel']) => {
  $(buttonSelector).on('click', () => {
    $.blockUI({
      message: $(contentSelector),
      timeout: timeout,
      css: {
        top: '20%'
      }
    });
  });
  for (const slctr of innerButtonSelectors) {
    $(slctr).on('click', () => {
      if (callback != null) {
        callback(slctr);
      }
      $.unblockUI();
    });
  }
}

/* exported attachGrowlBehavior */
const attachGrowlBehavior = (buttonSelector, contentSelector, timeout = null) => {
  $(buttonSelector).on('click', () => {
    $.blockUI({
      message: $(contentSelector),
      fadeIn: 700,
      fadeOut: 700,
      timeout: timeout,
      showOverlay: false,
      centerY: false,
      css: {
        width: '350px',
        top: '10px',
        left: '',
        right: '10px',
        border: 'none',
        padding: '5px',
        backgroundColor: '#000',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px',
        opacity: .6,
        color: '#fff'
      }
    });
  });
}