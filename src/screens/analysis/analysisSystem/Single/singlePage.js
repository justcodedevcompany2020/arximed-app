import React from 'react';
import {useState} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import SearchButton from '../../../home/SearchButton';
import Button from '../../../../components/Button';
import Characteristic from './Characteristic';
import ComentBlock from './ComentBlock';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

export default function SinglePage({navigation}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];
  const {medicalTestSingleData} = useSelector(state => state.analysisReducer);
  // console.log(medicalTestSingleData, 'kjk');

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 70}}>
      <ImageBackground
        style={styles.fixed}
        source={require('../../../../assets/background.png')}
        resizeMode="cover"
      />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 15}}>
          <Text style={styles.Namestyle}>
            {medicalTestSingleData.data?.LABEL}
          </Text>
        </View>
        <ComentBlock
          header={'Описание обследования'}
          description={medicalTestSingleData.data?.conttype}
        />
        {/* <View style={styles.historyDiv}>
          <Text style={styles.historyDivText}>История</Text>
          {historyData.map((value, index) => {
            return (
              <View style={styles.block} key={index}>
                <Text style={styles.blockText}>{value.firstText}</Text>
                <View style={styles.secondBlock}>
                  <Text style={[styles.secondBlockText, {color: value.color}]}>
                    {value.secondText}
                  </Text>
                  <Image style={{width: 12, height: 15}} source={value.elips} />
                </View>
              </View>
            );
          })}
        </View> */}
      </ScrollView>
      <View style={{paddingHorizontal: 16, marginBottom: 50}}>
        <Button
          text={'Добавить в корзину'}
          isDisabled={false}
         onPress={() => navigation.navigate('Health')}
          color={'white'}
          backgroundColor={'#9DC458'}
          marginBottom={50}
        />
      </View>
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
    paddingHorizontal: 16,
  },
  historyDiv: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    width: '100%',
    marginTop: 15,
  },
  historyDivText: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  secondBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockText: {
    color: '#000000',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
  },
  secondBlockText: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '700',
    marginRight: 7,
  },
  Namestyle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '400',
  },
});
