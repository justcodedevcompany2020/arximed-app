import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlaceComponent from './PlaceComponent';
import {InTheClinic, AtHome} from '../../assets/svgs/BasketSvgs';

export default function PlaceContainer({selectedPlace, setSelectedPlace}) {
  return (
    <>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          color: '#1C1C1E',
          marginTop: 20,
        }}>
        Где хотите сдать?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <PlaceComponent
          Svg={InTheClinic}
          place={'В клинике'}
          address={'ул. Вавилова, д. 68 корп. 2'}
          price={'0'}
          isSelected={selectedPlace === 'clinic'}
          onPress={() => setSelectedPlace('clinic')}
        />
        <PlaceComponent
          Svg={AtHome}
          place={'На дому'}
          address={'Москва, ул. Ленина, 29, к2'}
          price={'800'}
          isSelected={selectedPlace === 'home'}
          onPress={() => setSelectedPlace('home')}
        />
      </View>
    </>
  );
}
