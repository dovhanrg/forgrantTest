'use strict';

import {setPrice} from '../js/setPrice';
import {getBtcChanges, getEthChanges, getLtcChanges} from '../js/getPriceChanges';
import {isBtcPercentChange, isEthPercentChange, isLtcPercentChange} from '../js/hasChecked';

const switchBox = document.querySelectorAll('.switch');
const select = document.querySelector('.select');
const itemsWrapper = document.querySelector('.items');
const items = document.querySelector('.items>.item');


export const main = event => {
    setPrice();
    getBtcChanges();
    getEthChanges();
    getLtcChanges();
}

select.addEventListener('click', main);
itemsWrapper.addEventListener('click', main);
// items.forEach(element => element.addEventListener('click', main));
switchBox.forEach(element => element.addEventListener('click', main));