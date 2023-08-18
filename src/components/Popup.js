import React from 'react';
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Blurview from './Blur';

export default function Popup({
  isVisible,
  setIsVisible,
  modalTitle,
  modalText,
  nummberOfButtons,
  buttonText,
  leftButtonText,
  rightButtonText,
  thirdButtonText,
  buttonTextColor,
  onPressRightButton,
  onPressLeftButton,
  onPressThirdButton,
  onPressBtn,
  horizontal,
}) {
  return (
    <Modal transparent={true} visible={isVisible}>
      <Blurview />
      <Pressable style={styles.background} />
      <View style={styles.popupContainer}>
        <View style={styles.popupBody}>
          <Text style={styles.title}>{modalTitle}</Text>
          {modalText && <Text style={!horizontal ? styles.modalText : { color: '#1C1C1E', textAlign: 'center', marginTop: 10 }}>{modalText}</Text>}
        </View>
        {nummberOfButtons === 1 && <TouchableOpacity onPress={onPressBtn} style={styles.btn}>
          <Text style={[styles.btnText, { color: buttonTextColor ?? 'black' }]}>{buttonText}</Text>
        </TouchableOpacity>}
        {nummberOfButtons >= 2 && <View style={!horizontal && { flexDirection: 'row' }}>
          <TouchableOpacity onPress={onPressLeftButton} style={[styles.buttonsContainer, horizontal ? { width: '100%' } : { width: '50%' }]} >
            <Text style={[styles.btnText, { color: buttonTextColor ?? 'black' }]}>{leftButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressRightButton} style={[styles.buttonsContainer, horizontal ? { width: '100%' } : { width: '50%', borderLeftWidth: 1, borderLeftColor: '#bfbfbf' }]}>
            <Text style={[styles.btnText, { color: buttonTextColor ?? 'black' }]}>{rightButtonText}</Text>
          </TouchableOpacity>
          {nummberOfButtons === 3 && <TouchableOpacity onPress={onPressThirdButton} style={[styles.buttonsContainer, horizontal ? { width: '100%' } : { width: '50%', borderLeftWidth: 1, borderLeftColor: '#bfbfbf' }]}>
            <Text style={[styles.btnText, { color: buttonTextColor ?? 'black' }]}>{thirdButtonText}</Text>
          </TouchableOpacity>}
        </View>}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // zIndex: 9,
  },
  popupContainer: {
    backgroundColor: 'white',
    width: 280,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '55%',
    zIndex: 9999999999,
  },
  btn: {
    height: 40,
    borderTopWidth: 1,
    borderTopColor: '#bfbfbf',
    paddingVertical: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2C7DF2',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    textAlign: 'center',
    marginTop: 10,
  },
  modalText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  popupBody: {
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    height: 40,
    borderTopWidth: 1,
    borderTopColor: '#bfbfbf',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
