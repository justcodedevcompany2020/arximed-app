import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, ScrollView } from 'react-native';
import Button from '../../../../components/Button';

export default function AddCard({ navigation }) {
    const [isDisabled, setIsDisabled] = useState(true);
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [CVV, setCVV] = useState('')

    function onChangeCardNumber(value) {
        let x = value
            .replace(/\D/g, '')
            .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
        let formattedNmber = !x[1] ? '' : x[1] + (!x[2] ? '' : '  ' + x[2]) + (!x[3] ? '' : '  ' + x[3]) + (!x[4] ? '' : '  ' + x[4])
        setCardNumber(formattedNmber);
    }
    function onChangeExpirationDate(value) {
        if (value.length === expirationDate.length - 1) {
            console.log(value.indexOf("/") === 0 || value.indexOf("/") === 1)
            if (value.indexOf("/") === 0 || value.indexOf("/") === 1) {
                setExpirationDate('')
                return
            }
            setExpirationDate(value)
        } else {
            let lastCharacter = value.slice(-1)
            switch (expirationDate.length) {
                case 0:
                    if (lastCharacter == 0 || lastCharacter == 1) {
                        console.log(lastCharacter);
                        setExpirationDate(value)
                        break;
                    } else {
                        break;
                    }
                case 1:
                    if (expirationDate[0] == 1 && lastCharacter > 2) {
                        break;
                    } else {
                        setExpirationDate(value + '/')
                        break;
                    }
                case 2:
                    setExpirationDate(value);
                case 3:
                    if (value.includes('/')) {
                        setExpirationDate(value);
                        break;
                    } else {
                        let str = value.slice(0, 2) + '/' + value.slice(2)
                        setExpirationDate(str);
                        break;
                    }
                case 4:
                    if (value.includes('/')) {
                        setExpirationDate(value);
                        break;
                    } else {
                        let str = value.slice(0, 2) + '/' + value.slice(2)
                        setExpirationDate(str);
                        break;
                    }
                case 5:
                    if (value.includes('/')) {
                        setExpirationDate(value);
                        break;
                    } else {
                        let str = value.slice(0, 2) + '/' + value.slice(2)
                        setExpirationDate(str);
                        break;
                    }
                default:
                    setExpirationDate(value)
            }
        }
    }

    useEffect(() => {
        if (CVV.length === 3 && cardNumber.length === 22 && expirationDate.length === 5) {
            setIsDisabled(false)
        } else{
            setIsDisabled(true)
        }
    }, [cardNumber, expirationDate, CVV])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 150, width: '100%' }} >
                <ScrollView style={{ paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                    <Text style={styles.text}>Введите данные карты </Text>
                    <View style={styles.nameInput}>
                        <Image style={{ width: 25, height: 20 }} source={require('../../../../assets/images/profile/card_user.png')} />
                        <TextInput
                            style={{
                                padding: 10,
                                marginLeft: 10,
                                alignSelf: 'flex-start',
                                width: '100%',
                                height: '100%',
                            }}
                            value={cardNumber}
                            onChangeText={onChangeCardNumber}
                            maxLength={22}
                            keyboardType={'numeric'}
                            placeholder={'Новая карта'}
                            placeholderTextColor={'black'}
                        />
                    </View>
                    <View style={styles.inputDiv}>
                        <TextInput
                            placeholder="Срок действия"
                            maxLength={5}
                            style={styles.input}
                            value={expirationDate}
                            keyboardType={'numeric'}
                            onChangeText={onChangeExpirationDate}
                            placeholderTextColor={'black'}
                        />
                        <TextInput
                            placeholder="CVV/CVC"
                            maxLength={3}
                            style={styles.input}
                            value={CVV}
                            onChangeText={setCVV}
                            placeholderTextColor={'black'}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <Button
                        text={'Привязать карту'}
                        color={'white'}
                        backgroundColor={'#9DC458'}
                        isDisabled={isDisabled}
                        onPress={() => navigation.navigate('AddCardSecond')}
                        marginBottom={20}
                    />
                    <Image
                        style={{ width: 196, height: 24, alignSelf: 'center' }}
                        source={require('../../../../assets/images/profile/cards.png')}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 14,
        lineHeight: 19,
        fontWeight: '400',
        color: 'black',
        marginBottom: 25,
    },
    inputDiv: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 60,
    },
    input: {
        width: '48%',
        height: 56,
        color: 'black',
        backgroundColor: '#F7F7F7',
        borderRadius: 15,
        padding: 15,
    },
    nameInput: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingVertical: 0,
        backgroundColor: '#F7F7F7',
        borderRadius: 15,
        marginTop: 10,
        width: '100%',
    },
});