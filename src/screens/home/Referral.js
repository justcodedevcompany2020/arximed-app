import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {RedCalendar} from '../../assets/svgs/HomeScreenSvgs';
import Button from '../../components/Button';

export default function Referral({
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
      style={styles.container}>
      <Text style={styles.title}>{name} </Text>
      <View
        style={{
          backgroundColor: '#f9f9f9',
          borderRadius: 15,
          padding: 15,
          marginVertical: 10,
        }}>
        <Text style={styles.doctor}>Направил {fio}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RedCalendar />
        <Text style={styles.time}>
          {' '}
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
      {/* <Button
        text={'Записаться'}
        backgroundColor={'#9DC458'}
        color={'white'}
        marginBottom={10}
        
      /> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 18,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  doctor: {
    fontSize: 12,
    fontWeight: '600',
    color: '#72777A',
  },
  time: {
    fontSize: 12,
    color: 'black',
    marginLeft: 5,
  },
});
