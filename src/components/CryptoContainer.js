import React, {Component} from 'react';
import {Connect} from 'react-redux';
import {View, Text, StyleSheet, image} from 'react-native';
import {images} from '../Utils/Coinicons';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FecthCointData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
    componentWillMount() {
        this.componentWillReceiveProps.FetchCoinData();
    }

    renderCoinCards() {
        const {crypto} = this.props;
        return crypto.data.map((coin) => 
            <CoinCard
            key={coin.name}
            coin_name={coin.name}
            symbol={coinSymbol}
            price_usd={coint_price_usd}
            percentage_change_7d={coin_percent_change_7d}
            percentage_change_24h={coin_percent_change_24h}
            />
        )
    }
}