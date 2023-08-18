import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  View,
} from 'react-native';
import Button from '../../../components/Button';
import React, {useEffect, useState} from 'react';
import {postRequestAuth} from '../../../api/RequestHelpers';
import Popup from '../../../components/Popup';
import Blurview from '../../../components/Blur';

export default function AddNewCity({navigation}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [city, setCity] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  async function onSendNewCity() {
    navigation.navigate('AddingCityDone');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%'}}>
          <Text style={styles.bigText}>
            Уведомить вас об открытии {'\n'} в вашем городе?
          </Text>
          <TextInput
            placeholder="Введите ваш город"
            placeholderTextColor={'#1C1C1E'}
            value={city}
            onChangeText={setCity}
            style={styles.input}
          />
        </View>
      </ScrollView>
      <Button
        text={'Отправить'}
        isDisabled={!city}
        color={'white'}
        backgroundColor={'#9DC458'}
        onPress={onSendNewCity}
      />
      {showPopup && <Blurview />}
      <Popup
        isVisible={showPopup}
        setIsVisible={setShowPopup}
        nummberOfButtons={1}
        modalTitle={'Вы  уже  добавили  предпочитанный  город'}
        modalText={''}
        buttonText={'Хорошо'}
        onPressBtn={() => {
          setShowPopup(false);
          navigation.navigate('CreateNewAccount');
        }}
        buttonTextColor={'#007AFF'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 90,
    paddingHorizontal: 30,
  },
  bigText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
    marginTop: 55,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#8E8E93',
    marginTop: 60,
    fontSize: 16,
  },
});
