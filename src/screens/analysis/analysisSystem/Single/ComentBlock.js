import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ComentBlock({header, description}) {
  return (
    <View style={styles.comentDiv}>
      <Text style={styles.comentDivHeader}>{header}</Text>
      <Text style={{color: 'black'}}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  comentDiv: {
    marginTop: 15,
    backgroundColor: 'transparent',
    opacity: 0.8,

    borderRadius: 15,
  },
  comentDivHeader: {
    color: '#1C1C1E',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700',
    marginBottom: 15,
  },
  comentDivText: {
    color: '#1C1C1E',
    fontSize: 15,
    lineHeight: 25,
    fontWeight: '400',
    marginTop: 10,
  },
});
