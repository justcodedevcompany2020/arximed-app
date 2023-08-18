import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ChronometerIcon,
  NotificationIcon1,
} from '../../assets/svgs/HomeScreenSvgs';

export default function HomeNotification() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.flexDirctn, {justifyContent: 'space-between'}]}>
        <View style={styles.flexDirctn}>
          <NotificationIcon1 />
          <Text style={styles.title}>Онлайн-консультация </Text>
        </View>
        <View style={styles.flexDirctn}>
          <ChronometerIcon />
          <Text style={styles.time}>10:28</Text>
        </View>
      </View>
      <Text style={styles.text}>
        Онлайн консультация, запланированная на 20.07.2022
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    textAlignVertical: 'center',
    color: 'black',
    marginLeft: 5,
  },
  time: {
    fontSize: 10,
    fontWeight: '600',
    color: '#72777A',
  },
  flexDirctn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '500',
    color: '#72777A',
  },
});
