import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {PassAnalyzesIcon} from '../../assets/svgs/HomeScreenSvgs';
import {
  Appointments,
  Bonuses,
  MyRecords,
  Notifications,
  Payments,
  ProgramService,
} from '../../assets/svgs/ProfileScreenSvgs';
import MoreHeader from '../more/MoreHeader';
import ProfileBlock from './ProfileBlock';
import Blurview from '../../components/Blur';
import Popup from '../../components/Popup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {logoutFunction, getCount} from '../../store/actions/actions';

export default function ProfileScreen({navigation}) {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const {keysCount} = useSelector(state => state.justDriveReducer);
  console.log(keysCount, 'keysCount');

  async function logout() {
    dispatch(logoutFunction());
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('pin');
    navigation.navigate('WelcomePage');
  }

  useEffect(() => {
    dispatch(getCount());
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/background.png')}
        resizeMode="cover"
        style={styles.fixed}>
        <ScrollView
          style={{
            marginTop: 110,
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}>
          <MoreHeader navigation={navigation} />
          <View style={styles.profBlock}>
            <ProfileBlock
              Svg={PassAnalyzesIcon}
              firstText={''}
              name={'Анализы и обследования'}
              secondText={keysCount.get_new_analize_count}
              navigation={navigation}
              navname={'AnalyzesAndExamination'}
            />
            <ProfileBlock
              Svg={MyRecords}
              firstText={''}
              name={'Мои записи'}
              secondText={keysCount.my_zapis}
              navigation={navigation}
              navname={'MyNotesScreen'}
            />
            <ProfileBlock
              Svg={Appointments}
              firstText={''}
              name={'Назначения'}
              secondText={keysCount.my_naznachenia}
              navigation={navigation}
              navname={'MyPrescriptionsNavigator'}
            />
            <ProfileBlock
              Svg={PassAnalyzesIcon}
              firstText={''}
              name={'Направления'}
              secondText={keysCount.napravlenia}
              navigation={navigation}
              navname={'DirectionScreen'}
            />
            <ProfileBlock
              Svg={Notifications}
              firstText={''}
              name={'Уведомления'}
              secondText={keysCount.notify_count}
              navigation={navigation}
              navname={'Notifications'}
            />
            <ProfileBlock
              Svg={Payments}
              firstText={keysCount?.basket_order_price}
              name={'Платежи'}
              secondText={'₽'}
              navigation={navigation}
              navname={'PaymentsScreen'}
            />
            {/* <ProfileBlock
              Svg={ProgramService}
              firstText={''}
              name={'Программа обслуживания'}
              secondText={'2'}
              navigation={navigation}
              navname={'ServiceProgram'}
            />
            <ProfileBlock
              Svg={Bonuses}
              firstText={''}
              name={'Бонусы'}
              secondText={'20'}
              navigation={navigation}
              navname={'BonusPrograms'}
            /> */}
          </View>
          <TouchableOpacity
            style={styles.whiteButton}
            onPress={() => setShowPopup(true)}>
            <Image
              style={{width: 24, height: 24}}
              source={require('../../assets/images/profile/exit.png')}
            />
            <Text style={styles.exitText}>Выход</Text>
          </TouchableOpacity>
        </ScrollView>
        {showPopup && <Blurview />}
        <Popup
          isVisible={showPopup}
          setIsVisible={setShowPopup}
          nummberOfButtons={2}
          modalTitle={'Выход '}
          modalText={'Вы действительно хотите выйти из аккаунтв в приложении?'}
          leftButtonText={'Нет'}
          rightButtonText={'Да'}
          onPressLeftButton={() => setShowPopup(false)}
          onPressRightButton={logout}
          buttonTextColor={'#007AFF'}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  profBlock: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  whiteButton: {
    width: '100%',
    height: 43,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
  exitText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FF414C',
    marginLeft: 10,
  },
});
