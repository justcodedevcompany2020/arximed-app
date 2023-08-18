import React from 'react';
import {} from 'react-native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function PromotionItem({date, title}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 169,
    backgroundColor: '#F2F2F7',
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  date: {
    color: '#1C1C1E',
  },
  title: {
    color: '#1C1C1E',
  },
});
