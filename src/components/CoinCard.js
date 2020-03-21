import React from 'react'
import {View, Text, StyleSheet, image} from 'react-native'
import {images} from '../Utils/Coinicons'

const styles = StyleSheet.create({
    container: {
        display: 'flex"',
        marginBottom: 20,
        borderBottomColor: '#e5e5e5', 
        borderBottowWidth: 3,
        padding: 20
    },
    specflow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: 'bold'
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    separator: {
        marginTop: 10
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 10,
        fontWeight: 'bold'
    },
    image: {
        width: 35,
        height: 35
    },
    moneySymbol: {
        fontWeight: 'bold'
    },
    statisticsContainer: {
        display: 'flex',
        borderTopColor: '#fafafa',
        borderTopWidth: 2,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    percentChangePlus: {
        color: '#00bfa5',
        fontWeight: 'bold',
        marginLeft: 5,
    },
    percentChangeMinus: {
        color: '#dd2c00',
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

const {
    container,
    image,
    moneySymbol,
    copperRow,
    upperRow,
    coinName,
    coinPrice,
    statisticsContainer,
    separator,
    percentChangeMinus,
    percentChangePlus
} = styles;

const CoinCard = ({symbol, coin_name, price_usd, percentage_change_24h, percentage_change_7d}) => {
    return (
        <View style={container}>
            <View style={upperRow}>
                <image style={styles.image} source={{uri: images[symbol]}}/>
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={separator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>{price_usd} <Text style={moneySymbol}> $ </Text></Text>
                </View>

                <View style={statisticsContainer}>
                    <Text>24Hr:
                        <Text style={percentage_change_24h < 0 ? percentChangeMinus : percentChangePlus}> {percentage_change_24h} %</Text>
                    </Text>

                    <Text> 7D:
                        <Text style={percentage_change_7d < 0 ? percentChangeMinus : percentChangePlus}> {percentage_change_24h} %</Text>
                    </Text>
            </View>
        </View>
    )
}

export default CoinCard