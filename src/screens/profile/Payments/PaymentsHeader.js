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
import PaymentsHeadBlock from './PaymentsHeadBlock';

export default function PaymentsHeader({navigation}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginTop: 25}}>
      <PaymentsHeadBlock
        image={require('../../../assets/images/profile/list.png')}
        color={'#C8EE86'}
        width={120}
        height={120}
        text={'Все платежи '}
      />
      <PaymentsHeadBlock
        image={require('../../../assets/images/profile/payment.png')}
        color={'white'}
        width={120}
        height={120}
        text={'Наличный расчет'}
      />
      <PaymentsHeadBlock
        image={require('../../../assets/images/profile/text.png')}
        color={'white'}
        width={86}
        height={48}
        margin={15}
        text={'МС Альфа страхование'}
        bottom={35}
      />
    </ScrollView>
  );
}
