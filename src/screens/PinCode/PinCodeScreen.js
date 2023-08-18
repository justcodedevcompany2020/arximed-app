import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ArchimedLogo} from '../../assets/svgs/NavigationMenuSvgs';
import NumberButton from './NumberButton';
import {Svg, Path} from 'react-native-svg';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PinCodeScreen({navigation}) {
  const [code, setCode] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [pin, setPin] = useState('');
  const [text, setText] = useState('');
  const [incorrectCodesNumber, setIncorrectCodesNumber] = useState(0);

  useEffect(() => {
    check();
  }, []);
  async function check() {
    let isLogged = await AsyncStorage.getItem('isLogged');
    setIsLogged(isLogged);
    let pin = await AsyncStorage.getItem('pin');
    setPin(pin);
    let incorrectCodesNumber = await AsyncStorage.getItem('incorrect');
    incorrectCodesNumber
      ? setIncorrectCodesNumber(incorrectCodesNumber)
      : setIncorrectCodesNumber(0);

    console.log(isLogged, pin);
    if (isLogged && pin) {
      setText('Введите код доступа входа в приложение');
    } else {
      setText('Установите код доступа входа в приложение');
    }
  }

  async function setMyCode(value) {
    let myCode = code;
    if (code.length < 4) {
      myCode = code + value;
      setCode(myCode);
    }
    if (myCode.length === 4) {
      if (isLogged && pin) {
        if (myCode === pin) {
          navigation.replace('Menu');
          await AsyncStorage.removeItem('incorrect');
        } else if (incorrectCodesNumber + 1 >= 3) {
          await AsyncStorage.removeItem('pin');
          await AsyncStorage.removeItem('isLogged');
          await AsyncStorage.removeItem('incorrect');
          navigation.replace('IncorrectPinScreen');
          setIncorrectCodesNumber(0);
          setCode('');
        } else {
          setCode('');
          let num = +incorrectCodesNumber + 1;
          setIncorrectCodesNumber(num);
          await AsyncStorage.setItem('incorrect', num + '');
          let value = await AsyncStorage.getItem('incorrect');
          console.log(value);
        }
      } else {
        navigation.replace('WritePinAgain', {pin: myCode});
      }
    }
  }
  return (
    <SafeAreaView style={{flex: 1, color: 'white'}}>
      <View style={styles.logo}>
        <ArchimedLogo />
      </View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.dotsContainer}>
        <View
          style={[
            styles.dot,
            {backgroundColor: code.length >= 1 ? '#7b9e45' : '#e2eecd'},
          ]}
        />
        <View
          style={[
            styles.dot,
            {backgroundColor: code.length >= 2 ? '#7b9e45' : '#e2eecd'},
          ]}
        />
        <View
          style={[
            styles.dot,
            {backgroundColor: code.length >= 3 ? '#7b9e45' : '#e2eecd'},
          ]}
        />
        <View
          style={[
            styles.dot,
            {backgroundColor: code.length >= 4 ? '#7b9e45' : '#e2eecd'},
          ]}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 40,
          marginBottom: 30,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <NumberButton number={'1'} letters={''} onPress={setMyCode} />
        <NumberButton number={'2'} letters={'ABC'} onPress={setMyCode} />
        <NumberButton number={'3'} letters={'DEF'} onPress={setMyCode} />
      </View>
      <View
        style={{
          paddingHorizontal: 40,
          marginBottom: 30,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <NumberButton number={'4'} letters={'ABC'} onPress={setMyCode} />
        <NumberButton number={'5'} letters={'ABC'} onPress={setMyCode} />
        <NumberButton number={'6'} letters={'DEF'} onPress={setMyCode} />
      </View>
      <View
        style={{
          paddingHorizontal: 40,
          marginBottom: 30,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <NumberButton number={'7'} letters={'ABC'} onPress={setMyCode} />
        <NumberButton number={'8'} letters={'ABC'} onPress={setMyCode} />
        <NumberButton number={'9'} letters={'DEF'} onPress={setMyCode} />
      </View>
      <View
        style={{
          paddingHorizontal: 40,
          marginBottom: 30,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        {/* <NumberButton number={'7'} letters={'ABC'} onPress={setMyCode} /> */}
        <TouchableOpacity
          style={{
            width: 77,
            height: 77,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, color: '#FF414C'}}>Выйти</Text>
        </TouchableOpacity>
        <NumberButton number={'0'} letters={'ABC'} onPress={setMyCode} />
        <TouchableOpacity
          style={{
            width: 77,
            height: 77,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FaceID />
        </TouchableOpacity>
        {/* <NumberButton number={'9'} letters={'DEF'} onPress={setMyCode} /> */}
      </View>
    </SafeAreaView>
  );
}

const FaceID = () => {
  return (
    <Svg
      width={31}
      height={28}
      viewBox="0 0 31 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 1.867c-.796 0-1.559.295-2.122.82a2.709 2.709 0 00-.878 1.98v4.666h-2V4.667c0-1.238.527-2.425 1.464-3.3C2.902.492 4.174 0 5.5 0h5v1.867h-5zm20 0h-5V0h5c1.326 0 2.598.492 3.535 1.367.938.875 1.465 2.062 1.465 3.3v4.666h-2V4.667c0-.743-.316-1.455-.879-1.98a3.112 3.112 0 00-2.121-.82zM12.47 11H10.5V9.333h1.97V11zm7.84 0H18.5V9.333h1.81V11zM10.3 16.24a6.415 6.415 0 002.293 1.786c.902.421 1.898.64 2.907.64 1.009 0 2.004-.219 2.907-.64A6.416 6.416 0 0020.7 16.24l1.6 1.12c-3.4 4.232-10.2 4.232-13.6 0l1.6-1.12zM.5 23.333v-4.666h2v4.666c0 .743.316 1.455.878 1.98.563.525 1.326.82 2.122.82h5V28h-5c-1.326 0-2.598-.492-3.536-1.367C1.027 25.758.5 24.571.5 23.333zm30-4.666v4.666c0 1.238-.527 2.425-1.465 3.3-.937.875-2.21 1.367-3.535 1.367h-5v-1.867h5c.795 0 1.558-.295 2.121-.82a2.709 2.709 0 00.879-1.98v-4.666h2z"
        fill="#7B9E45"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 120,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    marginTop: 25,
    width: 320,
    alignSelf: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    width: 50,
    alignSelf: 'center',
    marginTop: 35,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  dot: {
    backgroundColor: '#7B9E45',
    width: 7,
    height: 7,
    borderRadius: 10,
  },
});
