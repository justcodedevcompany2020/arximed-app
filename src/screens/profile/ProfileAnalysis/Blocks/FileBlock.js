import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function FileBlock() {
    return (
        <TouchableOpacity
            style={styles.block}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.text} >
                    Файлы
                </Text>
                <Svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M1 11L5 6.26316L1 1" stroke="#9DC458" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </Svg>
            </View>
            <Image
                style={{ width: 20, height: 20 }}
                source={require('../../../../assets/images/medical-file.png')}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    block: {
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
    },
    text: {
        marginRight: 5,
        fontSize: 16,
        color: 'black',
        lineHeight: 19,
        fontWeight: '600',
    },
});
