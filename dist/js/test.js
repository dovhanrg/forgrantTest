'use strict';

import {get, getLtc} from 'js/get';
import { getBtc } from './get';

const getData = get('ETHUSD');

const bit = getBtc('EUR');

console.log(bit.then(data => console.log(data)));

// console.log(getData.then(data => console.log(data.data)));
// console.log(get().then(data => console.log('data: ', data)))

// "BTCUSD" "BTCEUR" "BTCRUB" "BTCGBP"

// "ETHUSD" "ETHEUR" "ETHRUB" "ETHGBP"

// "LTCUSD" "LTCEUR" "LTCRUB" "LTCGBP"