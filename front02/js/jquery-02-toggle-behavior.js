// ES2015
// jQuery 3.x

"use strict";

function attachToggleBehavior(buttonSelector, targetSelector, duration = 'normal', toggleType = 'toggle') {
    $(buttonSelector).on('click', () => {
        const jqButton = $(buttonSelector);
        const pre = buttonSelector.slice(0, 1);
        const buttonSelectorWithoutPre = (pre == '#' || pre == '.') ? buttonSelector.substr(1) : buttonSelector;
        const closed = buttonSelectorWithoutPre + '-closed';
        const opened = buttonSelectorWithoutPre + '-opened';
        const jqTarget = $(targetSelector);
        if (jqButton.hasClass(closed) || jqTarget.css('display') == 'none') {
            jqButton.removeClass(closed).addClass(opened);
        } else {
            jqButton.removeClass(opened).addClass(closed);
        }
        const lowerToggleType = toggleType.toLocaleLowerCase();
        if (0 <= lowerToggleType.indexOf('fade')) {
            jqTarget.fadeToggle(duration);
        } else if(0 <= lowerToggleType.indexOf('slide')) {
            jqTarget.slideToggle(duration);
        } else {
            jqTarget.toggle(duration);
        }
    });
}