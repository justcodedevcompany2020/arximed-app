import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import NameComplex from './NameComplex';
import {useSelector, useDispatch} from 'react-redux';
import {getMedicalTestComplexParams} from '../../../store/actions/actionsAnalysis';

export default function ComplexesFirstPage({navigation}) {
  const {medicalTestParamsData, medicalTestComplexData} = useSelector(
    state => state.analysisReducer,
  );

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 110}}>
      <ImageBackground
        style={styles.fixed}
        source={require('../../../assets/background.png')}
        resizeMode="cover"
      />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        {medicalTestComplexData?.data?.data.map((value, index) => {
          return (
            <NameComplex
              onPress={() => {
                dispatch(getMedicalTestComplexParams(value.id));
                navigation.navigate('AnalysisSystemScreen', {
                  title: value.text,
                  id: value.id,
                });
              }}
              text={value.NAME}
              key={index}
              coin={value.coin}
            />
          );
        })}
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
    height: '100%',
    marginBottom: 110,
    marginTop: 25,
  },
});
