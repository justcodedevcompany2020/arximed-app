import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RedTimeIcon} from '../../../assets/svgs/HomeScreenSvgs';

export default function WorkSchedule() {
  return (
    <View>
      <Text style={styles.workSchedule}>Расписание работы</Text>
      <View style={styles.workScheduleContainer}>
        <View style={styles.weekDay}>
          <Text style={styles.weekDayText}>Понедельник</Text>
          <View style={styles.weekDay}>
            <RedTimeIcon />
            <Text style={styles.workingHours}>с 11:00 до 18:00</Text>
          </View>
        </View>
        <View style={[styles.weekDay, {marginTop: 10}]}>
          <Text style={styles.weekDayText}>Вторник</Text>
          <View style={styles.weekDay}>
            <RedTimeIcon />
            <Text style={styles.workingHours}>с 11:00 до 18:00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  workSchedule: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginTop: 15,
  },
  workScheduleContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
  },
  weekDay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weekDayText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  workingHours: {
    fontSize: 12,
    color: 'black',
    marginLeft: 5,
  },
});
