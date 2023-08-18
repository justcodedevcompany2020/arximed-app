import React from 'react';
import { Percent100, Percent90, ZeroPercent } from '../../assets/svgs/HomeScreenSvgs';
import AnalysisCard from './AnalysisCard';
import TitleArrow from './TitleArrow';

export default function AnalysesCardsContainer({navigation}) {
  return (
    <>
      <TitleArrow text={'Анализы и обследования'} onPress={()=> navigation.navigate('AnalyzesAndExamination')}/>
      <AnalysisCard
        // percent={0}
        Svg={ZeroPercent}
        name={'VIP женский'}
        doctorName={'ВОП, Косарева В.В.'}
        date={'16.03.2021'}
        norm={'Ожидается'}
        num={0}
      />
      <AnalysisCard
        // percent={100}
        Svg={Percent100}
        name={'НСТ-тест (бактерицидная активность фагоцитов)'}
        doctorName={'ВОП, Косарева В.В.'}
        date={'16.03.2021'}
        norm={'Норма'}
        num={0}
      />
      <AnalysisCard
        // percent={90}
        Svg={Percent90}
        name={'Название комплекса'}
        doctorName={'ВОП, Косарева В.В.'}
        date={'16.03.2021'}
        norm={'В процессе'}
        num={0}
      />
    </>
  );
}
