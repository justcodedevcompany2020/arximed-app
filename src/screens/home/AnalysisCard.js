import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {PieChart} from 'react-native-gifted-charts';
import {
  CalendarIcon,
  ResearchIcon,
  TimeIcon,
  ZeroPercent,
} from '../../assets/svgs/HomeScreenSvgs';

export default function AnalysisCard({
  percent,
  Svg,
  name,
  doctorName,
  date,
  norm,
  num,
  onPress,
}) {
  // const pieData = [
  //   {value: percent, color: '#9DC458'},
  //   {value: 100 - percent, color: 'white'},
  // ];
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (onPress ? onPress() : null)}>
      <Svg />
      {/* <PieChart
        donut
        innerRadius={25}
        innerCircleBorderColor={'#C2C1C1'}
        innerCircleBorderWidth={1}
        strokeWidth={1}
        strokeColor={'#C2C1C1'}
        radius={30}
        data={pieData}
        centerLabelComponent={() => {
          return percent === 100 ? (
            // <CheckMark />
            <Text>kjhgf</Text>
          ) : (
            <Text style={{fontSize: 16}}>{percent}%</Text>
          );
        }}
      /> */}
      <View style={{width: '75%', marginLeft: 15}}>
        <Text style={styles.name}>{name}</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <TimeIcon />
          <Text style={styles.norm}>{norm}</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Text style={styles.doctor}>{doctorName}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <CalendarIcon />
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <ResearchIcon />
          <Text style={styles.isledovaniy}>{num}/8 исследований</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
  },
  norm: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '500',
    color: '#72777A',
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  date: {
    fontSize: 10,
    fontWeight: '400',
    color: '#72777A',
    marginLeft: 5,
  },
  isledovaniy: {
    fontSize: 12,
    color: '#72777A',
    marginLeft: 5,
  },
  doctor: {
    fontSize: 10,
    fontWeight: '500',
    color: '#949599',
  },
});
