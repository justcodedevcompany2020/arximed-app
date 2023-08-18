import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SearchIcon} from '../../assets/svgs/HomeScreenSvgs';

export default function SearchButton({navigation}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('SearchScreen');
      }}>
      <SearchIcon />
      <Text style={styles.search}>Поиск</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    height: 45,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  search: {
    fontSize: 16,
    color: '#8E8E93',
    fontWeight: '600',
  },
});
