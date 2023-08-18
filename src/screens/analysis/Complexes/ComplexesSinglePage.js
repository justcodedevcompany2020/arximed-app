import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Characteristic from '../analysisSystem/Single/Characteristic';
import ComentBlock from '../analysisSystem/Single/ComentBlock';
import AnalysisBlock from './AnalysisBlock';
import Button from '../../../components/Button';
import BioMaterials from './BioMaterialsPage';
import {useSelector, useDispatch} from 'react-redux';

let comentData = [
  {
    id: 1,
    header: 'Описание анализа',
  },
  {
    id: 2,
    header: 'Подготовка к анализу',
  },
];

export default function ComplexesSinglePage({navigation, route}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const {title} = route.params;
  const {medicalTestComplexParamsData} = useSelector(
    state => state.analysisReducer,
  );

  useEffect(() => {
    navigation.setOptions({title: title});
  }, []);

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
        <Characteristic data={medicalTestComplexParamsData?.data?.data} />
        <AnalysisBlock data={medicalTestComplexParamsData?.data?.data} />
        <BioMaterials data={medicalTestComplexParamsData?.data?.data} />
        {comentData.map((value, index) => {
          return <ComentBlock key={index} header={value.header} />;
        })}
        <Button
          text={'Далее'}
          isDisabled={isDisabled}
          color={'white'}
          backgroundColor={'#9DC458'}
          onPress={() => navigation.navigate('ComplexesBuy')}
        />
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
    paddingHorizontal: 20,
    paddingTop: 25,
  },
});
