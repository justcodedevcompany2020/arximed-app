import React from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import SearchButton from '../../../home/SearchButton';
import AnalysisNavigate from '../../AnalysisNavigate';

let data = [
  {
    id: 1,
    text: 'УЗИ',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 2,
    text: 'МРТ',
    navName: 'SingleExamination',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 3,
    text: 'КТ',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 4,
    text: 'Гастро/колоноскопию',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 5,
    text: 'ЭКГ',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 6,
    text: 'Холтеровское мониторирование',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 7,
    text: 'СМАД',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 8,
    text: 'Биоэпидасный анализ',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 9,
    text: 'Медицинский массаж ',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 10,
    text: 'В/В вливания',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 11,
    text: 'Забор гинекологического ',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 12,
    text: 'Выполнение в/м , в/в ',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 13,
    text: 'Вакцинация',
    navName: '',
    image: require('../../../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
];

export default function MedicalExaminations({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 110}}>
      <ImageBackground
        style={styles.fixed}
        source={require('../../../../assets//background.png')}
        resizeMode="cover"
      />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20, marginBottom: 15}}>
          <SearchButton navigation={navigation} />
        </View>
        <View style={{paddingHorizontal: 20}}>
          {data.map((value, index) => {
            return (
              <AnalysisNavigate
                image={value.image}
                key={index}
                text={value.text}
                onPress={
                  value.navName
                    ? () => navigation.navigate(value.navName)
                    : null
                }
                width={value.width}
                height={value.height}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  scrollview: {
    backgroundColor: 'transparent',
    marginBottom: 110,
  },
});
