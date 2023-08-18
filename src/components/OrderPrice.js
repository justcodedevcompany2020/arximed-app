import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Selected} from '../assets/svgs/BasketSvgs';
import {CurrencyRub, HorizontalLine} from '../assets/svgs/DoctorsScreenSvgs';
import Button from './Button';
import {useSelector, useDispatch} from 'react-redux';

export default function OrderPrice({
  onPress,
  price,
  paid,
  buttonText,
  navigation,
  active,
}) {
  const {basketData, addNewOrdersData} = useSelector(
    state => state.analysisReducer,
  );

  return (
    <View style={styles.orderPriceContainer}>
      <View style={{alignItems: 'center', marginBottom: 15}}>
        <HorizontalLine />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.orderPrice}>Сумма заказа</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.price}>{price}</Text>
          <CurrencyRub />
        </View>
      </View>
      {paid && (
        <View style={styles.paidContainer}>
          <Selected />
          <Text style={styles.paidText}>Оплачено</Text>
        </View>
      )}
      <Button
        navigation={navigation}
        text={buttonText}
        isDisabled={basketData?.bassket_all_price || active ? false : true}
        color={'white'}
        backgroundColor={'#9DC458'}
        marginBottom={20}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  price: {
    fontSize: 20,
    color: 'black',
    marginRight: 5,
  },
  paidContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  paidText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#7B9E45',
  },
});
