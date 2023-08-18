import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView, StyleSheet, ImageBackground, Text} from 'react-native';
import {ArrowIcon} from '../assets/svgs/HomeScreenSvgs';
import {Phone, Terminal} from '../assets/svgs/SearchScreenSvgs';

export default function OrderScreen({navigation, route}) {
  const {hide} = route.params ?? false;
  // const { orderNumber } = route.params ?? false;
  // useEffect(() => {
  //     // navigation.setOptions({ title: `Заказ № ${orderNumber}` });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../assets/background.png')}
      />
      <Text style={styles.paymentMethodText}>Способ оплаты</Text>
      <Text style={styles.choose}>
        Для оформления заказа, пожалуйста, выберите способ опллаты
      </Text>
      {!hide && (
        <TouchableOpacity
          style={styles.paymentMethod}
          onPress={() =>
            navigation.navigate('ThanksForOrder', {place: 'clinic'})
          }>
          <Terminal />
          <Text style={[styles.choose, {marginRight: 5}]}>
            Наличными или картой в клинике
          </Text>
          <ArrowIcon />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => navigation.navigate('ThanksForOrder', {place: 'home'})}>
        <Phone />
        <Text style={[styles.choose, {marginRight: 5}]}>Оплата онлайн</Text>
        <ArrowIcon />
      </TouchableOpacity>
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
    paddingHorizontal: 20,
  },
  paymentMethodText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  choose: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
    marginVertical: 10,
    flexShrink: 1,
  },
  paymentMethod: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
  },
});
