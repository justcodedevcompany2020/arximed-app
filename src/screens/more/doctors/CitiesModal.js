import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import {TouchableOpacity, View, Text, Modal, StyleSheet} from 'react-native';
import {BackIcon} from '../../../assets/svgs/HomeScreenSvgs';
import {DoneIcon, PlaceIcon} from '../../../assets/svgs/DoctorsScreenSvgs';
import {useSelector, useDispatch} from 'react-redux';
import {getCityList, getDoctorsList} from '../../../store/actions/actions';

export default function CitiesModal({
  modalVisible,
  setModalVisible,
  selectedCity,
  setSelectedCity,
}) {
  const dispatch = useDispatch();
  const {
    registerPhoneNumber,
    registerConfirmData,
    cityListData,
    userAddCityData,
  } = useSelector(state => state.justDriveReducer);
  useEffect(() => {
    dispatch(getDoctorsList(1, '', false, ''));
    dispatch(getCityList());
  }, []);

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.modalContainer}>
        <BackIcon />
        <Text style={styles.textBack}>Назад </Text>
      </TouchableOpacity>
      <SafeAreaView style={{paddingHorizontal: 20}}>
        <Text style={styles.selectedCityText}>Город</Text>
        <ScrollView
          style={styles.citiesContainer}
          showsVerticalScrollIndicator={false}>
          {cityListData?.data?.city.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.cityContainer}
                onPress={() => {
                  setSelectedCity(item.ville);
                  setModalVisible(false);
                  dispatch(getDoctorsList(1, '', false, item.ville));
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {item.ville === selectedCity && <PlaceIcon />}
                  <Text
                    style={[
                      styles.cityName,
                      item.ville === selectedCity && {marginLeft: 5},
                    ]}>
                    {item.ville}
                  </Text>
                </View>
                {item.ville === selectedCity && <DoneIcon />}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  textBack: {
    fontSize: 16,
    lineHeight: 19,
    // color: '#1C1C1E',
    fontWeight: '400',
    marginLeft: 20,
  },
  selectedCityText: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    marginTop: 20,
  },
  citiesContainer: {
    marginTop: 10,
  },
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 15,
    alignItems: 'center',
  },
  cityName: {
    color: '#1C1C1E',
    fontSize: 16,
  },
});
