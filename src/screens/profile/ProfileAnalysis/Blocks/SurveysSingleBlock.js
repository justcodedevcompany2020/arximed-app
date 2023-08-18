import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function SurveysSingleBlock({ image, firstText, secondText, width, height, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.background}>
            <Image
                style={{ width: width, height: height }}
                source={image}
            />
            <View style={{ marginLeft: 10 }}>
                <Text style={styles.smallText} >{firstText}</Text>
                <Text style={styles.boldText} >{secondText}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 62,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    boldText: {
        fontSize: 14,
        lineHeight: 14,
        color: 'black',
        fontWeight: '500',
    },
    smallText: {
        fontSize: 10,
        lineHeight: 12,
        marginBottom: 5,
        color: '#72777A',
        fontWeight: '400',
    },
});
