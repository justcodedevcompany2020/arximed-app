import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
import {MarkerIcon} from '../../assets/svgs/BasketSvgs';
import Address from './Address';
import {
  YaMap,
  Animation,
  CameraPosition,
  Circle,
  Marker,
  Point,
  Polygon,
  Geocoder,
  Polyline,
} from 'react-native-yamap';

YaMap.init('d93a70a1-fd4d-45d1-ad20-19ae15cf3180');

export default function MapScreen({navigation, route}) {
  const map = useRef();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{height: 120, backgroundColor: 'rgba(255, 255, 255, 0.7)'}}
      />
      <YaMap
        showUserPosition
        initialRegion={{
          lat: 40.177623,
          lon: 44.51252,
          zoom: 10,
          azimuth: 0,
          tilt: 100,
        }}
        style={{flex: 1}}>
        <Marker
          source={require('../../assets/images/position.png')}
          point={{lat: 40.177623, lon: 44.51252}}
        />
        {/* <Circle center={{lat: 40.177623, lon: 44.51252}} radius={300} /> */}
      </YaMap>
      <Address navigation={navigation} hide={route.params.hide} />
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
});
