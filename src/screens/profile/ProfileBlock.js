import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileBlock({ navigation, Svg, firstText, secondText, image, name, imageWidth, imageHeight, navname }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(navname)}
            style={styles.block}
        >
            <View style={{ height: 120, width: 120 }}>
                <Svg />
            </View>
            <View style={styles.greenButton}>
                <Text style={[styles.textHeader, { color: '#000000' }]}>{firstText} <Text style={[styles.textHeader, { color: '#7B9E45', marginLeft: 5 }]} >{secondText}</Text></Text>
            </View>
            <Text style={[styles.textHeader, { color: '#1C1C1E' }]}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#FFFFFF',
        width: '49%',
        minHeight: 170,
        borderRadius: 8,
        position: 'relative',
        padding: 10,
        marginTop: 10,
    },
    greenButton: {
        padding: 5,
        backgroundColor: '#E7F0D5',
        height: 27,
        position: 'absolute',
        top: 10,
        right: 10,
        borderRadius: 5,
    },
    textHeader: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '600',
        // justifyContent: 'flex-end'
        // alignSelf: 'flex-end'

    },
});
