'use strict';

const switchBox = document.querySelectorAll('.switch');

export const isBtcPercentChange = () => {
    const checkboxes = document.querySelectorAll('.checkboxInput');
    return checkboxes[2].checked;
}
// inputChecked();
export const isEthPercentChange = () => {
    const checkboxes = document.querySelectorAll('.checkboxInput');
    return checkboxes[0].checked;
}
export const isLtcPercentChange = () => {
    const checkboxes = document.querySelectorAll('.checkboxInput');
    return checkboxes[1].checked;
}

// switchBox.forEach(element => element.addEventListener('click', isBtcPercentChange));