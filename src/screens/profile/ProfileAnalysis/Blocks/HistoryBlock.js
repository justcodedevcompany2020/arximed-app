import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlueElipse, GrayCircle, GreenElipse, RedElipse } from '../../../../assets/svgs/HomeScreenSvgs';

export default function HistoryBlock() {
    return (
        <View style={styles.block}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.boldText} >История</Text>
                <GrayCircle />
                <Text style={styles.grayText} >Анализы за все время</Text>
            </View>
            <View style={styles.firsDiv}>
                <Text style={styles.blackText}>30.11.2021</Text>
                <View style={styles.elipseDiv}>
                    <Text style={[styles.elipseDivText, { color: '#FF414C' }]} >1 нг/мл</Text>
                    <RedElipse />
                </View>
            </View>
            <View style={styles.firsDiv}>
                <Text style={styles.blackText}>14.07.2021</Text>
                <View style={styles.elipseDiv}>
                    <Text style={[styles.elipseDivText, { color: '#9DC458' }]} >10 нг/мг</Text>
                    <GreenElipse />
                </View>
            </View>
            <View style={styles.firsDiv}>
                <Text style={styles.blackText}>15.07.2022</Text>
                <View style={styles.elipseDiv}>
                    <Text style={[styles.elipseDivText, { color: '#9DC458' }]} >40 нг/мг</Text>
                    <GreenElipse />
                </View>
            </View>
            <View style={styles.firsDiv}>
                <Text style={styles.blackText}>15.07.2022</Text>
                <View style={styles.elipseDiv}>
                    <Text style={[styles.elipseDivText, { color: '#3F807A' }]} >123 нг/мг</Text>
                    <BlueElipse />
                </View>
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
        padding: 15,
        marginBottom: 25,
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
        alignItems: 'center',
        flexDirection: 'row',
    },
    elipseDivText: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '400',
        marginRight: 7,
    },
    blackText: {
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '400',
        marginLeft: 7,
        color: '#000000',
    },
});
