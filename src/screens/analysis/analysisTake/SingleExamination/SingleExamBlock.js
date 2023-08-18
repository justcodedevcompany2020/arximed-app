import React, {useState} from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

export default function SingleExamBlock({navigation}) {
  const [activity, setActivity] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('SinglePage')}>
      <Text style={styles.firstName}>МРТ головы</Text>
      <View style={styles.bottomBlock}>
        <View style={[styles.dateBlock, {marginTop: 10, marginBottom: 10}]}>
          <Image
            style={{width: 10, height: 10}}
            source={require('../../../../assets/images/akarcalendar.png')}
          />
          <Text style={styles.dateBlockText}>2 дня</Text>
          <View style={[styles.dateBlock, {marginLeft: 5}]}>
            <Svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Circle cx="2" cy="2" r="2" fill="#9DC458" />
            </Svg>
            <Text style={styles.examName}>МРТ</Text>
          </View>
        </View>
        <View>
          <Text style={styles.coinFirst}>
            2000<Text style={[styles.coinFirst, {color: '#7B9E45'}]}> ₽</Text>
          </Text>
          <Text style={styles.secondCoinText}>5 000 ₽</Text>
        </View>
      </View>
      <View style={styles.bottomBlock}>
        <Text style={styles.comentText}>
          Описание Описание Описание Описание Описание Описание Описание
          Описание Описание Описание Описание Описание{' '}
        </Text>
        <TouchableOpacity onPress={() => setActivity(!activity)}>
          {activity ? (
            <View style={styles.button}>
              <Image
                style={{width: 11, height: 10.5}}
                source={require('../../../../assets/images/button.png')}
              />
              <Text style={styles.buttonText}>В корзине</Text>
            </View>
          ) : (
            <Image
              style={{width: 28, height: 28}}
              source={require('../../../../assets/images/pluspink.png')}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateBlock: {
    flexDirection: 'row',
    alignItems: 'center',
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
  examName: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '400',
    color: '#000000',
    marginLeft: 5,
  },
});
