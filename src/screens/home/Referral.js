import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {RedCalendar} from '../../assets/svgs/HomeScreenSvgs';
import Button from '../../components/Button';

export default function Referral() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>
        Прием (консультация) врача-хирурга, первичный{' '}
      </Text>
      <View
        style={{
          backgroundColor: '#f9f9f9',
          borderRadius: 15,
          padding: 15,
          marginVertical: 10,
        }}>
        <Text style={styles.doctor}>
          Направил ВОП, Захаренко Алексей Владимирович
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RedCalendar />
        <Text style={styles.time}>Актуально до 24 мая, 12:43</Text>
      </View>
      <Button
        text={'Записаться'}
        backgroundColor={'#9DC458'}
        color={'white'}
        marginBottom={10}
      />
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
