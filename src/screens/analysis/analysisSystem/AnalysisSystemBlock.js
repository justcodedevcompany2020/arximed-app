import React, {useState} from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addBasketFunction} from '../../../store/actions/actionsAnalysis';

export default function AnalysisSystemBlock({navigation, data, onPress}) {
  const [activity, setActivity] = useState(false);
  const {
    medicalTestParamsData,
    medicalTestComplexParamsData,
    examId,
    addBasketData,
    parentId,
  } = useSelector(state => state.analysisReducer);
  const dispatch = useDispatch();
  const addBasket = () => {
    setActivity(!activity);
    dispatch(addBasketFunction('medical_test_parameter', examId, data.id));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.firstName}>{data.LABEL}</Text>
      <View style={styles.bottomBlock}>
        <View style={styles.dateBlock}></View>
        <View>
          <Text style={styles.coinFirst}>
            {data.price}
            <Text style={[styles.coinFirst, {color: '#7B9E45'}]}> ₽</Text>
          </Text>
        </View>
      </View>
      <View style={styles.bottomBlock}>
        <Text style={styles.comentText}>{data.biotype}</Text>
        <TouchableOpacity onPress={() => addBasket()}>
          {activity ? (
            <View style={styles.button}>
              <Image
                style={{width: 11, height: 10.5}}
                source={require('../../../assets/images/button.png')}
              />
              <Text style={styles.buttonText}>В корзине</Text>
            </View>
          ) : (
            <Image
              style={{width: 28, height: 28}}
              source={require('../../../assets/images/pluspink.png')}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  firstName: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    color: '#000000',
  },
  comentText: {
    width: 199,
    color: '#979797',
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '400',
  },
  bottomBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  dateBlockText: {
    marginLeft: 5,
    color: '#000000',
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '400',
  },
  coinFirst: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
  },
  secondCoinText: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '400',
    textDecorationLine: 'line-through',
    textDecorationColor: '#CBCBCB',
  },
  button: {
    backgroundColor: '#F2FBE2',
    opacity: 0.8,
    borderRadius: 8,
    width: 100,
    height: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#7B9E45',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 12,
    marginLeft: 5,
  },
});
