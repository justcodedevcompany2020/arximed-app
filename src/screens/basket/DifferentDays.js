import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {SelectedSecond, NotSelected} from '../../assets/svgs/BasketSvgs';

export default function DifferentDays({day, isSelected, onPress}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected && {borderWidth: 2, borderColor: '#9DC458'},
      ]}
      onPress={onPress}>
      {isSelected ? <SelectedSecond /> : <NotSelected />}
      <Text style={styles.day}>{day}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingVertical: 15,
    width: '47%',
    borderRadius: 20,
    flexDirection: 'row',
  },
  day: {
    fontSize: 14,
    color: '#1C1C1E',
    marginLeft: 10,
  },
  selected: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
