import React, {useEffect, useState} from 'react';
import Record from './Record';
import TitleArrow from './TitleArrow';
import {useDispatch, useSelector} from 'react-redux';
import {getHomePageDirection} from '../../store/actions/actions';

export default function Records({navigation}) {
  const dispatch = useDispatch();
  const {homepageDirectionData} = useSelector(state => state.justDriveReducer);

  useEffect(() => {
    dispatch(getHomePageDirection());
  }, []);

  // console.log(homepageDirectionData.data, 'k;k');

   return (
    <>
      <TitleArrow
        text={'Записи'}
        onPress={() => navigation.navigate('MyNotesScreen')}
      />
      {homepageDirectionData.data?.map((value, index) => {
        return (
          <Record
            key={index}
            name={'Онлайн консультация'}
            isOnline
            navigation={navigation}
          />
        );
      })}
    </>
  );
}
