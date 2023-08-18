import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {CalendarIcon} from '../../../assets/svgs/HomeScreenSvgs';

export default function BlockPrograms({
  firstText,
  secondText,
  dataText,
  number,
  green,
}) {
  return (
    <View style={styles.whiteBlock}>
      <View>
        <Text style={styles.firstText}>{firstText}</Text>
        <Text style={styles.secondText}>{secondText}</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <CalendarIcon />
          <Text style={styles.dataText}>{dataText}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.number}>{number}</Text>
        <Image
          style={{width: 18, height: 12.18}}
          source={require('../../../assets/images/profile/logo.png')}
        />
      </View>
      {green && (
        <View style={styles.greenButton}>
          <Text style={styles.buttonText}>Сгорит через 5 дней</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  whiteBlock: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    position: 'relative',
  },
  firstText: {
    color: '#72777A',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
  },
  secondText: {
    color: '#1C1C1E',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '400',
    marginTop: 5,
  },
  dataText: {
    color: '#1C1C1E',
    fontSize: 11.5,
    lineHeight: 17,
    fontWeight: '400',
    marginLeft: 10,
  },
  number: {
    color: '#060606',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
    marginRight: 10,
  },
  greenButton: {
    padding: 5,
    height: 22,
    backgroundColor: '#C8EE864D',
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  buttonText: {
    color: '#7B9E45',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 12,
  },
});
