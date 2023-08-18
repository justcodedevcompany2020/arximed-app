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
import {CalendarIcon} from '../../../assets/svgs/HomeScreenSvgs';

export default function DataHeader({dataText}) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
      <CalendarIcon />
      <Text style={styles.dataText}>{dataText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dataText: {
    color: '#1C1C1C',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    marginLeft: 5,
  },
});
