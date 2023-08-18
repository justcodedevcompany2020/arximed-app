import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
export default function IncorrectPinScreen({ navigation }) {

    return <SafeAreaView style={styles.container}>
        <Svg
            width={55}
            height={55}
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Circle cx={27.5} cy={27.5} r={27.5} fill="#D9D9D9" />
        </Svg>
        <Text style={styles.text}>Пожалуйста, авторизуйтесь в приложении
            и вы сможете задать новый ПИН</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Авторизоваться</Text>
        </TouchableOpacity>
    </SafeAreaView>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#F5F5F5',
        paddingHorizontal: 30,
        paddingTop: 140,
        alignItems: 'center'
    },
    circle: {
        backgroundColor: '#D9D9D9',
        width: 55,
        height: 55,
        alignSelf: 'center',
        borderRadius: 60,
    },
    button: {
        width: '100%',
        backgroundColor: '#696969',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 130
    },
    btnText: {
        color: 'white',
        fontSize: 18,
    },
    text: {
        fontSize: 16,
        color: 'black',
        marginTop: 25,
        textAlign: 'center'
    }
});
