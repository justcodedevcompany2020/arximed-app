import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function PaymentsHeadBlock({
  navigation,
  image,
  color,
  text,
  width,
  height,
  margin,
  bottom,
}) {
  return (
    <TouchableOpacity style={[styles.block, {backgroundColor: color}]}>
      <Image
        style={{
          width: width,
          height: height,
          marginTop: margin,
          marginBottom: bottom,
        }}
        source={image}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  block: {
    width: 130,
    height: 170,
    padding: 10,
    borderRadius: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 14,
    color: '#1C1C1E',
    lineHeight: 17,
    fontWeight: '600',
    height: 34,
  },
});
