import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {VerticalLine, RedTimeIcon} from '../../../assets/svgs/HomeScreenSvgs';
import {CurrencyRub, PlaceIcon} from '../../../assets/svgs/DoctorsScreenSvgs';
import Bonuses from '../../../components/Bonuses';
import OrderPrice from '../../../components/OrderPrice';
import {useSelector, useDispatch} from 'react-redux';
import {addBasketFunction} from '../../../store/actions/actionsAnalysis';

export default function ConsultationScreen({navigation, route}) {
  const {
    timeConsultation,
    priceConsultation,
    doctorTimeData,
    doctorsSinglePageData,
    exam_id_doctors,
    subject_id_doctors,
  } = useSelector(state => state.justDriveReducer);
  const {addBasketData} = useSelector(state => state.analysisReducer);
  const {isOnline} = route.params ?? false;
  useEffect(() => {
    navigation.setOptions({
      title: isOnline
        ? 'Записаться на онлайн консультацию'
        : 'Записаться на прием в клинике',
      headerTitleStyle: {
        fontSize: 16,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();

  return (
    <>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')}
      />
      <SafeAreaView
        style={{
          flex: 1,
          paddingBottom: 100,
          paddingTop: 100,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: 15, alignItems: 'center'}}>
              <Text style={styles.day}>
                {doctorTimeData?.data[0]?.day.split('-')[2]}
              </Text>
              <Text style={styles.month}>
                {doctorTimeData?.data[0]?.day.split('-')[1] == '01' && 'январь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '02' &&
                  'февраль'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '03' && 'март'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '04' && 'апрель'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '05' && 'май'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '06' && 'июнь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '07' && 'июль'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '08' && 'август'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '09' &&
                  'сентябрь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '10' &&
                  'октябрь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '11' && 'ноябрь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '12' &&
                  'декабрь'}
              </Text>
            </View>
            <VerticalLine />
            <View style={{marginLeft: 10, width: '90%'}}>
              <Text style={styles.name}>
                {' '}
                {doctorsSinglePageData?.data[0]?.Fam_doctor}{' '}
                {doctorsSinglePageData?.data[0]?.om_doctor},{' '}
                {
                  doctorsSinglePageData?.data[0]?.doctor_service[0]
                    ?.specialisation_name
                }
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <RedTimeIcon />
                <Text style={styles.time}>{timeConsultation}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: 15, alignItems: 'center'}}>
              <Text style={styles.day}>
                {doctorTimeData?.data[0]?.day.split('-')[2]}
              </Text>
              <Text style={styles.month}>
                {doctorTimeData?.data[0]?.day.split('-')[1] == '01' && 'январь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '02' &&
                  'февраль'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '03' && 'март'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '04' && 'апрель'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '05' && 'май'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '06' && 'июнь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '07' && 'июль'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '08' && 'август'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '09' &&
                  'сентябрь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '10' &&
                  'октябрь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '11' && 'ноябрь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '12' &&
                  'декабрь'}
              </Text>
            </View>
            <VerticalLine />
            <View style={{marginLeft: 10, width: '90%'}}>
              <Text style={styles.name}>
                {' '}
                {doctorsSinglePageData?.data[0]?.Fam_doctor}{' '}
                {doctorsSinglePageData?.data[0]?.om_doctor},{' '}
                {
                  doctorsSinglePageData?.data[0]?.doctor_service[0]
                    ?.specialisation_name
                }
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <RedTimeIcon />
                <Text style={styles.time}>{timeConsultation}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: 15, alignItems: 'center'}}>
              <Text style={styles.day}>
                {doctorTimeData?.data[0]?.day.split('-')[2]}
              </Text>
              <Text style={styles.month}>
                {doctorTimeData?.data[0]?.day.split('-')[1] == '01' && 'январь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '02' &&
                  'февраль'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '03' && 'март'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '04' && 'апрель'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '05' && 'май'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '06' && 'июнь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '07' && 'июль'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '08' && 'август'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '09' &&
                  'сентябрь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '10' &&
                  'октябрь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '11' && 'ноябрь'}
                {doctorTimeData?.data[0]?.day.split('-')[1] == '12' &&
                  'декабрь'}
              </Text>
            </View>
            <VerticalLine />
            <View style={{marginLeft: 10, width: '90%'}}>
              <Text style={styles.name}>
                {' '}
                {doctorsSinglePageData?.data[0]?.Fam_doctor}{' '}
                {doctorsSinglePageData?.data[0]?.om_doctor},{' '}
                {
                  doctorsSinglePageData?.data[0]?.doctor_service[0]
                    ?.specialisation_name
                }
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <RedTimeIcon />
                <Text style={styles.time}>{timeConsultation}</Text>
              </View>
            </View>
          </View>
          {/* {isOnline && (
            <View style={styles.online}>
              <Text style={styles.onlineText}>Онлайн</Text>
            </View>
          )} */}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{priceConsultation}</Text>
            <CurrencyRub />
          </View>
        </TouchableOpacity>

        {/* <Bonuses /> */}

        {/* {!isOnline && (
          <View style={styles.addressContainer}>
            <Text style={styles.priom}>
              Прием осуществляется только в клинике по адресу
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <PlaceIcon />
              <Text style={styles.address}>ул. Вавилова, д. 68 корп. 2</Text>
            </View>
          </View>
        )} */}
      </SafeAreaView>
      <OrderPrice
        price={priceConsultation}
        onPress={() => {
          dispatch(
            addBasketFunction(
              'doctor_service',
              exam_id_doctors,
              subject_id_doctors,
              `${timeConsultation}:00`,
              `${timeConsultation}:00`,
              doctorTimeData?.data[0]?.day.split('-')[2],
            ),
          );
          if (addBasketData.message) {
            navigation.navigate('BasketNavigator', {hide: isOnline});
          }
        }}
        buttonText={'Записаться'}
        active={true}
      />
    </>
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
    marginTop: 20,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    fontSize: 32,
    color: '#1C1C1E',
  },
  month: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  name: {
    width: '80%',
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  time: {
    fontSize: 12,
    fontWeight: '500',
    color: '#72777A',
    marginLeft: 5,
  },
  online: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: '#f2fbe2',
    width: 57,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlineText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#7B9E45',
  },
  price: {
    fontSize: 20,
    color: 'black',
    marginRight: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  bonusesContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
  },
  yourBonuses: {
    marginRight: 30,
  },
  yourBonusesText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
    marginVertical: 10,
  },
  bonuses: {
    fontSize: 24,
    fontWeight: '500',
    color: '#1C1C1E',
    marginLeft: 5,
  },
  button: {
    width: 174,
    backgroundColor: '#effadb',
    flexDirection: 'row',
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7B9E45',
    marginHorizontal: 5,
  },
  addressContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 20,
    borderRadius: 15,
  },
  priom: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  address: {
    fontSize: 13,
    fontWeight: '500',
    color: '#8E8E93',
    marginLeft: 5,
  },
  orderPriceContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingBottom: 70,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  orderPrice: {
    fontSize: 24,
    fontWeight: '500',
    color: '#1C1C1E',
  },
});
