import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import AnalysisFirst from './Blocks/AnalysisFirst';
import FileBlock from './Blocks/FileBlock';
import HistoryBlock from './Blocks/HistoryBlock';
import MeaningBlock from './Blocks/MeaningBlock';
import ReferencesBlock from './Blocks/ReferencesBlock';
import StatusBlock from './Blocks/StatusBlock';
import Button from '../../../components/Button';

export default function AnalysisSinglePage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <AnalysisFirst />
        <MeaningBlock />
        <StatusBlock />
        <ReferencesBlock />
        <HistoryBlock />
        <FileBlock />
        <Button
          text={'Повторить анализ'}
          color={'white'}
          backgroundColor={'#9DC458'}
          isDisabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  scrollView: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    marginTop: 120,
    width: '100%',
    height: '100%',
  },
});
