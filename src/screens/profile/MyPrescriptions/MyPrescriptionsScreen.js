import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {NoNotificationsIcon} from '../../../assets/svgs/NotificationScreenSvgs';
import {
  ArrowRightWhite,
  EmptyDestinations,
} from '../../../assets/svgs/ProfileScreenSvgs';
import Header from './Header';
import InProgressDropDown from './InProgressDropDown';
import Meal from './Meal';
import Prescription from './Prescription';
import {data} from './PrescriptionsData';
import {useSelector, useDispatch} from 'react-redux';
import {
  getDestinationData,
  getUserDestinationData,
} from '../../../store/actions/actionsDestination';
import {useEffect} from 'react';
import PrescriptionData from './PrescriptionData';

export default function MyPrescriptionsScreen({navigation}) {
  const [scheme, setScheme] = useState(true);

  const noData = false;
  const dispatch = useDispatch();
  const {
    destinationData,
    selectedDay,
    userDestinationData,
    deleteDestinationData,
  } = useSelector(state => state.destinationReducer);
  useEffect(() => {
    dispatch(getDestinationData());
    dispatch(getUserDestinationData());
  }, []);

  console.log(userDestinationData, 'lk');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')}
      />
      <Header scheme={scheme} setScheme={setScheme} />
      {scheme && destinationData?.data?.length == 0 ? (
        <View style={styles.noNotifications}>
          <NoNotificationsIcon />
          <Text style={styles.noNotificationsText}>Нет назначений</Text>
        </View>
      ) : (
        ''
      )}
      {!scheme && userDestinationData?.data?.length == 0 ? (
        <View style={styles.noNotifications}>
          <NoNotificationsIcon />
          <Text style={styles.noNotificationsText}>Нет назначений</Text>
        </View>
      ) : (
        ''
      )}

      {destinationData?.data?.length > 0 ||
        (userDestinationData?.data?.length > 0 && (
          <ScrollView
            style={{paddingHorizontal: 20, marginTop: 20}}
            showsVerticalScrollIndicator={false}>
            {scheme &&
              destinationData?.data?.map((item, i) => {
                return (
                  scheme &&
                  item.PLANE_DATE?.slice(0, 10) == selectedDay.dateString && (
                    <Meal
                      meal={item.time}
                      data={item}
                      prescriptions={item.MEDICAMENT}
                      key={i}
                      navigation={navigation}
                    />
                  )
                );
              })}
            {!scheme &&
              userDestinationData?.data?.map((prescription, index) => (
                <PrescriptionData
                  medicine={prescription.MEDICAMENT}
                  id={prescription.id}
                  dose={prescription.DOSE}
                  mandatory={true}
                  key={index}
                  padding={15}
                  navigation={navigation}
                />
              ))}
          </ScrollView>
        ))}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddPrescriptionScreen')}>
        <Text style={styles.addText}>Добавить назначение</Text>
        <ArrowRightWhite />
      </TouchableOpacity>
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
  container: {
    flex: 1,
    paddingTop: 120,
  },
  addButton: {
    position: 'absolute',
    height: 35,
    backgroundColor: '#9DC458',
    flexDirection: 'row',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    bottom: 40,
    right: 20,
  },
  addText: {
    color: 'white',
    fontWeight: '600',
  },
  noNotifications: {
    position: 'absolute',
    top: 250,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    zIndex: -1,
  },
  noNotificationsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4F4F4F',
    textAlign: 'center',
  },
});
