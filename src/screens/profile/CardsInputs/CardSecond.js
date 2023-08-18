import {
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import React, {useState} from 'react';

export default function CardSecond({onPress}) {
  return (
    <View style={styles.whiteButton}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 25, height: 25}}
          source={require('../../../assets/images/profile/card_user.png')}
        />
        <View style={{marginLeft: 15}}>
          <Text style={styles.cardText}>************4545</Text>
          <Text style={styles.cardSecondText}>Сделать основной</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M16 1.4L14.6 0L8 6.6L1.4 0L0 1.4L6.6 8L0 14.6L1.4 16L8 9.4L14.6 16L16 14.6L9.4 8L16 1.4Z"
            fill="#D9D9D9"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteButton: {
    marginTop: 15,
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
  },
  cardText: {
    fontSize: 14,
    color: '#1C1C1E',
    fontWeight: '400',
  },
  cardSecondText: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '400',
    color: '#2A7BF4',
  },
});
