import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GreenCyrcle } from '../../../../assets/svgs/HomeScreenSvgs';

export default function MeaningBlock({ navigation }) {
    return (
        <View style={styles.block}>
            <View>
                <Text style={styles.firstText}>
                    Значение
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
                    <GreenCyrcle />
                    <Text style={styles.greenText}>123 нг/мл</Text>
                </View>
            </View>
            <View style={styles.line} />
            <View style={{ marginLeft: 25, flexShrink: 1}}>
                <Text style={styles.firstText}>
                    Реф. значение
                </Text>
                <Text style={styles.paragraf}>1й триместр: 0 - 525</Text>
                <Text style={styles.paragraf}>2й триместр: 438 - 1200</Text>
                <Text style={styles.paragraf}>3й триместр:  888 - 2085</Text>
                <Text style={styles.paragraf}>По умолчанию: 500 нг/мл</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    firstText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 10
    },
    block: {
        width: '100%',
        backgroundColor: 'white',
        padding: 15,
        marginTop: 20,
        borderRadius: 15,
        flexDirection: 'row',
    },
    line: {
        width: 1,
        backgroundColor: '#9495991C',
        marginLeft: 25,
    },
    paragraf: {
        // width: 141,
        marginBottom: 5,
        color: 'black',
        fontWeight: '400',
        fontSize: 12,
    },
    greenText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#67AB5B',
        marginLeft: 10,
    },
});
