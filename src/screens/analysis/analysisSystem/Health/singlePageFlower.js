import React from 'react';
import {useState} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import SearchButton from '../../../home/SearchButton';
import Button from '../../../../components/Button';
import Characteristic from '../Single/Characteristic';
import ComentBlock from '../Single/ComentBlock';
import {useSelector, useDispatch} from 'react-redux';
import { addBasketFunction } from '../../../../store/actions/actionsAnalysis';

export default function SinglePageFlower({navigation, route}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];
  const {data} = route.params;

  const { examId } = useSelector(state => state.analysisReducer);

  const dispatch = useDispatch();
  const addBasket = () => {
    // console.log(data.id, examId);
    dispatch(addBasketFunction('medical_test_parameter', examId, data.id));
    navigation.navigate('BasketNavigator', {screen: 'BasketScreen'})
  };


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
        <Characteristic data={data} />
        <ComentBlock header={data.description_serv} />
        <View style={{marginTop: 15}}></View>
      </ScrollView>
      <View style={{paddingHorizontal: 16, marginBottom: 50}}>
        <Button
          text={'Добавить в корзину'}
          isDisabled={false}
          onPress={addBasket}
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
