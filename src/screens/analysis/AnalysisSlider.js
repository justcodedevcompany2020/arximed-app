import React from 'react';
import {ScrollView} from 'react-native';
import AnalysisSliderCard from './AnalysisSliderCard';

export default function AnalysisSlider() {
  return (
    <ScrollView
      horizontal
      style={{height: '100%', marginTop: 15, marginLeft: 20, marginBottom: 10}}
      showsHorizontalScrollIndicator={false}>
      <AnalysisSliderCard />
      <AnalysisSliderCard />
      <AnalysisSliderCard />
      <AnalysisSliderCard />
    </ScrollView>
  );
}
