import React, {useState} from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ArrowDown, Gender} from '../../assets/svgs/BasketSvgs';

export default function GenderDropDown({
  Svg,
  selectedItem,
  setSelectedItem,
  backgroundColor,
}) {
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          openDropDown
            ? {
                marginBottom: 0,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }
            : {borderRadius: 15},
          !openDropDown && {marginBottom: 15},
          backgroundColor && {backgroundColor: backgroundColor},
        ]}
        onPress={() => setOpenDropDown(!openDropDown)}>
        <View style={styles.inputContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Svg />
            <Text style={styles.genderText}>
              {selectedItem === '' ? 'Пол' : selectedItem}
            </Text>
          </View>
          <View
            style={{transform: [{rotate: openDropDown ? '180deg' : '0deg'}]}}>
            <ArrowDown />
          </View>
        </View>
      </TouchableOpacity>

      {openDropDown && (
        <View style={styles.dropDownContainer}>
          <TouchableOpacity
            style={[
              styles.dropDownItemContainer,
              backgroundColor
                ? {backgroundColor: '#F7F7F7'}
                : {backgroundColor: 'white'},
            ]}
            onPress={() => {
              setSelectedItem('Женский');
              setOpenDropDown(false);
            }}>
            <Gender />
            <Text style={styles.genderText}>Женский</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.dropDownItemContainer,
              backgroundColor
                ? {backgroundColor: '#F7F7F7'}
                : {backgroundColor: 'white'},
              {
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              },
            ]}
            onPress={() => {
              setSelectedItem('Мужской');
              setOpenDropDown(false);
            }}>
            <Gender />
            <Text style={styles.genderText}>Мужской</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  genderText: {
    marginLeft: 10,
    color: '#000000',
  },
  dropDownContainer: {
    marginBottom: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  dropDownItemContainer: {
    position: 'relative',
    top: 0,
    width: '100%',
    height: 50,
    zIndex: 999,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  container: {
    paddingLeft: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  input: {
    marginLeft: 5,
    width: '90%',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
});
