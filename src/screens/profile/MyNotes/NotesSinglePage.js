import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {GreenOkIcon, RedCrossIcon} from '../../../assets/svgs/HomeScreenSvgs';
import SurveysSingleBlock from '../ProfileAnalysis/Blocks/SurveysSingleBlock';

let data = [
  {
    id: 1,
    image: require('../../../assets/images/profile/bill.png'),
    firstText: '№ заказа',
    secondText: '64564684648348',
    width: 25,
    height: 25,
  },
  {
    id: 2,
    image: require('../../../assets/images/profile/bill.png'),
    firstText: 'Тип',
    secondText: 'Онлайн',
    width: 25,
    height: 25,
  },
  {
    id: 3,
    image: require('../../../assets/images/profile/profilepic.png'),
    firstText: 'Врач',
    secondText: 'Алексеев И.И. ',
    width: 25,
    height: 25,
  },
  {
    id: 4,
    image: require('../../../assets/images/profile/calendar1.png'),
    firstText: 'Дата',
    secondText: '12 февраля, 10:15',
    width: 25,
    height: 25,
  },
  {
    id: 5,
    image: require('../../../assets/images/medical-equipment.png'),
    firstText: 'Специализация',
    secondText: 'Врач терапевт',
    width: 25,
    height: 25,
  },
  {
    id: 6,
    image: require('../../../assets/images/medical-file.png'),
    firstText: 'Протокол терапевта первичный',
    secondText: 'pdf',
    width: 25,
    height: 25,
    navName: 'PdfFile',
  },
];


export default function NotesSinglePage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')}
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
        <View style={styles.block}>
          <Text style={[styles.blockText, {color: 'black'}]}>
            5 000 <Text style={[styles.blockText, {color: '#7B9E45'}]}>₽</Text>
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <GreenOkIcon />
            <Text style={styles.greenText}>Оплачено</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.blockQr}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Image
              style={{width: 102, height: 44}}
              source={require('../../../assets/images/profile/qr1.png')}
            />
            <Image
              style={{width: 102, height: 44}}
              source={require('../../../assets/images/profile/qr2.png')}
            />
          </View>
          <Text style={styles.paidText}>
            Покажите этот код сотруднику регистратуры
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CancelEntry')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 40,
          }}>
          <RedCrossIcon />
          <Text style={styles.redText}>Отменить запись</Text>
        </TouchableOpacity>
        {/* */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
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
    paddingHorizontal: 20,
    marginTop: 120,
    width: '100%',
  },
  block: {
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  blockText: {
    fontSize: 16,
    // lineHeight: 14,
    fontWeight: '400',
  },
  greenText: {
    color: '#7B9E45',
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 5,
  },
  blockQr: {
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  paidText: {
    color: '#72777A',
    fontSize: 10,
    lineHeight: 12,
    marginTop: 11,
    marginBottom: 20,
  },
  redText: {
    color: '#FF5454',
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 7,
  },
});
