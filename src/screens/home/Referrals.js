import React from 'react';
import {ScrollView} from 'react-native';
import Referral from './Referral';
import TitleArrow from './TitleArrow';

export default function Referrals({navigation}) {
  return (
    <>
      <TitleArrow
        text={'Направления'}
        onPress={() => navigation.navigate('DirectionScreen')}
      />
      <ScrollView
        horizontal
        style={{marginTop: 15}}
        showsHorizontalScrollIndicator={false}>
        <Referral />
        <Referral />
      </ScrollView>
    </>
  );
}
