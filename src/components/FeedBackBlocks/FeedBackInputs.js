import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function FeedBackInputs({
  text,
  image,
  placeholderName,
  widthIcon,
  heightIcon,
  value,
  onChangeText,
}) {
  return (
    <View style={styles.inputDiv}>
      <Text style={[styles.text, { color: '#000000' }]}>
        {text}
        <Text style={[styles.text, { color: 'red' }]}> *</Text>
      </Text>
      <View style={[styles.input, { height: 50 }]}>
        <Image style={{ width: widthIcon, height: heightIcon }} source={image} />
        <TextInput
          style={{
            padding: 10,
            marginLeft: 10,
            alignSelf: 'flex-start',
            width: '100%',
            height: '100%',
            color: '#7B9E45',
          }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholderName}
          placeholderTextColor={'#7B9E45'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputDiv: {
    // width: '100%',
    marginTop: 25,
  },
  text: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 10,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    backgroundColor: 'rgba(157, 196, 88, 0.1)',
    borderRadius: 15,
    marginTop: 10,
    // borderWidth: 1
  },
});
