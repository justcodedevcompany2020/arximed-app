import React from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {RedCalendar} from '../../../assets/svgs/HomeScreenSvgs';
import {PlaceIcon} from '../../../assets/svgs/DoctorsScreenSvgs';
import SearchButton from '../../home/SearchButton';
import Calendar from './Calendar';
import Reception from './Reception';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

export default function MakeAnAppointment({navigation}) {
  const dispatch = useDispatch();
  const {doctorTimeData, doctorsSinglePageData, doctorTimeLoading} =
    useSelector(state => state.justDriveReducer);

  useEffect(() => {
    console.log(doctorTimeData, 'doctorTimeData');
  }, []);

  return (
    <SafeAreaView style={{flex: 1, paddingBottom: 100}}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')}
      />
      <Calendar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        {doctorTimeData.data?.length && !doctorTimeLoading ? (
          <View style={styles.doctorInfoContainer}>
            <Image
              resizeMode="contain"
              style={{width: 60, height: 60, borderRadius: 20}}
              source={{
                uri:
                `data:image/png;base64,` +
                  doctorsSinglePageData.data[0].photo,
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.doctorName}>
                {' '}
                {doctorsSinglePageData?.data[0]?.Fam_doctor}{' '}
                {doctorsSinglePageData?.data[0]?.om_doctor}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RedCalendar />
                <Text style={styles.aboutDoctor}>
                  {
                    doctorsSinglePageData?.data[0]?.doctor_service[0]
                      ?.specialisation_name
                  }
                </Text>
              </View>
            </View>
          </View>
        ) : (
          ''
        )}

        {doctorTimeLoading ? (
          <ActivityIndicator
            size={'large'}
            color={'#d3d3d3'}
            style={{marginTop: 20}}
          />
        ) : null}
        {!doctorTimeLoading &&
          (doctorTimeData.data?.length ? (
            <Reception navigation={navigation} netZapisi />
          ) : (
            doctorTimeLoading == false && (
              <Text style={{marginTop: 30, textAlign: 'center'}}>
                Свободных слотов нету
              </Text>
            )
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  openPopupText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#8E8E93',
    width: '90%',
    marginLeft: 5,
  },
  doctorInfoContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
  },
  doctorName: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
    marginVertical: 5,
  },
  aboutDoctor: {
    fontSize: 10,
    fontWeight: '500',
    color: '#828282',
    marginLeft: 5,
  },
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
