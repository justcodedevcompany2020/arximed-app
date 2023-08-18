import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Lottie from 'lottie-react-native';

export default function HorizontalActionCard({title, text, path, navigate}) {
  const animationRef = useRef(null);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        animationRef.current?.play(0, 85);
        setTimeout(() => {
          navigate ? navigate() : null;
        }, 900);
      }}>
      <Lottie
        ref={animationRef}
        source={path}
        style={{height: 120}}
        loop={false}
        speed={1.7}
      />
      <View style={{flexShrink: 1, marginRight: 10}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.quantity}>
        <Text style={{color: '#FF414C'}}>11</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    height: 120,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  title: {
    position: 'relative',
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
  text: {
    marginTop: 5,
    position: 'relative',
    fontSize: 10,
    color: '#72777A',
    fontWeight: '500',
  },
  quantity: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#f5e5e5',
    borderRadius: 15,
    height: 24,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityNumber: {},
});
