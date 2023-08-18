import React from 'react';
import { Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export default function PdfFile() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/background.png')}
                resizeMode="cover"
                style={styles.fixed}
            >
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <Text style={styles.text} >Сервис «Клиника Архимед» (далее - Сервис) создан для организации процесса оперативной дистанционной записи пациента (далее также - Пользователь) на прием в соответствующую медицинскую организацию/лабораторию с целью сдачи анализов (далее - услуга) и получения результата посредством предлагаемого в Сервисе функционала.</Text>
                    <Text style={styles.text} >Сервис представляет собой веб-приложение для мобильных устройств и компьютеров, позволяющее авторизованным Пользователям заказывать услугу в режиме онлайн и, с помощью Сервиса, организовать распределение вознаграждения за оказанную услугу.</Text>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    fixed: {
        flex: 1,
        paddingTop: 110,
        paddingHorizontal: 20,
    },
    scrollView: {
        backgroundColor: 'transparent',
        marginBottom: 90,
        width: '100%',
    },
    text: {
        color: '#000000',
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400',
        marginTop:20,
    },
});
