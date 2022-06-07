// ES2018
// jQuery 3.x

"use strict";

/* exported attachConfirmBehavior */
const attachConfirmBehavior = (confirmModeCssClass, modeSelector, inputContainerSelector, hidesEmpty = true) => {
  const isConfirm = $(modeSelector).val() == 'confirm';
  if (hidesEmpty) {
    $(inputContainerSelector).each((i, element) => {
      toggleDisplayForEmptyElement(element, 'input', isConfirm);
      toggleDisplayForEmptyElement(element, 'select', isConfirm);
      toggleDisplayForEmptyElement(element, 'textarea', isConfirm);
    });
  }
  toggleReadOnlyAndDisabled(`${inputContainerSelector} input`, confirmModeCssClass, isConfirm);
  toggleReadOnlyAndDisabled(`${inputContainerSelector} select`, confirmModeCssClass, isConfirm);
  toggleReadOnlyAndDisabled(`${inputContainerSelector} textarea`, confirmModeCssClass, isConfirm);
}

const toggleDisplayForEmptyElement = (containerElement, targetSelector, isConfirm) => {
  const dcd = 'data-css-display';
  const jqContainer = $(containerElement);
  if (jqContainer.find(targetSelector).val() == '') {
    if (isConfirm) {
      jqContainer.data(dcd, jqContainer.css('display'));
      jqContainer.hide();
    } else {
      jqContainer.css('display', $(containerElement).data(dcd));
      jqContainer.data(dcd, '');
    }
  }
}

const toggleReadOnlyAndDisabled = (targetSelector, confirmModeCssClass, isConfirm) => {
  const dr = 'data-readonly';
  const dd = 'data-disabled';
  $(targetSelector).each((i, element) => {
    const jqElement = $(element);
    if (isConfirm) {
      jqElement.data(dr, jqElement.prop('readonly'));
      jqElement.prop('readonly', true);
      if (jqElement.prop('type') == 'radio' && !jqElement.prop('checked')) {
        jqElement.data(dd, jqElement.prop('disabled'));
        jqElement.prop('disabled', true);
      } else if (jqElement.prop('tagName') == 'SELECT') {
        const x = jqElement.find(':not(:selected)');
        x.data(dd, x.prop('disabled'));
        x.prop('disabled', true);
      }
      jqElement.addClass(confirmModeCssClass);
    } else {
      jqElement.prop('readonly', jqElement.data(dr));
      jqElement.data(dr, '');
      if (jqElement.prop('type') == 'radio' && !jqElement.prop('checked')) {
        jqElement.prop('disabled', jqElement.data(dd));
        jqElement.data(dd, '');
      } else if (jqElement.prop('tagName') == 'SELECT') {
        const x = jqElement.find(':not(:selected)');
        x.prop('disabled', x.data(dd));
        x.data(dd, '');
      }
      jqElement.removeClass(confirmModeCssClass);
    }
  });
}