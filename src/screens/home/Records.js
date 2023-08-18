import React from 'react';
import Record from './Record';
import TitleArrow from './TitleArrow';

export default function Records({navigation}) {
  return (
    <>
      <TitleArrow
        text={'Записи'}
        onPress={() => navigation.navigate('MyNotesScreen')}
      />
      <Record name={'Онлайн консультация'} isOnline navigation={navigation} />
      <Record name={'Запись к врачу'} paid navigation={navigation} />
    </>
  );
}
