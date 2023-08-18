import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from './components/Button';
import Popup from './components/Popup';
import Blurview from './components/Blur';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
// import PushNotification, { PushNotificationPermissions } from 'react-native-push-notification';
import {useDispatch, useSelector} from 'react-redux';
import {getStartInfo} from './store/actions/actions';

export default function WelcomeSwiper({navigation}) {
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const {startInfo} = useSelector(state => state.justDriveReducer);
  useEffect(() => {
    dispatch(getStartInfo());
  }, []);
  // function requestNotificationPermission() {
  //     request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS, {
  //         title: 'Приложение «АрхиМед» Запрашивает разрешение на отправку Вам уведомлений ',
  //         message: 'Уведомления могут содержать напоминания, звуки и наклейки значков. Их конфигурирование возможно в Настройках. ',
  //         buttonPositive: 'Разрешить',
  //         buttonNegative: 'Не разрешать',
  //     }).then((response) => {
  //         console.log(response);
  //     });
  //     // check(PERMISSIONS.ANDROID.RECEIVE_WAP_PUSH).then((response) => {
  //     //     console.log(response);
  //     // });
  // }
  async function setTrue() {
    navigation.navigate('WelcomePage');
    await AsyncStorage.setItem('firstTime', 'false');
  }

  return (
    <>
      <Swiper
        style={styles.wrapper}
        prevButton={<Text />}
        nextButton={
          <TouchableOpacity style={{zIndex: 99999999}} onPress={setTrue}>
            <Text
              style={{
                fontSize: 16,
                color: '#72777A',
                position: 'relative',
                bottom: 340,
                right: 10,
              }}>
              Пропустить
            </Text>
          </TouchableOpacity>
        }
        activeDotColor={'#9DC458'}
        dotColor={'#e1edcc'}
        index={index}
        onIndexChanged={i => {
          i !== 3 && setIndex(i);
          console.log(i);
        }}
        showsButtons
        loop={false}>
        <View style={styles.slide}>
          <Text style={styles.title}>{startInfo?.data?.text.headerOne}</Text>
          <Text style={styles.text}>{startInfo?.data?.text.textOne}</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.title}>{startInfo?.data?.text.headerTwo}</Text>
          <Text style={styles.text}>{startInfo?.data?.text.textTwo}</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.title}>{startInfo?.data?.text.headerThree}</Text>
          <Text style={styles.text}>{startInfo?.data?.text.textThree}</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.title}>{startInfo?.data?.text.headerFour} </Text>
          <Text style={styles.text}>{startInfo?.data?.text.textFour}</Text>
          <View style={{marginTop: 15}}>
            <Button
              text={'Включить Push-уведомления'}
              color={'white'}
              backgroundColor={'#9DC458'}
              onPress={() => setShowPopup(true)}
            />
          </View>
        </View>
      </Swiper>
      {showPopup && <Blurview />}
      <Popup
        isVisible={showPopup}
        setIsVisible={setShowPopup}
        nummberOfButtons={2}
        modalTitle={
          'Приложение «АрхиМед» Запрашивает разрешение на отправку Вам уведомлений '
        }
        modalText={
          'Уведомления могут содержать напоминания, звуки и наклейки значков. Их конфигурирование возможно в Настройках.'
        }
        leftButtonText={'Разрешить'}
        rightButtonText={'Не разрешать '}
        onPressLeftButton={setTrue}
        onPressRightButton={() => setShowPopup(false)}
        buttonTextColor={'#007AFF'}
        horizontal
      />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    color: 'black',
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
