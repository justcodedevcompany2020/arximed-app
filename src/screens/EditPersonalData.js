import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import PersonalDataInput from './PersonalDataInput';
import Button from '../components/Button';
import {
  Calendar,
  Comment,
  Document,
  Email,
  Gender,
  Phone,
  PushPin,
  RedCalendar,
  RedComment,
  RedDocument,
  RedEmail,
  RedGender,
  RedPhone,
  RedPushPin,
  RedUser,
  User,
} from '../assets/svgs/BasketSvgs';

export default function EditPersonalData({navigation, route}) {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState(false);
  const [middleName, setMiddleName] = useState('');
  const [middleNameError, setMiddleNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateError, setDateError] = useState(false);
  const [dateIsSelected, setDateIsSelected] = useState(false);
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState(false);
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState(false);
  const [genderIsSelected, setGendereIsSelected] = useState(false);
  const [citizenship, setCitizenship] = useState('');
  const [citizenshipError, setCitizenshipError] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [workplace, setWorkplace] = useState('');
  const [workplaceError, setWorkplaceError] = useState(false);
  const [documentType, setDocumentType] = useState('');
  const [documentTypeError, setDocumentTypeError] = useState(false);
  const [documentNumber, setDocumentNumber] = useState('');
  const [documentNumberError, setDocumentNumberError] = useState(false);
  const [whoIssued, setWhoIssued] = useState('');
  const [whoIssuedError, setWhoIssuedError] = useState(false);
  const [snils, setSnils] = useState('');
  const [snilsError, setSnilsError] = useState(false);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(false);

  useEffect(() => {
    if (name) {
      setNameError(false);
    }
    if (lastName) {
      setLastNameError(false);
    }
    if (middleName) {
      setMiddleNameError(false);
    }
    if (email) {
      setEmailError(false);
    }
    if (dateIsSelected) {
      setDateError(false);
    }
    if (phone) {
      setPhoneError(false);
    }
    if (genderIsSelected) {
      setGenderError(false);
    }
    if (citizenship) {
      setCitizenshipError(false);
    }
    if (address) {
      setAddressError(false);
    }
    if (workplace) {
      setWorkplaceError(false);
    }
    if (documentType) {
      setDocumentTypeError(false);
    }
    if (documentNumber) {
      setDocumentNumberError(false);
    }
    if (whoIssued) {
      setWhoIssuedError(false);
    }
    if (snils) {
      setSnilsError(false);
    }
    if (comment) {
      setCommentError(false);
    }
  }, [
    name,
    lastName,
    middleName,
    email,
    dateIsSelected,
    phone,
    genderIsSelected,
    citizenship,
    address,
    workplace,
    documentType,
    documentNumber,
    whoIssued,
    snils,
    comment,
  ]);

  function onPressContinue() {
    let errors = false;
    if (!name) {
      setNameError(true);
      errors = true;
    }
    if (!lastName) {
      setLastNameError(true);
      errors = true;
    }
    if (!middleName) {
      setMiddleNameError(true);
      errors = true;
    }
    if (!email) {
      setEmailError(true);
      errors = true;
    }
    if (!dateIsSelected) {
      setDateError(true);
      errors = true;
    }
    if (!phone) {
      setPhoneError(true);
      errors = true;
    }
    if (!genderIsSelected) {
      setGenderError(true);
      errors = true;
    }
    if (!citizenship) {
      setCitizenshipError(true);
      errors = true;
    }
    if (!address) {
      setAddressError(true);
      errors = true;
    }
    if (!workplace) {
      setWorkplaceError(true);
      errors = true;
    }
    if (!documentType) {
      setDocumentTypeError(true);
      errors = true;
    }
    if (!documentNumber) {
      setDocumentNumberError(true);
      errors = true;
    }
    if (!whoIssued) {
      setWhoIssuedError(true);
      errors = true;
    }
    if (!snils) {
      setSnilsError(true);
      errors = true;
    }
    if (!comment) {
      setCommentError(true);
      errors = true;
    }
    if (errors) {
      return;
    }
    navigation.replace('PersonalDataScreen', {
      hide: route.params?.hide ?? false,
      atHome: route.params?.atHome ?? false,
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../assets/background.png')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          {' '}
          Для оформления заказа, пожалуйста, заполните данные о себе.{' '}
        </Text>
        {nameError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Имя'}
          inputType={'default'}
          value={name}
          onChangeText={setName}
          Svg={nameError ? RedUser : User}
        />
        {lastNameError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Фамилия'}
          inputType={'default'}
          value={lastName}
          onChangeText={setLastName}
          Svg={lastNameError ? RedUser : User}
        />
        {middleNameError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Отчество '}
          inputType={'default'}
          value={middleName}
          onChangeText={setMiddleName}
          Svg={middleNameError ? RedUser : User}
        />
        {dateError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Дата рождения'}
          inputType={'date'}
          value={date}
          onChangeText={value => {
            setDate(value);
            setDateIsSelected(true);
          }}
          Svg={dateError ? RedCalendar : Calendar}
        />
        {emailError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Почта'}
          inputType={'default'}
          value={email}
          onChangeText={setEmail}
          Svg={emailError ? RedEmail : Email}
        />
        {phoneError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Номер телефона'}
          inputType={'phone'}
          value={phone}
          onChangeText={setPhone}
          Svg={phoneError ? RedPhone : Phone}
        />
        {genderError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Пол'}
          inputType={'gender'}
          value={gender}
          onChangeText={value => {
            setGender(value);
            setGendereIsSelected(true);
          }}
          Svg={genderError ? RedGender : Gender}
        />
        {citizenshipError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Гражданство'}
          inputType={'default'}
          value={citizenship}
          onChangeText={setCitizenship}
          Svg={citizenshipError ? RedUser : User}
        />
        {addressError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Адрес фактического места жительства'}
          inputType={'default'}
          value={address}
          onChangeText={setAddress}
          Svg={addressError ? RedPushPin : PushPin}
        />
        {workplaceError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Место учебы/работы'}
          inputType={'default'}
          value={workplace}
          onChangeText={setWorkplace}
          Svg={workplaceError ? RedPushPin : PushPin}
        />
        {documentTypeError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Тип документа'}
          inputType={'default'}
          value={documentType}
          onChangeText={setDocumentType}
          Svg={documentTypeError ? RedDocument : Document}
        />
        {documentNumberError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Номер документа'}
          inputType={'numeric'}
          value={documentNumber}
          onChangeText={setDocumentNumber}
          Svg={documentNumberError ? RedDocument : Document}
        />
        {whoIssuedError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Кем выдан документ'}
          inputType={'default'}
          value={whoIssued}
          onChangeText={setWhoIssued}
          Svg={whoIssuedError ? RedDocument : Document}
        />
        {snilsError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'СНИЛС '}
          inputType={'numeric'}
          value={snils}
          onChangeText={setSnils}
          Svg={snilsError ? RedDocument : Document}
        />
        {commentError && (
          <Text style={{color: '#FF5454', fontSize: 10, marginBottom: 5}}>
            *Данное поле обязательно для заполнения
          </Text>
        )}
        <PersonalDataInput
          inputName={'Комментарий к заказу'}
          inputType={'default'}
          value={comment}
          onChangeText={setComment}
          Svg={commentError ? RedComment : Comment}
        />
        <Text style={styles.smallText}>
          Если у Вас имеется ДМС укажите его в{' '}
          <Text style={{color: '#2C7DF2'}}>Программе обслуживания.</Text> До
          проверки нашим специалистом информация о ДМС учитываться не будет
        </Text>
        <Button
          text={'Далее'}
          color={'white'}
          backgroundColor={'#9DC458'}
          onPress={onPressContinue}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  smallText: {
    fontSize: 12,
    color: 'black',
  },
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
    paddingTop: 120,
    paddingBottom: 90,
    paddingHorizontal: 20,
  },
});
