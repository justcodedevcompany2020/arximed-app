import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
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
// import Geolocation from 'react-native-geolocation-service';

YaMap.init('d93a70a1-fd4d-45d1-ad20-19ae15cf3180');

export default function MapScreen({navigation, route}) {
  const map = useRef();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [position, setPosition] = useState(null);
  const [auth, setAuth] = useState('');
  const [accurancy, setAccurancy] = useState('');
  const [date, setDate] = useState('');

  // const requestLocationPermission = async () => {
  //   if (Platform.OS === 'ios') {
  //     const auth = await Geolocation.requestAuthorization('whenInUse');
  //     setAuth(auth);
  //     if (auth === 'granted') {
  //       const watchId = Geolocation.watchPosition(
  //         position => {
  //           console.log(position, 'position');
  //           setPosition(position);

  //           setLongitude(position.coords.longitude);
  //           setLatitude(position.coords.latitude);
  //           setAccurancy(position.coords.accuracy.toFixed(2));
  //           let date = moment(position.coords.timestamp).format(
  //             'YYYY-MM-DD hh:mm:ss',
  //           );
  //           setDate(date);
  //         },
  //         error => {
  //           console.log('Geolocation error:', error.message);
  //         },
  //         {
  //           timeout: 15000,
  //           maximumAge: 10000,
  //           enableHighAccuracy: true,
  //           distanceFilter: 1,
  //           interval: 1000,
  //           forceRequestLocation: true,
  //         },
  //       );
  //     }
  //     return null;
  //   } else if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       );

  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         const watchId = Geolocation.watchPosition(
  //           position => {
  //             // console.log('Geolocation new position:', position);
  //             setLongitude(position.coords.longitude);
  //             setLatitude(position.coords.latitude);
  //             setAccurancy(position.coords.accuracy.toFixed(2));
  //             let date = moment(position.coords.timestamp).format(
  //               'YYYY-MM-DD hh:mm:ss',
  //             );
  //             setDate(date);
  //           },
  //           error => {
  //             console.log('Geolocation error:', error.message);
  //           },
  //           {
  //             timeout: 15000,
  //             maximumAge: 10000,
  //             enableHighAccuracy: true,
  //             distanceFilter: 1,
  //             interval: 1000,
  //             forceRequestLocation: true,
  //           },
  //         );
  //       } else {
  //         requestLocationPermission();
  //       }
  //     } catch (err) {
  //       console.warn(err.message);
  //       return false;
  //     }
  //   }
  // };
  // const requestLocationPermission = async () => {
  //   if (Platform.OS === 'ios') {
  //     const auth = await Geolocation.requestAuthorization('whenInUse');
  //     setAuth(auth);
  //     if (auth === 'granted') {
  //       const watchId = Geolocation.watchPosition(
  //         position => {
  //           console.log(position, 'position');
  //           setPosition(position);

  //           setLongitude(position.coords.longitude);
  //           setLatitude(position.coords.latitude);
  //           setAccurancy(position.coords.accuracy.toFixed(2));
  //           let date = moment(position.coords.timestamp).format(
  //             'YYYY-MM-DD hh:mm:ss',
  //           );
  //           setDate(date);
  //         },
  //         error => {
  //           console.log('Geolocation error:', error.message);
  //         },
  //         {
  //           timeout: 15000,
  //           maximumAge: 10000,
  //           enableHighAccuracy: true,
  //           distanceFilter: 1,
  //           interval: 1000,
  //           forceRequestLocation: true,
  //         },
  //       );
  //     }
  //     return null;
  //   } else if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       );

  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         const watchId = Geolocation.watchPosition(
  //           position => {
  //             // console.log('Geolocation new position:', position);
  //             setLongitude(position.coords.longitude);
  //             setLatitude(position.coords.latitude);
  //             setAccurancy(position.coords.accuracy.toFixed(2));
  //             let date = moment(position.coords.timestamp).format(
  //               'YYYY-MM-DD hh:mm:ss',
  //             );
  //             setDate(date);
  //           },
  //           error => {
  //             console.log('Geolocation error:', error.message);
  //           },
  //           {
  //             timeout: 15000,
  //             maximumAge: 10000,
  //             enableHighAccuracy: true,
  //             distanceFilter: 1,
  //             interval: 1000,
  //             forceRequestLocation: true,
  //           },
  //         );
  //       } else {
  //         requestLocationPermission();
  //       }
  //     } catch (err) {
  //       console.warn(err.message);
  //       return false;
  //     }
  //   }
  // };

  // useEffect(() => {
  //   // Get the user's location when the component mounts
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const {latitude, longitude} = position.coords;
  //       setLatitude(latitude);
  //       setLongitude(longitude);
  //     },
  //     // error => console.log('Error getting location:', error),
  //     // {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //   );

  // }, []);

  // function isPointInPolygon(point, polygon) {
  //   const x = point.latitude;
  //   const y = point.longitude;

  //   let isInside = false;
  //   for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
  //     const xi = polygon[i].latitude;
  //     const yi = polygon[i].longitude;
  //     const xj = polygon[j].latitude;
  //     const yj = polygon[j].longitude;

  //     const intersect =
  //       yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
  //     if (intersect) {
  //       isInside = !isInside;
  //     }
  //   }

  //   return isInside;
  // }

  // Geolocation.getCurrentPosition(
  //   position => {
  //     const userLocation = {
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude,
  //     };

  //     const isInsidePolygon = isPointInPolygon(userLocation, polygon);

  //     if (isInsidePolygon) {
  //       // User is inside the polygon
  //       console.log('User is inside the polygon.');
  //     } else {
  //       // User is outside the polygon
  //       console.log('User is outside the polygon.');
  //     }
  //   },
  //   error => console.error(error),
  //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  // );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{height: 120, backgroundColor: 'rgba(255, 255, 255, 0.7)'}}
      />
      <YaMap
        showUserPosition
        initialRegion={{
          lat: 55.751244,
          lon: 37.399002,
          zoom: 10,
          azimuth: 0,
          tilt: 100,
        }}
        style={{flex: 1}}>
        <Marker point={{lat: 40.177623, lon: 44.51252}}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../assets/images/position.png')}
          />
        </Marker>
        <Polygon
          fillColor="blue"
          strokeColor="blue"
          zIndex={1}
          points={[
            {lat: 55.751244, lon: 37.618423},
            {lat: 55.751244, lon: 37.62322},
            {lat: 55.753786, lon: 37.62322},
            {lat: 55.753786, lon: 37.618423},
          ]}
        />
        <Polygon
          fillColor="red"
          strokeColor="blue"
          zIndex={1}
          points={[
            {lat: 55.869284, lon: 37.419681},
            {lat: 55.869284, lon: 37.729313},
            {lat: 55.639599, lon: 37.801339},
            {lat: 55.639599, lon: 37.481657},
          ]}
        />
        <Polygon
          fillColor="red"
          strokeColor="blue"
          zIndex={1}
          points={[
            {lat: 43.387325, lon: 39.993945},
            {lat: 43.387325, lon: 39.884185},
            {lat: 43.789678, lon: 40.297319},
            {lat: 43.789678, lon: 40.677695},
          ]}
        />
        <Polygon
          fillColor="rgba(0, 0, 255, 0.3)" // Fill color
          strokeColor="blue" // Stroke color
          strokeWidth={2} // Stroke width
          zIndex={1}
          points={[
            {lat: 43.494379, lon: 39.884074},
            {lat: 43.494379, lon: 39.734808},
            {lat: 43.917742, lon: 39.980627},
            {lat: 43.917742, lon: 40.242926},
          ]}
        />
        <Polygon
          fillColor="rgba(0, 0, 255, 0.3)" // Fill color
          strokeColor="blue" // Stroke color
          strokeWidth={2} // Stroke width
          zIndex={1}
          points={[
            {lat: 43.570171, lon: 39.729683},
            {lat: 43.570171, lon: 39.660053},
            {lat: 43.723558, lon: 39.724282},
            {lat: 43.723558, lon: 39.77704},
          ]}
        />
        {/*43.723558, 39.724282*/}
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
