import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Switch,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import Doctor from './Doctor';
import {ArrowDown} from '../../../assets/svgs/DoctorsScreenSvgs';
import CitiesModal from './CitiesModal';
import {useDispatch, useSelector} from 'react-redux';
import {getDoctorsList} from '../../../store/actions/actions';

export default function OurDoctors({navigation}) {
  const [page, setPage] = useState(1);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    dispatch(getDoctorsList(1, '', modalVisible, cityName));
  };
  const [modalVisible, setModalVisible] = useState(false);

  console.log(cityName, 'kjl');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getDoctorsList(1, '', modalVisible, cityName ? cityName : 'Москва'),
    );
  }, []);
  const {
    registerPhoneNumber,
    registerConfirmData,
    doctorsList,
    loading,
    userInfo,
    cityName,
  } = useSelector(state => state.justDriveReducer);
  const [selectedCity, setSelectedCity] = useState(
    cityName ? cityName : 'Москва',
  );
  const [isLoading, setIsLoading] = useState(false);

  const renderItem = (value, index) => {
    return <Doctor key={index} navigation={navigation} data={value} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        source={require('../../../assets/background.png')}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.city}>{selectedCity}</Text>
        <ArrowDown />
      </TouchableOpacity>
      <CitiesModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <View style={styles.alphabeticalOrder}>
        <Text style={styles.alphabetical}>Показывать по алфавиту</Text>
        <Switch
          trackColor={{false: '#767577', true: '#FFFFFF'}}
          thumbColor={isEnabled ? '#9DC458' : '#f4f3f4'}
          // ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={doctorsList}
          renderItem={renderItem}
          // ListHeaderComponent={renderHeader}
          onEndReached={() => {
            setPage(page + 1);
            if (page !== 1) {
              dispatch(
                getDoctorsList(
                  page,
                  `https://archimed.justcode.am/api/doctors_list?page=${page}`,
                ),
              );
            }

            if (loading) {
              console.log(loading, 'jkhj');
            }
          }}
          refreshing={true}
          keyExtractor={(item, index) => index}
          style={{paddingHorizontal: 16}}
          scrollIndicatorInsets={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 110,
    paddingBottom: 90,
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
  alphabetical: {
    fontSize: 14,
    color: 'black',
  },
  alphabeticalOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 25,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  city: {
    fontSize: 16,
    color: 'black',
  },
});
