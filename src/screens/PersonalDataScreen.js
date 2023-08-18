import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ArrowDown, RedDocument} from '../assets/svgs/BasketSvgs';
import {EditIcon} from '../assets/svgs/DoctorsScreenSvgs';
import Button from '../components/Button';

export default function PersonalDataScreen({navigation, route}) {
  const {hide, atHome} = route.params ?? false;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../assets/background.png')}
      />
      <ScrollView style={{marginBottom: 70}}>
        <Text style={styles.text}>На какой документ подготовить анализ</Text>
        <TouchableOpacity style={styles.selectContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RedDocument />
            <Text style={styles.selectText}>Паспорт РФ</Text>
          </View>
          <ArrowDown />
        </TouchableOpacity>
        <Text style={styles.check}>Проверьте личные данные </Text>
        <View style={styles.dataContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Инванов Иван Иванович</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.replace('EditPersonalData', {
                  hide: hide,
                  atHome: atHome,
                })
              }>
              <EditIcon />
            </TouchableOpacity>
          </View>
          <Text style={styles.dataField}>15.05.1988</Text>
          <Text style={styles.dataField}>7785551955</Text>
          <Text style={styles.dataField}>Здесь написан адрес прописки</Text>
          <Text style={styles.dataField}>Здесь написан физический адрес</Text>
          <Text style={styles.dataField}>+7 (900)-000-00-00</Text>
          <Text style={styles.dataField}>user@mail.ru</Text>
          <Text style={styles.dataField}>
            61 15 88 88 88 выдан 18.08.20 отделение УФМС
          </Text>
        </View>
        <Text style={{color: '#1C1C1E', marginTop: 10}}>
          Если данные изменились,{' '}
          <Text style={{color: '#2A7BF4'}}>напишите нам</Text>
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          text={'Далее'}
          isDisabled={false}
          color={'white'}
          backgroundColor={'#9DC458'}
          marginBottom={20}
          onPress={() => {
            atHome
              ? navigation.navigate('CallDoctor', {hide: hide})
              : navigation.navigate('OrderScreen', {hide: hide});
          }}
        />
      </View>
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
    paddingBottom: 90,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  smallText: {
    fontSize: 12,
    color: 'black',
  },
  selectText: {
    fontSize: 16,
    color: 'black',
  },
  selectContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },
  dataContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  dataField: {
    fontWeight: '500',
    color: '#72777A',
    marginTop: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    marginHorizontal: 20,
  },
  check: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
  },
});
