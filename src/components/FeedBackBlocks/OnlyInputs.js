import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';

export default function OnlyInputs({
  image,
  placeholderName,
  height,
  widthIcon,
  heightIcon,
}) {
  return (
    <View style={[styles.input, {height: height}]}>
      <Image style={{width: widthIcon, height: heightIcon}} source={image} />
      <TextInput
        style={{
          padding: 10,
          marginLeft: 10,
          alignSelf: 'flex-start',
          width: '100%',
          height: '100%',
        }}
        placeholder={placeholderName}
        placeholderTextColor={'#000000'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingVertical: 0,
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    marginTop: 10,
    width: '100%',
  },
});
