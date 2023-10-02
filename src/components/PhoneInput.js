import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function PhoneInput({phone, setPhone}) {
  function formatPhone(value) {
    let x = value
      .replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    let myPhone = !x[0]
      ? '+7 '
      : !x[3]
      ? '+7 (' + x[2]
      : '+7 (' +
        x[2] +
        ') ' +
        (x[3] ? x[3] : '') +
        (x[4] ? ' - ' + x[4] : '') +
        (x[5] ? ' - ' + x[5] : '');
    setPhone(myPhone);
  }
  return (
    <View style={{width: '100%'}}>
      <Text style={styles.text}>
        Введите номер телефона <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formatPhone}
        value={phone}
        placeholder="+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
        placeholderTextColor={'black'}
        keyboardType="numeric"
        maxLength={22}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 0,
    color: 'black',
    width: '100%',
    height: 54,
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    paddingLeft: 10,
    marginVertical: 10,
    fontSize: 16,
    alignSelf: 'center',
  },
  text: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    marginLeft: 5,
  },
});
