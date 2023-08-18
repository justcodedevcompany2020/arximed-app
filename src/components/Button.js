import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

export default function Button({
  text,
  Svg,
  isDisabled,
  color,
  backgroundColor,
  onPress,
  marginBottom,
  showTimer,
  mins,
  secs,
  isEnableSendCode,
  navigation,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isDisabled
          ? {backgroundColor: '#E5E0E0'}
          : backgroundColor && {backgroundColor: backgroundColor},
        marginBottom && {marginBottom: marginBottom},
      ]}
      onPress={!isDisabled ? onPress : null}>
      {Svg && <Svg />}
      <Text
        style={[
          styles.buttonText,
          isDisabled ? {color: '#72777A'} : color && {color: color},
          Svg && {marginLeft: 10},
        ]}>
        {text}
      </Text>
      {!isEnableSendCode && showTimer && (
        <Text style={{marginLeft: 5}}>
          {mins < 10 ? '0' + mins : mins} : {secs < 10 ? '0' + secs : secs}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 50,
    marginTop: 20,
    height: 54,
    borderRadius: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
