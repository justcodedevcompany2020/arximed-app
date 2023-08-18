import React from 'react';
import { TouchableOpacity,  Text, StyleSheet } from 'react-native';

export default function NumberButton({ number, letters, onPress }) {
    return <TouchableOpacity onPress={() => onPress(number)} style={styles.container}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.letters}>{letters}</Text>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    container: {
        width: 77,
        height: 77,
        borderRadius: 55,
        backgroundColor: '#f6f6f6',
        justifyContent: 'center',
    },
    number: {
        color: 'black',
        fontSize: 35,
        textAlign: 'center',
        paddingBottom: 0,
        marginBottom: 0,
    },
    letters: {
        textAlign: 'center',
        fontSize: 11,
        color: 'black',
    },
});
