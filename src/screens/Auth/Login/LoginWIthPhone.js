/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

import IllustrationBlock from '../../../components/IllustrationBlock';
import BigText from '../../../components/BigText';
import Button from '../../../components/Button';
import PhoneInput from '../../../components/PhoneInput';
import {postRequest} from '../../../api/RequestHelpers';
import Popup from '../../../components/Popup';
import Blurview from '../../../components/Blur';

export default function LoginWithPhone({navigation}) {
  const [phone, setPhone] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [minutes, setMinutes] = useState('sdfsdfsfd');
  const [message, setMessage] = useState('');

  useEffect(() => {
    validatePhone();
    setShowPhoneError(false);
  }, [phone]);

  function validatePhone() {
    let myPhone = phone.replace(/\D/g, '');
    let regex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    regex.test(myPhone) ? setIsDisabled(false) : setIsDisabled(true);
    return regex.test(myPhone);
  }

  const login = async () => {
    let url = `https://archimed.justcode.am/api/LoginForPhone`;
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
      }),
    };
    fetch(url, requestOptions)
      .then(resp => {
        return resp.json();
      })
      .then(resp => {
        console.log(resp, 'login');
        setMessage(resp.message);
        if (resp.data.message == 'Code Send Your Phone') {
          navigation.navigate('RegisterValidation', {
            login: true,
            phone: phone,
          });
        }
      });
  };

  // Wrong User Phone
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IllustrationBlock height={220} />
        <BigText
          smallText={
            'Пожалуйста, введите свой номер телефона, мы пришлем вам проверочный код '
          }
          bigText={'Вход'}
        />
        <PhoneInput phone={phone} setPhone={setPhone} />
        {message === 'Wrong User Phone' && (
          <Text style={{color: 'red', fontSize: 12}}>
            * Номер не зарегистрирован
          </Text>
        )}
        {message === 'try again in 10 minutes' && (
          <Text style={{color: 'red', fontSize: 12}}>
            * Повторите попытку через 10 минут.
          </Text>
        )}
      </ScrollView>
      <Button
        text={'Далее'}
        isDisabled={isDisabled}
        color={'white'}
        backgroundColor={'#9DC458'}
        onPress={login}
      />
      {showPopup && <Blurview />}
      <Popup
        isVisible={showPopup}
        setIsVisible={setShowPopup}
        nummberOfButtons={1}
        modalTitle={`Попробуйте еще раз через ${minutes?.charAt(0)} минут`}
        modalText={''}
        buttonText={'Хорошо '}
        onPressBtn={() => setShowPopup(false)}
        buttonTextColor={'#007AFF'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 120,
    paddingHorizontal: 20,
  },
});
