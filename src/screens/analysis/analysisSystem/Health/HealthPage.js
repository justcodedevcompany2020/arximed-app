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

const imageData = [
  {
    id: 1,
    img: require('../../../../assets/images/health/lightGreen.png'),
    rotateX: '180deg',
  },
  {
    id: 2,
    img: require('../../../../assets/images/health/blue.png'),
    rotateX: '180deg',
  },
  {
    id: 3,
    img: require('../../../../assets/images/health/lightGreen.png'),
    rotateX: '90deg',
  },
  {
    id: 4,
    img: require('../../../../assets/images/health/lightGreen.png'),
    rotateX: '0deg',
  },
  {
    id: 5,
    img: require('../../../../assets/images/health/lightGreen.png'),
    rotateX: '0deg',
  },
  {
    id: 6,
    img: require('../../../../assets/images/health/lightGreen.png'),
    rotateX: '0deg',
  },
  {
    id: 7,
    img: require('../../../../assets/images/health/lightGreen.png'),
    rotateX: '0deg',
  },
  {
    id: 8,
    img: require('../../../../assets/images/health/lightGreen.png'),
    rotateX: '0deg',
  },
  {
    id: 9,
    img: require('../../../../assets/images/health/lightGreen.png'),
    rotateX: '0deg',
  },
  {
    id: 10,
    img: require('../../../../assets/images/health/lightGreen.png'),
    rotateX: '0deg',
  },
];

const Petal = ({onPress, angle, index, img, transform}) => {
  return (
    <TouchableOpacity
      style={[styles.petal, {top: y, left: x, transform: transform}]}
      onPress={onPress}>
      <Image source={img} />
    </TouchableOpacity>
  );
};

export default function HealthPage({navigation}) {
  const angleBetween = (2 * Math.PI) / 10;
  const distanceFromCenter = 130; // Расстояние от центра до лепестка
  const x = distanceFromCenter * Math.cos(angleBetween);
  const y = distanceFromCenter * Math.sin(angleBetween);
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
        <View style={{height: 370}}>
          <View style={styles.wrapper}>
            <View style={styles.flower}>
              <TouchableOpacity style={[styles.petalFirst, {top: y, left: x}]}>
                <Image
                  source={require('../../../../assets/images/health/red.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.petalSecond, {top: y, left: x}]}>
                <Image
                  source={require('../../../../assets/images/health/lightGreen.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.petalthird, {top: y, left: x}]}>
                <Image
                  source={require('../../../../assets/images/health/lightOrange.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.petalfourth, {top: y, left: x}]}>
                <Image
                  source={require('../../../../assets/images/health/lightGreen.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.petalFifth, {top: y, left: x}]}>
                <Image
                  source={require('../../../../assets/images/health/green.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.petalsixth, {top: y, left: x}]}>
                <Image
                  source={require('../../../../assets/images/health/lightGreen.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.petalseventh, {top: y, left: x}]}>
                <Image
                  source={require('../../../../assets/images/health/orange.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.petaleightth, {top: y, left: x}]}>
                <Image
                  source={require('../../../../assets/images/health/lightGreen.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{width: 70, height: 70}}
                  source={require('../../../../assets/images/health/center.png')}
                />
              </TouchableOpacity>
            </View>
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
    marginTop: 50,
    width: '100%',
    height: 500,
    flex: 1,
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
  petalFirst: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: 105}, {translateY: 35}],
  },
  petalSecond: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: 125}, {translateY: 90}, {rotate: '144deg'}],
  },
  petalthird: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: 75}, {translateY: 130}],
  },
  petalfourth: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: 10}, {translateY: 138}, {rotate: '-144deg'}],
  },
  petalFifth: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: -75}, {translateY: 120}],
  },
  petalsixth: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: -82}, {translateY: 55}, {rotate: '-72deg'}],
  },
  petalseventh: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: -100}, {translateY: -18}],
  },
  petaleightth: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: -25}, {translateY: -65}],
  },

  center: {
    // width: 70,
    // height: 70,
    // backgroundColor: 'green',
    // borderRadius: 70,
  },
});
