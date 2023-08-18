import React, {useState} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import SearchButton from '../../home/SearchButton';
import AnalysisNavigate from '../AnalysisNavigate';
import {useSelector, useDispatch} from 'react-redux';
import {
  getMedicalTestParam,
  getMedicalTest,
  getExamId,
  getParentId,
  createAnalisePageFunction,
} from '../../../store/actions/actionsAnalysis';
import {SearchIcon} from '../../../assets/svgs/HomeScreenSvgs';

export default function AnalysisTakeScreen({navigation}) {
  const dispatch = useDispatch();
  const {medicalTestData} = useSelector(state => state.analysisReducer);
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 110}}>
      <ImageBackground
        style={styles.fixed}
        source={require('../../../assets/background.png')}
        resizeMode="cover"
      />
      <ScrollView
        style={{
          backgroundColor: 'transparent',
          marginBottom: 85,
          paddingHorizontal: 20,
          paddingBottom: 5,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 15}}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <SearchIcon />
            <TextInput
              style={styles.search}
              value={value}
              onChangeText={text => {
                setValue(text);
                if (value.length == 0) {
                  dispatch(getMedicalTest());
                } else {
                  dispatch(getMedicalTest(text));
                  dispatch(createAnalisePageFunction(text));
                }
              }}
              placeholder="Поиск"
              placeholderTextColor={'#8E8E93'}
            />
          </TouchableOpacity>
        </View>
        {medicalTestData?.data?.data.map((value, index) => {
          return (
            <AnalysisNavigate
              image={require('../../../assets/images/medical-file.png')}
              key={index}
              text={value.NAME}
              onPress={() => {
                dispatch(getParentId(value.id));
                dispatch(getExamId(value.PL_EXAM_ID));
                dispatch(getMedicalTestParam(value.id));
                navigation.navigate('AnalysisSystemScreen', {id: value.id});
              }}
              width={20}
              height={20}
            />
          );
        })}
        {medicalTestData?.data?.data.length == 0 && (
          <Text>Нет таких анализов</Text>
        )}
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
