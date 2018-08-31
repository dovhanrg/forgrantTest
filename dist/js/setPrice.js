'use strict';

import { getBtc, getEth, getLtc } from '../js/getPrice';
import {selectedCurrency} from '../js/currency';

const cards = document.querySelectorAll('.coinSection');
const priceDiv = document.querySelectorAll('.price');

export const setPrice = () => {
  const currency = selectedCurrency() || 'USD';
  const tmplStrig =
    currency === 'USD'
      ? `$`
      : currency === 'EUR'
        ? `€`
        : currency === 'RUB'
          ? `₽`
          : `£`;

  const ethPriceValue = priceDiv[0].querySelector('.price__value');
  getEth(currency).then(
    data => (ethPriceValue.textContent = tmplStrig + data.data.last.toFixed(2))
  );

//   console.log('BTC: ', getBtc(currency).then(data => console.log(data.data.last)));
//   console.log('LTC: ', getLtc(currency).then(data => console.log(data.data.last)));

  const ltcPriceValue = priceDiv[1].querySelector('.price__value');
  getLtc(currency).then(
    data => (ltcPriceValue.textContent = tmplStrig + data.data.last.toFixed(2))
  );

  const btcPriceValue = priceDiv[2].querySelector('.price__value');
  getBtc(currency).then(
    data => (btcPriceValue.textContent = tmplStrig + data.data.last.toFixed(2))
  );
};
// setPrice();
