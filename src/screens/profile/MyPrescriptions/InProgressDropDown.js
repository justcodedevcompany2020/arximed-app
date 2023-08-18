import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {ArrowDownRed} from '../../../assets/svgs/ProfileScreenSvgs';

export default function InProgressDropDown() {
  const [openDropdown, setOpenDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Идет прием');
  const items = [
    'Новые',
    'Идет прием',
    'Завершен',
    'Завершен раньше срока',
    'Отменен',
    'В работе',
  ];

  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          openDropdown
            ? {
                marginBottom: 0,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }
            : {borderRadius: 15},
        ]}
        onPress={() => setOpenDropDown(!openDropdown)}>
        <View style={styles.inputContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.genderText}>{selectedItem}</Text>
          </View>
          <View
            style={{transform: [{rotate: openDropdown ? '180deg' : '0deg'}]}}>
            <ArrowDownRed />
          </View>
        </View>
      </TouchableOpacity>

      {openDropdown &&
        items.map((item, i) => {
          return (
            <TouchableOpacity
              style={[
                styles.dropDownItemContainer,
                i === items.length - 1 && {
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  marginBottom: 15,
                },
              ]}
              onPress={() => {
                setSelectedItem(item);
                setOpenDropDown(false);
              }}
              key={i}>
              <Text style={styles.genderText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
    </>
  );
}

const styles = StyleSheet.create({
  genderText: {
    marginLeft: 10,
    color: '#000000',
  },
  dropDownItemContainer: {
    position: 'relative',
    top: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    zIndex: 999,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
  },
  container: {
    paddingLeft: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 15,
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
