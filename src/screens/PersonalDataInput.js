import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import GenderDropDown from './basket/GenderDropdown';

export default function PersonalDataInput({
  inputType,
  inputName,
  Svg,
  value,
  onChangeText,
  backgroundColor,
  blur,
  widths,
}) {
  const [text, setText] = useState('Дата рождения');
  const [openPicker, setOpenPicker] = useState(false);
  const DateInput = () => {
    return (
      <TouchableOpacity
        style={[
          styles.inputContainer,

          backgroundColor && {backgroundColor: backgroundColor},
          // {width: widths},
        ]}
        onPress={() => setOpenPicker(true)}>
        <Svg />
        <Text style={[styles.input, {marginLeft: 10, color: 'black'}]}>
          {text}
        </Text>
        <DatePicker
          modal
          open={openPicker}
          title={'Дата рождения'}
          date={value}
          mode={'date'}
          cancelText={'отменить'}
          confirmText={'подтвердить'}
          maximumDate={new Date()}
          onConfirm={date => {
            setOpenPicker(false);
            onChangeText(date);
            let mytext = date;
            mytext = moment(mytext).format('D.M.YYYY');
            console.log(mytext);
            setText(`${mytext}`);
          }}
          onCancel={() => {
            setOpenPicker(false);
          }}
        />
      </TouchableOpacity>
    );
  };

  function formatPhone(phone) {
    let x = phone
      .replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    let myPhone = !x[2]
      ? '+7 '
      : !x[3]
      ? '+7 (' + x[2]
      : '+7 (' +
        x[2] +
        ') ' +
        (x[3] ? x[3] : '') +
        (x[4] ? ' - ' + x[4] : '') +
        (x[5] ? ' - ' + x[5] : '');
    onChangeText(myPhone);
  }

  return inputType === 'default' ? (
    <View
      style={[
        styles.inputContainer,
        backgroundColor && {backgroundColor: backgroundColor},
        {width: widths},
      ]}>
      <Svg />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={inputName}
        placeholderTextColor={'black'}
        keyboardType={inputType}
        onBlur={blur}
      />
    </View>
  ) : inputType === 'date' ? (
    <DateInput />
  ) : inputType === 'phone' ? (
    <View style={styles.inputContainer}>
      <Svg />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder={inputName}
        placeholderTextColor={'black'}
        value={value}
        onChangeText={formatPhone}
        maxLength={22}
      />
    </View>
  ) : inputType === 'gender' ? (
    <GenderDropDown
      Svg={Svg}
      selectedItem={value}
      setSelectedItem={onChangeText}
      backgroundColor={backgroundColor}
    />
  ) : (
    inputType === 'numeric' && (
      <View style={styles.inputContainer}>
        <Svg />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder={inputName}
          placeholderTextColor={'black'}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 15,
  },
  input: {
    marginLeft: 5,
    width: '90%',
    color: 'black',
  },
});
