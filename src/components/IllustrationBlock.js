import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function IllustrationBlock({height}) {
  return (
    <View style={[styles.illustrationBlock, height && {height: height}]}>
      <Text style={styles.illustrationBlock_text}>Иллюстрация</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  illustrationBlock: {
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    borderRadius: 20,
    width: '100%',
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  illustrationBlock_text: {
    color: '#B6B2B2',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
  },
});
