/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import BigText from '../../../components/BigText';
import IllustrationBlock from '../../../components/IllustrationBlock';
import PhoneInput from '../../../components/PhoneInput';
import Button from '../../../components/Button';
import {savePhoneNumberRegister} from '../../../store/actions/actions';
import {useDispatch} from 'react-redux';

export default function PhoneNumberRegister({navigation}) {
  const [phone, setPhone] = useState('');
  const [active, setActive] = useState(false);
  const [actives, setActives] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (validatePhone() && active && actives) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [phone, active, actives]);

  function validatePhone() {
    let myPhone = phone.replace(/\D/g, '');
    let regex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(myPhone);
  }
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IllustrationBlock height={220} />
        <BigText
          smallText={
            'Пожалуйста, введите свой номер телефона, мы пришлем вам проверочный код'
          }
          bigText={'Регистрация'}
          width={styles.width}
        />
        <PhoneInput phone={phone} setPhone={setPhone} />
        <View>
          <TouchableOpacity
            onPress={() => {
              setActive(!active);
            }}
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            {active ? (
              <View style={{marginRight: 10, marginLeft: 10}}>
                <Svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M13.1114 0.666504H2.22255C1.35921 0.666504 0.666992 1.3665 0.666992 2.22206V13.1109C0.666992 13.9665 1.35921 14.6665 2.22255 14.6665H13.1114C13.9748 14.6665 14.667 13.9665 14.667 13.1109V2.22206C14.667 1.3665 13.9748 0.666504 13.1114 0.666504ZM6.11144 11.5554L2.22255 7.6665L3.31921 6.56984L6.11144 9.35428L12.0148 3.45095L13.1114 4.55539L6.11144 11.5554Z"
                    fill="#9DC458"
                  />
                </Svg>
              </View>
            ) : (
              <View style={styles.checkSquare} />
            )}
            <Text style={[styles.checkboxText, {color: '#696969BF'}]}>
              Я соглашаюсь с{' '}
              <Text
                style={[
                  styles.checkboxText,
                  {color: '#2A7BF4', marginLeft: 10},
                ]}>
                {' '}
                политикой использования приложения
              </Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActives(!actives);
            }}
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            {actives ? (
              <View style={{marginRight: 10, marginLeft: 10}}>
                <Svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M13.1114 0.666504H2.22255C1.35921 0.666504 0.666992 1.3665 0.666992 2.22206V13.1109C0.666992 13.9665 1.35921 14.6665 2.22255 14.6665H13.1114C13.9748 14.6665 14.667 13.9665 14.667 13.1109V2.22206C14.667 1.3665 13.9748 0.666504 13.1114 0.666504ZM6.11144 11.5554L2.22255 7.6665L3.31921 6.56984L6.11144 9.35428L12.0148 3.45095L13.1114 4.55539L6.11144 11.5554Z"
                    fill="#9DC458"
                  />
                </Svg>
              </View>
            ) : (
              <View style={styles.checkSquare} />
            )}
            <Text style={[styles.checkboxText, {color: '#696969BF'}]}>
              Я соглашаюсь с{' '}
              <Text
                style={[
                  styles.checkboxText,
                  {color: '#2A7BF4', marginLeft: 10},
                ]}>
                {' '}
                условиями обработки персональных данных
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{marginHorizontal: 10}}>
        <Button
          text={'Далее'}
          isDisabled={isDisabled}
          color={'white'}
          backgroundColor={'#9DC458'}
          onPress={() => {
            dispatch(savePhoneNumberRegister(phone));
            navigation.navigate('CreateAccountSecond');
          }}
        />
      </View>
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
  width: {
    width: '100%',
  },
  text: {
    fontSize: 10,
    fontWeight: '400',
  },
  checkSquare: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#9DC458',
    borderRadius: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  checkboxText: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 10,
  },
});
