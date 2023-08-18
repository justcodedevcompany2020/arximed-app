import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SearchButton from '../../home/SearchButton';
import AnalysisSystemBlock from './AnalysisSystemBlock';
import {useSelector, useDispatch} from 'react-redux';
import {SearchIcon} from '../../../assets/svgs/HomeScreenSvgs';
import {
  getMedicalTestParam,
  getMedicalTestComplexParams,
  getMedicalTestParmasSinglePage,
} from '../../../store/actions/actionsAnalysis';

export default function AnalysisSystemScreen({navigation, route}) {
  const {medicalTestParamsData, medicalTestComplexParamsData} = useSelector(
    state => state.analysisReducer,
  );
  console.log(route.params.id);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {}, []);

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
        <View style={{paddingHorizontal: 20}}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <SearchIcon />
            <TextInput
              style={styles.search}
              value={value}
              onChangeText={text => {
                setValue(text);
                if (value.length == 0 && medicalTestParamsData) {
                  dispatch(getMedicalTestParam(route.params.id));
                } else {
                  dispatch(getMedicalTestParam(route.params.id, text));
                }
                if (medicalTestComplexParamsData && value.length == 0) {
                  dispatch(getMedicalTestComplexParams());
                } else {
                  dispatch(getMedicalTestComplexParams(text));
                }
              }}
              placeholder="Поиск"
              placeholderTextColor={'#8E8E93'}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 15}}>
          {medicalTestParamsData &&
            medicalTestParamsData?.data?.data.map((value, index) => {
              return (
                <AnalysisSystemBlock
                  onPress={() => {
                    dispatch(getMedicalTestParmasSinglePage(value.id));
                    navigation.navigate('SinglePage');
                  }}
                  navigation={navigation}
                  key={index}
                  data={value}
                />
              );
            })}
          {medicalTestComplexParamsData &&
            medicalTestComplexParamsData?.data?.data.map((value, index) => {
              return (
                <AnalysisSystemBlock
                  onPress={() => {
                    dispatch(getMedicalTestParmasSinglePage(value.id));
                    navigation.navigate('SinglePage');
                  }}
                  navigation={navigation}
                  key={index}
                  data={value}
                />
              );
            })}
        </View>
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
    marginBottom: 110,
  },
  button: {
    // marginTop: 30,
    height: 45,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  search: {
    fontSize: 16,
    color: '#8E8E93',
    fontWeight: '600',
    width: '100%',
  },
});
