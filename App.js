import React, {useEffect, useState, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigation from './src/navigation/AppNavigation';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {useSelector, useDispatch} from 'react-redux';

const App = () => {
  const [initialRouteName, setInitialRouteName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const animationRef = useRef(null);

  useEffect(() => {
    isFirstTime();
  }, []);

  async function isFirstTime() {
    const value = await AsyncStorage.getItem('firstTime');
    console.log(value);
    if (value === 'true') {
      setInitialRouteName('WelcomeSwiper');
      await AsyncStorage.setItem('firstTime', 'true');
    } else {
      let token = await AsyncStorage.getItem('token');
      let isLogged = await AsyncStorage.getItem('isLogged');
      let pin = await AsyncStorage.getItem('pin');
      console.log(token, 'token');
      console.log(isLogged, 'isLogged');
      console.log(pin, 'pin');
      setInitialRouteName('WelcomePage');
      if (token && pin) {
        console.log('PinCodeScreen');
        setInitialRouteName('PinCodeScreen');
      } else {
        console.log('WelcomePage');
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  useEffect(() => {}, []);

  return isLoading ? (
    <SafeAreaView style={{flex: 1}}>
      <Lottie
        ref={animationRef}
        source={require('./src/assets/animations/logo.json')}
        autoPlay
        loop={true}
      />
    </SafeAreaView>
  ) : (
    <Provider store={store}>
      <AppNavigation initialRouteName={initialRouteName} />
    </Provider>
  );
};

export default App;
