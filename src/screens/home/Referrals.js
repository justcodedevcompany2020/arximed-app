import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import Referral from './Referral';
import TitleArrow from './TitleArrow';
import {Text, View} from 'react-native';
import {getDirectionData} from '../../store/actions/actionsDestination';
import DirectionBlock from '../profile/Directions/Block/DirectionBlock';
import {useDispatch, useSelector} from 'react-redux';

export default function Referrals({navigation}) {
  const {directionData} = useSelector(state => state.destinationReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDirectionData());
  }, []);
  return (
    <>
      <TitleArrow
        text={'Направления'}
        onPress={() => navigation.navigate('DirectionScreen')}
      />
      {directionData.data?.data?.length == 0 ? (
        <View
          style={{
            width: '100%',
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 16,
            backgroundColor: 'white',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 15, color: 'gray'}}>Нет Направлений</Text>
        </View>
      ) : (
        <ScrollView
          horizontal
          style={{marginTop: 15}}
          showsHorizontalScrollIndicator={false}>
          {directionData.data?.data?.map((value, index) => (
            <Referral
              value={value}
              actual={value.DATE_ACTUAL}
              name={value.NAME}
              fio={value.FIO_MED}
              navigation={navigation}
              key={index}
            />
          ))}
        </ScrollView>
      )}
    </>
  );
}
