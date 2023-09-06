import React, {useEffect} from 'react';
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
import {
  getAboutAnalyses,
  getFlowerData,
  getMedicalTestParmasSinglePage,
} from '../../../../store/actions/actionsAnalysis';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import ComentBlock from '../Single/ComentBlock';

export default function HealthPage({navigation}) {
  const angleBetween = (2 * Math.PI) / 10;
  const distanceFromCenter = 130; // Расстояние от центра до лепестка
  const x = distanceFromCenter * Math.cos(angleBetween);
  const y = distanceFromCenter * Math.sin(angleBetween);
  const dispatch = useDispatch();
  const {flowerdata, aboutAnalysesData} = useSelector(
    state => state.analysisReducer,
  );

  useEffect(() => {
    dispatch(getFlowerData());
    dispatch(getAboutAnalyses());
  }, []);

  console.log(aboutAnalysesData, 'lk');

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
      </View>
      <ScrollView>
        <View style={styles.blueBlock}>
          <Text style={styles.blueBlockText}>
            * Выберете сферу, с которой хотите поработать{' '}
          </Text>
        </View>
        <View style={{height: 370}}>
          <View style={styles.wrapper}>
            <View style={styles.flower}>
              {flowerdata?.data?.map((value, index) => {
                return (
                  // <Text key={index}>{value.LABEL}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SinglePageFlower', {data: value});
                    }}
                    key={index}
                    style={[
                      index == 0 && styles.petalFirst,
                      index == 1 && styles.petalSecond,
                      index == 2 && styles.petalthird,
                      index == 3 && styles.petalfourth,
                      index == 4 && styles.petalFifth,
                      index == 5 && styles.petalsixth,
                      index == 6 && styles.petalseventh,
                      index == 7 && styles.petaleightth,
                      index == 8 && styles.petaleninghth,
                      index == 9 && styles.petaletenth,

                      {top: y, left: x},
                    ]}>
                    <Text
                      ellipsizeMode="clip"
                      numberOfLines={2}
                      style={[
                        styles.petalText,
                        index == 0 && {
                          zIndex: 55555,
                          width: '30%',
                          transform: [
                            {rotate: '90deg'},
                            {translateX: 22},
                            {translateY: 14},
                          ],
                        },
                        index == 1 && {
                          zIndex: 55555,
                          width: '50%',
                          transform: [
                            {rotate: '-100deg'},
                            {translateX: 10},
                            {translateY: 10},
                          ],
                        },
                        index == 2 && {
                          zIndex: 55555,
                          width: '50%',
                          transform: [
                            {rotate: '-20deg'},
                            {translateX: -7},
                            {translateY: -7},
                          ],
                        },
                        index == 3 && {
                          zIndex: 55555,
                          width: '50%',
                          transform: [
                            {rotate: '65deg'},
                            {translateX: 16},
                            {translateY: -10},
                          ],
                        },
                        index == 4 && {
                          zIndex: 55555,
                          width: '50%',
                          transform: [
                            {rotate: '-40deg'},
                            {translateX: 15},
                            {translateY: -10},
                          ],
                        },
                        index == 5 && {
                          zIndex: 55555,
                          width: '100%',
                          transform: [
                            {rotate: '70deg'},
                            {translateX:10 },
                            {translateY: -10},
                          ],
                        },
                        index == 6 && {
                          zIndex: 55555,
                          width: '50%',
                          transform: [
                            {rotate: '30deg'},
                            {translateX: 9},
                            {translateY: -10},
                          ],
                        },
                        index == 7 && {
                          zIndex: 55555,
                          width: '50%',
                          transform: [
                            {rotate: '-20deg'},
                            {translateX: 10},
                            {translateY: 10},
                          ],
                        },
                        index == 8 && {
                          zIndex: 55555,
                          width: '50%',
                          transform: [
                            {rotate: '10deg'},
                            {translateX: 15},
                            {translateY: 14},
                          ],
                        },
                        index == 9 && {
                          zIndex: 55555,
                          width: '50%',
                          transform: [
                            {rotate: '-110deg'},
                            {translateX: -3},
                            {translateY: 10},
                          ],
                        },
                      ]}>
                      {/* {value.LABEL} */}
                      {value.LABEL.length > 20
                        ? value.LABEL.substring(0, 20 - 3) + '...'
                        : value.LABEL}
                    </Text>
                    {index == 0 && (
                      <Image
                        source={require('../../../../assets/images/health/red.png')}
                      />
                    )}
                    {index == 1 && (
                      <Image
                        source={require('../../../../assets/images/health/lightGreen.png')}
                      />
                    )}
                    {index == 2 && (
                      <Image
                        source={require('../../../../assets/images/health/lightOrange.png')}
                      />
                    )}
                    {index == 3 && (
                      <Image
                        source={require('../../../../assets/images/health/lightGreen.png')}
                      />
                    )}
                    {index == 4 && (
                      <Image
                        source={require('../../../../assets/images/health/green.png')}
                      />
                    )}
                    {index == 5 && (
                      <Image
                        source={require('../../../../assets/images/health/lightGreen.png')}
                      />
                    )}
                    {index == 6 && (
                      <Image
                        source={require('../../../../assets/images/health/orange.png')}
                      />
                    )}
                    {index == 7 && (
                      <Image
                        source={require('../../../../assets/images/health/lightGreen.png')}
                      />
                    )}
                    {index == 8 && (
                      <Image
                        source={require('../../../../assets/images/health/blue.png')}
                      />
                    )}
                    {index == 9 && (
                      <Image
                        source={require('../../../../assets/images/health/lightGreen.png')}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}

              <Image
                style={{width: 70, height: 70}}
                source={require('../../../../assets/images/health/center.png')}
              />
            </View>
          </View>
        </View>
        <Image
          style={{width: '100%', height: 80}}
          source={require('../../../../assets/images/shadow.png')}
        />
        <View style={{paddingHorizontal: 16}}>
          <ComentBlock header={aboutAnalysesData?.data} />
        </View>
      </ScrollView>

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
    transform: [{translateX: 105}, {translateY: 25}],
  },
  petalSecond: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: 125}, {translateY: 85}, {rotate: '144deg'}],
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
    transform: [{translateX: -45}, {translateY: 155}],
    width: 70,
    height: 40,
  },
  petalsixth: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: -72}, {translateY: 90}, {rotate: '-72deg'}],
    width: 70,
    height: 40,
  },
  petalseventh: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: -60}, {translateY: 27}],
    width: 70,
    height: 40,
  },
  petaleightth: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX:-9}, {translateY: -21}],
    width: 70,
    height: 40,
  },
  petaleninghth: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: 55}, {translateY: -30}],
    width: 70,
    height: 40,
  },
  petaletenth: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 30,
    transform: [{translateX: 115}, {translateY: 5}, {rotate: '75deg'}],
    width: 70,
    height: 40,
  },
  petalText: {
    position: 'absolute',
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
  },
  center: {
    // width: 70,
    // height: 70,
    // backgroundColor: 'green',
    // borderRadius: 70,
  },
});
