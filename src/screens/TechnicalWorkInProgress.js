import React from 'react';
import {Text, View} from 'react-native';

export default function TechnicalWorkInProgress() {
  return (
    <View style={{paddingTop: 300, flex: 1}}>
      <Text
        style={{
          color: 'black',
          fontSize: 22,
          textAlign: 'center',
          marginBottom: 10,
        }}>
        Ведутся технические работы
      </Text>
      <Text style={{color: 'black', fontSize: 22, textAlign: 'center'}}>
        Загрузите приложение позже
      </Text>
    </View>
  );
}
