import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Modal, View, Pressable, Text} from 'react-native';
import {QR_code_big} from '../assets/svgs/HomeScreenSvgs';
import Blurview from './Blur';

export default function QRPopup({QRCode, isVisible, setIsVisible}) {
  return (
    <Modal transparent={true} visible={isVisible}>
      <Pressable style={styles.background} onPress={() => setIsVisible(false)}>
        <Blurview />
        <View style={styles.popupContainer}>
          <QR_code_big />
          <Text style={styles.text}>
            Покажите этот код сотруднику регистратуры{' '}
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setIsVisible(false)}>
            <Text style={styles.btnText}>Закрыть</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
    flex: 1,
    zIndex: -1,
  },
  popupContainer: {
    backgroundColor: 'white',
    width: 280,
    padding: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '40%',
  },
  btn: {
    backgroundColor: '#9DC458',
    height: 35,
    width: 130,
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 30,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    marginTop: 15,
  },
});
