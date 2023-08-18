import React from 'react';
import { SafeAreaView, ImageBackground, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import BlockPrograms from './BlockProgram';
import Header from './Header';


export default function BonusPrograms({ navigation }) {
    const noData = false;
    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground
                source={require('../../../assets/background.png')}
                resizeMode="cover"
                style={styles.fixed}
            >
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <Header />
                    <TouchableOpacity>
                        <Text style={styles.blueText} >Подробнее о бонусной программе</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'black', marginTop: 20 }}>История начислений</Text>
                    {noData ? <Text style={{ textAlign: 'center', marginTop: 200 }}>Нет начислений</Text> : <>
                        <BlockPrograms firstText={'Начисление'} secondText={'№46844644'} dataText={'25 января 2022'} number={'+152'} green />
                        <BlockPrograms firstText={'Списание'} secondText={'№684865'} dataText={'25 января 2022'} number={'-1500'} />
                        <BlockPrograms firstText={'Сгорание бонусов'} secondText={'№684865'} dataText={'25 января 2022'} number={'-1500'} />
                        <BlockPrograms firstText={'Начисление'} secondText={'№46844644'} dataText={'25 января 2022'} number={'+152'} />
                    </>}
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
    blueText: {
        marginTop: 20,
        fontSize: 14,
        color: '#2A7BF4',
        fontWeight: '400',
        lineHeight: 17,
    },
});
