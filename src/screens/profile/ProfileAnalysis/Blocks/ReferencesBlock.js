import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlueElipse, GrayCircle, GreenElipse, RedElipse } from '../../../../assets/svgs/HomeScreenSvgs';

export default function ReferencesBlock() {
    return (
        <View style={styles.block} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.boldText} >Референсы</Text>
                <GrayCircle />
                <Text style={styles.grayText} >Система значений</Text>
            </View>
            <View style={styles.firsDiv}>
                <View style={styles.elipseDiv}>
                    <RedElipse />
                    <Text style={[styles.elipseDivText, { color: '#FF414C' }]} >Ниже нормы</Text>
                </View>
                <Text style={styles.blackText}>Меньше чем 0 нг/мл</Text>
            </View>
            <View style={styles.firsDiv}>
                <View style={styles.elipseDiv}>
                    <GreenElipse />
                    <Text style={[styles.elipseDivText, { color: '#9DC458' }]} >Нормально </Text>
                </View>
                <Text style={styles.blackText}>0-500 нг/мл</Text>
            </View>
            <View style={styles.firsDiv}>
                <View style={styles.elipseDiv}>
                    <BlueElipse />
                    <Text style={[styles.elipseDivText, { color: '#3F807A' }]} >Выше нормы</Text>
                </View>
                <Text style={styles.blackText}>Более чем 500 нг/мл</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 15,
        height: 125,
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },
    boldText: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '600',
        marginRight: 7,
        color: '#000000',
    },
    grayText: {
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '400',
        marginLeft: 7,
        color: '#72777A',
    },
    firsDiv: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    elipseDiv: {
        width: '40%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    elipseDivText: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '400',
        marginLeft: 7,
    },
    blackText: {
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '400',
        marginLeft: 7,
        color: '#000000',
    },
});
