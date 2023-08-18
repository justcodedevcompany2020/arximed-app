import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { CalendarIcon, TimeIcon } from '../../../assets/svgs/HomeScreenSvgs';


export default function SurveysBlock({ navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('SurveysSingle')}
            style={styles.block} >
            <View>
                <Text style={styles.uzi}>УЗИ</Text>
                <View style={styles.first}>
                    <CalendarIcon />
                    <Text style={styles.firstText}>16.03.2021</Text>
                </View>
            </View>
            <View style={styles.line} />
            <View>
                <View style={styles.second} >
                    <TimeIcon />
                    <Text style={styles.timeText} >Готовится</Text>
                </View>
                <View style={[styles.second, { marginTop: 5 }]} >
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require('../../../assets/images/profile/profilepic.png')} />
                    <Text
                        style={styles.textDoctors}
                    >Врач: Алексеев И.И. </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    block: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        marginTop: 10,
        padding: 15,
    },
    first: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    firstText: {
        fontSize: 10,
        color: '#000000',
        fontWeight: '400',
        marginLeft: 7,
    },
    uzi: {
        fontSize: 14,
        color: '#000000',
        fontWeight: '500',
    },
    second: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        width: 1,
        height: 53,
        backgroundColor: '#9495991C',
    },
    timeText: {
        fontSize: 12,
        color: '#72777A',
        fontWeight: '500',
        marginLeft: 5,
    },
    textDoctors: {
        fontSize: 12,
        color: '#000000',
        fontWeight: '400',
        marginLeft: 5,
    },

});
