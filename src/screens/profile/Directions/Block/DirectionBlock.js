import React from 'react';
// import { TouchableOpacity } from 'react-native';
import { SafeAreaView, View, ImageBackground, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { CalendarIcon } from '../../../../assets/svgs/HomeScreenSvgs';

export default function DirectionBlock({ navigation, marginBottom }) {
    return (
        <View style={[styles.blockWhite, marginBottom && {marginBottom : marginBottom}]} >
            <Text style={styles.firstText} >Прием (консультация) врача-хирурга, первичный </Text>
            <View style={styles.grayButton}>
                <Text style={styles.grayButtonText} >Направил ВОП, Захаренко Алексей Владимирович</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }} >
                <CalendarIcon />
                <Text style={styles.dataText} >Актуально до 24 мая, 12:43</Text>
            </View>
            <TouchableOpacity
            onPress={()=> navigation.navigate('EventInformation')}
            style={styles.greenButton} >
                <Text style={styles.whiteText} >Записаться</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    blockWhite: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        marginTop: 15,
    },
    firstText: {
        color: '#1C1C1E',
        fontSize: 15,
        lineHeight: 17,
        fontWeight: '600',
    },
    grayButton: {
        padding: 5,
        backgroundColor: '#EDEDED78',
        height: 53,
        width: 244,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    grayButtonText: {
        color: '#72777A',
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '600',
    },
    dataText: {
        color: '#000000',
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '400',
        marginLeft: 7,
    },
    greenButton: {
        width: '100%',
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: '#9DC458',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    whiteText: {
        color: 'white',
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '600',
        textAlign: 'center',

    },
});
