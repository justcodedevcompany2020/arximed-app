import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from 'react-native';
import SurveysSingleBlock from '../ProfileAnalysis/Blocks/SurveysSingleBlock';
import Button from '../../../components/Button';

export default function EventInformation({navigation, route}) {
  const {value} = route.params;

  const month =
    value.DATE_ACTUAL.split('-')[1] == '01'
      ? 'январь'
      : value.DATE_ACTUAL.split('-')[1] == '02'
      ? 'февраль'
      : value.DATE_ACTUAL.split('-')[1] == '03'
      ? 'март'
      : value.DATE_ACTUAL.split('-')[1] == '04'
      ? 'апрель'
      : value.DATE_ACTUAL.split('-')[1] == '05'
      ? 'май'
      : value.DATE_ACTUAL.split('-')[1] == '06'
      ? 'июнь'
      : value.DATE_ACTUAL.split('-')[1] == '07'
      ? 'июль'
      : value.DATE_ACTUAL.split('-')[1] == '08'
      ? 'август'
      : value.DATE_ACTUAL.split('-')[1] == '09'
      ? 'сентябрь'
      : value.DATE_ACTUAL.split('-')[1] == '10'
      ? 'октябрь'
      : value.DATE_ACTUAL.split('-')[1] == '11'
      ? 'ноябрь'
      : 'декабрь';
  console.log(month);

  let data = [
    {
      id: 1,
      image: require('../../../assets/images/profile/calendar1.png'),
      firstText: 'Дата',
      secondText: `${value.DATE_ACTUAL.split('-')[2].split('T')[0]} ${month}, ${
        value.DATE_ACTUAL.split('-')[2].split('T')[1].split(':')[0]
      }:${value.DATE_ACTUAL.split('-')[2].split('T')[1].split(':')[1]}`,
      width: 25,
      height: 25,
    },
    {
      id: 2,
      image: require('../../../assets/images/profile/profilepic.png'),
      firstText: 'Врач',
      secondText: value.FIO_MED,
      width: 25,
      height: 25,
    },
    {
      id: 3,
      image: require('../../../assets/images/medical-equipment.png'),
      firstText: 'Специализация',
      secondText: 'Врач терапевт',
      width: 25,
      height: 25,
    },
    {
      id: 4,
      image: require('../../../assets/images/medical-file.png'),
      firstText: 'Протокол обследования',
      secondText: 'pdf',
      width: 25,
      height: 25,
      navName: 'PdfFile',
    },
  ];
  console.log(value, 'valll');
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/background.png')}
        resizeMode="cover"
        style={styles.fixed}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {data.map((value, index) => {
          return (
            <SurveysSingleBlock
              key={index}
              image={value.image}
              firstText={value.firstText}
              secondText={value.secondText}
              width={value.width}
              height={value.height}
              onPress={
                value.navName ? () => navigation.navigate(value.navName) : null
              }
            />
          );
        })}
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
