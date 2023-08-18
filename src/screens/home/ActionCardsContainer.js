import React from 'react';
import {ScrollView} from 'react-native';
import ActionCard from './ActionCard';
import {Computer} from '../../assets/svgs/HomeScreenSvgs';
import {useDispatch, useSelector} from 'react-redux';
import {getMedicalTest} from '../../store/actions/actionsAnalysis';

export default function ActionCardsContainer({navigation}) {
  const dispatch = useDispatch();
  return (
    <ScrollView
      horizontal
      style={{height: '100%', marginTop: 15, marginLeft: 20}}
      showsHorizontalScrollIndicator={false}>
      <ActionCard
        text={'Онлайн консультация'}
        backgroundColor={'#F0FAC6'}
        path={require('../../assets/animations/1_icon_2.json')}
        navigate={() => navigation.navigate('MyNotesScreen')}
        seconds={1300}
      />
      <ActionCard
        text={'Сдать анализы'}
        path={require('../../assets/animations/6.json')}
        navigate={() => {
          dispatch(getMedicalTest());
          navigation.navigate('AnalysisTakeScreen');
        }}
        seconds={2000}
      />
      <ActionCard
        Icon={Computer}
        text={'Записаться к врачу'}
        path={require('../../assets/animations/5_icon.json')}
        navigate={() => navigation.navigate('DoctorsNavigator')}
        seconds={1800}
      />
    </ScrollView>
  );
}
