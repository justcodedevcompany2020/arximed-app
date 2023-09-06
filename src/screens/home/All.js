import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function All({text, isSelected, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSelected
          ? {backgroundColor: '#FF414C'}
          : {borderWidth: 1, borderColor: '#7B9E45'},
      ]}>
      <Text
        style={[
          styles.buttonText,
          isSelected ? {color: 'white'} : {color: '#7B9E45'},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 37,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonText: {
    paddingHorizontal: 15,
  },
});
