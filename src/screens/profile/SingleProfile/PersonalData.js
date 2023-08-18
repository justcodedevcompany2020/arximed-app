import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import PersonalDataInput from '../../PersonalDataInput';
import {
  Calendar,
  Comment,
  Document,
  Email,
  Gender,
  Phone,
  PushPin,
  User,
} from '../../../assets/svgs/BasketSvgs';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfileFunction} from '../../../store/actions/actions';

export default function PersonalData() {
  const {userInfo, updadeUserData} = useSelector(
    state => state.justDriveReducer,
  );
  console.log(userInfo, 'lkjj');
  const [name, setName] = useState(userInfo.data.firstName);
  const [lastName, setLastName] = useState(userInfo.data.lastName);
  const [middleName, setMiddleName] = useState(userInfo.data.middleName);
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(userInfo.data.birthDate);
  const [dateIsSelected, setDateIsSelected] = useState(false);
  const [phone, setPhone] = useState(userInfo.data.phone);
  const [gender, setGender] = useState('');
  const [genderIsSelected, setGendereIsSelected] = useState(false);
  const [citizenship, setCitizenship] = useState('');
  const [address, setAddress] = useState('');
  const [workplace, setWorkplace] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [whoIssued, setWhoIssued] = useState('');
  const [snils, setSnils] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  console.log(updadeUserData, 'update');

  return (
    <View style={{width: '100%', marginTop: 8, marginBottom: 20}}>
      <Text style={styles.personalDataText}>Личные данные </Text>
      <PersonalDataInput
        inputName={'Имя'}
        inputType={'default'}
        value={name}
        onChangeText={setName}
        Svg={User}
      />
      <PersonalDataInput
        inputName={'Фамилия'}
        inputType={'default'}
        value={lastName}
        onChangeText={setLastName}
        Svg={User}
      />
      <PersonalDataInput
        inputName={'Отчество '}
        inputType={'default'}
        value={middleName}
        onChangeText={setMiddleName}
        Svg={User}
      />
      <PersonalDataInput
        inputName={'Дата рождения '}
        inputType={'default'}
        value={date}
        onChangeText={setMiddleName}
        Svg={Calendar}
      />
      {/* <PersonalDataInput
        inputName={'Дата рождения'}
        inputType={'date'}
        value={date}
        onChangeText={value => {
          setDate(value);
          setDateIsSelected(true);
        }}
        Svg={Calendar}
      /> */}
      <PersonalDataInput
        inputName={'Почта'}
        inputType={'default'}
        value={email}
        onChangeText={setEmail}
        Svg={Email}
      />
      <PersonalDataInput
        inputName={'Номер телефона'}
        inputType={'phone'}
        value={phone}
        onChangeText={setPhone}
        Svg={Phone}
      />
      <PersonalDataInput
        inputName={'Пол'}
        inputType={'gender'}
        value={gender}
        onChangeText={value => {
          setGender(value);
          setGendereIsSelected(true);
        }}
        Svg={Gender}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <PersonalDataInput
          widths={'90%'}
          inputName={'Гражданство'}
          inputType={'default'}
          value={citizenship}
          onChangeText={setCitizenship}
          Svg={User}
        />
        <TouchableOpacity
          onPress={() =>
            dispatch(updateProfileFunction(citizenship, address, workplace))
          }
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../../assets/images/pluspink.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <PersonalDataInput
          widths={'90%'}
          inputName={'Адрес фактического места жительства'}
          inputType={'default'}
          value={address}
          onChangeText={setAddress}
          Svg={PushPin}
        />
        <TouchableOpacity
          onPress={() =>
            dispatch(updateProfileFunction(citizenship, address, workplace))
          }
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../../assets/images/pluspink.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <PersonalDataInput
          widths={'90%'}
          inputName={'Место учебы/работы'}
          inputType={'default'}
          value={workplace}
          onChangeText={setWorkplace}
          Svg={PushPin}
        />
        <TouchableOpacity
          onPress={() =>
            dispatch(updateProfileFunction(citizenship, address, workplace))
          }
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../../assets/images/pluspink.png')}
          />
        </TouchableOpacity>
      </View>

      {/* 
      <Text style={styles.personalDataText}>Документы</Text>

      <PersonalDataInput
        inputName={'Тип документа'}
        inputType={'default'}
        value={documentType}
        onChangeText={setDocumentType}
        Svg={Document}
      />
      <PersonalDataInput
        inputName={'Номер документа'}
        inputType={'numeric'}
        value={documentNumber}
        onChangeText={setDocumentNumber}
        Svg={Document}
      />
      <PersonalDataInput
        inputName={'Кем выдан документ'}
        inputType={'default'}
        value={whoIssued}
        onChangeText={setWhoIssued}
        Svg={Document}
      />
      <PersonalDataInput
        inputName={'СНИЛС '}
        inputType={'numeric'}
        value={snils}
        onChangeText={setSnils}
        Svg={Document}
      />
      <PersonalDataInput
        inputName={'Комментарий к заказу'}
        inputType={'default'}
        value={comment}
        onChangeText={setComment}
        Svg={Comment}
      />
      <Text style={styles.blueText}>Добавить документ</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  personalDataText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 20,
  },
  blueText: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '400',
    color: '#2C7DF2',
    marginTop: 25,
    marginBottom: 15,
  },
});
