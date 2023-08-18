import { Text, SafeAreaView, StyleSheet, TextInput, ScrollView } from 'react-native';
import React from 'react';
import Button from '../../../../components/Button';


export default function AddCardSecond({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
                <Text style={styles.cardText}>С карты будет списан 1.00 рубль для подтверждения карты, введите код </Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Код"
                    placeholderTextColor={'black'}
                />
                <Button
                    text={'Готово'}
                    color={'white'}
                    backgroundColor={'#9DC458'}
                    isDisabled={false}
                    onPress={() => navigation.navigate('CardAddDone')}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 30,
    },
    cardText: {
        fontSize: 16,
        lineHeight: 19,
        color: 'black',
        textAlign: 'center',
        fontWeight: '400',
        marginTop: 185,
    },
    inputs: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        borderRadius: 15,
        marginTop: 67,
        height: 45,
        padding: 10,
        marginBottom: 30,
        color: 'black',
    },
});
