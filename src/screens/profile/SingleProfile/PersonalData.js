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
import {
  updateProfileFunction,
  getUserInfo,
} from '../../../store/actions/actions';

export default function PersonalData() {
  const {userInfo, updadeUserData} = useSelector(
    state => state.justDriveReducer,
  );
  console.log(userInfo, 'lkjj');
  const [name, setName] = useState(userInfo.data.firstName);
  const [lastName, setLastName] = useState(userInfo.data.lastName);
  const [middleName, setMiddleName] = useState(userInfo.data.middleName);
  const [email, setEmail] = useState(
    userInfo.data.email ? userInfo.data.email : '',
  );
  const [date, setDate] = useState(userInfo.data.birthDate);
  const [dateIsSelected, setDateIsSelected] = useState(false);
  const [phone, setPhone] = useState(userInfo.data.phone);
  const [gender, setGender] = useState(
    userInfo.data.gender == 'M' ? 'Мужской' : 'Женский',
  );
  const [genderIsSelected, setGendereIsSelected] = useState(false);
  const [citizenship, setCitizenship] = useState(
    userInfo.data.Citizenship ? userInfo.data.Citizenship : '',
  );
  const [address, setAddress] = useState(
    userInfo.data.Actual_Address ? userInfo.data.Actual_Address : '',
  );
  const [workplace, setWorkplace] = useState(
    userInfo.data.job ? userInfo.data.job : '',
  );
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [whoIssued, setWhoIssued] = useState('');
  const [snils, setSnils] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [jobChange, setJobChange] = useState(false);
  const [citychange, setCityChange] = useState(false);
  const [whoChange, setWhoChange] = useState(false);

  return (
    <View style={{width: '100%', marginTop: 8, marginBottom: 20}}>
      <Text style={styles.personalDataText}>Личные данные </Text>
      <PersonalDataInput
        inputName={'Имя'}
        inputType={'default'}
        value={name}
        onChangeText={setName}
        Svg={User}
        edit={false}
      />
      <PersonalDataInput
        inputName={'Фамилия'}
        inputType={'default'}
        value={lastName}
        onChangeText={setLastName}
        Svg={User}
        edit={false}
      />
      <PersonalDataInput
        inputName={'Отчество '}
        inputType={'default'}
        value={middleName}
        onChangeText={setMiddleName}
        Svg={User}
        edit={false}
      />
      <PersonalDataInput
        inputName={'Дата рождения '}
        inputType={'default'}
        value={date}
        onChangeText={setMiddleName}
        Svg={Calendar}
        edit={false}
      />
      <PersonalDataInput
        inputName={'Почта'}
        inputType={'default'}
        value={email}
        onChangeText={setEmail}
        Svg={Email}
        edit={false}
      />
      <PersonalDataInput
        inputName={'Номер телефона'}
        inputType={'phone'}
        value={phone}
        onChangeText={setPhone}
        Svg={Phone}
        edit={false}
      />
      <PersonalDataInput
        inputName={'Пол'}
        inputType={'default'}
        value={gender}
        edit={false}
        Svg={Gender}
      />

      {whoChange ? (
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
            onPress={() => {
              dispatch(updateProfileFunction(citizenship, address, workplace));
              dispatch(getUserInfo());
              setWhoChange(false);
            }}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../assets/images/pluspink.png')}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <PersonalDataInput
          inputName={'Гражданство'}
          inputType={'default'}
          value={citizenship}
          onChangeText={setCitizenship}
          Svg={User}
          onFocus={() => {
            setWhoChange(true);
          }}
        />
      )}
      {citychange ? (
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
            onPress={() => {
              dispatch(updateProfileFunction(citizenship, address, workplace));
              dispatch(getUserInfo());
              setCityChange(false);
            }}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../assets/images/pluspink.png')}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <PersonalDataInput
          inputName={'Адрес фактического места жительства'}
          inputType={'default'}
          value={address}
          onChangeText={setAddress}
          Svg={PushPin}
          onFocus={() => {
            setCityChange(true);
          }}
        />
      )}

      {jobChange ? (
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
            onFocus={() => {
              setJobChange(true);
            }}
            onBlur={() => {
              setJobChange(false);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              dispatch(updateProfileFunction(citizenship, address, workplace));
              dispatch(getUserInfo());
              setJobChange(false);
            }}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../assets/images/pluspink.png')}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <PersonalDataInput
          inputName={'Место учебы/работы'}
          inputType={'default'}
          value={workplace}
          onChangeText={setWorkplace}
          Svg={PushPin}
          onFocus={() => {
            setJobChange(true);
          }}
        />
      )}
      <TouchableOpacity>
        <Text style={styles.blueText}>Установить ПИН</Text>
      </TouchableOpacity>
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
