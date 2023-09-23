import React from 'react';
import { Text, View } from 'react-native';
import TitleArrow from './TitleArrow';

export default function F({ navigation }) {
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
          marginVertical: 15,
          padding: 10
        }}
      >
        <Text style={{color: 'black', fontSize: 16}}>
          Крупнейшая сеть лечебно-профилактических центров в Москве,
          предоставляющих полный комплекс услуг по профилактике, диагностике,
          лечению различных заболеваний, а также реабилитации.
        </Text>
      </View>
    </>
  );
}
