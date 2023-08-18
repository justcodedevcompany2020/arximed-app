import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Characteristic from '../analysisSystem/Single/Characteristic';
import ComentBlock from '../analysisSystem/Single/ComentBlock';
import React, {useState} from 'react';
import Button from '../../../components/Button';
import BioMaterials from './BioMaterialsPage';

let comentData = [
  {
    id: 1,
    header: 'Описание обследования',
  },
  {
    id: 2,
    header: 'Подготовка к обследованию',
  },
];

export default function ComplexesBuy({navigation}) {
  const [isDisabled, setIsDisabled] = useState(false);

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
        <Characteristic />
        <BioMaterials />
        {comentData.map((value, index) => {
          return <ComentBlock key={index} header={value.header} />;
        })}
        <View style={styles.dynamic}>
          <Text style={styles.dynamicText}>Динамика результатов </Text>
          <Image
            style={{height: 150, width: 300, marginTop: 10}}
            source={require('../../../assets/images/Diagram1.png')}
          />
        </View>
        <Button
          text={'Добавить в корзину'}
          isDisabled={isDisabled}
          color={'white'}
          backgroundColor={'#9DC458'}
          marginBottom={20}
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
    paddingTop: 20,
    marginBottom: 100,
    paddingHorizontal: 20,
  },
  dynamic: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
  },
  dynamicText: {
    fontSize: 20,
    color: '#1C1C1E',
    lineHeight: 24,
    fontWeight: '700',
  },
});
