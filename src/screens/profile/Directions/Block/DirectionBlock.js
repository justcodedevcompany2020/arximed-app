import React from 'react';
// import { TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CalendarIcon} from '../../../../assets/svgs/HomeScreenSvgs';

export default function DirectionBlock({
  navigation,
  marginBottom,
  name,
  fio,
  actual,
  value,
}) {
  return (
    <TouchableOpacity
      // onPress={() => navigation.navigate('EventInformation', {value: value})}
      style={[styles.blockWhite, marginBottom && {marginBottom: marginBottom}]}>
      <Text style={styles.firstText}>{name}</Text>
      <View style={styles.grayButton}>
        <Text style={styles.grayButtonText}>Направил {fio}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <CalendarIcon />
        <Text style={styles.dataText}>
          Актуально до {''} {actual.split('-')[2].split('T')[0]}{' '}
          {actual.split('-')[1] == '01' && 'январь'}
          {actual.split('-')[1] == '02' && 'февраль'}
          {actual.split('-')[1] == '03' && 'март'}
          {actual.split('-')[1] == '04' && 'апрель'}
          {actual.split('-')[1] == '05' && 'май'}
          {actual.split('-')[1] == '06' && 'июнь'}
          {actual.split('-')[1] == '07' && 'июль'}
          {actual.split('-')[1] == '08' && 'август'}
          {actual.split('-')[1] == '09' && 'сентябрь'}
          {actual.split('-')[1] == '10' && 'октябрь'}
          {actual.split('-')[1] == '11' && 'ноябрь'}
          {actual.split('-')[1] == '12' && 'декабрь'},{' '}
          {actual.split('-')[2].split('T')[1].split(':')[0]}:
          {actual.split('-')[2].split('T')[1].split(':')[1]}
        </Text>
      </View>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('EventInformation', {value: value})}
        style={styles.greenButton}>
        <Text style={styles.whiteText}>Записаться</Text>
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  blockWhite: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginTop: 15,
  },
  firstText: {
    color: '#1C1C1E',
    fontSize: 15,
    lineHeight: 17,
    fontWeight: '600',
  },
  grayButton: {
    padding: 5,
    backgroundColor: '#EDEDED78',
    height: 53,
    width: 244,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  grayButtonText: {
    color: '#72777A',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '600',
  },
  dataText: {
    color: '#000000',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    marginLeft: 7,
  },
  greenButton: {
    width: '100%',
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: '#9DC458',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  whiteText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
