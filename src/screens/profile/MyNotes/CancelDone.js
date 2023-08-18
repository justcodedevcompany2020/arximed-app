import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import Button from '../../../components/Button';

export default function CancelDone({ navigation }) {
    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground
                style={styles.fixed}
                resizeMode="cover"
                source={require('../../../assets/background.png')}
            />
            <View>
                <Image
                    style={{ width: 75, height: 106, marginTop: 260, alignSelf: 'center' }}
                    source={require('../../../assets/images/profile/cancel.png')} />
                <Text style={styles.textCenter} >
                    Запись на прием {'\n'}
                    отменена
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    text={'Отлично'}
                    color={'white'}
                    backgroundColor={'#9DC458'}
                    isDisabled={false}
                    onPress={() => navigation.navigate('MyNotesScreen')}
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
    },
    fixed: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
    scrollView: {
        backgroundColor: 'transparent',
        marginBottom: 90,
        paddingHorizontal: 20,
        marginTop: 120,
        width: '100%',

    },
    textCenter: {
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 30,
        marginTop: 40,
        color: '#000000',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignSelf: 'center',
    },
});
