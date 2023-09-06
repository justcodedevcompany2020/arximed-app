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

export default function AnalysesCardsContainer({navigation}) {
  const dispatch = useDispatch();

  const {homepageAnalisysData} = useSelector(state => state.justDriveReducer);

  useEffect(() => {
    dispatch(getHomePageAnalisys());
  }, []);

  return (
    <>
      <TitleArrow
        text={'Анализы и обследования'}
        onPress={() => navigation.navigate('AnalyzesAndExamination')}
      />
      {homepageAnalisysData.data?.map((value, index) => {
        return (
          <AnalysisCard
            // percent={0}
            Svg={ZeroPercent}
            name={value.get_analis_by_medical_test_parametr[0].LABEL}
            doctorName={value.get_analis_by_medical_test_parametr[0].conttype}
            date={'16.03.2021'}
            norm={'Ожидается'}
            num={0}
            key={index}
          />
        );
      })}
    </>
  );
}
