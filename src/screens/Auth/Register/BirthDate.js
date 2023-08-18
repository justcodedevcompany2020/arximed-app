import React, {useState} from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';

export default function BirthDate() {
  const [text, setText] = useState('Дата рождения');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <TouchableOpacity style={styles.input} onPress={() => setOpen(true)}>
      <Image
        style={{height: 20, width: 22}}
        source={require('../../../assets/images/date.png')}
      />
      <Text style={styles.text}>{text}</Text>
      <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          let text = date;
          text = moment(text).format('M.D.YYYY');
          setText(`${text}`);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      {/* <TextInput
        style={{
          padding: 10,
          marginLeft: 10,
          alignSelf: 'flex-start',
          width: '100%',
          height: '100%',
        }}
        placeholder={placeholderName}
        placeholderTextColor={'#000000'}
      /> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingVertical: 0,
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    marginTop: 10,
    width: '100%',
    height: 56,
  },
  text: {
    fontSize: 14,
    color: 'black',
    marginLeft: 20,
  },
});
