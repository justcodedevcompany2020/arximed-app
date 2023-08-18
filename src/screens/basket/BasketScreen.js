import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import Bonuses from '../../components/Bonuses';
import BasketCalendar from './Calendar';
import OrderList from './OrderList';
import PlaceContainer from './PlaceContainer';
import DaysChoice from './DaysChoice';
import BloodDonation from './BloodDonation';
import Consultation from './Consultation';
import OrderPrice from '../../components/OrderPrice';
import {EmptyBasket, RedBasket} from '../../assets/svgs/BasketSvgs';
import {useDispatch, useSelector} from 'react-redux';
import {getBasketData, addNewOrder} from '../../store/actions/actionsAnalysis';

export default function BasketScreen({navigation}) {
  const [selectedPlace, setSelectedPlace] = useState('home');
  const filledData = true;
  const noData = false;
  const dispatch = useDispatch();
  const {basketData, addNewOrdersData} = useSelector(
    state => state.analysisReducer,
  );

  useEffect(() => {
    dispatch(getBasketData());
  }, []);

  //

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../assets/background.png')}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20, marginBottom: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {basketData?.bassket_all_price == 0 && <RedBasket />}
          <Text
            style={[
              styles.ordersText,
              basketData?.bassket_all_price == 0 && {marginLeft: 10},
            ]}>
            Состав заказа
          </Text>
        </View>
        {basketData.bassket_all_price == 0 ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <EmptyBasket />
            <Text style={{fontWeight: '500', color: '#1C1C1E', marginTop: 10}}>
              Корзина пуста
            </Text>
          </View>
        ) : (
          <>
            <OrderList />
          </>
        )}
      </ScrollView>

      {/* <Bonuses /> */}
      {/* <PlaceContainer
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
            /> */}
      {/* <DaysChoice />
            <BasketCalendar />
            <BloodDonation />
            <Consultation /> */}
      <OrderPrice
        navigation={navigation}
        price={
          basketData.bassket_all_price == 0 ? '0' : basketData.bassket_all_price
        }
        buttonText={'Перейти к оформлению'}
        onPress={() => {
          basketData?.data?.data?.filter(el => el)[0].parent.doctor_id
            ? dispatch(addNewOrder('ONLINE'))
            : dispatch(addNewOrder('OFFLINE'));

          navigation.navigate('ThanksForOrder');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ordersText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1C1C1E',
  },
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
    paddingTop: 120,
  },
});
