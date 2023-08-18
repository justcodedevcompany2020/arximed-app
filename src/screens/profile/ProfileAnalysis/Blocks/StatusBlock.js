import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RedIcon } from '../../../../assets/svgs/HomeScreenSvgs';

export default function StatusBlock() {
    return (
        <View style={styles.block}>
            <View>
                <Text style={styles.firstText}>Статус</Text>
                <View style={styles.greenButton}>
                    <Text style={styles.greenButtonText} >Нормально </Text>
                </View>
            </View>
            <View style={styles.line} />
            <View style={{ marginLeft: 20, flexShrink: 1  }} >
                <Text style={styles.firstText} >Биоматериал</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>
                    <RedIcon />
                    <Text style={styles.text}>Плазма цитратная</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    block: {
        backgroundColor: 'white',
        padding: 15,
        marginTop: 20,
        borderRadius: 15,
        flexDirection: 'row',
        paddingLeft: 25,
    },
    firstText: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '600',
        color: '#000000',
    },
    greenButton: {
        backgroundColor: '#F2FBE2',
        padding: 10,
        height: 40,
        borderRadius: 10,
        marginTop: 15,
    },
    greenButtonText: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '600',
        color: '#7B9E45',
        marginTop: 5,
    },
    line: {
        width: 1,
        backgroundColor: '#9495991C',
        marginLeft: 42,
    },
    text: {
        color: '#1C1C1E',
        fontSize: 14,
        marginLeft: 7,
        fontWeight: '400',
    },
});
