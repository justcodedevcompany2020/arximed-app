import React from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import SearchButton from '../home/SearchButton';
import AnalysisSlider from './AnalysisSlider';
import AnalysisNavigate from './AnalysisNavigate';
import AnalysisHeader from './AnalysisHeader';
import {SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  getMedicalTest,
  getMedicalTestComplex,
} from '../../store/actions/actionsAnalysis';

let data = [
  {
    id: 1,
    text: 'Позвонить в клинику',
    navName: '',
    image: require('../../assets/images/callAnalysis.png'),
    width: 20,
    height: 20,
  },
  {
    id: 2,
    text: 'Вызов врача на дом',
    navName: 'CallDoctor',
    image: require('../../assets/images/medical-vehicle.png'),
    width: 20,
    height: 20,
  },
  {
    id: 3,
    text: 'Записаться к врачу в клинику',
    navName: 'DoctorsNavigator',
    image: require('../../assets/images/health.png'),
    width: 20,
    height: 20,
  },
  {
    id: 4,
    text: 'Система коррекции здоровья',
    navName: '',
    image: require('../../assets/images/medical-kit.png'),
    width: 20,
    height: 20,
  },
  {
    id: 5,
    text: 'Сдать анализы',
    navName: 'AnalysisTakeScreen',
    image: require('../../assets/images/medical-file.png'),
    width: 20,
    height: 20,
  },
  {
    id: 6,
    text: 'Медицинские обследования',
    navName: 'MedicalExaminations',
    image: require('../../assets/images/medical-equipment.png'),
    width: 20,
    height: 20,
  },
  {
    id: 7,
    text: 'Онлайн чат с регистратурой',
    navName: 'chat',
    image: require('../../assets/images/professional.png'),
    width: 20,
    height: 20,
  },
  {
    id: 8,
    text: 'Пройти чекап',
    navName: 'ComplexesFirstPage',
    image: require('../../assets/images/health1.png'),
    width: 20,
    height: 20,
  },
];

export default function AnalysisScreen({navigation}) {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1, width: '100%'}}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.fixed}
        resizeMode="cover">
        <AnalysisHeader navigation={navigation} />
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}>
          <View style={{paddingHorizontal: 20}}>
            <SearchButton navigation={navigation} />
            <Text style={styles.saleText}>Акции</Text>
          </View>
          <AnalysisSlider />
          <View style={{paddingHorizontal: 20}}>
            {data.map((value, index) => {
              return (
                <AnalysisNavigate
                  onPress={
                    value.navName
                      ? () => {
                          dispatch(getMedicalTestComplex());
                          dispatch(getMedicalTest());
                          navigation.navigate(value.navName);
                        }
                      : null
                  }
                  image={value.image}
                  key={index}
                  text={value.text}
                  width={value.width}
                  height={value.height}
                />
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixed: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollview: {
    marginBottom: 90,
  },
  saleText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: 'black',
    marginLeft: 5,
    marginTop: 10,
  },
});
