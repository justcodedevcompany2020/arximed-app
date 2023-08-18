import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView, ImageBackground, StyleSheet} from 'react-native';
import SearchButton from '../../../home/SearchButton';
import SingleExamBlock from './SingleExamBlock';

export default function SingleExaminationPage({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 110}}>
      <ImageBackground
        style={styles.fixed}
        source={require('../../../../assets/background.png')}
        resizeMode="cover"
      />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <SearchButton navigation={navigation} />
        <SingleExamBlock navigation={navigation} />
        <SingleExamBlock navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  scrollview: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
});
