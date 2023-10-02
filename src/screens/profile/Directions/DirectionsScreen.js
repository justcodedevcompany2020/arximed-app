import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {NoNotificationsIcon} from '../../../assets/svgs/NotificationScreenSvgs';
import SearchButton from '../../home/SearchButton';
import DirectionBlock from './Block/DirectionBlock';
import {useSelector, useDispatch} from 'react-redux';
import {getDirectionData} from '../../../store/actions/actionsDestination';
import {useEffect} from 'react';

export default function DirectionScreen({navigation}) {
  const noData = false;
  const {directionData} = useSelector(state => state.destinationReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDirectionData());
  }, []);

  console.log(directionData.data?.data[0], 'luhjn');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/background.png')}
        resizeMode="cover"
        style={styles.fixed}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {directionData.data?.data.length == 0 ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <NoNotificationsIcon />
            <Text style={{fontWeight: '500', color: '#1C1C1E', marginTop: 10}}>
              {' '}
              Нет направлений
            </Text>
          </View>
        ) : (
          directionData.data?.data.map((value, index) => (
            <DirectionBlock
            value={value}
              actual={value.DATE_ACTUAL}
              name={value.NAME}
              fio={value.FIO_MED}
              navigation={navigation}
              key={index}
              marginBottom={index === 5 ? 40 : null}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 90,
    paddingHorizontal: 20,
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
  scrollView: {
    backgroundColor: 'transparent',
    width: '100%',
  },
});
