import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {ArrowRightBlack, RedPushPin} from '../../assets/svgs/BasketSvgs';
import {CurrencyRub} from '../../assets/svgs/DoctorsScreenSvgs';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {callDoctorService, getHomeService} from '../../store/actions/actions';
import {addBasketFunction} from '../../store/actions/actionsAnalysis';
import {ScrollView} from 'react-native-gesture-handler';
import CalendarCallDoctor from '../more/doctors/CalendarCallDoctor';

export default function CallDoctor({navigation, route}) {
  const {addressData, hide} = route.params ?? false;
  const [description, setDescription] = useState('');
  const [isDisabled, setIsDisabled] = useState(!addressData);
  const dispatch = useDispatch();
  const {callDoctorData, homeServiceData} = useSelector(
    state => state.justDriveReducer,
  );
  const [callDoctorSearch, setCallDoctorSearch] = useState(false);

  useEffect(() => {
    dispatch(getHomeService());
  }, []);

  if (callDoctorSearch) {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.fixed}
          resizeMode="cover"
          source={require('../../assets/background.png')}
        />
        <Text style={styles.headerText}>Вызвать врача</Text>
        <ScrollView>
          <View style={{width: '100%'}}>
            <CalendarCallDoctor />
          </View>
          <View style={{paddingHorizontal: 20}}>
            <TouchableOpacity
              style={styles.addressButton}
              onPress={() => navigation.navigate('MapScreen', {hide: hide})}>
              <RedPushPin />
              <Text style={styles.addressText}>
                Адрес фактического места жительства{' '}
              </Text>
              <ArrowRightBlack />
            </TouchableOpacity>
            <View style={styles.descriptionContainer}>
              <Text style={{color: '#1C1C1E'}}>Описание проблемы</Text>
              <TextInput
                value={description}
                placeholder={'Добрый день'}
                onChangeText={setDescription}
                style={{color: 'black'}}
                multiline
              />
            </View>
            <TouchableOpacity style={styles.priceContainer}>
              <Text style={{color: '#1C1C1E'}}>Цена: </Text>
              {callDoctorData.data ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.price}>{callDoctorData.data.PRICE}</Text>
                  <CurrencyRub />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(
                      callDoctorService(
                        `${addressData.address} ${addressData.apartment} ${addressData.entrance} ${addressData.floor} ${addressData.intercom}`,
                        description,
                        'msk',
                      ),
                    );
                  }}>
                  <Text style={styles.enterYourLocation}>
                    Укажите ваше местоположение
                  </Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
            <Button
              text={'Вызвать врача'}
              isDisabled={callDoctorData.data ? false : true}
              color={'white'}
              backgroundColor={'#9DC458'}
              marginBottom={20}
              onPress={() => {
                dispatch(addBasketFunction('home_services'));
                navigation.navigate('OrderScreen', {hide: hide});
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../assets/background.png')}
      />
      <Text style={styles.headerText}>Вызвать врача</Text>
      <ScrollView style={{paddingHorizontal: 20}}>
        {homeServiceData?.data?.map((value, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setCallDoctorSearch(true);
              }}
              key={index}
              style={{
                backgroundColor: '#f9f9fa',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <View style={styles.containerOrder}>
                <Text style={styles.orderName}>{value.LABEL}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.price}>{value.PRICE}</Text>
                  <CurrencyRub />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
  container: {
    flex: 1,
    paddingTop: 55,
    paddingBottom: 90,
    // paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    color: '#1C1C1E',
    textAlign: 'center',
  },
  addressButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    padding: 15,
    marginTop: 15,
  },
  addressText: {
    color: '#979797',
    flexShrink: 1,
    marginHorizontal: 5,
  },
  descriptionContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    height: 200,
    marginTop: 20,
  },
  priceContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  enterYourLocation: {
    fontSize: 12,
    color: '#72777A',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    marginHorizontal: 20,
  },
  price: {
    fontSize: 16,
    color: 'black',
    marginRight: 5,
  },
  home: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: 'white',
  },
  containerOrder: {
    backgroundColor: 'white',
    padding: 20,
    height: 74,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
    width: 190,
  },
  // price: {
  //   fontSize: 16,
  //   color: 'black',
  // },
  mandatoryContainer: {
    backgroundColor: '#effadb',
    position: 'absolute',
    paddingVertical: 5,
    width: 81,
    alignItems: 'center',
    borderRadius: 15,
  },
});
