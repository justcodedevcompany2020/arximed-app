import React from 'react';
import { View, SafeAreaView, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import ServiceBlock from './ServiceBlock';
import Button from '../../../components/Button';

export default function ServiceProgram({ navigation }) {
    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground
                style={styles.fixed}
                resizeMode="cover"
                source={require('../../../assets/background.png')}
            />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
                <ServiceBlock textFirst={'МС Росно'} textSecond={'6468461534'} />
                <ServiceBlock textFirst={'Альфа страхование'} textSecond={'6468461534'} isOnline />
            </ScrollView>
            <Button
                text={'Добавить'}
                color={'white'}
                backgroundColor={'#9DC458'}
                isDisabled={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    fixed: {
        flex: 1,
        alignItems: 'center',
    },
    scrollView: {
        backgroundColor: 'transparent',
        marginBottom: 90,
        marginTop: 120,
        width: '100%',
        height: '100%',

    },
});
