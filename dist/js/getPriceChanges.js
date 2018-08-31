'use strict';

import { getBtc, getEth, getLtc } from '../js/getPrice';
import {selectedCurrency} from '../js/currency';
import {isBtcPercentChange, isEthPercentChange, isLtcPercentChange} from '../js/hasChecked';

export const getPriceChanges = () => {
  const currency = selectedCurrency() || 'USD';
  const infoSections = document.querySelectorAll('.info');

  console.log(
    getBtc(currency).then(object =>
      console.log(
        'Percentage: ',
        object.data.changes.percent,
        'Price: ',
        object.data.changes.price
      )
    )
  );
};
// getPriceChanges();
export const getBtcChanges = () => {
  let tmplStrig = '%';
  const currency = selectedCurrency() || 'USD';
  const type = isBtcPercentChange() ? 'percent' : 'price';

  const infoSections = document.querySelectorAll('.info');
  const ltcTimeIntervalsSpan = infoSections[2].querySelectorAll(
    '.timeInterval__value'
  );

  if (type === 'price') {
    tmplStrig =
      currency === 'USD'
        ? `$`
        : currency === 'EUR'
          ? `€`
          : currency === 'RUB'
            ? `₽`
            : `£`;
  }

  getBtc(currency).then(object => {
    console.log(object.data.changes[type]);
    ltcTimeIntervalsSpan[0].textContent =
      object.data.changes[type].hour.toFixed(2) + tmplStrig;
    ltcTimeIntervalsSpan[1].textContent =
      object.data.changes[type].day.toFixed(2) + tmplStrig;
    ltcTimeIntervalsSpan[2].textContent =
      object.data.changes[type].week.toFixed(2) + tmplStrig;
    ltcTimeIntervalsSpan[3].textContent =
      object.data.changes[type].month.toFixed(2) + tmplStrig;
  });
};
// getBtcChanges();

export const getEthChanges = () => {
  const currency = selectedCurrency() || 'USD';
  let tmplStrig = '%';
  const type = isEthPercentChange() ? 'percent' : 'price';

  const infoSections = document.querySelectorAll('.info');
  const ltcTimeIntervalsSpan = infoSections[0].querySelectorAll(
    '.timeInterval__value'
  );

  if (type === 'price') {
    tmplStrig =
      currency === 'USD'
        ? `$`
        : currency === 'EUR'
          ? `€`
          : currency === 'RUB'
            ? `₽`
            : `£`;
  }

  getEth(currency).then(object => {
    console.log(object.data.changes[type]);
    ltcTimeIntervalsSpan[0].textContent =
      object.data.changes[type].hour.toFixed(2) + tmplStrig;
    ltcTimeIntervalsSpan[1].textContent =
      object.data.changes[type].day.toFixed(2) + tmplStrig;
    ltcTimeIntervalsSpan[2].textContent =
      object.data.changes[type].week.toFixed(2) + tmplStrig;
    ltcTimeIntervalsSpan[3].textContent =
      object.data.changes[type].month.toFixed(2) + tmplStrig;
  });

};

// getEthChanges();

export const getLtcChanges = () => {
  let tmplStrig = '%';
  const currency = selectedCurrency() || 'USD';
  const type = isLtcPercentChange() ? 'percent' : 'price';

  const infoSections = document.querySelectorAll('.info');
  const ltcTimeIntervalsSpan = infoSections[1].querySelectorAll(
    '.timeInterval__value'
  );

  if (type === 'price') {
    tmplStrig =
      currency === 'USD'
        ? `$`
        : currency === 'EUR'
          ? `€`
          : currency === 'RUB'
            ? `₽`
            : `£`;
  }

  getEth(currency).then(object => {
    console.log(object.data.changes[type]);
    ltcTimeIntervalsSpan[0].textContent =
      object.data.changes[type].hour.toFixed(2) + tmplStrig;
    ltcTimeIntervalsSpan[1].textContent =
      object.data.changes[type].day.toFixed(2) + tmplStrig;
    ltcTimeIntervalsSpan[2].textContent =
      object.data.changes[type].week.toFixed(2) + tmplStrig;
    ltcTimeIntervalsSpan[3].textContent =
      object.data.changes[type].month.toFixed(2) + tmplStrig;
  });
  
};

// getLtcChanges();
