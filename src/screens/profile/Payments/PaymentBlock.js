import React from 'react';
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
import {
  CheckMarkIcon1,
  RedCrossIcon,
} from '../../../assets/svgs/HomeScreenSvgs';

export default function PaymentBlock({
  navigation,
  active,
  firstText,
  secondText,
  number,
  textColor,
  marginBottom,
}) {
  return (
    <TouchableOpacity
      style={[styles.block, marginBottom && {marginBottom: marginBottom}]}>
      <View>
        <Text style={styles.firstText}>{firstText}</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          {active == 'red' && <RedCrossIcon />}
          {active == 'green' && <CheckMarkIcon1 />}
          <Text style={[styles.checkText, {color: textColor}]}>
            {secondText}
          </Text>
        </View>
      </View>
      <View>
        <Text style={[styles.numberText, {color: '#000000'}]}>
          {number} {''}
          <Text style={[styles.numberText, {color: '#7B9E45'}]}>₽</Text>
        </Text>
        {/* {active == 'red' && (
          <TouchableOpacity style={styles.redButton}>
            <Text style={styles.redText}>Оплатить</Text>
          </TouchableOpacity>
        )} */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  block: {
    width: '100%',
    padding: 20,
    borderRadius: 8,
    marginTop: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstText: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14,
    color: '#1C1C1E',
    width: 216,
  },
  checkText: {
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 5,
  },
  numberText: {
    fontSize: 16,
    fontWeight: '400',
  },
  redButton: {
    height: 34,
    padding: 5,
    backgroundColor: '#FF414C26',
    borderRadius: 10,
    marginTop: 10,
  },
  redText: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14,
    color: '#FF414C',
    textAlign: 'center',
    marginTop: 5,
  },
});
