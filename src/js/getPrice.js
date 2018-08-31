'use strict';

import axios from 'axios';

//GET https://apiv2.bitcoinaverage.com/indices/{symbol_set}/ticker/{symbol}
//https://apiv2.bitcoinaverage.com/symbols/indices/ticker


export const get = (ticker = 'BTCUSD') => {
    return axios.get(`https://apiv2.bitcoinaverage.com/indices/global/ticker/${ticker}`)
}

export const getBtc = (ticker = 'USD') => {
    return axios.get(`https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC${ticker}`)
}
export const getEth = (ticker = 'USD') => {
    return axios.get(`https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH${ticker}`)
}
export const getLtc = (ticker = 'USD') => {
    return axios.get(`https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC${ticker}`)
}