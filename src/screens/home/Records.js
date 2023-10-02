import React, {useEffect, useState} from 'react';
import Record from './Record';
import TitleArrow from './TitleArrow';
import {useDispatch, useSelector} from 'react-redux';
import {getHomePageDirection} from '../../store/actions/actions';
import {Text, View} from 'react-native';

export default function Records({navigation}) {
  const dispatch = useDispatch();
  const {homepageDirectionData} = useSelector(state => state.justDriveReducer);

  useEffect(() => {
    dispatch(getHomePageDirection());
  }, []);

  return (
    <>
      <TitleArrow
        text={'Записи'}
        onPress={() => navigation.navigate('MyNotesScreen')}
      />

      {homepageDirectionData?.data?.length == 0 ? (
        <View
          style={{
            width: '100%',
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 16,
            backgroundColor: 'white',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 15, color: 'gray'}}>Нет Записей</Text>
        </View>
      ) : (
        <>
          {homepageDirectionData.data?.map((value, index) => {
            return (
              <Record
                key={index}
                name={value.parent.LABEL}
                isOnline
                navigation={navigation}
              />
            );
          })}
        </>
      )}
    </>
  );
}
