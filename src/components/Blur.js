import React from 'react';
import {StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';

export default function Blurview() {
  return <BlurView style={styles.blurView} blurType="dark" blurAmount={5} />;
}

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
