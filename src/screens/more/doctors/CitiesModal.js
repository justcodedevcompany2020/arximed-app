import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import {TouchableOpacity, View, Text, Modal, StyleSheet} from 'react-native';
import {BackIcon} from '../../../assets/svgs/HomeScreenSvgs';
import {DoneIcon, PlaceIcon} from '../../../assets/svgs/DoctorsScreenSvgs';
import {useSelector} from 'react-redux';

let data = [
  {id: 1, name: 'Москва'},
  {id: 2, name: 'Санкт-Петербург'},
  {id: 3, name: 'Красноярск'},
  {id: 4, name: 'Сочи'},
  {id: 5, name: 'Волгоград'},
];

export default function CitiesModal({
  modalVisible,
  setModalVisible,
  selectedCity,
  setSelectedCity,
}) {
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
          {data.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.cityContainer}
                onPress={() => {
                  setSelectedCity(item.name);
                  setModalVisible(false);
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {item.name === selectedCity && <PlaceIcon />}
                  <Text
                    style={[
                      styles.cityName,
                      item.name === selectedCity && {marginLeft: 5},
                    ]}>
                    {item.name}
                  </Text>
                </View>
                {item.name === selectedCity && <DoneIcon />}
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
