import React from 'react';
import {View} from 'react-native';
import TitleArrow from './TitleArrow';

export default function News({navigation}) {
  return (
    <>
      <TitleArrow
        text={'Новости и акции'}
        onPress={() => navigation.navigate('NewsAndPromotions')}
      />
      <View
        style={{
          height: 169,
          backgroundColor: '#F2F2F7',
          borderRadius: 10,
          marginTop: 15,
        }}
      />
    </>
  );
}
