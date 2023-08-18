import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { UserIcon } from '../../assets/svgs/HomeScreenSvgs';
import { NextIcon } from '../../assets/svgs/SearchScreenSvgs';


export default function MoreField({ Icon, text, onPress }) {
    return (
        <TouchableOpacity style={styles.container}  onPress={onPress}>
            <Icon />
            <Text style={styles.text}>{text}</Text>
            <NextIcon />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        fontSize: 14,
        color: '#1C1C1E',
        marginLeft: 10,
    },
});
