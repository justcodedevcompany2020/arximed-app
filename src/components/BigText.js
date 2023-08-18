import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BigText = ({bigText, smallText, width}) => {
  return (
    <View>
      <Text style={styles.welcomeText}>{bigText}</Text>
      <Text style={[styles.secondText, width]}>{smallText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 35,
    marginLeft: 5,
    marginTop: 10,
  },
  secondText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    marginLeft: 5,
    marginTop: 15,
  },
});

export default BigText;
