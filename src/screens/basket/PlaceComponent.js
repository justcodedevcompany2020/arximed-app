import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {Selected} from '../../assets/svgs/BasketSvgs';
import {CurrencyRub, PushPin} from '../../assets/svgs/DoctorsScreenSvgs';

export default function PlaceComponent({
  Svg,
  place,
  address,
  price,
  isSelected,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected && {borderWidth: 2, borderColor: '#9DC458'},
      ]}
      onPress={onPress}>
      <Svg />
      <Text style={styles.place}>{place}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
        <PushPin />
        <Text style={styles.address}>{address}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Text style={styles.price}>{price}</Text>
        <CurrencyRub />
      </View>
      {isSelected && (
        <View style={styles.selected}>
          <Selected />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    width: '47%',
    borderRadius: 20,
  },
  place: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  address: {
    fontSize: 10,
    fontWeight: '500',
    color: '#72777A',
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    color: 'black',
  },
  selected: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
