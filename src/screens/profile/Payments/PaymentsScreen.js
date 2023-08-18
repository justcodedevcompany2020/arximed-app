import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NoNotificationsIcon} from '../../../assets/svgs/NotificationScreenSvgs';
import DataHeader from './DataHeader';
import PaymentBlock from './PaymentBlock';
import PaymentsHeader from './PaymentsHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getMyAllOrders} from '../../../store/actions/actions';
import {useEffect} from 'react';

export default function PaymentsScreen() {
  const noData = false;
  const dispatch = useDispatch();
  const {myOrdersData} = useSelector(state => state.justDriveReducer);
  useEffect(() => {
    dispatch(getMyAllOrders());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/background.png')}
        resizeMode="cover"
        style={styles.fixed}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <PaymentsHeader />
        {/* <Text style={styles.dataTexts}>Июль 2022</Text>
        <DataHeader dataText={'25 Июля 2022'} /> */}
        {noData ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <NoNotificationsIcon />
            <Text style={{fontWeight: '500', color: '#1C1C1E', marginTop: 10}}>
              Нет платежей
            </Text>
          </View>
        ) : (
          <>
            {myOrdersData?.data?.data?.map((value, index) => {
              console.log(value);
              return (
                // LABEL
                <PaymentBlock
                  key={index}
                  firstText={
                    value.parent.LABEL
                      ? value.parent.LABEL
                      : value.parent.name_exam
                  }
                  number={
                    value.parent.price
                      ? value.parent.price
                      : value.parent.priceAmount
                  }
                  textColor={
                    value.status == 'Не оплачено' ? '#FF5454' : '#7B9E45'
                  }
                  secondText={
                    value.status == 'Не оплачено'
                      ? 'Заказ не оплачен'
                      : 'Оплачено'
                  }
                  active={value.status == 'Не оплачено' ? 'red' : 'green'}
                />
              );
            })}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 110,
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
  scrollView: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  dataTexts: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#000000',
    marginTop: 25,
  },
});
