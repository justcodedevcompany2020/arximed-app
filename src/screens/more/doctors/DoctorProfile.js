import React, {useEffect} from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {RedCalendar} from '../../../assets/svgs/HomeScreenSvgs';
import Consultations from './Consultations';
import RateCard from './RateCard';
import Button from '../../../components/Button';
import {useSelector, useDispatch} from 'react-redux';

export default function DoctorProfile({navigation, route}) {
  const dispatch = useDispatch();
  const {doctorsSinglePageData, getAllReceptionData, doctorCommentData} =
    useSelector(state => state.justDriveReducer);

  

  return (
    <SafeAreaView style={{flex: 1, width: '100%'}}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')}>
        {doctorsSinglePageData?.data ? (
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            {doctorsSinglePageData?.data ? (
              <Image
                resizeMode="contain"
                style={{width: '100%', height: 353, borderRadius: 20}}
                source={{
                  uri:
                    `data:image/png;base64,` +
                    doctorsSinglePageData.data[0].photo,
                }}
              />
            ) : (
              ''
            )}

            {/* <View style={styles.experienceContainer}>
              <RedCalendar />
              <Text style={styles.experience}>Опыт работы 5 лет</Text>
            </View> */}
            <Text style={styles.doctor}>
              {
                doctorsSinglePageData?.data[0]?.doctor_service[0]
                  ?.specialisation_name
              }
            </Text>
            <Consultations
              data={doctorsSinglePageData?.data[0]?.doctor_service}
              navigation={navigation}
            />
            {/* <WorkSchedule /> */}
            {/* <Text style={styles.otherInfo}>
              Другая информация о враче Другая информация о враче Другая
              информация о враче
            </Text> */}
            <RateCard />
            <Button
              text={'Записаться к специалисту'}
              color={'white'}
              backgroundColor={'#9DC458'}
              marginBottom={20}
              onPress={() => navigation.navigate('MakeAnAppointment')}
            />
          </ScrollView>
        ) : (
          ''
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  experience: {
    fontSize: 10,
    fontWeight: '600',
    color: 'black',
    marginLeft: 5,
  },
  doctor: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    textTransform: 'capitalize',
  },
  otherInfo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#72777A',
    marginTop: 15,
    lineHeight: 24,
  },
  experienceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  fixed: {
    flex: 1,
    justifyContent: 'center',
  },
});
