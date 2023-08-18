import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ArrowIcon} from '../../assets/svgs/HomeScreenSvgs';

export default function TitleArrow({text, hideArrow, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
      {!hideArrow && <ArrowIcon />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    textAlignVertical: 'center',
    marginRight: 4,
  },
});
