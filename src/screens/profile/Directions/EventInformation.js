import React from 'react';
import { SafeAreaView, View, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import SurveysSingleBlock from '../ProfileAnalysis/Blocks/SurveysSingleBlock';
import Button from '../../../components/Button';

let data = [
    { id: 1, image: require('../../../assets/images/profile/calendar1.png'), firstText: 'Дата', secondText: '12 февраля, 10:15', width: 25, height: 25 },
    { id: 2, image: require('../../../assets/images/profile/profilepic.png'), firstText: 'Врач', secondText: 'Алексеев И.И. ', width: 25, height: 25 },
    { id: 3, image: require('../../../assets/images/medical-equipment.png'), firstText: 'Специализация', secondText: 'Врач терапевт', width: 25, height: 25 },
    { id: 4, image: require('../../../assets/images/medical-file.png'), firstText: 'Протокол обследования', secondText: 'pdf', width: 25, height: 25, navName: 'PdfFile' },
];

export default function EventInformation({ navigation }) {
    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground
                source={require('../../../assets/background.png')}
                resizeMode="cover"
                style={styles.fixed}
            />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {
                    data.map((value, index) => {
                        return (
                            <SurveysSingleBlock
                                key={index}
                                image={value.image}
                                firstText={value.firstText}
                                secondText={value.secondText}
                                width={value.width}
                                height={value.height}
                                onPress={value.navName ? () => navigation.navigate(value.navName) : null}
                            />
                        );
                    })
                }
            </ScrollView>
                    <Button
                        text={'Записаться на обследование'}
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
        paddingTop: 110,
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
        width: '100%',
    },
});
