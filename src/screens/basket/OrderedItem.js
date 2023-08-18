import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { CurrencyRub } from '../../assets/svgs/DoctorsScreenSvgs';

export default function OrderedItem({ text, price, mandatory }) {
    return <TouchableOpacity style={{ backgroundColor: '#f9f9fa', marginTop: 10, borderRadius: 10 }} >
        <View style={styles.container}>
            <Text style={styles.orderName}>{text}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.price}>{price}</Text>
                <CurrencyRub />
            </View>
            {mandatory && <View style={styles.mandatoryContainer}>
                <Text style={styles.mandatory}>Обязательно</Text>
            </View>}
        </View>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        height: 74,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#1C1C1E',
        width: 190,
    },
    price: {
        fontSize: 16,
        color: 'black',
    },
    mandatoryContainer: {
        backgroundColor: '#effadb',
        position: 'absolute',
        paddingVertical: 5,
        width: 81,
        alignItems: 'center',
        borderRadius: 15,
    },
    mandatory: {
        color: '#7B9E45',
        fontSize: 10,
        fontWeight: '600',
    },
});
