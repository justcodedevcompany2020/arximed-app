import React from 'react';
import {View} from 'react-native';
import TitleArrow from './TitleArrow';

export default function F({navigation}) {
  return (
    <>
      <TitleArrow
        text={'О клинике'}
        hideArrow
        onPress={() => navigation.navigate('AboutClinic')}
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
