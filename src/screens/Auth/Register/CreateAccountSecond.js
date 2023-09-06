import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text, View} from 'react-native';
import {postRequest} from '../../../api/RequestHelpers';
import {Calendar, Email, Gender, User} from '../../../assets/svgs/BasketSvgs';
import BigText from '../../../components/BigText';
import Button from '../../../components/Button';
import PersonalDataInput from '../../PersonalDataInput';
import Popup from '../../../components/Popup';
import Blurview from '../../../components/Blur';
import {registeredFunction} from '../../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function CreateAccountSecond({navigation, route}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState('');
  const [genderRequest, setGenderRequest] = useState('');
  const [gender, setGender] = useState('Пол');
  const [date, setDate] = useState(new Date());
  const [surname, setSurname] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [genderIsSelected, setGendereIsSelected] = useState(false);
  const [dateIsSelected, setDateIsSelected] = useState(false);
  const [showBirthError, setShowBirthError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const dispatch = useDispatch();
  const {registerPhoneNumber, registerConfirmData} = useSelector(
    state => state.justDriveReducer,
  );

  // useEffect(() => {
  //   if (name && surname && middleName && email && dateIsSelected && genderIsSelected) {
  //     setIsDisabled(false)
  //   }
  //   else {
  //     setIsDisabled(true)
  //   }
  // }, [name, surname, middleName, email, date, gender])

  // useEffect(() => {
  //   if (showBirthError) {
  //     setShowBirthError(false)
  //   }
  // }, [date])

  // useEffect(() => {
  //   if (showEmailError) {
  //     setShowEmailError(false)
  //   }
  // }, [email])

  // function getBirthDate() {
  //   let year = date.getFullYear()
  //   let month = date.getMonth() + 1
  //   let day = date.getDate()
  //   const birthDate = '' + year + (month < 10 ? '0' + month : month) + (day < 10 ? '0' + day : day);
  //   let currentDate = new Date()
  //   let currentYear = currentDate.getFullYear()
  //   console.log(currentYear);
  //   if (currentYear - year < 16) {
  //     setShowBirthError(true)
  //     return false
  //   }
  //   return birthDate
  // }

  // async function onContinue() {
  // let myPhone = '+' + phone.replace(/\D/g, '');
  // let birthDate = getBirthDate();
  // let myGender = gender === 'Мужской' ? 'M' : 'F';
  // let isEmailValid = validateEmail(email)
  // console.log(myPhone, name, surname, middleName, birthDate, myGender, email);
  // if (!isEmailValid) {
  //   setShowEmailError(true)
  //   return
  // }
  // birthDate && await postRequest('/register', {
  //   phone: myPhone,
  //   firstName: name,
  //   lastName: surname,
  //   middleName: middleName,
  //   gender: myGender,
  //   birthDate: birthDate,
  //   gmail: email
  // }).then(async json => {
  //   console.log(json);
  //   if (json.status) {
  // navigation.navigate('RegisterValidation', {login: false, phone: phone});
  //   } else if (json.code === "SERVER_ERROR" || json.message.code === "SERVER_ERROR") {
  //     setShowPopup1(true)
  //   } else if (json.code === "EMAIL_OR_PHONE_ALREADY_REGISTERED" || json.message.code === "EMAIL_OR_PHONE_ALREADY_REGISTERED") {
  //     setShowPopup(true)
  //   } else if (json.code === "INCORRECT_PARAM" || json.message.code === "INCORRECT_PARAM") {
  //     setShowBirthError(true)
  //   } else {
  //     setShowPopup1(true)
  //   }
  // });
  // }

  function validateEmail(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginTop: 35}} showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 15}}>
          <BigText
            bigText={'Создание аккаунта'}
            smallText={
              'Пожалуйста, заполните данные о себе. Нам важно знать Ваш возраст и биологический пол  для правильной интерпретации результатов.'
            }
          />
        </View>
        {nameError ? (
          <Text style={{color: 'red', marginBottom: 15, marginLeft: 10}}>
            Ваш возраст должен быть больше 16
          </Text>
        ) : (
          ''
        )}
        <PersonalDataInput
          inputName={'Имя'}
          inputType={'default'}
          value={name}
          onChangeText={setName}
          Svg={User}
          backgroundColor={'#f6f6f6'}
        />
        <PersonalDataInput
          inputName={'Отчество'}
          inputType={'default'}
          value={middleName}
          onChangeText={setMiddleName}
          Svg={User}
          backgroundColor={'#f6f6f6'}
        />
        <PersonalDataInput
          inputName={'Фамилия'}
          inputType={'default'}
          value={surname}
          onChangeText={setSurname}
          Svg={User}
          backgroundColor={'#f6f6f6'}
        />
        <PersonalDataInput
          inputName={'Пол'}
          inputType={'gender'}
          value={gender}
          onChangeText={value => {
            setGender(value);
            setGenderRequest(value === 'Женский' ? 'F' : 'M');
            setGendereIsSelected(true);
          }}
          Svg={Gender}
          backgroundColor={'#f6f6f6'}
        />
        <PersonalDataInput
          inputName={'Дата рождения'}
          inputType={'date'}
          value={date}
          onChangeText={value => {
            setDate(value);
            setDateIsSelected(true);
          }}
          Svg={Calendar}
          backgroundColor={'#f6f6f6'}
        />

        <PersonalDataInput
          inputName={'Почта'}
          inputType={'default'}
          value={email}
          onChangeText={setEmail}
          Svg={Email}
          backgroundColor={'#f6f6f6'}
          blur={() => setIsDisabled(false)}
        />
      </ScrollView>
      {showEmailError && (
        <Text style={styles.errorText}>
          *Данное поле обязательно для заполнения
        </Text>
      )}
      {(showPopup || showPopup1) && <Blurview />}
      <Popup
        isVisible={showPopup}
        setIsVisible={setShowPopup}
        nummberOfButtons={1}
        modalTitle={'Такой номер телефона уже зарегистрирован'}
        modalText={''}
        buttonText={'Хорошо'}
        onPressBtn={() => {
          setShowPopup(false);
          navigation.navigate('PhoneNumberRegister');
        }}
        buttonTextColor={'#007AFF'}
      />
      <Popup
        isVisible={showPopup1}
        setIsVisible={setShowPopup1}
        nummberOfButtons={1}
        modalTitle={'Попробуйте немного позже'}
        modalText={''}
        buttonText={'Хорошо'}
        onPressBtn={() => {
          setShowPopup1(false);
        }}
        buttonTextColor={'#007AFF'}
      />
      <Button
        text={'Далее'}
        isDisabled={false}
        color={'white'}
        backgroundColor={'#9DC458'}
        // onPress={onContinue}

        onPress={() => {
          let isEmailValid = validateEmail(email);
          if (!isEmailValid) {
            setShowEmailError(true);
            return;
          }
          if (name && email && gender && date && surname && middleName) {
            dispatch(
              registeredFunction(
                name,
                surname,
                middleName,
                registerPhoneNumber,
                date,
                genderRequest,
              ),
            );
            navigation.navigate('RegisterValidation', {
              login: false,
              phone: null,
            });
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 90,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 10,
    marginTop: 25,
  },
  errorText: {
    color: 'red',
    fontSize:12
  },
});
