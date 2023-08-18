import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {BasketIconGreen} from '../../../../assets/svgs/HomeScreenSvgs';
import Svg, {Path} from 'react-native-svg';
import HealthNav from './HealthNav';

const Petal = ({onPress, angle, index}) => {
  const distanceFromCenter = 130; // Расстояние от центра до лепестка
  const x = distanceFromCenter * Math.cos(angle);
  const y = distanceFromCenter * Math.sin(angle);

  return (
    <TouchableOpacity
      style={[styles.petal, {top: y, left: x}]}
      onPress={onPress}>
      <Text>Лепесток{index}</Text>
    </TouchableOpacity>
  );
};

export default function HealthPage({navigation}) {
  const numberOfPetals = 10;
  const angleBetween = (2 * Math.PI) / numberOfPetals;
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <ImageBackground
        source={require('../../../../assets/background.png')}
        resizeMode="cover"
        style={styles.fixed}
      />
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            width: 70,
            flexDirection: 'row',
            alignSelf: 'flex-end',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BasketNavigator')}>
            <BasketIconGreen />
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity>
            <Svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M14 6.942v.117M14 13.942v.117M14 20.942v.117"
                stroke="#000"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <Text style={styles.textHeader}>Здоровье</Text>
        <View style={styles.blueBlock}>
          <Text style={styles.blueBlockText}>
            * Выберете сферу, с которой хотите поработать{' '}
          </Text>
        </View>
        {/* <Image
          style={{width: 320, height: 320, alignSelf: 'center', marginTop: 10}}
          source={require('../../../../assets/images/cyrcle.png')}
        /> */}
        <View style={styles.wrapper}>
          <View style={styles.flower}>
            {Array.from({length: numberOfPetals}).map((_, index) => (
              <Petal
                key={index}
                angle={index * angleBetween}
                onPress={() => alert(`Лепесток ${index + 1} нажат`)}
                index={index}
              />
            ))}
            <View style={styles.center}></View>
          </View>
        </View>
        <Image
          style={{width: '100%', height: 80}}
          source={require('../../../../assets/images/shadow.png')}
        />
        <Image
          style={{width: '100%', height: 100, marginTop: 5}}
          source={require('../../../../assets/images/diagram.png')}
        />
      </View>
      <HealthNav navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    color: '#1C1C1E',
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '600',
  },
  blueBlock: {
    width: '100%',
    height: 32,
    borderRadius: 48,
    backgroundColor: '#81D4FE33',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueBlockText: {
    color: '#4E93B8',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 190,
  },
  flower: {
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#75C3AE12',
    borderRadius: 300,
  },
  petal: {
    width: 60,
    height: 60,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: 145}, {translateY: 150}],
  },
  center: {
    width: 70,
    height: 70,
    backgroundColor: 'green',
    borderRadius: 70,
  },
});
