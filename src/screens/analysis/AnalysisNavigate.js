import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function AnalysisNavigate({
  text,
  image,
  onPress,
  width,
  height,
}) {
  return (
    <TouchableOpacity style={styles.block} onPress={onPress}>
      <Image
        style={{width: width, height: height, marginLeft: 15}}
        source={image}
      />
      <Text style={styles.blockText}>{text}</Text>
      <View style={{marginRight: 5}}>
        <Svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M1.5 11L5.5 6.26316L1.5 1"
            stroke="#9DC458"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  block: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 2,
  },
  blockText: {
    fontWeight: '400',
    fontSize: 14,
    flexShrink: 1,
    color: '#1C1C1E',
    marginLeft: 12,
    marginRight: 10,
    textTransform: 'capitalize',
  },
});
