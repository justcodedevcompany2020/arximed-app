import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {RedHouse, RedPushPin} from '../../assets/svgs/BasketSvgs';
import Button from '../../components/Button';
import Blurview from '../../components/Blur';
import Popup from '../../components/Popup';

export default function Address({navigation, hide}) {
  const [address, setAddress] = useState('');
  const [entrance, setEntrance] = useState('');
  const [intercom, setIntercom] = useState('');
  const [apartment, setApartment] = useState('');
  const [floor, setFloor] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  function onPressSave() {
    if (!address || !entrance || !intercom || !apartment || !floor) {
      setShowPopup(true);
      return;
    }
    navigation.navigate('CallDoctor', {
      hide: hide,
      addressData: {
        address: address,
        entrance: entrance,
        apartment: apartment,
        intercom: intercom,
        floor: floor,
      },
    });
  }
  return (
    <View style={styles.orderPriceContainer}>
      <Text style={styles.addressText}>Адрес</Text>
      <View style={styles.enterTheAddress}>
        <RedPushPin />
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder={'Введите адрес для вызова врача'}
          placeholderTextColor={'#979797'}
        />
      </View>
      <View style={styles.fieldsContainer}>
        <View style={styles.addressField}>
          <RedHouse />
          <TextInput
            style={styles.input}
            value={entrance}
            onChangeText={setEntrance}
            placeholder="Подъезд"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.addressField}>
          <RedHouse />
          <TextInput
            style={styles.input}
            value={intercom}
            onChangeText={setIntercom}
            placeholder="Домофон"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.fieldsContainer}>
        <View style={styles.addressField}>
          <RedHouse />
          <TextInput
            style={styles.input}
            value={apartment}
            onChangeText={setApartment}
            placeholder="Квартира"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.addressField}>
          <RedHouse />
          <TextInput
            style={styles.input}
            value={floor}
            onChangeText={setFloor}
            placeholder="Этаж"
            keyboardType="numeric"
          />
        </View>
      </View>
      <Button
        text={'Сохранить'}
        isDisabled={false}
        color={'white'}
        backgroundColor={'#9DC458'}
        marginBottom={20}
        onPress={onPressSave}
      />
      <Popup
        isVisible={showPopup}
        setIsVisible={setShowPopup}
        nummberOfButtons={1}
        modalTitle={'Данные пункты являются обязательными для заполнения'}
        modalText={
          'Введите адрес, чтобы мы смогли отправить врача по вашему вызову'
        }
        buttonText={'Хорошо '}
        onPressBtn={() => setShowPopup(false)}
        buttonTextColor={'#007AFF'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  orderPriceContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 30,
    paddingBottom: 70,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  addressField: {
    width: '45%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 15,
    borderRadius: 15,
  },
  addressText: {
    fontSize: 24,
    color: '#1C1C1E',
    marginBottom: 15,
  },
  enterTheAddress: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  fieldsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  input: {
    marginLeft: 5,
    width: '90%',
    color: '#979797',
  },
});
