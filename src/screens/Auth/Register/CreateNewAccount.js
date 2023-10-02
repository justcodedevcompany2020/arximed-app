import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import BigText from '../../../components/BigText';
import IllustrationBlock from '../../../components/IllustrationBlock';
import Button from '../../../components/Button';
import Svg, {Path} from 'react-native-svg';
import React, {useEffect, useState} from 'react';
import Popup from '../../../components/Popup';
import Blurview from '../../../components/Blur';
import {useSelector, useDispatch} from 'react-redux';
import {
  getCityList,
  userAddCity,
  getCityName,
} from '../../../store/actions/actions';

export default function CreateNewAccount({navigation}) {
  // const token = tor(state => state.auth.token);
  const [isDisabled, setIsDisabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [cities, setCities] = useState([
    {id: 1, name: 'Москва'},
    {id: 2, name: 'Санкт-Петербург'},
    {id: 3, name: 'Красноярск'},
    {id: 4, name: 'Сочи'},
    {id: 5, name: 'Волгоград'},
  ]);
  const dispatch = useDispatch();
  const {
    registerPhoneNumber,
    registerConfirmData,
    cityListData,
    userAddCityData,
  } = useSelector(state => state.justDriveReducer);
  // useEffect(() => {
  //   setShowPopup(true);
  //   // getCities()
  // }, [])
  // async function GeoAccess(res) {
  //   await postRequestAuth('/GeoAccess', token, {
  //     geo_access: res
  //   }).then(json => {
  //     console.log(json);
  //   })
  // }

  // async function getCities() {
  //   await getRequest('/GetCity').then((json) => {
  //     const cities = json.data.city.map(item => {
  //       let obj = { name: item.name, id: item.id }
  //       return obj
  //     })
  //     console.log(cities);
  //     setCities(cities)
  //     setSelectedCity(cities[0])
  //   })
  // }

  // async function addCity() {
  //   // await postRequestAuth('/UserAddCity', token, {
  //   //   city_id: selectedCity.id
  //   // }).then(json => {
  //   //   console.log(json);
  //   //   if (json.status) {
  //   navigation.navigate('PinCodeScreen')
  //   //   } else {
  //   //     console.log('something went wrong');
  //   //   }
  //   // })
  // }

  useEffect(() => {
    dispatch(getCityList());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View
            style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M9 1L1 9.52632L9 19"
                  stroke="#1C1C1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </TouchableOpacity>
            <Text style={styles.textBack}>Назад </Text>
          </View>
          <Text style={styles.selectedCityText}>Город</Text>
          <View>
            {cityListData?.data?.city?.map(value => {
              return (
                <TouchableOpacity
                  style={styles.cityDiv}
                  key={value.id}
                  onPress={() => {
                    dispatch(userAddCity(value.id));
                    setSelectedCity(value.ville);
                    setModalVisible(false);
                    dispatch(getCityName(value.ville));
                  }}>
                  <Text style={styles.cityName}>{value.ville}</Text>
                  {value.ville === selectedCity && (
                    <Svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.89908 11.4822L16.5382 0.5L18 2.00892L5.89908 14.5L0 8.41071L1.46179 6.90179L5.89908 11.4822Z"
                        fill="#7B9E45"
                      />
                    </Svg>
                  )}
                </TouchableOpacity>
              );
            })}
            {/* der chenq anum  */}
            {/* <TouchableOpacity
              style={styles.cityDiv}
              onPress={() => {
                navigation.navigate('AddNewCity');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.cityName}>Другой город</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
      <IllustrationBlock height={220} />
      <BigText
        bigText={'Создание аккаунта'}
        smallText={'Пожалуйста, выберите город, в котором вы находитесь'}
      />
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.input}>
        <Text style={styles.inputText}>
          {selectedCity != '' ? selectedCity : 'Москва'}
        </Text>
        <Svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M1 1L6.68421 7L13 1"
            stroke="#FF414C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </TouchableOpacity>
      <Button
        text={'Далее'}
        isDisabled={isDisabled}
        color={'white'}
        backgroundColor={'#9DC458'}
        onPress={() => {
          navigation.navigate('PinCodeScreen');
        }}
      />
      {showPopup && <Blurview />}
      <Popup
        isVisible={showPopup}
        setIsVisible={setShowPopup}
        nummberOfButtons={3}
        modalTitle={'Разрешить приложению «АрхиМед» доступ к Вашей Геопозиции?'}
        modalText={
          'Чтобы приложение могло корректно работать и отображать актуальные услуги в вашем регионе.'
        }
        leftButtonText={'При использовании приложения'}
        rightButtonText={'Однократно'}
        thirdButtonText={'Не разрешать '}
        onPressLeftButton={() => setShowPopup(false)}
        onPressRightButton={() => setShowPopup(false)}
        onPressThirdButton={() => setShowPopup(false)}
        buttonTextColor={'#007AFF'}
        horizontal
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
  selectedCityText: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 35,
    paddingHorizontal: 20,
  },
  inputText: {
    fontSize: 16,
    color: '#000000',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 35,
    paddingHorizontal: 30,
  },
  textBack: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1C1C1E',
    fontWeight: '400',
    marginLeft: 20,
  },
  cityDiv: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#8E8E93',
    marginTop: 20,
    paddingLeft: 5,
  },
  cityName: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1C1C1E',
    fontWeight: '400',
  },
});
