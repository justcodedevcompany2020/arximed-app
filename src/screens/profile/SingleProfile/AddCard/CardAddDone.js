import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import Button from '../../../../components/Button';

export default function CardAddDone({ navigation }) {
    return (
        <SafeAreaView style={styles.container} >
            <Image
                style={{ width: 198, height: 127 }}
                source={require('../../../../assets/images/profile/Galochka.png')} />
            <Text style={styles.text} >Ваша карта успешно привязана </Text>
            <View style={{ position: 'absolute', bottom: 0, width: '100%' }} >
                <Button
                    text={'Отлично'}
                    color={'white'}
                    backgroundColor={'#9DC458'}
                    isDisabled={false}
                    onPress={() => navigation.navigate('ProfileSingle')}
                    marginBottom={30}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        height: '100%',
        paddingHorizontal: 30,
        paddingTop: 280,
        position: 'relative',
    },
    text: {
        color: '#000000',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: '600',
        width: 240
    },
});
