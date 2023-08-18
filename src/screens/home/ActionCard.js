import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Lottie from 'lottie-react-native';

export default function ActionCard({
  text,
  backgroundColor,
  path,
  navigate,
  seconds,
}) {
  const animationRef = useRef(null);
  return (
    <TouchableOpacity
      style={[
        styles.button,
        backgroundColor && {backgroundColor: backgroundColor},
      ]}
      onPress={() => {
        animationRef.current?.play(0, 110);
        setTimeout(() => {
          navigate ? navigate() : null;
        }, seconds);
      }}>
      <Lottie
        ref={animationRef}
        source={path}
        style={{height: 120}}
        speed={1.9}
        loop={false}
      />
      <Text style={styles.title}>{text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    height: 170,
    width: 130,
    borderRadius: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 13,
    color: 'black',
    fontWeight: '600',
    width: 90,
    position: 'absolute',
    bottom: 15,
  },
});
