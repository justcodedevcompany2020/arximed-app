import React from 'react';
import {TouchableOpacity, StyleSheet, Image, View, Text} from 'react-native';

export default function NameComplex({onPress, text, coin}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.block}>
        <Image
          style={{width: 24, height: 24}}
          source={require('../../../assets/images/health1.png')}
        />
        <Text style={styles.blockText}>{text}</Text>
      </View>
      {/* <Text style={[styles.coinText, {color: '#000000'}]}>
        {coin}
        <Text style={[styles.coinText, {color: '#7B9E45'}]}> ₽</Text>
      </Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 17,
    borderRadius: 8,
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockText: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 10,
  },
  coinText: {
    fontSize: 16,
    fontWeight: '400',
  },
});
