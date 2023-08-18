import React from 'react';
import {ScrollView} from 'react-native';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  AtHome,
  CheckMarkThanks,
  InTheClinic,
  RedPushPin,
} from '../../assets/svgs/BasketSvgs';
import {CurrencyRub} from '../../assets/svgs/DoctorsScreenSvgs';
import OrderPrice from '../../components/OrderPrice';
import OrderedItem from './OrderedItem';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  orderPaymentSuccessfully,
  orderPaymentCancel,
} from '../../store/actions/actions';

export default function ThanksForOrder({route, navigation}) {
  // const {place} = route?.params ?? false;
  const dispatch = useDispatch();
  const {basketData, addNewOrdersData} = useSelector(
    state => state.analysisReducer,
  );
  const {ordersPaymountData, orderCancelData} = useSelector(
    state => state.justDriveReducer,
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../assets/background.png')}
      />
      <ScrollView
        style={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.thanksContainer}>
          <CheckMarkThanks />
          <Text style={styles.thanksText}>Спасибо за заказ!</Text>
          <Text style={styles.text}>
            В ближайшее время с вами свяжется сотрудник нашей клиники.{' '}
          </Text>
        </View>

        {/* <Text style={styles.aboutOrderText}>
          Информация о заказе №684844848
        </Text> */}
        {/* <OrderedItem
          text={'Исследование суставной (синовиальной) жидкости'}
          price={'10 000'}
        />
        <OrderedItem
          text={'Забор суставной (синовиальной) жидкости'}
          price={'1 000'}
          mandatory
        /> */}
        {/* <View style={styles.placeContainer}>
          <View style={{flexDirection: 'row'}}>
            {place === 'home' ? <AtHome /> : <InTheClinic />}
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.placeText}>
                {place === 'home' ? 'На дому' : 'В клинике'}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RedPushPin />
                <Text style={styles.addressText}>
                  ул. Вавилова, д. 68 корп. 2
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.price}>0</Text>
            <CurrencyRub />
          </View>
        </View> */}
        <Button
          navigation={navigation}
          text={'Оплатить'}
          isDisabled={false}
          color={'white'}
          backgroundColor={'#9DC458'}
          // marginBottom={20}
          onPress={() => {
            dispatch(orderPaymentSuccessfully(addNewOrdersData.my_order_id));
            navigation.navigate('PaymentsScreen');
          }}
        />
        <Button
          navigation={navigation}
          text={'Отменить'}
          isDisabled={false}
          color={'#72777A'}
          backgroundColor={'#F6F6F6'}
          marginBottom={20}
          onPress={() => {
            dispatch(orderPaymentCancel(addNewOrdersData.my_order_id));
            navigation.navigate('BasketScreen');
          }}
        />
      </ScrollView>
      {/* <OrderPrice price={'11 000'} paid buttonText={'Хорошо'} /> */}
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
    paddingTop: 120,
  },
  thanksContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 50,
    borderRadius: 10,
  },
  thanksText: {
    fontSize: 18,
    color: 'black',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    color: '#1C1C1E',
    marginTop: 10,
    textAlign: 'center',
  },
  aboutOrderText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1C1C1E',
    marginVertical: 5,
  },
  placeContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 20,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  placeText: {
    fontWeight: '500',
    color: '#1C1C1E',
    fontSize: 14,
  },
  addressText: {
    fontSize: 10,
    fontWeight: '500',
    color: ' #72777A',
    marginLeft: 5,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: 'black',
  },
});
