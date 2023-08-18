import React from 'react';
import { View, TouchableOpacity, Text, Image, SafeAreaView, StyleSheet, TextInput, ImageBackground, ScrollView } from 'react-native';

export default function ServiceBlock({ textFirst, textSecond, isOnline }) {
    return (
        <TouchableOpacity style={styles.block} >
            <Text style={[styles.textFirst, { lineHeight: 17 }]} >{textFirst}</Text>
            <Text style={[styles.textFirst, { color: '#979797', lineHeight: 17, marginTop: 7 }]} >{textSecond}</Text>
            {
                isOnline &&
                (
                    <View style={styles.greenButton}>
                        <Text style={[styles.textFirst, { color: '#7B9E45', textAlign: 'center' }]} >на проверке</Text>
                    </View>
                )
            }

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        borderRadius: 8,
        marginTop: 10,
        position: 'relative',
        height: 87,
    },
    textFirst: {
        color: '#1C1C1E',
        fontSize: 14,
        fontWeight: '400',
    },
    greenButton: {
        height: 27,
        backgroundColor: '#C8EE864D',
        position: 'absolute',
        top: 1,
        right: 1,
        borderRadius: 15,
        opacity: 0.8,
        padding: 2,
    },

});
