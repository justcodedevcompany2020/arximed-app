import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {RedTimeIcon} from '../../assets/svgs/HomeScreenSvgs';
import {
  HorizontalGreenLine,
  HorizontalGreyLine,
} from '../../assets/svgs/NotificationScreenSvgs';

export default function Notification({first, title, time, text}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: first ? '#F2FBE2' : 'white'},
      ]}>
      <View style={{width: 310}}>
        <View style={styles.titleRow}>
          <Text style={[styles.title, {color: first ? '#7B9E45' : '#1C1C1E'}]}>
            {title}
          </Text>
          <View style={styles.timeContainer}>
            <RedTimeIcon />
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
        {first ? <HorizontalGreenLine /> : <HorizontalGreyLine />}
        <Text style={styles.text}>{text} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    marginLeft: 5,
    fontWeight: '500',
    fontSize: 12,
    color: '#4F4F4F',
  },
  text: {
    fontSize: 12,
    color: '#4F4F4F',
    marginTop: 10,
  },
});
