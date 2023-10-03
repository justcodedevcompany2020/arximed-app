/* eslint-disable no-shadow */
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  View,
  Image,
} from 'react-native';
import BigText from '../../../components/BigText';
import IllustrationBlock from '../../../components/IllustrationBlock';
import Button from '../../../components/Button';
import React, {useState, useRef} from 'react';
import Svg, {Path} from 'react-native-svg';
import {useEffect} from 'react';
import {postRequest} from '../../../api/RequestHelpers';
import Popup from '../../../components/Popup';
import {TouchableOpacity} from 'react-native';
import Blurview from '../../../components/Blur';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {newConfirmCode} from '../../../store/actions/actions';
const CELL_COUNT = 6;

export default function RegisterValidation({navigation, route}) {
  const dispatch = useDispatch();
  const login = route.params.login;
  const phone = route.params.phone;
  const [isDisabled, setIsDisabled] = useState(true);

  const [res, setRes] = useState([]);

  const [isTheCodeWrong, setIsTheCodeWrong] = useState(false);
  const [requestQuantity, setRequestQuantity] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [isEnableResendPhone, setIsEnableResendPhone] = useState(false);
  const [isEnableSendCode, setIsEnableSendCode] = useState(true);
  const [showContactUsBtn, setShowContactUsBtn] = useState(true);

  const [minutes, setMinutes] = useState('dfg');

  const [resendMinutes, setResendMinutes] = useState(1);
  const [resendSeconds, setResendSeconds] = useState(0);

  const [sendCodeMinutes, setSendCodeMinutes] = useState(1);
  const [sendCodeSeconds, setSendCodeSeconds] = useState(0);

  const [minutes10, setMinutes10] = useState(10);
  const [seconds10, setSedconds10] = useState(0);
  const [show10Minutes, setShow10Minutes] = useState(false);
  const {registerPhoneNumber, registerConfirmData} = useSelector(
    state => state.justDriveReducer,
  );

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    setResendTimer(1, 0);
  }, []);

  function setResendTimer(min, sec) {
    resendTimer(min, sec, () => {
      setIsEnableResendPhone(true);
    });
    setIsEnableResendPhone(false);
  }

  function setSendCodeTimer() {
    sendCodeTimer(10, 0, () => {
      setIsEnableSendCode(true);
    });
    setIsEnableSendCode(false);
  }

  function resendTimer(min, sec, onFinish) {
    setResendMinutes(min);
    setResendSeconds(sec);
    let seconds = sec;
    let minutes = min;
    const interval = setInterval(() => {
      if (seconds === 0) {
        console.log('resendSeconds === 0');
        if (minutes === 0) {
          console.log('resendMinutes === 0');
          clearInterval(interval);
          onFinish();
          return;
        }
        seconds = 60;
        minutes = minutes - 1;
        setResendMinutes(minutes);
      }
      seconds = seconds - 1;
      setResendSeconds(seconds);
    }, 1000);
    return interval;
  }

  function sendCodeTimer(min, sec, onFinish) {
    setSendCodeMinutes(min);
    setSendCodeSeconds(sec);
    let seconds = sec;
    let minutes = min;
    const interval = setInterval(() => {
      if (seconds === 0) {
        console.log('resendSeconds === 0');
        if (minutes === 0) {
          console.log('resendMinutes === 0');
          clearInterval(interval);
          onFinish();
          return;
        }
        seconds = 60;
        minutes = minutes - 1;
        setSendCodeMinutes(minutes);
      }
      seconds = seconds - 1;
      setSendCodeSeconds(seconds);
    }, 1000);
  }

  function timer10() {
    let seconds = seconds10;
    let minutes = minutes10;
    const interval = setInterval(() => {
      if (seconds === 0) {
        console.log('resendSeconds === 0');
        if (minutes === 0) {
          console.log('resendMinutes === 0');
          clearInterval(interval);
          setShow10Minutes(false);
          return;
        }
        seconds = 60;
        minutes = minutes - 1;
        setMinutes10(minutes);
      }
      seconds = seconds - 1;
      setSedconds10(seconds);
    }, 1000);
  }

  const confirmCode = async () => {
    console.log(value, 'koijij');
    let url = `https://archimed.justcode.am/api/confirmNewAccount`;
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: registerPhoneNumber,
        confirmationCode: value,
      }),
    };
    fetch(url, requestOptions)
      .then(resp => {
        return resp.json();
      })
      .then(resp => {
        console.log(resp, 'confirm');
        setRes(resp);
        console.log('llllll', resp);
        if (resp.MyToken) {
          storeUser(resp.MyToken);

          navigation.navigate('CreateNewAccount');
        }
      });
  };

  const confirmCodeLogin = async () => {
    let url = `https://archimed.justcode.am/api/confirmPhoneLoginCode`;
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
        phone_code: value,
      }),
    };
    fetch(url, requestOptions)
      .then(resp => {
        return resp.json();
      })
      .then(resp => {
        // console.log(resp, 'confirm login');
        setRes(resp);
        if (resp.MyToken) {
          storeUser(resp.MyToken);
          navigation.navigate('PinCodeScreen');
        }
      });
  };

  const storeUser = async value => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (error) {
      console.log(error);
    }
  };

  const confirm = text => {
    setValue(text);
    if (value.length >= 5) {
      setIsDisabled(false);
    }
  };

  const confirmLogin = text => {
    setValue(text);
    if (value.length >= 5) {
      setIsDisabled(false);
    }
  };

  // console.log(registerPhoneNumber, 'okjo');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IllustrationBlock height={220} />
        {login ? (
          <BigText
            bigText={'Вход'}
            smallText={`Код отправлен на номер ${phone ? phone : ''}`}
          />
        ) : (
          <BigText
            bigText={'Регистрация'}
            smallText={`Код отправлен на номер ${
              registerPhoneNumber ? registerPhoneNumber : ''
            }`}
          />
        )}
        {login ? (
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={text => confirmLogin(text)}
            cellCount={CELL_COUNT}
            rootStyle={styles.textInput}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                onPress={() => {}}
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[
                  styles.cell,
                  // registerConfirmData.code == value && {
                  //   backgroundColor: '#9DC45833',
                  // },
                  res.message == 'Неверный  код потверждения' && {
                    backgroundColor: '#FF414C1A',
                  },
                ]}>
                <Text
                  style={[
                    styles.cellText,
                    // registerConfirmData.code == value && {
                    //   color: '#7B9E45',
                    // },
                    res.message == 'Неверный  код потверждения' && {
                      color: '#FF414C',
                    },
                  ]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        ) : (
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={text => confirm(text)}
            cellCount={CELL_COUNT}
            rootStyle={styles.textInput}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                onPress={() => {}}
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[
                  styles.cell,
                  registerConfirmData.code == value && {
                    backgroundColor: '#9DC45833',
                  },
                  res.message == 'wrong code' && {backgroundColor: '#FF414C1A'},
                ]}>
                <Text
                  style={[
                    styles.cellText,
                    registerConfirmData.code == value && {
                      color: '#7B9E45',
                    },
                    res.message == 'wrong code' && {color: '#FF414C'},
                  ]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        )}

        {isEnableResendPhone && isEnableSendCode && !show10Minutes ? (
          <TouchableOpacity
            onPress={
              isEnableResendPhone && isEnableSendCode && !show10Minutes
                ? login
                  ? () => confirmCodeLogin(phone)
                  : () => dispatch(newConfirmCode(registerPhoneNumber))
                : null
            }>
            <Text style={styles.blueText}>Не получили код?</Text>
          </TouchableOpacity>
        ) : (
          ''
        )}

        <View style={styles.codeBlock}>
          <TouchableOpacity>
            <Text style={styles.codeBigText}>
              Отправить код повторно{' '}
              {/* {!isEnableResendPhone && show10Minutes && ':'} */}
            </Text>
          </TouchableOpacity>
          {!isEnableResendPhone && (
            <>
              <Image
                style={{width: 19, height: 19, marginLeft: 11}}
                source={require('../../../assets/images/carbon_time.png')}
              />
              <Text style={{marginLeft: 5, color: '#72777A'}}>
                {resendMinutes < 10 ? '0' + resendMinutes : resendMinutes} :{' '}
                {resendSeconds < 10 ? '0' + resendSeconds : resendSeconds}
              </Text>
            </>
          )}
          {show10Minutes && (
            <>
              <Image
                style={{width: 19, height: 19, marginLeft: 11}}
                source={require('../../../assets/images/carbon_time.png')}
              />
              <Text style={{marginLeft: 5, color: '#72777A'}}>
                {minutes10 < 10 ? '0' + minutes10 : minutes10} :{' '}
                {seconds10 < 10 ? '0' + seconds10 : seconds10}
              </Text>
            </>
          )}
        </View>
      </ScrollView>
      {showPopup && <Blurview />}
      <Popup
        isVisible={showPopup}
        setIsVisible={setShowPopup}
        nummberOfButtons={1}
        modalTitle={'Код введен неверно более 3 раз'}
        modalText={'Повторная отправка кода возможна через 10 минут'}
        buttonText={'Хорошо'}
        onPressBtn={() => {
          setShowPopup(false);
          setSendCodeTimer();
          if (!isEnableResendPhone) {
            setIsEnableResendPhone(true);
            setShow10Minutes(true);
            timer10();
          } else {
            setResendTimer(10, 0);
          }
        }}
        buttonTextColor={'#007AFF'}
      />
      {showPopup1 && <Blurview />}
      <Popup
        isVisible={showPopup1}
        setIsVisible={setShowPopup1}
        nummberOfButtons={1}
        modalTitle={`Попробуйте еще раз через ${minutes?.charAt(0)} минут`}
        modalText={''}
        buttonText={'Хорошо '}
        onPressBtn={() => {
          setShowPopup1(false);
          const min = +minutes.charAt(0);
          setResendTimer(min, 0);
        }}
        buttonTextColor={'#007AFF'}
      />
      <Button
        text={'Подтвердить и войти в аккаунт'}
        timer={true}
        // isDisabled={isDisabled || !isEnableSendCode}
        isDisabled={isDisabled}
        color={'white'}
        backgroundColor={'#9DC458'}
        marginBottom={showContactUsBtn && 1}
        onPress={() => {
          // login ? signIn() : register();
          login ? confirmCodeLogin() : confirmCode();
        }}
        isEnableSendCode={isEnableSendCode}
        showTimer
        mins={sendCodeMinutes}
        secs={sendCodeSeconds}
      />
      {showContactUsBtn && (
        <Button
          text={'Связаться с нами'}
          isDisabled={false}
          color={'white'}
          backgroundColor={'#9DC458'}
          marginBottom={20}
          Svg={() => {
            return (
              <Svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M4.33333 4.50002L7.98333 7.40835C8.13046 7.52461 8.31249 7.58785 8.5 7.58785C8.68751 7.58785 8.86954 7.52461 9.01667 7.40835L12.6667 4.50002M15.1667 12.8334H1.83333C1.61232 12.8334 1.40036 12.7456 1.24408 12.5893C1.0878 12.433 1 12.221 1 12V2.00002C1 1.77901 1.0878 1.56705 1.24408 1.41076C1.40036 1.25448 1.61232 1.16669 1.83333 1.16669H15.1667C15.3877 1.16669 15.5996 1.25448 15.7559 1.41076C15.9122 1.56705 16 1.77901 16 2.00002V12C16 12.221 15.9122 12.433 15.7559 12.5893C15.5996 12.7456 15.3877 12.8334 15.1667 12.8334Z"
                  stroke="white"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            );
          }}
          onPress={() =>
            navigation.navigate('FeedBackRegister', {login: login})
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 120,
    paddingHorizontal: 20,
  },
  inputDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    // // marginRight: 10,
    width: '100%',
    marginTop: 20,
  },
  cell: {
    width: '15%',
    height: 60,
    borderRadius: 15,
    backgroundColor: '#F7F7F7',
    paddingVertical: 10,
  },
  cellText: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
  },
  blueText: {
    fontSize: 12,
    color: '#2F80ED',
    lineHeight: 24,
    fontWeight: '400',
    marginTop: 10,
  },
  codeBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  codeBigText: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 24,
    fontWeight: '400',
  },
  codeGrayText: {
    color: '#72777A',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    marginLeft: 5,
  },
  greenButton: {
    width: '100%',
    height: 54,
    backgroundColor: '#9DC458',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  greenButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 14,
    fontWeight: '400',
    marginLeft: 5,
  },
});
