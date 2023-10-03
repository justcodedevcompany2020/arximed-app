import React, {useEffect, useState} from 'react';
import {
  Percent100,
  Percent90,
  ZeroPercent,
} from '../../assets/svgs/HomeScreenSvgs';
import AnalysisCard from './AnalysisCard';
import TitleArrow from './TitleArrow';
import {useSelector, useDispatch} from 'react-redux';
import {getHomePageAnalisys} from '../../store/actions/actions';
import {Text, View} from 'react-native';

export default function AnalysesCardsContainer({navigation}) {
  const dispatch = useDispatch();

  const {homepageAnalisysData} = useSelector(state => state.justDriveReducer);

  useEffect(() => {
    dispatch(getHomePageAnalisys());
    
  }, []);
  // console.log(homepageAnalisysData, 'hommeee');

  return (
    <>
      <TitleArrow
        text={'Анализы и обследования'}
        onPress={() => navigation.navigate('AnalyzesAndExamination')}
      />

      {homepageAnalisysData?.data?.length === 0 ? (
        <View
          style={{
            width: '100%',
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 16,
            backgroundColor: 'white',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 15, color: 'gray'}}>Нет Анализов</Text>
        </View>
      ) : (
        <>
          {homepageAnalisysData?.data?.map((value, index) => {
            return (
              <AnalysisCard
                // percent={0}
                Svg={ZeroPercent}
                name={value.get_analis_by_medical_test_parametr[0].LABEL}
                doctorName={
                  value.get_analis_by_medical_test_parametr[0].conttype
                }
                date={'16.03.2021'}
                norm={'Ожидается'}
                num={0}
                key={index}
              />
            );
          })}
        </>
      )}
    </>
  );
}
